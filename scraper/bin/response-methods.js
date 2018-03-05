//intent methods

const fs = require('fs-extra')
const path = require('path')
const utils = require('./utils')
const responsesPath = path.resolve(__dirname, '../../webhook/src/data/responses')
const responses = require(responsesPath)
//TODO: look through entire response tree to check if key exists

module.exports = {
    add(key){
        console.log('todo: individually add response')
        // if(Object.keys(actionKeys).indexOf(key) > -1) 
        //     return console.error(`\n\n======\nKey: ${key} :: This key already exists!\n=====\n\n`);

        // actionKeys[key] = key
        // let iOutput = Object.keys(actionKeys).map((k) => {
        //     return `${k}`;
        // })
        // console.log(iOutput)
        // iOutput = JSON.stringify(iOutput)
        //             .split('[').join('[\n\n\t')
        //             .split(']').join('\n\n]')
        //             .split(',').join(',\n\t')
        // let fileText = `//action keys\nconst utils = require('./utils');\nmodule.exports = utils.enumerate(${iOutput})`;
        // fs.writeFile(path.resolve(__dirname, '../webhook/src/action-keys.js'), fileText, (err) => {
        //     if (err) throw err;
        //     console.log('The intents file has been updated!');
        // });
    },

    batchAdd(list){
        let keys = list.map( i => i.key )
        let newKeys = utils.checkIfKeyExistsInDeepObject(responses, keys)
        newKeys = newKeys.map( k => (k.indexOf('NEW_') === 0) ? k.split('NEW_')[1] : k )
        let output = {}
        newKeys.forEach((k) => { output[k] = `` })

        output = JSON.stringify(output)
                    .split('{').join('{\n\n\t')
                    .split('}').join('\n\n}')
                    .split(',').join(',\n\t')

        fs.outputFile(path.resolve(__dirname, '../new_mappings/responses.js'), output, (err) => {
            if (err) throw err
            console.log('A new responses file has been updated!')
        })
    }
}
