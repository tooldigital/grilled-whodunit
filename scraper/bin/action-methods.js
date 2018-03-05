//action methods

const fs = require('fs-extra')
const path = require('path')
const utils = require('./utils')
const actionKeyPath = path.resolve(__dirname, '../../webhook/src/action-keys.js')
const actionKeys = require(actionKeyPath)

module.exports = {
    add(key){
        if(Object.keys(actionKeys).indexOf(key) > -1) {
            return console.error(`\n\n======\nKey: ${key} :: This key already exists!\n=====\n\n`)
        }
        actionKeys[key] = key
        let iOutput = Object.keys(actionKeys)
        console.log(iOutput)
        iOutput = JSON.stringify(iOutput)
                    .split('[').join('[\n\n\t')
                    .split(']').join('\n\n]')
                    .split(',').join(',\n\t')
        let fileText = `//action keys\nconst utils = require('./utils');\nmodule.exports = utils.enumerate(${iOutput})`
        fs.outputFile(actionKeyPath, fileText, (err) => {
            if (err) throw err
            console.log('The intents file has been updated!')
        })
    },

    batchAdd(list){
        if(!list.forEach) return console.error('The input list must be structured as an array')

        let output = utils.buildUniqueKeys(list, actionKeys, 'action')
        output = JSON.stringify(output).split('[').join('[\n\n\t').split(']').join('\n\n]').split(',').join(',\n\t')
        fs.outputFile(path.resolve(__dirname, '../new_mappings/action-keys.js'), output, (err) => {
            if (err) throw err
            console.log('A new actions file has been updated!')
        })
    }
}
