//Pete Variation 4
const keys = require('../../../intent-keys.js')
module.exports = {

	//core
	[keys.NIGHTOF]: `I was alone at my restaurant, cleaning it out. I can't believe we're closing down this week. Also, around 8:30 my daughter called me while she was going for a drive.`,
	[keys.DIDYOUKILLHER]: 'Nope. I cook pigs, not people. Besides, I was at my restaurant all night, on the other side of town. Just ask my daughter, she called me while she was out, around 8:30.',

	//realization 1
	[keys.TELLABOUTTUCKER]: `Tucker Mitts was Betsy's head chef and is my daughter's boyfriend. He says he loves her, but the guy worked for me for 5 years and I've seen how he is. But Brandi won't listen to me. She was at his place last night before she went out`,
	[keys.WHOBETSYHEADCHEF]: `Tucker Mitts was Betsy's head chef and is my daughter's boyfriend. He says he loves her, but the guy worked for me for 5 years and I've seen how he is. But Brandi won't listen to me. She was at his place last night before she went out`,
	[keys.PETE_WHODAUGHTERBF]: `Tucker Mitts was Betsy's head chef and is my daughter's boyfriend. He says he loves her, but the guy worked for me for 5 years and I've seen how he is. But Brandi won't listen to me. She was at his place last night before she went out`,
	[keys.PETE_WHEREDAUGHTERGOING]: `You know, she didn't say. She was just kind of rambling and kept apologizing`,
	[keys.PETE_WHATSPEAKABOUTDAUGHTER]: `It was a strange conversation. I think she was still very upset about being fired.`,
	[keys.PETE_BRANDICALLLASTNIGHT]: `Yeah, she called me around 8pm.`,
	[keys.PETE_WHYBRANDICALL]: `She needed to vent about her fight with Betsy. She was still really shaken up and wasn't making a whole lot of sense. `,
	[keys.PETE_WHATDAUGHTERRAMBLING]: `She was going on about the fight she had with Betsy and getting fired. `,


	[keys.OTHERSUSPECTALIBI_BRANDI]: `We spoke on the phone last night sometime after 8. She told me she was out for a drive. `,
	[keys.OTHERSUSPECTALIBI_TUCKER]: `Your guess is as good as mine. Maybe you should ask him. Or maybe ask Brandi. `,
	[keys.OTHERSUSPECTALIBI_CONSTANCE]: `I don't know. Ask her. `,
	[keys.OTHERSUSPECTALIBI_PETE]: `I was at my restaurant, cleaning up some equipment I planned to sell once we went out of business.`,

}