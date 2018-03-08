const suspects = require('./data/suspects')
const utils = {
	
	speak(content){
		return `<speak>${content}</speak>`.replace(/\t|\n/g, '')
	},

	mediaSpeak(content){
		return `<speak><par><media><speak>${content}</speak></media></par></speak>`.replace(/\t|\n/g, '')
	},

	voice(content, gender='male', variant=1){
		return `<voice gender="${gender}" variant="${variant}">${content}</voice>`
	},
	
    prosody(content, rate='100%', pitch='100%'){
		return `<prosody rate="${rate}" pitch="${pitch}">${content}</prosody>`
	},

	/**
		level: strong | moderate | none | reduced
	*/
	emphasis(content, level='none'){
		return `<emphasis level="${level}">${content}</emphasis>`
	},
		
	clearContexts(app, contexts){
		contexts.forEach(ctx => { app.setContext(ctx, 0) })
	},

	/**
		forward all contexts (and extend lifespan to account for it)
	*/
	forwardAllContexts(app){
		app.getContexts().forEach(ctx => { 
			app.setContext(ctx.name, ctx.lifespan + 1, ctx.parameters)
		})
	},

	speakWithSoundbed(speech, begin = 0, audioarray = []){
		let mediaStack = audioarray.map(a => {
			let fod = (a.fadeOutDur) ? `fadeOutDur="${a.fadeOutDur}s"` : ``
			return `<media soundLevel="${a.volume}" begin="${a.begin}" end="${a.end}" ${fod} >
						<audio src="${a.url}"/>
					</media>`
		}).join('')

		let media = `
			<speak>
				<par>
					<media begin="${begin}">
						<speak>${speech}</speak>
					</media>
					${mediaStack}
				</par>
			</speak>
		`;

		return media;
	},

	speakWithSoundEffects(speech, begin = 0, audiotagstack){
		let media = `
			<speak>
				<par>
					<media begin="${begin}">
						<speak>${speech}</speak>
					</media>
					<media soundLevel="35dB">
					${audiotagstack}
					</media>
				</par>
			</speak>
		`;

		return media;
	},

	/**
		Make an object with keys equal to values
	*/
	enumerate(keys){
		let obj = {}
		keys.forEach(key => obj[key] = key)
		return obj
	}
}

module.exports = utils
