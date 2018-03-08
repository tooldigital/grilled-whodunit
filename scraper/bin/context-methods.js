/* global console, __dirname*/
//intent methods

const fs = require('fs-extra')
const path = require('path')

const contextKeyPath = path.resolve(__dirname, '../../functions/src/context-keys.js')
const contextKeys = require(contextKeyPath)
const contextFileHead = `const utils = require('./utils')
const suspects = require('./data/suspects')
// NOTE: contexts must be lower case`
const contextFileCap = `\n\nconst contextString = (str) => str.toLowerCase().replace(/\\s/g, '_')
module.exports.suspects = {
	[suspects.BRANDI]: contextString(suspects.BRANDI),
	[suspects.TUCKER]: contextString(suspects.TUCKER),
	[suspects.PETE]: contextString(suspects.PETE),
	[suspects.CONSTANCE]: contextString(suspects.CONSTANCE),
}`
module.exports = {
	add(key){
		key = key.toLowerCase()
		if(Object.keys(contextKeys).indexOf(key) > -1) {
			return console.error(`\n\n======\nKey: ${key} :: This key already exists!\n=====\n\n`)
		}
		contextKeys[key] = key
		let iOutput = Object.keys(contextKeys)
		iOutput = JSON.stringify(iOutput)
			.split('[').join('[\n\n\t')
			.split(']').join('\n\n]')
			.split(',').join(',\n\t')
		let fileText = `//context keys\n${contextFileHead}\nmodule.exports = utils.enumerate(${iOutput})${contextFileCap}`
		fs.writeFile(contextKeyPath, fileText, (err) => {
			if (err) throw err
			console.log('The context file has been updated!')
		})
	},

	batchAdd(list){
		if(!list.forEach) return console.error('The input list must be structured as an array')

		let output = []
		list.forEach((intent) => {
			intent.contexts.forEach((c) => {
				if(Object.keys(contextKeys).indexOf(c) > -1) {
					return console.error(`\n======\nKey: ${c} :: This key already exists!\n=====\n`)
				}
				if(output.indexOf(c) < 0) output.push(c)
			})
		})
	
		output = JSON.stringify(output)
			.split('[').join('[\n\n\t')
			.split(']').join('\n\n]')
			.split(',').join(',\n\t')

		fs.outputFile(path.resolve(__dirname, '../new_mappings/context-keys.js'), output, (err) => {
			if (err) throw err
			console.log('A new context file has been updated!')
		})
	},
}
