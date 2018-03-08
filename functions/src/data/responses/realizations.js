//Realizations
const suspects = require('../../config/suspects')
module.exports = {
	level1: [
		{
			key: 'BRANDI_RELATION',
			matchedIntents: [
				'TUCKER_WHOGIRLFRIEND',
				'TUCKER_BRANDIGIRLFRIEND',
				'CONST_WHOGRANDDAUGHTER',
				'TELLABOUTBRANDI',
				'PETE_WHODAUGHTER',
				'BRANDI_WHODAD',
				'BRANDI_WHOGRANDMOTHER',
			],
			hints: {
				[suspects.CONSTANCE]: 'My granddaughter would be a good person to speak to about all this.  She knew Betsy also.',
				[suspects.PETE]: 'This is all so horrible. I wonder how my daughter is doing.',
				[suspects.BRANDI]: '',
				[suspects.TUCKER]: 'My girlfriend used to work for Betsy.  You should speak to her too.',
			},
		},
		{
			key: 'PETE_RELATION',
			matchedIntents: [
				'TUCKER_WHOGFDAD',
				'CONST_WHOSON',
				'TELLABOUTPETE',
				'BRANDI_WHODAD',
				'PETE_WHOMOTHER',
				'PETE_WHODAUGHTER',
			],
			hints: {
				[suspects.CONSTANCE]: 'This all must be so strange for my son.  Him and Betsy were fierce business competitors you see.',
				[suspects.PETE]: '',
				[suspects.BRANDI]: 'I wonder how my dad is doing.',
				[suspects.TUCKER]: 'You know. I wonder what my old boss has to say about this.',
			},
		},
		{
			key: 'CONSTANCE_RELATION',
			matchedIntents: [
				'TUCKER_WHOPETEMOM',
				'TUCKER_WHOBRANDIGM',
				'TELLABOUTCONSTANCE',
				'CONST_WHOGRANDDAUGHTER',
				'CONST_WHOSON',
				'PETE_WHOMOTHER',
				'BRANDI_WHOGRANDMOTHER',
			],
			hints: {
				[suspects.CONSTANCE]: '',
				[suspects.PETE]: 'You know who knew Betsy the longest is my mother. She must have some interesting thoughts.',
				[suspects.BRANDI]: 'I wonder how my grandmother is doing',
				[suspects.TUCKER]: '',
			},
		},
		{
			key: 'TUCKER_RELATION',
			matchedIntents: [
				'TUCKER_WHOGIRLFRIEND',
				'TUCKER_BRANDIGIRLFRIEND',
				'CONST_WHOGDBOYFRIEND',
				'TELLABOUTTUCKER',
				'BRANDI_WHOBOYFRIEND',
				'PETE_WHODAUGHTERBF',
			],
			hints: {
				[suspects.CONSTANCE]: `darlin, if you're not getting what you need out of me, you might speak to Betsy's head chef.`,
				[suspects.PETE]: 'I will admit I have conflicted feelings about all of this, but it’s truly sad for some. While working at Betsy’s BBQ, Brandi Lynn met her boyfriend.',
				[suspects.BRANDI]: 'I wonder what my boyfriend thinks of this.',
				[suspects.TUCKER]: '',
			},
		},
		{
			key: 'BRANDI_FIRED',
			matchedIntents: [
				'BRANDI_WHATBETSYDOLASTWEEK',
				'WHATBETSYDOBRANDI',
				'CONST_HOWBETSYHUMILIATEBRANDI',

			],
			hints: {
				[suspects.CONSTANCE]: 'You just have to wonder if this is just karma for what Betsy did to my granddaughter.',
				[suspects.PETE]: 'Man.  Poor Brandi must feel uncomfortable with this, after what Betsy did to her',
				[suspects.BRANDI]: `Gosh. I'm so confused about how to feel after what Betsy did last week.`,
				[suspects.TUCKER]: 'Boy I’ll bet Brandi is feeling weird about all this, with how Betsy embarrassed her last week',
			},
		},

	],
	level2: [
		{
			key: 'STEAL_THE_RECIPE',
			matchedIntents: [
				'CONST_WHATSTRATEGY',
				'PETE_WHYYOURFAULT',
				'WHATRECIPE',
				'BRANDI_WHYGMFAULT',
			],
			hints: {
				[suspects.CONSTANCE]: `It's such a shame.  None of this would have happened if Brandi Lynn hadn't messed up our little strategy.`,
				[suspects.PETE]: 'but If I’m being honest. This whole thing is probably all my fault',
				[suspects.BRANDI]: 'Ok <break delay="1s" /> I’m just going to trust you and tell you this. I think all of this is my grandmother‘s fault',
				[suspects.TUCKER]: 'It’s weird. I keep getting this feeling that this all somehow relates to Betsy’s secret recipe.',
			},
		},
		{
			key: 'TUCKER_INSURANCE',
			matchedIntents: [
				'CONST_WHYTUCKERTHRILLED',
				'PETE_WHYTUCKERHAPPY',
				'TUCKER_INSURANCE',
				'BRANDI_INSURANCE',
			],
			hints: {
				[suspects.CONSTANCE]: 'Oh I just had a thought. From what I’ve heard, I’ll bet that Tucker is thrilled with all of this.',
				[suspects.PETE]: 'Here’s another thought. if I were a betting man, I’d wager that Tucker is pretty happy about all of this. ',
				[suspects.BRANDI]: 'Oh, before I forget to tell you this. Don’t jump to conclusions that Tucker killed her. He’s got too good of a heart to commit murder just for some insurance money',
				[suspects.TUCKER]: 'and just so we get this out of the way. Yes, I am a beneficiary on the restaurant’s insurance.',
			},
		},
		{
			key: 'BETSY_CONST_BACKGROUND',
			matchedIntents: [
				'CONST_YOUANDBETSYHATE',
				'WHYCONSTBETSYHATEEACHOTHER',
			],
			hints: {
				[suspects.CONSTANCE]: 'How much longer will this go?  I swear, even in death that rotten lady has found a way to ruin my day. That woman hated me so.',
				[suspects.PETE]: 'You know what else I just realized. This ends a 50 year feud for my mom and Betsy. More than any other 2 people i’ve met in my life, those two ladies hated each other something fierce',
				[suspects.BRANDI]: 'You know, this is probably going to sound wrong. But I’m relieved by the feud between my grandmother and Betsy ending',
				[suspects.TUCKER]: 'You know who’s probably finding a way to be happy about this is Constance. That lady hated Betsy.',
			},
		},
	],
	level3: [
		{
			variation: 0,
			hints: {
				[suspects.CONSTANCE]: [
					'My darling, Brandi Lynn sounded so upset when she called me from her car last night at 8:30 ',
					'I think Brandi may have also called Pete around the same time as me last night. Poor girl was so distraught.',
					'Here’s a thought. Maybe I would have a better alibi for you if Brandi had stopped by while she was out driving last night.',
					'Did I mention Brandi Lynn was out last night?',
				],
				[suspects.PETE]: [
					'Gosh. Brandi Lynn must just be beside herself. I hadn’t spoken with her since she got fired until she called me last night. She was so sad. She kept apologizing, just driving around town, I guess.',
					'Yeah. Brandi Lynn even called my mom, around the same time. and Brandi doesn’t love conversations with her, so you know Brandi Lynn wasn’t feeling well last night.',
				],
				[suspects.BRANDI]: [
					'This is all just so crazy. I’m glad I wasn’t anywhere near the crime scene. Just hanging out at my boyfriend’s apartment all night',
					'I’m just so glad I was with Tucker the whole night last night, or no one would be able corroborate my alibi',
				],
				[suspects.TUCKER]: [
					'You know what? I’m just not sure where Brandi was going last night when she left',
					'Come to think of it. Where was Brandi last night when while she was out?',
				],
			},
		},
		{
			variation: 1,
			hints: {
				[suspects.CONSTANCE]: [],
				[suspects.PETE]: [],
				[suspects.BRANDI]: [],
				[suspects.TUCKER]: [],
			},
		},
		{
			variation: 2,
			hints: {
				[suspects.CONSTANCE]: [],
				[suspects.PETE]: [],
				[suspects.BRANDI]: [],
				[suspects.TUCKER]: [],
			},
		},
		{
			variation: 3,
			hints: {
				[suspects.CONSTANCE]: [],
				[suspects.PETE]: [],
				[suspects.BRANDI]: [],
				[suspects.TUCKER]: [],
			},
		},
	],
	ignoredIntents: {
		variations: [
			{ // variation 0
				[suspects.CONSTANCE]: [
					
				],
				[suspects.PETE]: [
				
				],
				[suspects.BRANDI]: [
					'NIGHTOF',
					'DIDYOUKILLHER',
					'TELLABOUTTUCKER',
					'BRANDI_WHOBOYFRIEND',
					'BRANDI_CATCH_IN_LIE',
				],
				[suspects.TUCKER]: [
					
				],
			},{ // variation 1
				[suspects.CONSTANCE]: [
					
				],
				[suspects.PETE]: [
					'PETE_CATCH_IN_LIE',
				],
				[suspects.BRANDI]: [
					
				],
				[suspects.TUCKER]: [
					
				],
			}, { // variation 2
				[suspects.CONSTANCE]: [
					'CONSTANCE_CATCH_IN_LIE',
				],
				[suspects.PETE]: [
					
				],
				[suspects.BRANDI]: [
					
				],
				[suspects.TUCKER]: [
					
				],
			}, { // variation 3
				[suspects.CONSTANCE]: [
					
				],
				[suspects.PETE]: [
					
				],
				[suspects.BRANDI]: [
					
				],
				[suspects.TUCKER]: [
					'TUCKER_CATCH_IN_LIE',
				],
			},
		],
	},
}
