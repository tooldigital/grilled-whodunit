const fs = require('fs')
const util = require('util')
const actions = require('../../webhook/src/action-keys')
const intents = require('../../webhook/src/intent-keys')
const contexts = require('../../webhook/src/context-keys')

// assign entities to pull into example phrases
const Intent = require('./intent')
Intent.entities = {
	suspect: require('../entities/suspect'),
	evidence: require('../entities/evidence'),
	betsy: require('../entities/betsy'),
}

// collect all of the intents 
const general = require('./general')
const reservedIntents = require('./reserved-intents.js')
const interrogation = require('./interrogation/')

const ignoreIntentKeys = [ // this needs to be synced up with reserved-intents.js
	intents.FALLBACK,
	intents.QUESTION_SUSPECT_FALLBACK,
	intents.NEW_GAME,
	intents.PRESSCHARGES,
	intents.PRESSCHARGES_KILLER,
	intents.PRESSCHARGES_EVIDENCE,
	intents.PRESSCHARGES_EVIDENCE_FALLBACK,
	intents.REPLAY_YES,
	intents.REPLAY_NO,
]

let output = Object.keys(general).map((k) => {
	let i = general[k]
	if(!i.parameters) { console.log(i) }
	return new Intent(k)
		.userPhrases(i.userPhrases)
		.parameters(i.parameters.map((p) => {
			return new Intent.Parameter(p.name, p.opts)
		}))
		.contexts(i.contexts)
		.outputContexts(i.outputContexts)
		.action(i.action)
		.build()
})

module.exports = []
	.concat(reservedIntents)
	.concat(output)
	.concat(interrogation)

// SANITY CHECK: assert all intent names are defined
const intentNames = module.exports.map( intent => intent.name )
	if(intentNames.indexOf('undefined') !== -1){
		console.error('undefined name found in intents')
		module.exports.forEach(intent => {
			if(intent.name === 'undefined') {
				console.log(intent.userSays[0])
			console.log(intent)
		}
	})
}

// output for debugging
fs.writeFile(__dirname + '/../output.json', util.inspect(module.exports, {depth: null}), (err) => {
	if(err) console.error(err)
})