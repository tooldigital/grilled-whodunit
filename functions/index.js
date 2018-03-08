// https://firebase.google.com/docs/functions/write-firebase-functions
// https://developers.google.com/actions/reference/nodejs/DialogflowApp
const { DialogflowApp } = require('actions-on-google')
const functions = require('firebase-functions')
const util = require('util')
const utils = require('./src/utils')
const suspects = require('./src/data/suspects')
const voices = require('./src/voices')
const responses = require('./src/data/responses/')
const variations = require('./src/variations')
const contexts = require('./src/context-keys')
const intents = require('./src/intent-keys')
const actions = require('./src/action-keys')
const realizations = require('./src/realizations')

const hawkinsHelp = [
	voices.HAWKINS.speak(responses.help2),
	voices.HAWKINS.speak(responses.help3),
	voices.HAWKINS.speak(responses.goodbye)
]

const media = require('./src/data/media')

let interviewSFX = {
	[suspects.BRANDI]: {
		propLength: media.props[suspects.BRANDI].length
	},
	[suspects.CONSTANCE]: {
		propLength: media.props[suspects.CONSTANCE].length
	},
	[suspects.PETE]: {
		propLength: media.props[suspects.PETE].length
	},
	[suspects.TUCKER]: {
		propLength: media.props[suspects.TUCKER].length
	},
}

