
const request = require('request')
const apiRoot = `https://api.dialogflow.com/v1`

const run = (operation, type, options = {}) => {
	if(['post', 'put', 'get', 'delete'].indexOf(operation) === -1){
		throw Error(operation + ' is not an accepted method')
	}

	let opts = {
		headers: {
			Authorization: `Bearer ${options.accessToken}`,
		},
		json: true,
	}
	if(options.input) opts.body = options.input
	let endpoint = `${apiRoot}/${type}`
	if(options.id) endpoint += '/' + options.id
	endpoint += '?v=20150910'
	// console.log(endpoint)
        
	return new Promise((resolve, reject) => {
		request[operation](endpoint, opts, 
			(err, res, body) => {
				if(err) return reject(err)
				if(body.status && body.status.code !== 200){
					reject(body)
				}else {
					resolve(body)
				}
			}
		)
	})
}

module.exports = {run}
