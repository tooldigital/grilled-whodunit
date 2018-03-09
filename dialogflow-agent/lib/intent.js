/**

    Intent json helper

    https://dialogflow.com/docs/reference/agent/intents

*/
class Intent {
	constructor(name){
		this.name = name
		this.obj = {
			name,
			auto: true, // v impt machine learning flag
			contexts: [],
			userSays: [],
			responses: [new Intent.Response().build()],
			events: [],
			templates: [],
			priority: 500000,
			webhookUsed: true,
			webhookForSlotFilling: false,
			fallbackIntent: false,
		}
		this._phrases = []
		this._parameters = []
		// create chainable property setters
		chainable(this, this.obj)
	}
	/*
        adds a phrase to the user inputs list
        entities in text will be parsed as user defined parameters

        if entities are used, you MUST include corresponding parameter
        intent.userPhrase('Welcome to the thunderdome, @name', ['@name'])
        intent.parameters([new Intent.Parameter('name', opts)])
    */
	userPhrase(text){
		this._phrases.push(text)
		return this
	}
	/*
        userPhrase, but accepts an array of text items
    */
	userPhrases(texts = []){
		texts.forEach(txt => this.userPhrase(txt))
		return this
	}
	/*
        sets affectedContexts on responses
    */
	outputContexts(contexts){
		this._outputContexts = contexts
		return this
	}
	/*
        sets resetContexts on responses
    */
	resetContexts(bool = true){
		this._resetContexts = bool
		return this
	}
	/*
        Convenience method for adding an action to a response
        Response will be created in build if it isn't defined
    */
	action(action){
		this._action = action
		return this
	}
	/*
        set response parameters
    */
	parameters(params){
		this._parameters = params
		return this
	}

	_buildUserPhrases(){
		let phrases = this._phrases.map(text => {

			// dialogflow doesn't like real apostrophes. use single quote
			text = text.replace(/’/g, '\'')
			let words = text.split(' ')
			// console.log(words)
			let data = []
			let entityMetaStrings = this._parameters.map(p => '@' + p.name)
			let isWordBlock = false
			words.forEach(word => {
				let entityIndex = entityMetaStrings.indexOf(word)
				if(entityIndex !== -1){
					// make an object with entity
					let text = word
					let alias = word.replace('@', '')
					let entityDef = Intent.entities[alias]
					if(entityDef){
						let randomEntityEntry = entityDef.entries[Math.floor(Math.random() * entityDef.entries.length)]
						text = randomEntityEntry.synonyms[Math.floor(Math.random() * randomEntityEntry.synonyms.length)]
						// console.log('using entity synonym as example', text)
					}
					let entityBlock = {
						alias,
						meta: word,
						text: text,
						userDefined: true,
					}
					data.push(entityBlock)
					isWordBlock = false
				}else{
					if(!isWordBlock) {
						// make a new word block
						data.push({text: ' ' + word + ' '})
					}else{
						// otherwise, append the existing word block
						data[data.length - 1].text += word + ' '
					}
					// flip the switch to prevent superfluous word blocks.
					isWordBlock = true
				}
			})
            
			return {
				count: 0,
				data,
			}
		})
		this.obj.userSays = this.obj.userSays.concat(phrases)
	}
	build(){
		this._buildUserPhrases()
		// if an action is defined, assign to all responses
		if(this._action){
			this.obj.responses.forEach(response => {
				response.action = this._action
			})
		}

		// if output contexts are defined, assign to all responses
		if(this._outputContexts){
			this.obj.responses.forEach(response => {
				response.affectedContexts = this._outputContexts
			})
		}

		// if params are defined, assign to all responses
		if(this._parameters){
			this.obj.responses.forEach(response => {
				response.parameters = this._parameters
			})
		}

		if(this._resetContexts !== undefined){
			this.obj.responses.forEach(response => {
				response.resetContexts = this._resetContexts
			})
		}
        
		return this.obj
	}
}

/**
    Response object helper
*/
Intent.Response = class Response {
	constructor(){
		this.obj = {
			action: '',
			affectedContexts: [],
			defaultResponsePlatforms: {
				google: true,
			},
			messages: [],
			parameters: [],
			resetContexts: false,
		}
		chainable(this, this.obj)
	}
	build(){
		return this.obj
	}
}

/**
    Parameter object constructor for Responses
*/
Intent.Parameter = class Parameter {
	constructor(name, options = {}){
		return Object.assign({
			name,
			dataType: '@' + name,
			value: '$' + name,
			isList: false,
			required: true,
		}, options)
	}
}

/**
    Context object constructor for Responses
*/
Intent.Context = class Context {
	constructor(name, lifespan = 5, parameters = {}){
		return {name, lifespan, parameters}
	}
}

/**
    Register entities to use in examples
    matched entities will be used in text examples
    synonyms are pulled at random for each instance
*/
Intent.entities = {}

/**
    create chainable property setters on a target from object keys
*/
const chainable = (target, obj) => {
	Object.keys(obj).forEach(key => {
		target[key] = (val) => {
			obj[key] = val
			return target
		}
	})
}

/*
    Example intent
    {
        "contexts": [
            "shop"
        ],
        "auto": true,
        "events": [],
        "fallbackIntent": false,
        "name": "add-to-list",
        "priority": 500000,
        "responses": [{
            "action": "add.list",
            "affectedContexts": [{
                "lifespan": 5,
                "name": "shop",
                "parameters": {}
            },
            {
                "lifespan": 5,
                "name": "chosen-fruit",
                "parameters": {}
            }
            ],
            "defaultResponsePlatforms": {
                "google": true
            },
            "messages": [{
                "platform": "google",
                "textToSpeech": "Okay. How many $fruit?",
                "type": "simple_response"
            },
            {
                "speech": "Okay how many $fruit?",
                "type": 0
            }
            ],
            "parameters": [{
                "dataType": "@fruit",
                "isList": true,
                "name": "fruit",
                "prompts": [
                    "I didn't get that. What fruit did you want?"
                ],
                "required": true,
                "value": "$fruit"
            }],
            "resetContexts": false
        }],
        "templates": [
            "@fruit:fruit ",
            "Add @fruit:fruit ",
            "I need @fruit:fruit "
        ],
        "userSays": [{
                "count": 0,
                "data": [{
                    "alias": "fruit",
                    "meta": "@fruit",
                    "text": "oranges",
                    "userDefined": true
                }]
            },
            {
                "count": 0,
                "data": [
                    {
                        "text": "Add "
                    },
                    {
                        "alias": "fruit",
                        "meta": "@fruit",
                        "text": "bananas",
                        "userDefined": true
                    }
                ]
            },
            {
                "count": 0,
                "data": [
                    {
                        "text": "I need "
                    },
                    {
                        "alias": "fruit",
                        "meta": "@fruit",
                        "text": "apples",
                        "userDefined": true
                    }
                ]
            }
        ],
        "webhookForSlotFilling": false,
        "webhookUsed": false
    }
*/

module.exports = Intent