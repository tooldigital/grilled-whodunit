/* global console */
/**
*	
*	Sound Effects to be interspersed within suspect responses
*	
*/

const suspects = require('../config/suspects')
const media = require('../data/media')
const Utils = require('./utils')

/** interviewSFX object to provide different sfx props per suspect */
const suspectSFX = {
	[suspects.BRANDI]: {
		length: media.sfx[suspects.BRANDI].length,
	},
	[suspects.CONSTANCE]: {
		length: media.sfx[suspects.CONSTANCE].length,
	},
	[suspects.PETE]: {
		length: media.sfx[suspects.PETE].length,
	},
	[suspects.TUCKER]: {
		length: media.sfx[suspects.TUCKER].length,
	},
}

module.exports = {
	init: (app) => {
		app.data.sfx = {
			playSwitch: 2,
			interval: 4,
			[suspects.BRANDI]: {
				idx: 0,
			},
			[suspects.PETE]: {
				idx: 0,
			},
			[suspects.TUCKER]: {
				idx: 0,
			},
			[suspects.CONSTANCE]: {
				idx: 0,
			},
		}
	},
	addSFXPeriodically: (app, intent, suspect, response) => {
		let sfx = app.data.sfx
		sfx.playSwitch ++
		if(sfx.playSwitch % app.data.sfx.interval === 0) { // prepend a sound effect to the suspect response every other time
			response = Utils.speak(
				`<audio src="${media.sfx[suspect][sfx[suspect].idx]}"/>` +
				response
			)
			sfx[suspect].idx ++
			if(sfx[suspect].idx >= suspectSFX[suspect].length) {
				sfx[suspect].idx = 0 //increment the index then loop
			}
		} 
		return response
	},
}