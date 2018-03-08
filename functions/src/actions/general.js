/* global console */
/**
*	
*	General action handlers and help functions
*	
*/

const variations = require('../config/variations')
const suspects = require('../config/suspects')
const Utils = require('../lib/utils')
const Voices = require('../lib/voices')
const Realizations = require('../lib/realizations')
const SFX = require('../lib/sfx')
const Hints = require('../lib/hints')
const Hawkins = require('./hawkins')
const responses = require('../data/responses/')
const media = require('../data/media')

module.exports = {
	intro(app, result, intent, ask){
		
		let variation = Math.floor(Math.random() * variations.length)
		app.data.gamestate = {variation}
		//NOTE: each of the below add to app.data their own objects that get updated throughout gameplay
		Hints.init(app)
		SFX.init(app)
		Realizations.init(app)

		let content = Voices.HAWKINS.voice(responses.welcome)
		let mediaArray = [{
			url: media.song,
			volume: '-10dB', 
			// begin: '-2.5s',
			begin: '0s',
			end: '+33s',
			fadeOutDur: 4,
		}]
		let startDelay = '1.5s'
		let speech = Utils.speakWithSoundbed(content, startDelay, mediaArray)
		let response = app.buildRichResponse()
			.addSimpleResponse({ speech })
			.addSuggestions(['How to play', 'Review crime scene', 'Question suspects'])

		console.log(response)
		ask(app, response, Hawkins.helpArray)
		
		let names = Object.keys(suspects).map(key => suspects[key])
		console.log('******** KILLER:', names[variation])
	},

	quit(app, result, intent, ask){ /* eslint-disable-line no-unused-vars */ 
		app.tell(Voices.HAWKINS.speak(responses.goodbye))
	},

	repeat(app, result, intent, ask){ /* eslint-disable-line no-unused-vars */ 
		app.ask(app.data.prevInputPrompt)
	},

	new_game(app, result, intent, ask){
		module.exports.intro(app, result, intent, ask)
	},

	too_generic(app, result, intent, ask){
		ask(app, Voices.HAWKINS.speak(responses.suggestions.toogeneric))
	},

	no_input(app, result, intent, ask){
		let repromptCount = app.getRepromptCount()
		if(app.data.currentSuspect === undefined){
			ask(app, Hawkins.helpArray[repromptCount])
		}else{
			let hints = [0, 1].map(i => Hints.getHint(app, i))
				.map(hint => hint.text)
				.concat(responses.goodbye) // app quits after 3rd response. say goodbye
				.map(hint => Voices.HAWKINS.voice(hint))
			app.data.hintIDX ++
			ask(app, hints[repromptCount])
		}
	},
	
	unknown(app, result, intent, ask){
		ask(app, Voices.HAWKINS.speak(responses.help1), Hawkins.helpArray)
	},
	
	replay_yes(app, result, intent, ask){
		module.exports.intro(app, result, intent, ask)
	},
	
	replay_no(app, result, intent, ask){ /* eslint-disable-line no-unused-vars */ 
		app.tell(Voices.HAWKINS.speak('Thanks for playing.'))
	},
}