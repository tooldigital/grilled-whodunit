/* global console */
// https://firebase.google.com/docs/functions/write-firebase-functions
// https://developers.google.com/actions/reference/nodejs/DialogflowApp
const { DialogflowApp } = require('actions-on-google')
const functions = require('firebase-functions')

const actions = require('./src/config/action-keys')
const General = require('./src/actions/general')
const Hawkins = require('./src/actions/hawkins')
const Suspects = require('./src/actions/suspects')

const actionHandlers = {

	/** Intro context intents */
	[actions.INTRO]: General.intro,

	/** New game */
	[actions.NEW_GAME]: General.new_game,

	/** Quit game */
	[actions.QUIT]: General.quit,

	/** Repeat previous response */
	[actions.REPEAT]: General.repeat,

	/** When a user speaks to the app in too generic of phrasing */
	[actions.TOOGENERIC]: General.too_generic,

	/** When a user doesn't respond to a voice interface within XX seconds */
	[actions.NO_INPUT]: General.no_input,

	/** Unknown action handler */
	[actions.UNKNOWN]: General.unknown,

	/** action for REPLAY_YES */
	[actions.REPLAY_YES]: General.replay_yes,
	
	/** action for REPLAY_NO */
	[actions.REPLAY_NO]: General.replay_yes,

	/** Ask for help */
	[actions.HELP]: Hawkins.help,

	/** Ask how to play the game */
	[actions.HOWTO]: Hawkins.howto,
	
	/** Ask to speak to a suspect without clarifying who */
	[actions.INTRO_INTERROGATE_SUSPECTS]: Hawkins.intro_select,

	/** Handles a collection of questions */
	[actions.ASKHAWKINS]: Hawkins.ask,

	/** Selecting a suspect by name */
	[actions.SELECT_SUSPECT]: Hawkins.select_suspect,

	/** action for list suspects */
	[actions.LIST_SUSPECTS]: Hawkins.list_suspects,

	/** action for first step in press charges */
	[actions.PRESSCHARGES]: Hawkins.presscharges_1,

	/** action for presscharges2 */
	[actions.PRESSCHARGES_KILLER]: Hawkins.presscharges_2,

	/** action for presscharges3 */
	[actions.PRESSCHARGES_EVIDENCE]:Hawkins.presscharges_3,

	/** action for presscharges evidence fallback */
	[actions.PRESSCHARGES_EVIDENCE_FALLBACK]: Hawkins.presscharges_fallback,

	/** action for questioning suspect */
	[actions.QUESTION_SUSPECT]: Suspects.question,

	/** action for questioning suspect fallback	*/
	[actions.QUESTION_SUSPECT_FALLBACK]: Suspects.fallback,

}

/*
	wrapper for app.ask that tracks previous responses so we can repeat them if needed
*/
const ask = (app, inputPrompt, noInputPrompts) => {
	app.data.prevInputPrompt = inputPrompt
	app.data.prevNoInputPrompts = noInputPrompts
	app.ask(inputPrompt, noInputPrompts)
}

/*
	This is the entry point, called when Actions on Google posts to the webhook
*/
exports.https = functions.https.onRequest((request, response) => {
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
		if(action === actions.INTRO || app.data.history === undefined) {
			app.data.history = []
		}
		let intent = result.metadata.intentName
		app.data.history.push({action, intent})
		actionHandlers[action](app, result, intent, ask)
	}else{
		console.error('No action handler found for ' + action + ', query: ' + result.resolvedQuery)
	}
})

/*
	same as above, but deploying these will yield a separate endpoint for different app versions
*/
exports.devhttps = exports.https
exports.stagehttps = exports.https