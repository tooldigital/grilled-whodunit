
/**
*	
*	Suspect action handlers and help functions
*	
*/

const contexts = require('../config/context-keys')
const variations = require('../config/variations')
const suspects = require('../config/suspects')

const Utils = require('../lib/utils')
const Voices = require('../lib/voices')
const Realizations = require('../lib/realizations')
const SFX = require('../lib/sfx')
const Hints = require('../lib/hints')
const Hawkins = require('./hawkins')
const responses = require('../data/responses/')
const dynamicintents = require('../config/dynamic-intent-keys')

module.exports = {
	
	question(app, result, intent, ask){
		
		let suspect = app.data.currentSuspect
		let gs = app.data.gamestate
		let v = gs.variation
		let response
		let suspectresp = responses.suspects[suspect]
		// set contexts
		Hints.trackQuestion(app, intent, suspect)
		// forward context to track current suspect
		app.setContext(contexts.question_suspect, 5, {suspect})
		app.setContext(contexts.suspects[suspect], 1)

		intent = module.exports._handleIntentIfDynamic(intent, app.getContexts())
		response = module.exports._getVariationRelevantResponse(suspectresp, v, intent)
		response = Realizations.appendRealizationPeriodically(app, intent, v, suspect, response)
		response = module.exports._setCorrectVoice(suspectresp, v, suspect, intent, response)
		response = SFX.addSFXPeriodically(app, intent, suspect, response)
		response = app.buildRichResponse()
			.addSimpleResponse({
				speech: Utils.speak(response),
			})
		ask(app, response)
	},

	fallback(app, result, intent, ask){

		let context = app.getContext(contexts.question_suspect)
		let fallbackContext = app.getContext(contexts.question_suspect_fallback)
		// set contexts
		// forward context to track current suspect
		if(context){
			app.setContext(contexts.question_suspect, 5, context.parameters)
			app.setContext(contexts.suspects[app.data.currentSuspect], 1)
		}
		app.setContext(contexts.question_suspect_fallback, 1)
		
		if(fallbackContext){
			// give the user some suggestions
			// get suspect-specific hints for current suspect
			let hint = Hints.getHint(app)
			ask(app, Voices.HAWKINS.speak(hint.text))
			
		}else if(app.data.currentSuspect){
			// suspect asks for clarification on the first fallback
			let suspect = app.data.currentSuspect
			let response = responses.suspects[suspect].fallback
			ask(app, Voices[suspect].speak(response))
		}else{
			// hawkins responds because user isn't talking to a suspect
			ask(app, Voices.HAWKINS.speak('Sorry, I didn’t catch that.'), Hawkins.helpArray)
		}
	},

	_handleIntentIfDynamic(intent, contexts){
		let targ_suspect, suspectKey
		if(dynamicintents.indexOf(intent) > -1) {
			let matched = contexts.find( c => c.name === intent.toLowerCase())
			if(!matched) throw new Error(`there is no context specified for the dynamic key: ${intent}`)
			targ_suspect = matched.parameters.suspect
			suspectKey = Object.keys(suspects).find(key => targ_suspect === suspects[key])
			intent = intent + "_" + suspectKey
		}
		return intent
	},

	_setCorrectVoice(suspectresp, v, suspect, intent, response){
		// if suspect is killer and intent is reveals killer's lie, change voice to lie variation.
		let voiceHandler = (suspectresp.variations[v][intent] && suspect === variations[v].killer) ? 'lie' : 'voice'
		return Voices[suspect][voiceHandler](response)
	}, 

	_getVariationRelevantResponse(suspectresp, v, intent){
		// get either general response or response specific to story variation
		return (suspectresp.variations[v][intent]) ? 
			suspectresp.variations[v][intent] :
			suspectresp.general[intent]
	},
}