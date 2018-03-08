// Tucker Variation 0
const keys = require('../../../config/intent-keys')
module.exports = {

	//core
	[keys.NIGHTOF]: 'I was at home with my girlfriend, watching TV. She went out for a bit around 8, and I stayed home and worked. She got back around midnight.',
	[keys.ANGRYWITHBETSY]: 'No! She saw my potential and gave me a chance. She was such a great boss that I was actually doing extra work off the clock last night while my girlfriend was out.',

	//peripheral
	[keys.TUCKER_WHEREGFGO]: 'She told me she went to the dry cleaners to drop off a few dresses. I guess there are late night dry cleaners',
	[keys.TUCKER_WHATTIMEBRANDYHOME]: 'Around midnight. She somehow seemed worse when she got home.',
	[keys.TUCKER_WHEREBRANDYGO]: 'She told me she went to the dry cleaners to drop off a few dresses. I guess there are late night dry cleaners',
	[keys.TUCKER_WHYBRANDYGO]: 'She seemed sad. I\'m not sure why she left though.',
	[keys.TUCKER_BRANDYLEAVE]: 'She left around 8pm.',

	[keys.TUCKER_DIDBRANDYGOTOSLEEP]: `I'd imagine so. I fell asleep around 10 but she wasn't home yet.`,
	[keys.OTHERSUSPECTALIBI_BRANDI]: `We were home watching TV. But then she went out for a while sometime around 8.`,
	[keys.OTHERSUSPECTALIBI_TUCKER]: `I was home all night, watching TV with my girlfriend. But she went out for a while sometime around 8 `,
	[keys.OTHERSUSPECTALIBI_CONSTANCE]: `I have no clue. She and I don't make a habit of talking to one another.`,
	[keys.OTHERSUSPECTALIBI_PETE]: `From what Brandi told me it sounded like he was at his restaurant, getting things ready to sell.`,
	[keys.WITHOTHERSUSPECT_BRANDI]: `We were together until about 8 when she went out for a few hours.`,
}