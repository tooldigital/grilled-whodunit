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
			let prosody = utils.prosody(content, '95%', '38%')
			return utils.voice(prosody, 'female', 1)
		},
		lie(content){
			let prosody = utils.prosody(content, '101%', '43%')
			let emphasis = utils.emphasis(prosody, 'moderate')
			return utils.voice(emphasis, 'female', 1)
		},
		lieOverMedia(content){
			let prosody = utils.prosody(content, '101%', '22%')
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
			let prosody = utils.prosody(content, '108%', '32%')
			let emphasis = utils.emphasis(prosody, 'none')
			return utils.voice(emphasis, 'male', 2)
		},
		lieOverMedia(content){
			let prosody = utils.prosody(content, '108%', '15%')
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
			let prosody = utils.prosody(content, '100%', '4%')
			let emphasis = utils.emphasis(prosody, 'none')
			return utils.voice(emphasis, 'female', 2)
		}, 
		lieOverMedia(content){
			let prosody = utils.prosody(content, '100%', '0%')
			let emphasis = utils.emphasis(prosody, 'none')
			return utils.voice(emphasis, 'female', 2)
		}, 
		voiceOverMedia(content) {
				let prosody = utils.prosody(content, '95%', '-9%')
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
			let prosody = utils.prosody(content, '102%', '-36%')
			let emphasis = utils.emphasis(prosody, 'none')
			return utils.voice(emphasis, 'male', 2)
		},
		lieOverMedia(content){
			let prosody = utils.prosody(content, '102%', '-16 %')
			let emphasis = utils.emphasis(prosody, 'none')
			return utils.voice(emphasis, 'male', 2)
		},
		voiceOverMedia(content){
			let prosody = utils.prosody(content, '108%', '-8%')
			let emphasis = utils.emphasis(prosody, 'moderate')
			return utils.voice(emphasis, 'male', 2)
		}
	}
}
module.exports = voices