const actionHandlers = {

	[actions.QUIT](app, result, intent) {
		app.tell(voices.HAWKINS.speak(responses.goodbye))
	},

	[actions.NO_INPUT](app, result, intent) {
		let repromptCount = app.getRepromptCount()
		// 
		if(app.data.currentSuspect === undefined){
			ask(app, hawkinsHelp[repromptCount])
		}else{
			let hints = [0, 1].map(i => getHint(app, i))
				.map(hint => hint.text)
				.concat(responses.goodbye) // app quits after 3rd response. say goodbye
				.map(hint => voices.HAWKINS.voice(hint))
			app.data.hintIDX ++
			ask(app, hints[repromptCount])
		}
	},

	[actions.UNKNOWN](app, result, intent) {
		ask(app, voices.HAWKINS.speak(responses.help1), hawkinsHelp)
	},

	/*
		Repeat previous response
	*/
	[actions.REPEAT](app, result, intent) {
		app.ask(app.data.prevInputPrompt)
	},

	[actions.HELP](app, result, intent) {

		let response = responses.howto
		// if user has started interrogating, pull from hints
		if(app.data.currentSuspect !== undefined){
			response = getHint(app).text
			app.data.hintIDX ++
			utils.forwardAllContexts(app)
		}
		ask(app, voices.HAWKINS.speak(response))
	},

	[actions.HOWTO](app, result, intent) {

		let response = app.buildRichResponse()
			.addSimpleResponse({
				speech: voices.HAWKINS.speak(responses.howto)
			})
			.addSuggestions(['Review crime scene', 'Question suspects'])
			
		ask(app, response)
	},

	/*
		After the game ends, the user is asked to play again.
	*/
	[actions.NEW_GAME](app, result, intent) {
		// forward to intro handler
		actionHandlers[actions.INTRO](app, result)
	},

	/*
		action for intro context intents
	*/
	[actions.INTRO](app, result, intent) {

		let nextQuestion
		let names = Object.keys(suspects).map(key => suspects[key])
		let variation = Math.floor(Math.random() * variations.length)
		console.log(variation)
		// variation = 0
		app.data.gamestate = {variation}
		app.data.props = {
			playSwitch: 0,
			[suspects.BRANDI]: {
				propIDX:0
			},
			[suspects.PETE]: {
				propIDX:0
			},
			[suspects.TUCKER]: {
				propIDX:0
			},
			[suspects.CONSTANCE]: {
				propIDX:0
			}
		}
		app.data.suspects = {
			[suspects.BRANDI]: {
				questionsAsked: [],
				introduced: false,
			},
			[suspects.PETE]: {
				questionsAsked: [],
				introduced: false,
			},
			[suspects.TUCKER]: {
				questionsAsked: [],
				introduced: false,
			},
			[suspects.CONSTANCE]: {
				questionsAsked: [],
				introduced: false,
			},
		}
		app.data.realizations = {
			toggle: false,
			currentLevel: 1,
			currentIDX: 0,
			level1: Array.from(realizations.level1, r => r.key),
			level2: Array.from(realizations.level2, r => r.key)
		}
		// NOTE: this is an alternate hint flow.
		// The insight is that we don't need to remind users questions for different suspects. 
		// We can keep one list. Another implication is that we want to guide the user more. 
		// Therefore we will increment the list rather than select a random idx.
		app.data.hintIDX = -1


		let testBegin = "0s"

		let content = voices.HAWKINS.voice(responses.welcome)
		let mediaArray = [{
			url: media.song,
			volume: '-10dB', 
			// begin: '-2.5s',
			begin: testBegin,
			end: '+33s',
			fadeOutDur: 4
		}]
		let startDelay = '1.5s'; 
		let speech = utils.speakWithSoundbed(content, startDelay, mediaArray)

		let response = app.buildRichResponse()
			.addSimpleResponse({ speech })
			.addSuggestions(['How to play', 'Review crime scene', 'Question suspects'])

		ask(app, response, hawkinsHelp)
		
		console.log('******** KILLER:', names[variation])
	},

	[actions.INTRO_INTERROGATE_SUSPECTS](app, result, intent) {
		let response = app.buildRichResponse()
			.addSimpleResponse(voices.HAWKINS.speak(responses.suspects.list + ' ' + responses.connective.selectsuspect))
			.addSuggestions(['Brandi', 'Tucker', 'Constance', 'Pete'])
		ask(app, response)
	},

	/*
		action for ask hawkins intents
	*/
	[actions.ASKHAWKINS](app, result, intent) {
		let response

		switch(intent){
			case intents.TALK_TO_HAWKINS:
				response = voices.HAWKINS.speak(app.getHint(app).text)
				app.data.hintIDX++
			break
			case intents.ASKFORCASEFILE:
				response = app.buildRichResponse()
					.addSimpleResponse({
						speech: voices.HAWKINS.speak(responses.casefile)
					})
					.addSuggestions(['Question suspects', 'How to play'])
			break
			case  intents.SUGGESTIONINTERVIEW:
				response = voices.HAWKINS.speak(responses.suggestions.interview)
			break
			case intents.SUGGESTIONCATCHKILLER:
				response = voices.HAWKINS.speak(responses.suggestions.catchkiller)
			break
			case intents.SUGGESTIONCATCHKILLER:
				response = voices.HAWKINS.speak(responses[keys.CANMULTIPLEPEOPLEMURDER])
			break
		}

		ask(app, response)
	},

	/*
		action for selecting suspect
	*/
	[actions.SELECT_SUSPECT](app, result, intent) {
		let context = app.getContext(contexts.question_suspect)
		let suspect = context.parameters.suspect
		app.data.currentSuspect = suspect
		console.log('actions.SELECT_SUSPECT', suspect)
		
		if(!app.data.suspects[suspect]) {
			app.setContext(contexts.question_suspect, 5)
			return ask(app, voices.HAWKINS.speak(responses.connective.namenotfound(suspect)))
		}

		app.setContext(contexts.question_suspect, 5, {suspect})
		app.setContext(contexts.suspects[suspect], 1)
		app.setContext(contexts.select_suspect, 0)
		let suspectResponses = responses.suspects[suspect]
		let response
		
		if(app.data.suspects[suspect].introduced === false){

		response = app.buildRichResponse()
			.addSimpleResponse(utils.speak(
				// `<audio src="${media.room}"/>` + 
				voices.HAWKINS.voice(suspectResponses.hawkins_intro)
			))
			// .addBasicCard(app.buildBasicCard()
			// 	.setTitle(suspect)
			// 	.setImage('https://media.giphy.com/media/l0Iyakyna0Vo8Iwla/giphy.gif', 'Mug shot')
			// )
			.addSimpleResponse(utils.speak(
				`<audio src="${media.door[suspect]}"/>` +
				`<audio src="${media.room}"/>` + 
				voices[suspect].voice(suspectResponses.intro)
			))

			app.data.suspects[suspect].introduced = true
		}else{
			response = utils.speak(
				`<audio src="${media.room}"/>` + 
				`<audio src="${media.door[suspect]}"/>` +
				`<audio src="${media.room}"/>` + 
				voices[suspect].voice(suspectResponses.intro)
			)
		}
	
		ask(app, response)
	},

	/*
		action for list suspects
	*/
	[actions.LIST_SUSPECTS](app, result, intent) {
		let response = app.buildRichResponse()
			.addSimpleResponse({
				speech: voices.HAWKINS.speak(responses.listsuspects)
			})
			.addSuggestions(['Brandi', 'Tucker', 'Constance', 'Pete'])
		ask(app, response)
	},
	
	/*
		action for questioning suspect
	*/
	[actions.QUESTION_SUSPECT](app, result, intent) {
		
		let suspect = app.data.currentSuspect
		// forward context to track current suspect
		app.setContext(contexts.question_suspect, 5, {suspect})
		app.setContext(contexts.suspects[suspect], 1)

		// generalized intent for asking what a suspect knows about another suspect

		let targ_suspect, suspectKey
		switch(intent) {
			case intents.TELLABOUT:
				targ_suspect = app.getContext(contexts.tellabout).parameters.suspect
				suspectKey = Object.keys(suspects).find(key => targ_suspect === suspects[key])
				intent = 'TELLABOUT' + suspectKey
				break;

			case intents.THINKOTHERSUSPECTKILLED:
				targ_suspect = app.getContext(contexts.thinkothersuspectkilled).parameters.suspect
				suspectKey = Object.keys(suspects).find(key => targ_suspect === suspects[key])
				intent = 'THINKOTHERSUSPECTKILLED_' + suspectKey
				break;

			case intents.KNOWOTHERSUSPECT:
				targ_suspect = app.getContext(contexts.knowothersuspect).parameters.suspect
				suspectKey = Object.keys(suspects).find(key => targ_suspect === suspects[key])
				intent = 'KNOWOTHERSUSPECT_' + suspectKey
				break;

			case intents.DOYOUTRUSTOTHERSUSPECT:
				targ_suspect = app.getContext(contexts.doyoutrustothersuspect).parameters.suspect
				suspectKey = Object.keys(suspects).find(key => targ_suspect === suspects[key])
				intent = 'DOYOUTRUSTOTHERSUSPECT_' + suspectKey
				break;

			case intents.OTHERSUSPECTALIBI:
				targ_suspect = app.getContext(contexts.othersuspectalibi).parameters.suspect
				console.log(app.getContext(contexts.othersuspectalibi))
				suspectKey = Object.keys(suspects).find(key => targ_suspect === suspects[key])
				intent = 'OTHERSUSPECTALIBI_' + suspectKey
				break;

			case intents.WHATTHINKOTHERSUSPECT:
				targ_suspect = app.getContext(contexts.whatthinkothersuspect).parameters.suspect
				suspectKey = Object.keys(suspects).find(key => targ_suspect === suspects[key])
				intent = 'WHATTHINKOTHERSUSPECT_' + suspectKey
				break;

			case intents.OTHERSUSPECTSUSPICIOUS:
				targ_suspect = app.getContext(contexts.othersuspectsuspicious).parameters.suspect
				suspectKey = Object.keys(suspects).find(key => targ_suspect === suspects[key])
				intent = 'OTHERSUSPECTSUSPICIOUS_' + suspectKey
				break;



			case intents.WHOOTHERSUSPECT:
				targ_suspect = app.getContext(contexts.whoothersuspect).parameters.suspect
				suspectKey = Object.keys(suspects).find(key => targ_suspect === suspects[key])
				intent = 'WHOOTHERSUSPECT_' + suspectKey
				break;

			case intents.WITHOTHERSUSPECT:
				targ_suspect = app.getContext(contexts.withothersuspect).parameters.suspect
				suspectKey = Object.keys(suspects).find(key => targ_suspect === suspects[key])
				intent = 'WITHOTHERSUSPECT_' + suspectKey
				break;

			case intents.OTHERSUSPECTANGRYBETSY:
				targ_suspect = app.getContext(contexts.othersuspectangrybetsy).parameters.suspect
				suspectKey = Object.keys(suspects).find(key => targ_suspect === suspects[key])
				intent = 'OTHERSUSPECTANGRYBETSY_' + suspectKey
				break;



		}

		//console.log(responses.suspects[suspect].general[intent])

		

		// NOTE: load intents per suspect into an array of strings. 
		// This will be for use in a handful of places, including hints filtering.
		let qa = app.data.suspects[suspect].questionsAsked
		if(qa.indexOf(intent) < 0) {
			qa.push(intent)
		}

		let gs = app.data.gamestate
		let v = gs.variation
		let suspectresp = responses.suspects[suspect]
		//console.log(suspectresp)
		//get either general response or response specific to story variation
		let response = (suspectresp.variations[v][intent]) ? 
				suspectresp.variations[v][intent] :
				suspectresp.general[intent]

		console.log(response)
		//try to match incoming intent to realization matchedintents. 
		//then remove that from app data realization cue
		;[1, 2].forEach((i) => {
			realizations[`level${i}`].forEach(r => {
				if(r.matchedIntents.indexOf(intent) > -1) {
					console.log("+++++++++++++++++++++++")
					console.log("MATCHED", r.key, intent)
					let matchedIDX = app.data.realizations[`level${i}`].indexOf(r.key)
					console.log(matchedIDX)
					if(matchedIDX > -1) {
						app.data.realizations[`level${i}`].splice(matchedIDX, 1)
					}
				}
			})
			
		})

		//if the intent is not meant to have a hint on it, set the next toggle to be true
		if(realizations.ignoredIntents.variations[v][suspect].indexOf(intent) > -1) {
			app.data.realizations.toggle = 0;
		} else {
			app.data.realizations.toggle++;
		}
		// do the realization hint if
		// console.log(app.data.realizations.toggle)
		if(
			app.data.realizations.toggle % 3 === 0 && // add realization hint every third question
			// app.data.realizations.currentLevel < 3 &&
			realizations.ignoredIntents.variations[v][suspect].indexOf(intent) < 0 // some responses have too much info, or don't fit with the realziation hints
		) {  
			//get next realization hint to append to response.
			if(
				app.data.realizations[`level${app.data.realizations.currentLevel}`] &&
				app.data.realizations[`level${app.data.realizations.currentLevel}`].length<1 &&
				app.data.realizations.currentLevel < 3
			) {
				app.data.realizations.currentLevel++
			} 
			let rlevel = app.data.realizations.currentLevel
			let rhint
			if(rlevel === 3) {
				let variation = realizations.level3.find( (v1) => {
					return v1.variation === v
				})
				let rIDX = Math.floor(Math.random()*(variation.hints[suspect].length-1))
				rhint = variation.hints[suspect][rIDX]
			} else {

				if(!app.data.realizations[`level${rlevel}`][app.data.realizations.currentIDX])
					app.data.realizations.currentIDX = 0
				let rkey = app.data.realizations[`level${rlevel}`][app.data.realizations.currentIDX]
				let realization = realizations[`level${rlevel}`].find( r => r.key === rkey )
				// console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~")
				// console.log(rlevel, rkey, realization)
				rhint = realization.hints[suspect]

				//then find next idx or go to next level
				if(!app.data.realizations[`level${rlevel}`].length) {
					app.data.realizations.currentLevel++
					app.data.realizations.currentLevel = app.data.realizations.currentLevel > 3 ? 3 : app.data.realizations.currentLevel
					app.data.realizations.currentIDX = 0
				} else if(
					app.data.realizations.currentIDX+1 < app.data.realizations[`level${rlevel}`].length - 1 &&
					app.data.realizations.currentIDX !== 3
				) {
					app.data.realizations.currentIDX++
				} else if(app.data.realizations.currentIDX === 3) {
				} else {
					app.data.realizations.currentIDX = 0
				}
				console.log(".........................................")
				console.log(realization)
			}

			response = `${response} <break time=".75s" />${rhint}`
		}
		
		// if suspect is killer and intent is reveals killer's lie, change voice to lie variation.
		let voiceHandler = (suspectresp.variations[v][intent] && suspect === variations[v].killer) ? 'lie' : 'voice'
		// 
		app.data.props.playSwitch++;
		console.log("propIDX:", app.data.props[suspect].propIDX)
		console.log("playSwitch modulus",app.data.props.playSwitch % 2)
		if(app.data.props.playSwitch % 3 === 0) { // prepend a sound effect to the suspect response every other time
				// console.log("propIDX:", interviewSFX[suspect].propIDX)
				response = utils.speak(
					`<audio src="${media.props[suspect][app.data.props[suspect].propIDX]}"/>` +
					voices[suspect][voiceHandler](response)
				)
				app.data.props[suspect].propIDX++
				if(app.data.props[suspect].propIDX >= interviewSFX[suspect].propLength) 
					app.data.props[suspect].propIDX = 0; //increment the index then loop

		} else {
			response = voices[suspect][voiceHandler](response)
		}
		
		response = app.buildRichResponse()
			.addSimpleResponse({
				speech: utils.speak(response)
			})


		ask(app, response)
		
		// console.log(app.data.realizations)
		console.log(response)
	},

	/*
		action for too generic
	*/
	[actions.TOOGENERIC](app, result, intent) {
		ask(app, voices.HAWKINS.speak(responses.suggestions.toogeneric))
	},

	/*
		action for presscharges1
	*/
	[actions.PRESSCHARGES](app, result, intent) {
		console.log(responses.presscharges.whokiller)
		ask(app, voices.HAWKINS.speak(responses.presscharges.whokiller))
	},

	/*
		action for presscharges2
	*/
	[actions.PRESSCHARGES_KILLER](app, result, intent) {
		let context = app.getContext(contexts.presscharges1)
		let suspect = context.parameters.suspect
		if(!app.data.suspects[suspect]) {
			ask(app, voices.HAWKINS.speak(responses.connective.namenotfound(suspect)))
		}else {
			app.data.accusation = {}
			app.data.accusation.killer = suspect
			ask(app, voices.HAWKINS.speak(responses.presscharges.whatevidence))
		}
	},

	/*
		action for presscharges3
	*/
	[actions.PRESSCHARGES_EVIDENCE](app, result, intent) {
		let gs = app.data.gamestate
		let v = gs.variation
		let lieType = variations[v].lieType
		let killer = app.data.accusation.killer
		let context = app.getContext(contexts.presscharges2)
		let proof = context.parameters.evidence

		// console.log("$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$")

		if(
			killer === variations[v].killer &&
			proof === variations[v].proof 
		) {
			let confession = voices[killer].voiceOverMedia(responses.suspects[killer].confession)
			let congrats = voices.HAWKINS.voice(responses.youwin)
			let content = `${confession} <break time="1.2s" /> ${congrats}`
			let startDelay = '3s'
			let mediaArray = [
				{
					url: media.song,
					volume: "-5dB", 
					begin: null,
					end: "+33s",
					fadeOutDur: 4
				},
				{
					url: media.siren,
					volume: "-5dB", 
					begin: null,
					end: null
				}
			]
			ask(app, utils.speakWithSoundbed(content, startDelay, mediaArray))
		} else {
			ask(app, voices.HAWKINS.speak(responses.youlose))
		}
	},

	/*
		action for presscharges evidence fallback
	*/
	[actions.PRESSCHARGES_EVIDENCE_FALLBACK](app, result, intent) {
		ask(app, voices.HAWKINS.speak(responses.presscharges.evidenceError))
	},

	/*
		action for REPLAY_YES
	*/
	[actions.REPLAY_YES](app, result, intent) {
		// ask(app, voices.HAWKINS.speak('great!'))
		actionHandlers[actions.INTRO](app, result)
	},
	
	/*
		action for REPLAY_NO
	*/
	[actions.REPLAY_NO](app, result, intent) {
		app.tell(voices.HAWKINS.speak('Thanks for playing.'))
	},

	/*
		action for questioning suspect fallback	
	*/
	[actions.QUESTION_SUSPECT_FALLBACK](app, result, intent) {
		console.log('QUESTION SUSPECT FALLBACK')

		let context = app.getContext(contexts.question_suspect)
		let fallbackContext = app.getContext(contexts.question_suspect_fallback)

		// forward context to track current suspect
		if(context){
			app.setContext(contexts.question_suspect, 5, context.parameters)
			app.setContext(contexts.suspects[app.data.currentSuspect], 1)
		}

		app.setContext(contexts.question_suspect_fallback, 1)

		if(fallbackContext){
			// give the user some suggestions
			// get suspect-specific hints for current suspect
			console.log('fallback context 1')
			let hint = getHint(app)
			app.data.hintIDX ++
			ask(app, voices.HAWKINS.speak(hint.text))
			
		}else if(app.data.currentSuspect){
			// suspect asks for clarification on the first fallback
			let suspect = app.data.currentSuspect
			let response = responses.suspects[suspect].fallback
			ask(app, voices[suspect].speak(response))
		}else{
			// hawkins responds because user isn't talking to a suspect
			ask(app, voices.HAWKINS.speak('Sorry, I didn’t catch that.'), hawkinsHelp)
		}
	},
}

