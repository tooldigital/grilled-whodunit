
/**
*	
*	Hints to be offered 
*	when a user triggers a NO_INPUT event 
*	or speaks 2 unrecognized phrases
*	
*/

const suspects = require('../config/suspects')
const responses = require('../data/responses/')

module.exports = {
	init(app){
		// NOTE: this is an alternate hint flow.
		// The insight is that we don't need to remind users questions for different suspects. 
		// We can keep one list. Another implication is that we want to guide the user more. 
		// Therefore we will increment the list rather than select a random idx.
		app.data.hintIDX = -1
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
	},

	trackQuestion(app, intent, suspect){

		// NOTE: load intents per suspect into an array of strings. 
		// This will be for use in a handful of places, including hints filtering.
		let qa = app.data.suspects[suspect].questionsAsked
		if(qa.indexOf(intent) < 0) {
			qa.push(intent)
		}
	},

	getHint(app, offset = 0){
		let suspect = app.data.currentSuspect
		let hints = responses.hints(app.data.gamestate.variation, suspect)
		let hintIndex = (app.data.hintIDX + offset) % hints.length
		let hint = hints.find((hint, idx)=> {
			return (
				idx > hintIndex && 
				app.data.suspects[suspect].questionsAsked.indexOf(hint.key) < 0
			)
		})
		app.data.hintIDX ++
		return hint
	},

}