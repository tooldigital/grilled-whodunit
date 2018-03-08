
/**
*	
*	Hawkins action handlers and help functions
*	
*/

const contexts = require('../config/context-keys')
const intents = require('../config/intent-keys')
const variations = require('../config/variations')
const Utils = require('../lib/utils')
const Hints = require('../lib/hints')
const voices = require('../lib/voices')
const responses = require('../data/responses/')
const media = require('../data/media')

module.exports = {
	ask(app, result, intent, ask){
		let response

		switch(intent){
		case intents.TALK_TO_HAWKINS:
			response = voices.HAWKINS.speak(Hints.getHint(app).text)
			app.data.hintIDX ++
			break
		case intents.ASKFORCASEFILE:
			response = app.buildRichResponse()
				.addSimpleResponse({
					speech: voices.HAWKINS.speak(responses.casefile),
				})
				.addSuggestions(['Question suspects', 'How to play'])
			break
		case intents.SUGGESTIONINTERVIEW:
			response = voices.HAWKINS.speak(responses.suggestions.interview)
			break

		case intents.SUGGESTIONCATCHKILLER:
			response = voices.HAWKINS.speak(responses.suggestions.catchkiller)
			break

		case intents.CANMULTIPLEPEOPLEMURDER:
			response = voices.HAWKINS.speak(responses[intents.CANMULTIPLEPEOPLEMURDER])
			break
		}
		ask(app, response)
	},

	list_suspects(app, result, intent, ask){
		let response = app.buildRichResponse()
			.addSimpleResponse({
				speech: voices.HAWKINS.speak(responses.listsuspects),
			})
			.addSuggestions(['Brandi', 'Tucker', 'Constance', 'Pete'])
		ask(app, response)
	},

	select_suspect: (app, result, intent, ask) => {
		let context = app.getContext(contexts.question_suspect)
		let suspect = context.parameters.suspect
		app.data.currentSuspect = suspect
		
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
				.addSimpleResponse(Utils.speak(
					// `<audio src="${media.room}"/>` + 
					voices.HAWKINS.voice(suspectResponses.hawkins_intro)
				))
				// .addBasicCard(app.buildBasicCard()
				// 	.setTitle(suspect)
				// 	.setImage('https://media.giphy.com/media/l0Iyakyna0Vo8Iwla/giphy.gif', 'Mug shot')
				// )
				.addSimpleResponse(Utils.speak(
					`<audio src="${media.door[suspect]}"/>` +
					`<audio src="${media.room}"/>` + 
					voices[suspect].voice(suspectResponses.intro)
				))
			app.data.suspects[suspect].introduced = true
		}else{
			response = Utils.speak(
				`<audio src="${media.room}"/>` + 
				`<audio src="${media.door[suspect]}"/>` +
				`<audio src="${media.room}"/>` + 
				voices[suspect].voice(suspectResponses.intro)
			)
		}
	
		ask(app, response)
	},

	intro_select(app, result, intent, ask){
		let response = app.buildRichResponse()
			.addSimpleResponse(
				voices.HAWKINS.speak(
					responses.suspects.list + ' ' + 
					responses.connective.selectsuspect
				)
			)
			.addSuggestions(['Brandi', 'Tucker', 'Constance', 'Pete'])
		ask(app, response)
	},

	help(app, result, intent, ask){
		let response = responses.howto
		// if user has started interrogating, pull from hints
		if(app.data.currentSuspect !== undefined){
			response = Hints.getHint(app).text
			app.data.hintIDX ++
			Utils.forwardAllContexts(app)
		}
		ask(app, voices.HAWKINS.speak(response))
	},

	howto(app, result, intent, ask){
		let response = app.buildRichResponse()
			.addSimpleResponse({
				speech: voices.HAWKINS.speak(responses.howto),
			})
			.addSuggestions(['Review crime scene', 'Question suspects'])
		ask(app, response)
	},

	presscharges_1(app, result, intent, ask){
		ask(app, voices.HAWKINS.speak(responses.presscharges.whokiller))
	},

	presscharges_2(app, result, intent, ask){
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

	presscharges_3(app, result, intent, ask){
		let gs = app.data.gamestate
		let v = gs.variation
		// let lieType = variations[v].lieType
		let killer = app.data.accusation.killer
		let context = app.getContext(contexts.presscharges2)
		let proof = context.parameters.evidence
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
					volume: '-5dB', 
					begin: null,
					end: '+33s',
					fadeOutDur: 4,
				},
				{
					url: media.siren,
					volume: '-5dB', 
					begin: null,
					end: null,
				},
			]
			ask(app, Utils.speakWithSoundbed(content, startDelay, mediaArray))
		} else {
			ask(app, voices.HAWKINS.speak(responses.youlose))
		}
	},

	presscharges_fallback(app, result, intent, ask){
		ask(app, voices.HAWKINS.speak(responses.presscharges.evidenceError))
	},

	helpArray: [
		voices.HAWKINS.speak(responses.help2),
		voices.HAWKINS.speak(responses.help3),
		voices.HAWKINS.speak(responses.goodbye),
	],
}