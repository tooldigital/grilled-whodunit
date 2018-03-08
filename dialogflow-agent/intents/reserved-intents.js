//general intents
const Intent = require('./intent')
const actions = require('../../functions/src/action-keys')
const intents = require('../../functions/src/intent-keys')
const contexts = require('../../functions/src/context-keys')
const yesInputs = ['confirm', 'ok', 'of course', 'sure', 'I don’t mind', 'yes', 'that’s correct', 'I agree', 'do it', 'exactly', 'sounds good']
const noInputs = ['not really', 'I don’t think so', 'not interested', 'definitely not', 'I don’t want that', 'no', 'thanks but no', 'I disagree', 'don’t do it']
const helpInputs = ['What are the rules', 'How do I play', 'help', 'I need help', 'help me out', 'I’m not sure what to do', 'I don’t know what to say', 'I need a hint']
const repeatInputs = ['Can you repeat that?', 'Please repeat yourself', 'Can you say that again?', 'Say again', 'Say that again', 'I didn’t hear you', 'Can you repeat that?', 'Go back', 'What did you say?', 'What?', 'What was that?',]

module.exports = [
	new Intent(intents.FALLBACK)
		.fallbackIntent(true)
		.action(actions.UNKNOWN)
		.build(),

	new Intent(intents.QUESTION_SUSPECT_FALLBACK)
		.contexts([contexts.question_suspect])
		.fallbackIntent(true)
		.action(actions.QUESTION_SUSPECT_FALLBACK)
		.outputContexts([new Intent.Context(contexts.question_suspect)])
		.build(),

	new Intent(intents.INTRO)
		.events([{name: 'WELCOME'}])
		.action(actions.INTRO)
		.build(),

	new Intent(intents.NEW_GAME)
		.userPhrases([
			'new game',
			'start a new game',
			'restart the game',
			'I’d like to play a new game',
			'OK Google, talk to whodunnit',
			'OK Google, talk to who done it',
			'OK Google, talk to grilled',
		])
		.resetContexts()
		.action(actions.INTRO)
		.build(),

	new Intent(intents.PRESSCHARGES)
		.userPhrases([
			'Press charges',
			'I’d like to press charges',
			'I want to press charges',
			'I want to accuse a suspect',
			'I know who the killer is',
			'Make an accusation',
			'I am going to press charges',
			'I will make an accusation now',
			`I'd like to press charges against @suspect`
		])
		.parameters([new Intent.Parameter('suspect', {required: false})])
		.outputContexts([
			new Intent.Context(contexts.presscharges1, 1), 
			new Intent.Context(contexts.question_suspect, 0)
		])
		.action(actions.PRESSCHARGES)
		.build(),

	new Intent(intents.PRESSCHARGES_KILLER)
		.contexts([contexts.presscharges1])
		.userPhrases([
			'@suspect',
			'it’s @suspect',
			'@suspect killed Betsy',
			'The killer is @suspect',
		])
		.parameters([new Intent.Parameter('suspect')])
		.outputContexts([new Intent.Context(contexts.presscharges2, 1)])
		.action(actions.PRESSCHARGES_KILLER)
		.build(),

	new Intent(intents.PRESSCHARGES_EVIDENCE)
		.contexts([contexts.presscharges2])
		.userPhrases([
			'@evidence',
			'the @evidence',
			'his @evidence',
			'her @evidence',
			'it was the @evidence'
		])
		.parameters([new Intent.Parameter('evidence')])
		.outputContexts([new Intent.Context(contexts.replay)])
		.action(actions.PRESSCHARGES_EVIDENCE)
		.build(),

	new Intent(intents.PRESSCHARGES_EVIDENCE_FALLBACK)
		.contexts([contexts.presscharges2])
		.fallbackIntent(true)
		.action(actions.PRESSCHARGES_EVIDENCE_FALLBACK)
		.outputContexts([new Intent.Context(contexts.presscharges2)])
		.build(),

	new Intent(intents.REPLAY_YES)
		.contexts([contexts.replay])
		.userPhrases(yesInputs)
		.outputContexts([new Intent.Context(contexts.replay, 0)])
		.action(actions.REPLAY_YES)
		.build(),

	new Intent(intents.REPLAY_NO)
		.contexts([contexts.replay])
		.userPhrases(noInputs)
		.outputContexts([new Intent.Context(contexts.replay, 0)])
		.action(actions.REPLAY_NO)
		.build(),


	new Intent(intents.QUIT)
		.events([{name: 'actions_intent_CANCEL'}])
		.action(actions.QUIT)
		.build(),

	new Intent(intents.NO_INPUT)
		.events([{name: 'actions_intent_NO_INPUT'}])
		.action(actions.NO_INPUT)
		.build(),
	
	new Intent(intents.NEW_GAME)
		.userPhrases([
			'new game',
			'start a new game',
			'restart the game',
			'I’d like to play a new game',
			'OK Google, talk to whodunnit',
			'OK Google, talk to who done it',
			'OK Google, talk to grilled',
		])
		.resetContexts()
		.action(actions.INTRO)
		.build(),

	new Intent(intents.REPEAT)
		.userPhrases(repeatInputs)
		.action(actions.REPEAT)
		.build(),
]



