//export new inputs to csv

const fs = require('fs')
const json2csv = require('json2csv').parse;
const fields = ['key','userSays'];
const opts = { fields };

const NEW_INTENTS = require("./new-intents.js")

let output = Object.keys(NEW_INTENTS).map( (k) => {
	return {
		key: k,
		userSays: NEW_INTENTS[k].userPhrases
	}
})


fs.writeFile('exported_new_inputs.csv', json2csv(output, opts), (err) => {
  if (err) throw err;
  console.log('The file has been saved!');
});
