/* global console, __dirname */
//intent methods

const fs = require('fs-extra')
const path = require('path')
const utils = require('./utils')
const intentKeyPath = path.resolve(__dirname, '../../functions/src/intent-keys.js')
const intentKeys = require(intentKeyPath)

module.exports = {
	// add(key, type){
	add(key){
		if(Object.keys(intentKeys).indexOf(key) > -1) {
			return console.error(`\n\n======\nKey: ${key} :: This key already exists!\n=====\n\n`)
		}

		intentKeys[key] = key
		let iOutput = Object.keys(intentKeys)
		iOutput = JSON.stringify(iOutput)
			.split('[').join('[\n\n\t')
			.split(']').join('\n\n]')
			.split(',').join(',\n\t')
		let fileText = `//intent keys\nconst utils = require('./utils');\nmodule.exports = utils.enumerate(${iOutput})`
		fs.outputFile(intentKeyPath, fileText, (err) => {
			if (err) throw err
			console.log('The intents file has been updated!')
		})

		//add to dialogflow agent
	},

	batchAdd(list){
		if(!list.forEach) return console.error('The input list must be structured as an array')
		let output = utils.buildUniqueKeys(list, intentKeys)
		output = JSON.stringify(output) .split('[').join('[\n\n\t').split(']').join('\n\n]').split(',').join(',\n\t')
		fs.outputFile(path.resolve(__dirname, '../new_mappings/intent-keys.js'), output, (err) => {
			if (err) throw err
			console.log('A new intents file has been updated!')
		})
	},
}
