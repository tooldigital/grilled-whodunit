// Realizations
const data = require('../data/responses/realizations')
module.exports = {
	
	init(app){
		app.data.realizations = {
			counter: -1,
			currentLevel: 1,
			currentIDX: 0,
			level1: Array.from(data.level1, r => r.key),
			level2: Array.from(data.level2, r => r.key),
		}
	},

	appendRealizationPeriodically(app, intent, v, suspect, response){
		let r = app.data.realizations
		module.exports._tryToMatchIntent(r, intent)
		module.exports._setCounter(r, v, intent, suspect)
		let rlevel = module.exports._setLevel(r)

		if(module.exports._canAddRealization(r, v, intent, suspect)) {
			let rhint
			if(rlevel >= 3) {
				rhint = module.exports._getBlatantHint(v)
			} else {
				rhint = module.exports._getRealizationHint(r, rlevel, suspect)
				module.exports._setIDX(r, rlevel)
			}
			response = `${response} <break time=".75s" />${rhint}`
		}
		return response
	},

	_tryToMatchIntent(r, intent){
		//try to match incoming intent to realization matchedintents. 
		[1, 2].forEach((i) => {
			data[`level${i}`].forEach(dr => {
				if(dr.matchedIntents.indexOf(intent) > -1) {
					// console.log("+++++++++++++++++++++++")
					// console.log("MATCHED", r.key, intent)
					let matchedIDX = r[`level${i}`].indexOf(r.key)
					//then remove that from app data realization cue
					if(matchedIDX > -1) {
						r[`level${i}`].splice(matchedIDX, 1)
					}
				}
			})
		})
	},
	_setCounter(r, v, intent, suspect){
		//if the intent is not meant to have a hint on it, set the counter to fire next time
		if(data.ignoredIntents.variations[v][suspect].indexOf(intent) > -1) {
			r.counter = -1
		} else {
			r.counter ++
		}
	},
	_canAddRealization(r, v, intent, suspect){
		return (
			r.counter % 3 === 0 && // add realization hint every third question
			data.ignoredIntents.variations[v][suspect].indexOf(intent) < 0 // some responses have too much info, or don't fit with the realziation hints
		)
	},
	_setLevel(r){
		if(
			r[`level${r.currentLevel}`] &&
			r[`level${r.currentLevel}`].length < 1 &&
			r.currentLevel < 3
		) {
			r.currentLevel++
		} else if(r.currentLevel > 3) {
			r.currentLevel = 3
		}
		return r.currentLevel
	},
	_setIDX(r, rlevel){
		if(!r[`level${rlevel}`].length) {
			r.currentLevel++
			r.currentLevel = r.currentLevel > 3 ? 3 : r.currentLevel
			r.currentIDX = 0
		} else if(
			r.currentIDX+1 < r[`level${rlevel}`].length - 1 &&
			r.currentIDX !== 3
		) {
			r.currentIDX++
		// } else if(r.currentIDX === 3) {
		} else {
			r.currentIDX = 0
		}
	},
	_getBlatantHint(v, suspect){
		let variation = data.level3.find( (v1) => {
			return v1.variation === v
		})
		let rIDX = Math.floor(Math.random() * (variation.hints[suspect].length - 1))
		return variation.hints[suspect][rIDX]
	},
	_getRealizationHint(r, rlevel, suspect){
		/*
			NOTE: due to reducing the available realizations 
			within app.data.realizations. It might happen that 
			the array is spliced multiple times at once and 
			invalidate an idx. In this case, set the idx to 0.
		*/
		if(!r[`level${rlevel}`][r.currentIDX]) r.currentIDX = 0
		let rkey = r[`level${rlevel}`][r.currentIDX]
		let realization = data[`level${rlevel}`].find( r => r.key === rkey )
		// console.log(".........................................")
		// console.log(realization)
		return realization.hints[suspect]
	},
}
