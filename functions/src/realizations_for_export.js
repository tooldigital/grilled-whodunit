//Realizations
const suspects = require('./data/suspects')
module.exports = {
	level1: {
		BRANDI_RELATION: {
			[suspects.CONSTANCE]: 'Have you met my granddaughter? She’s very sweet.',
			[suspects.PETE]: 'This is all so horrible. I wonder how my daughter is doing.',
			[suspects.BRANDI]: 'Is my dad in here also?',
			[suspects.TUCKER]: 'Hey, Are you guys holding my girlfriend?',
		},
		PETE_RELATION: {
			[suspects.CONSTANCE]: 'Dear. Before I forget, can you please pass a message to my son that i may not make dinner tonight?',
			[suspects.PETE]: 'My mother is probably the authority on Betsy since they knew each other for so long. You should talk to her',
			[suspects.BRANDI]: 'You should talk to my dad if you haven’t already.',
			[suspects.TUCKER]: 'And Brandi’s dad. Do you have him too?',
		},
		CONSTANCE_RELATION: {
			[suspects.CONSTANCE]: 'You might speak with my granddaughter. She worked for Betsy.',
			[suspects.PETE]: 'You know who knew Betsy the longest is my mother. She must have some interesting thoughts.',
			[suspects.BRANDI]: 'Can you also tell me how is my grandmother?',
			[suspects.TUCKER]: 'Oh man. That would be hilarious if you’re holding Brandi’s grandmother. You’re not are you?',
		},
		TUCKER_RELATION: {
			[suspects.CONSTANCE]: 'You know, if this is any help. Betsy’s head chef is my granddaughter’s boyfriend.',
			[suspects.PETE]: 'I will admit I have conflicted feelings about all of this, but it’s truly sad for some. While working at Betsy’s BBQ, Brandi Lynn met her boyfriend.',
			[suspects.BRANDI]: 'Did you bring in my boyfriend also?',
			[suspects.TUCKER]: 'Hmm. Have you met my girlfriend? She’s as smart as a whip.',
		},
		BRANDI_FIRED: {
			[suspects.CONSTANCE]: 'You just have to wonder if this is just karma for what Betsy did to my granddaughter.',
			[suspects.PETE]: 'Man. Poor Brandi must have conflicted feelings after what Betsy did to her',
			[suspects.BRANDI]: 'Gosh. This is just all very confusing for me. I was so mad at Betsy for what she did last week',
			[suspects.TUCKER]: 'Boy I’ll bet Brandi is feeling weird about all this, with how Betsy embarrassed her last week',
		},

	},
	level2: {
		STEAL_THE_RECIPE: {
			[suspects.CONSTANCE]: 'It’s such a shame. None of this would have happened if Brandi Lynn hadn’t messed up our little strategy.',
			[suspects.PETE]: 'but If I’m being honest. This whole thing is probably all my fault',
			[suspects.BRANDI]: 'Ok <break delay="3s" /> I’m just going to trust you and tell you this. I think all of this is my grandmother‘s fault',
			[suspects.TUCKER]: 'It’s weird. I keep getting this feeling that this all somehow relates to Betsy’s secret recipe.',
		},
		TUCKER_INSURANCE: {
			[suspects.CONSTANCE]: 'Oh I just had a thought. From what I’ve heard, I’ll bet that Tucker is thrilled with all of this.',
			[suspects.PETE]: 'Here’s another thought. if I were a betting man, I’d wager that Tucker is pretty happy about all of this. ',
			[suspects.BRANDI]: 'Oh, before I forget to tell you this. Don’t jump to conclusions that Tucker killed her. He’s got too good of a heart to commit murder just for some insurance money',
			[suspects.TUCKER]: 'and just so we get this out of the way. Yes, I am a beneficiary on the restaurant’s insurance.',
		},
		BETSY_CONST_BACKGROUND: {
			[suspects.CONSTANCE]: 'How much longer will this go? I swear, even in death that rotten lady has found a way to ruin my day with these horrible interrogations. That woman hated me so',
			[suspects.PETE]: 'You know what else I just realized. This ends a 50 year feud for my mom and Betsy. More than any other 2 people i’ve met in my life, those two ladies hated each other something fierce',
			[suspects.BRANDI]: 'You know, this is probably going to sound wrong. But I’m relieved by the feud between my grandmother and Betsy ending',
			[suspects.TUCKER]: 'You know who’s probably finding a way to be happy about this is Constance. That lady hated Betsy.',
		},
	}
}
