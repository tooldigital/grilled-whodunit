
const suspects = require('../config/suspects')
const bucketURL = 'https://storage.googleapis.com/whodunnit-media/'

module.exports = {
	song: `${bucketURL}The_Black_Cat.mp3`,
	// song: `${bucketURL}Fading_Photos.mp3`,
	// song: `${bucketURL}Snap_To_Fit.mp3`,
	simmer: `${bucketURL}whodunnit-media/Under_Cover.mp3`,
	siren: `${bucketURL}police_siren.mp3`,
	door: {
		[suspects.BRANDI]: `${bucketURL}brandi_door.mp3`,
		[suspects.CONSTANCE]: `${bucketURL}constance_door.mp3`,
		[suspects.PETE]: `${bucketURL}pete_door.mp3`,
		[suspects.TUCKER]: `${bucketURL}tucker_door.mp3`,
	},
	sfx: {
		[suspects.BRANDI]: [
			`${bucketURL}brandi/pour.mp3`,
			`${bucketURL}brandi/sip.mp3`,
			`${bucketURL}brandi/sip.mp3`,
			`${bucketURL}brandi/sip.mp3`,
			`${bucketURL}brandi/sip.mp3`,
			`${bucketURL}brandi/sip.mp3`,
			`${bucketURL}brandi/sip.mp3`,
			`${bucketURL}brandi/sip.mp3`,
			`${bucketURL}brandi/sip.mp3`,
			`${bucketURL}brandi/sip.mp3`,
		],
		[suspects.CONSTANCE]: [
			`${bucketURL}room/room1.mp3`,
			`${bucketURL}room/room2.mp3`,
			`${bucketURL}room/room3.mp3`,
			`${bucketURL}room/room4.mp3`,
			`${bucketURL}room/room5.mp3`,
			`${bucketURL}room/room6.mp3`,
			`${bucketURL}room/room7.mp3`,
			`${bucketURL}room/room8.mp3`,
			`${bucketURL}room/room9.mp3`,
			`${bucketURL}room/room10.mp3`,
			`${bucketURL}room/room11.mp3`,
		],
		[suspects.PETE]: [
			`${bucketURL}room/room12.mp3`,
			`${bucketURL}room/room13.mp3`,
			`${bucketURL}room/room14.mp3`,
			`${bucketURL}room/room15.mp3`,
			`${bucketURL}room/room16.mp3`,
			`${bucketURL}room/room17.mp3`,
			`${bucketURL}room/room18.mp3`,
			`${bucketURL}room/room19.mp3`,
			`${bucketURL}room/room20.mp3`,
			`${bucketURL}room/room21.mp3`,
			`${bucketURL}room/room22.mp3`,
			`${bucketURL}room/room23.mp3`,
			`${bucketURL}room/room24.mp3`,
			`${bucketURL}room/room25.mp3`,
			`${bucketURL}room/room26.mp3`,
			`${bucketURL}room/room27.mp3`,
		],
		[suspects.TUCKER]: [
			`${bucketURL}tucker/lightandsmoke.mp3`,
			`${bucketURL}tucker/drag.mp3`,
			`${bucketURL}tucker/drag2.mp3`,
			`${bucketURL}tucker/drag3.mp3`,
			`${bucketURL}tucker/drag4.mp3`,
			`${bucketURL}tucker/drag5.mp3`,
			`${bucketURL}tucker/drag6.mp3`,
		],
	},
	get room() {
		let rannum = Math.ceil(Math.random() * 71)
		return `${bucketURL}room/room${rannum}.mp3`
	}, 
}