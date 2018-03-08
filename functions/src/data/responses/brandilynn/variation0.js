// BrandiLynn Variation 0
const keys = require('../../../config/intent-keys')
module.exports = {

	//core
	[keys.NIGHTOF]: `I was at my boyfriend's apartment. We stayed home the whole night.`,
	[keys.DIDYOUKILLHER]: `I'm not a murderer! I was at my boyfriend's apartment all night. How could I have done it?`,

	//realization 1
	[keys.BRANDI_WHOBOYFRIEND]: `Tucker Mitts is my boyfriend. I met him when I started working at Betsy's BBQ. We're in love. We spent every minute together last night.`,
	[keys.TELLABOUT_TUCKER]: `Tucker Mitts is my boyfriend. I met him when I started working at Betsy's BBQ. We're in love. We spent every minute together last night.`,
	[keys.WHOBETSYHEADCHEF]: `Tucker Mitts was Betsy's chef and is my boyfriend. I met him when I started working at Betsy's BBQ. We're in love. We spent every minute together last night.`,
	[keys.WHENLASTSEEBETSY]: `Ummmm. <break time=".5s" /> A week ago? The last time I worked for her.`,
	[keys.BRANDI_WHENTALKTODAD]: 'Around 8:30.',

	//catch in lie
	[keys.BRANDI_CATCH_IN_LIE]: `<prosody pitch="+6%">What??<break time=".5s" /> I've told you everything already! I don't think I can answer anymore questions. <break time=".5s" />Oh god. This is too upsetting</prosody>`,
	[keys.BRANDI_NIGHTOF]: `We were at his apartment, watching TV together all night.`,
	[keys.BRANDI_BFCONFIRM]: `You'd have to ask him.`,
	[keys.BRANDI_LEAVELASTNIGHT]: `No, detective. I didn't leave at all.`,

	[keys.OTHERSUSPECTALIBI_BRANDI]: `I was home with my boyfriend last night, watching TV.`,
	[keys.OTHERSUSPECTALIBI_TUCKER]: `He was home with me all night, watching TV.`,
	[keys.OTHERSUSPECTALIBI_CONSTANCE]: `I'd imagine she was home.`,
	[keys.OTHERSUSPECTALIBI_PETE]: `He was at his restaurant, cleaning up equipment to sell.`,

	[keys.WITHOTHERSUSPECT_BRANDI]: `I was with Tucker the whole night.`,
	[keys.WITHOTHERSUSPECT_TUCKER]: `I was with him the whole night.`,
}