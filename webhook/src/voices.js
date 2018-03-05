const suspects = require('./data/suspects')
const utils = require('./utils')

const voices = {
	['HAWKINS']: {
		speak(content){
			return utils.mediaSpeak(voices['HAWKINS'].voice(content))
		},
		voice(content){
			let prosody = utils.prosody(content, '95%', '-8%')
			return utils.voice(prosody, 'male', 1)
		}
	},
	[suspects.BRANDI]: {
		speak(content){
			return utils.speak(voices[suspects.BRANDI].voice(content))
		},
		voice(content){
			let prosody = utils.prosody(content, '95%', '40%')
			return utils.voice(prosody, 'female', 1)
		},
		lie(content){
			let prosody = utils.prosody(content, '103%', '44%')
			let emphasis = utils.emphasis(prosody, 'moderate')
			return utils.voice(emphasis, 'female', 1)
		},
		voiceOverMedia(content){
			let prosody = utils.prosody(content, '98%', '16%')
			return utils.voice(prosody, 'female', 1)
		}
	},
	[suspects.PETE]: {
		speak(content){
			return utils.speak(voices[suspects.PETE].voice(content))
		},
		voice(content){
			let prosody = utils.prosody(content, '100%', '20%')
			return utils.voice(prosody, 'male', 2)
		},
		lie(content){
			let prosody = utils.prosody(content, '113%', '42%')
			let emphasis = utils.emphasis(prosody, 'none')
			return utils.voice(emphasis, 'male', 2)
		},
		voiceOverMedia(content){
			let prosody = utils.prosody(content, '106%', '8%')
			return utils.voice(prosody, 'male', 2)
		}
	},
	[suspects.CONSTANCE]: {
		speak(content){
			return utils.speak(voices[suspects.CONSTANCE].voice(content))
		}, 
		voice(content) {
				let prosody = utils.prosody(content, '95%', '-20%')
			return utils.voice(prosody, 'female', 2)
			},
		lie(content){
			let prosody = utils.prosody(content, '106%', '10%')
			let emphasis = utils.emphasis(prosody, 'none')
			return utils.voice(emphasis, 'female', 2)
		}, 
		voiceOverMedia(content) {
				let prosody = utils.prosody(content, '95%', '-10%')
			return utils.voice(prosody, 'female', 2)
			}
	},
	[suspects.TUCKER]: {
		speak(content){
			return utils.speak(voices[suspects.TUCKER].voice(content))
		},
		voice(content){
			let prosody = utils.prosody(content, '100%', '-20%')
			return utils.voice(prosody, 'male', 2)
		},
		lie(content){
			let prosody = utils.prosody(content, '102%', '-30%')
			let emphasis = utils.emphasis(prosody, 'none')
			return utils.voice(emphasis, 'male', 2)
		},
		voiceOverMedia(content){
			let prosody = utils.prosody(content, '97%', '-10%')
			let emphasis = utils.emphasis(prosody, 'moderate')
			return utils.voice(emphasis, 'male', 2)
		}
	}
}
module.exports = voices