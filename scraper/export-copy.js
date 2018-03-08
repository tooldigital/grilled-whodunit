const fs = require('fs')
const suspects = require('../functions/src/data/suspects')

// const intentsURL = './dialogflow-agent/intents/';
// //intents
// const intents = {
// 	general: require(intentsURL+'general'),
// 	interrogation: {
// 		general: require(intentsURL+'interrogation/general.js'),
// 		[suspects.BRANDI]: require(intentsURL+'interrogation/brandi.js'), 
// 		[suspects.CONSTANCE]: require(intentsURL+'interrogation/constance.js'), 
// 		[suspects.PETE]: require(intentsURL+'interrogation/pete.js'), 
// 		[suspects.TUCKER]: require(intentsURL+'interrogation/tucker.js'), 
// 	}
// }

const responses = require('../functions/src/data/responses/')
const storyhints = require('../functions/src/realizations_for_export')
const fallbackhints = require('../functions/src/data/responses/hints')

let outputresponses = [],
	outputstoryhints = [],
	outputfallbackhints = []

// intents.general.forEach((i) => {
// 	if(i.userSays[0]) {
// 		output.general[i.name] = {
// 			questions: [],
// 			response: ``
// 		}
// 		i.userSays.forEach((us) => {
// 			us.data.forEach(d => output.general[i.name].questions.push(d.text) )
// 		})
// 	}
// })

const loopList = (list, destination, keyConcat) => {

	let cb = (a, idx) => {
		let item = (type === 'array') ? a : list[a]
		let key = (type === 'array') ? idx : a
		if( typeof item === 'string' ) { //if string append to flattened output
			destination.push({
				key: keyConcat + '_' + key,
				response: item
			})
		} else if( // if array or object recurse
			Array.isArray(item) ||
			(
				item instanceof Object &&
				!(item instanceof Function)
			)
		){
			loopList(item, destination, keyConcat+'_'+key)
		}
	}

	let type = (Array.isArray(list)) ? 'array' : 'object'
	if(type === 'array') {
	 	list.forEach(cb)
	 } else { 
	 	Object.keys(list).forEach(cb)
	 }
}

loopList(responses, outputresponses, '')
loopList(fallbackhints, outputfallbackhints, '')
loopList(storyhints, outputstoryhints, '')

const json2csv = require('json2csv').parse
const fields = ['key','response']
const opts = { fields }

fs.writeFile('exported_responses.csv', json2csv(outputresponses, opts), (err) => {
	if (err) throw err
	console.log('The file has been saved!')
})

fs.writeFile('exported_fallbackhints.csv', json2csv(outputfallbackhints, opts), (err) => {
	if (err) throw err
	console.log('The file has been saved!')
})

fs.writeFile('exported_storyhints.csv', json2csv(outputstoryhints, opts), (err) => {
	if (err) throw err
	console.log('The file has been saved!')
})
