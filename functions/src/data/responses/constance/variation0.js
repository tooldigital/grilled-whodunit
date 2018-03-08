//Constance Variation 0
const keys = require('../../../intent-keys.js')
module.exports = {

	//core
	[keys.NIGHTOF]: `I was at home reading a book before I went to sleep. I spoke with my granddaughter around 8:30. She was out driving.`,

	//realization 1
	[keys.CONST_WHOGRANDDAUGHTER]: `Brandi Lynn Michelle Judsen is my granddaughter. Such a sweet and smart young woman. Just a bit rough around the edges. She even called her dear old grandmother last night while she was driving around.`,
	[keys.TELLABOUTBRANDI]: 'Brandi Lynn Michelle Judsen is my granddaughter. Such a sweet and smart young woman. Just a bit rough around the edges. She even called her dear old grandmother last night while she was driving around.',

	//peripheral
	[keys.CONST_WHEREGDDRIVING]: `She didn't say where she was headed. Just that she had left from her boyfriend's place. You should ask him.`,
	[keys.CONST_WHATTIMEGDCALL]: `Around 8:30. Poor thing. She sounded like she was driving somewhere. `,
	[keys.CONST_WHYGDFIRED]: `That old witch didn't need a reason. She was rotten to everyone. Maybe that's why Brandi Lynn was so upset when she called me last night.`,
	[keys.CONST_WHATTALKABOUTWITHGD]: `Oh nothing in particular. Just a nice chat.`,
	[keys.CONST_WHYBRANDICALL]: `I don't believe there was a reason. I'm guessing she simply wanted to vent her grievances about being fired.`,

	[keys.CONST_LIKEGRANDDAUGHTER]: `I love my granddaughter. She might not have the best taste in men, what with that boyfriend of hers. But she is a sweet thing. She even called her grandmother last night when she was out driving. `,
	[keys.CONST_WHYBRANDICALL]: `I think maybe she just wanted to be comforted by her dear old grandmother after what betsy did to her last week`,
	


	[keys.OTHERSUSPECTALIBI_BRANDI]: `We briefly spoke on the phone at around 8:30. It sounded like she was out for a drive.`,
	[keys.OTHERSUSPECTALIBI_TUCKER]: `Honey, I don't care to know the comings and goings of Tucker Mitts. `,
	[keys.OTHERSUSPECTALIBI_CONSTANCE]: `I was at home, reading a book. `,
	[keys.OTHERSUSPECTALIBI_PETE]: `My poor boy? He was at his restaurant, getting things ready to sell off because that old witch put him out of business.`,



}