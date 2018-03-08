
const request = require('request')
const fs = require('fs')
const path = require('path')
const utils = require('./utils')
const intentMethods = require('./intent-methods')
const actionMethods = require('./action-methods')
const contextMethods = require('./context-methods')
const responseMethods = require('./response-methods')

const mapper = (key, args) => {
    let inputfile
    if(key.indexOf('/') > -1) {
        inputfile = key
    }
    console.log(inputfile, !fs.existsSync(key))
    if(inputfile && !fs.existsSync(key)) return console.log(`${inputfile} not found`)
    
    if(inputfile) {
        const inputIntents = utils.forceToArray(require(path.resolve(inputfile)))
        intentMethods.batchAdd(inputIntents)
        actionMethods.batchAdd(inputIntents)
        contextMethods.batchAdd(inputIntents)
        responseMethods.batchAdd(inputIntents)
    } else {
        const type = (args._[1]  === 'general' ) ? 'general' : 'interrogation'
        const action = false || args.action
        const context = false || args.context
        
        console.log(key, type, action, context)
        intentMethods.add(key)
        if(action) actionMethods.add(key)
        if(context) contextMethods.add(key)
    }
}
module.exports = mapper