/*
	wrapper for app.ask that tracks previous responses so we can repeat them if needed
*/
const ask = (app, inputPrompt, noInputPrompts) => {
	console.log("$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$")
	app.data.prevInputPrompt = inputPrompt
	app.data.prevNoInputPrompts = noInputPrompts
	app.ask(inputPrompt, noInputPrompts)
}

const getHint = (app, offset = 0) => {
	let suspect = app.data.currentSuspect
	let hints = responses.hints(app.data.gamestate.variation, suspect)
	let hintIndex = (app.data.hintIDX + offset) % hints.length
	let hint = hints.find((hint, idx)=> {
		return (
			idx > hintIndex && 
			app.data.suspects[suspect].questionsAsked.indexOf(hint.key) < 0
		)
	})
	return hint
}

/*
	This is the entry point, called when Actions on Google posts to the webhook
*/
exports.https = functions.https.onRequest((request, response) => {
	console.log('request happened')

	let result = request.body.result

	console.log('\n\n\n\n\n')
	console.log("==================================================")
	console.log(result.resolvedQuery, result.action, result.metadata.intentName)
	// console.log(util.inspect(result, {depth: null}))
	
	// map action strings to handlers
	let app = new DialogflowApp({ request, response })
	let action = result.action
	if(action in actionHandlers){
		// clear history 
		console.log(`action : ${action}`)
		if(action === actions.INTRO || app.data.history === undefined) {
			app.data.history = []
		}
		let intent = result.metadata.intentName
		app.data.history.push({action, intent})
		actionHandlers[action](app, result, intent)
	}else{
		console.error('No action handler found for ' + action + ', query: ' + result.resolvedQuery)
	}
})

/*
	same as above, but deploying these will yield a separate endpoint for different app versions
*/
exports.devhttps = exports.https
exports.stagehttps = exports.https