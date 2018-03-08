//Tucker General
const keys = require('../../../intent-keys')
module.exports = {

	hints: {},

	[keys.FIRSTNAME]: 'Tucker',
	[keys.FULLNAME]: 'Tucker Dale Mitts',
	[keys.TELLABOUTSELF]: 'My name is Tucker Mitts. I was Betsy\'s head chef and business partner.',

	// core
	[keys.WHATRELATIONSHIPTOBETSY]: 'She was a great boss. She wasn\'t afraid to go for what she wanted. She always treated me with respect.',
	[keys.DIDYOUKILLHER]: 'You got the wrong guy bud. I put blood sweat and tears into that place',
	[keys.HOWLONGKNOWBETSY]: '5 years or so. I first met her when I was at my last job.',
	[keys.WHOKILLEDBETSY]: 'I don\'t know. It could have been anybody. It could have been a random thief.',
	[keys.NIGHTOF]: 'I was at home with my girlfriend, watching TV.',
	[keys.ANGRYWITHBETSY]: 'No! She saw my potential and gave me a chance. She was such a great boss that I was actually doing extra work off the clock last night.',

	//realization 1
	[keys.WHATBETSYDOBRANDI]: 'Well Brandi started working at Betsy\'s BBQ a couple months ago. That\'s how we met. Everything was great, but then all of a sudden one day, the two of them got in a bad argument and Betsy kind of lost it on Brandy and then fired her.',
	[keys.TELLABOUTBRANDI]: 'Brandi is my girlfriend. She\'s a little young but I love her.',
	[keys.TELLABOUTPETE]: 'Pete Judsen is Brandi\'s dad. He was my Boss before Betsy hired me. He never saw me as anything more than a line cook.',
	[keys.TELLABOUTCONSTANCE]: 'Constance is Brandi\'s grandmother. I don\'t know her real well, but I don\'t think I like her very much. She acts like she owns everything and everyone in every room she walks into.',
	[keys.TELLABOUTTUCKER]: 'You\'re talking to him, bud.',
	[keys.TUCKER_WHOGIRLFRIEND]: 'Brandi is my girlfriend. She\'s a little young but I love her.',
	[keys.TUCKER_WHOPETEMOM]: 'Constance. I don\'t know her real well, but I don\'t think I like her very much. She acts like she owns everything and everyone in every room she walks into.',
	[keys.TUCKER_WHOGFDAD]: 'Pete Judsen is Brandi\'s dad. He was my Boss before Betsy hired me. He never saw me as anything more than a line cook.',
	[keys.TUCKER_WHOBRANDIGM]: 'Constance is Brandi\'s grandmother. I don\'t know her real well, but I don\'t think I like her very much. She acts like she owns everything and everyone in every room she walks into.',

	//realization 2
	[keys.WHATRECIPE]: 'I don\'t completely know. I can taste cumin and molasses, but I\'m not sure about the rest. Betsy was crazy about that recipe. She would make the sauce herself and insisted that only she know it. And the whole town got more and more interested because it was a mystery and alot of people thought it was the reason we became successful. Brandi Lynn used to talk about it all the time, wondering where Betsy bought it. I\'m sure Pete would have stolen it if he had the chance.',
	[keys.WHYCONSTBETSYHATEEACHOTHER]: 'I don\'t really know how the minds of the 1 percent work, pal. You\'re going to have to ask Constance about that one.',
	[keys.TUCKER_INSURANCE]: 'It\'s a policy that covers the destruction of the business and It\'s alot of money, but I guarantee you I would give it back to keep this thing going. I put my blood sweat and tears into that place.',
	[keys.TUCKER_INSURANCEAMOUNT]: 'It\'s a policy that covers the destruction of the business and It\'s alot of money, but I guarantee you I would give it back to keep this thing going. I put my blood sweat and tears into that place.',

	//peripheral
	[keys.BETSYDOSOMETHINGTOYOU]: 'No, she was great to me.',
	[keys.WHENLASTSEEBETSY]: 'Yesterday, around 7:30pm. I had the early shift.',
	[keys.TUCKER_WHATWATCHING]: 'Nothing too interesting. It was mostly just on in the background while I got some work done. ',
	[keys.TUCKER_WHYFAMNOTLIKEYOU]: 'I think it\'s because I quit her dad\'s restaurant to work at Betsy\'s.',
	[keys.TUCKER_WHYCHANGERESTAURANTS]: 'Business is business. She offered to make me part owner and I had to move on.',
	[keys.TUCKER_WHYBRANDIFIRED]: 'I don\'t know the whole story. Ask Brandi',
	[keys.TUCKER_WHEREGFGO]: 'She didn\'t go anywhere',
	[keys.TUCKER_WHATTIMEBRANDYHOME]: 'She was home the whole day and night. She was still sad about being fired.',
	[keys.TUCKER_BRANDIGIRLFRIEND]: 'Yeah I\'m spending my time with Brandi.',
	[keys.TUCKER_WHEREBRANDYGO]: 'Brandi didn\'t go anywhere',
	[keys.TUCKER_WHYBRANDYGO]: 'Brandi didn\'t go anywhere',
	[keys.TUCKER_WHATLASTJOB]: 'I worked for Pete at his restaurant.',
	[keys.TUCKER_HOWLONGDATING]: 'A few months.',
	[keys.TUCKER_WHYPETENOTRESPECTYOU]: 'Your guess is as good as mine, friend. I was running the whole kitchen before I left',
	[keys.TUCKER_MADATPETE]: 'I\'m not mad at him. I just don\'t like him. He never gave me a chance. Just saw me as a line cook.',
	[keys.TUCKER_WHATWORKINGON]: 'Some extra stuff for the restaurant actually. work down the drain i guess',
	[keys.TUCKER_HOWMEETBRANDI]: 'We met a few months ago when she started working at Betsy\'s.',
	[keys.TUCKER_BRANDYLEAVE]: 'She was home all night.',
	[keys.TUCKER_WHATTIMESEECONSTANCE]: 'I didn\'t see Constance. Haven\'t seen her in a few months...',
	[keys.TUCKER_WHYCONSTANCEAROUND]: 'She wasn\'t around. I don\'t know where you got that from.',
	[keys.TUCKER_SHOWERLASTNIGHT]: 'Yeah, I took a shower last night. Long day in a hot kitchen. I needed it.',
	[keys.BRANDI_CATCH_IN_LIE]: 'What in the world are you talking about pal. I didn\'t say anything like that.',


	[keys.NEW_TALKABOUTMURDER]: `OK. What would you like to know?`,
	[keys.WHENBESTYFINDOUTBRANDI]: `Oh. I guess that's why Brandi got fired.  Man Betsy hates that family`,
	[keys.OTHERSUSPECTSUSPICIOUS_BRANDI]: `no way.  Brandi?`,
	[keys.OTHERSUSPECTSUSPICIOUS_TUCKER]: `Yeah.  I guess I'm a little suspicious.`,
	[keys.OTHERSUSPECTSUSPICIOUS_CONSTANCE]: `I little I suppose.  `,
	[keys.OTHERSUSPECTSUSPICIOUS_PETE]: `I don't think he's suspicious`,
	[keys.THINKOTHERSUSPECTKILLED_BRANDI]: `I couldn't see Brandi doing that`,
	[keys.THINKOTHERSUSPECTKILLED_TUCKER]: `haha.  No I don't think I killed Betsy`,
	[keys.THINKOTHERSUSPECTKILLED_CONSTANCE]: `Wow.  That would be crazy if Constance killed Betsy. But to be honest, they hated each other.`,
	[keys.THINKOTHERSUSPECTKILLED_PETE]: `Pete was angry with Betsy for ruining his business`,
	[keys.WHATBETSYDOINGNIGHTOFMURDER]: `Your guess is as good as mine. `,
	[keys.KNOWBETSY]: `Yeah, I knew her`,
	[keys.WHOISBETSY]: `Betsy Harris is the woman who got roasted!`,
	[keys.KNOWOTHERSUSPECT_BRANDI]: `Of course I know Brandi. She's my girlfriend.`,
	[keys.KNOWOTHERSUSPECT_TUCKER]: `You ok man?  I'm Tucker`,
	[keys.KNOWOTHERSUSPECT_CONSTANCE]: `Yeah I know her`,
	[keys.KNOWOTHERSUSPECT_PETE]: `I know him, yeah.`,
	[keys.TELLABOUTMURDER]: `All I know is that Betsy died in a fire.`,
	[keys.HOWOLDBRANDI]: `Twenty one.`,
	[keys.HOWFEELABOUTBETSY]: `She was a great boss. She always treated me with respect.`,
	[keys.DOYOUTRUSTOTHERSUSPECT_BRANDI]: `Of course.  `,
	[keys.DOYOUTRUSTOTHERSUSPECT_TUCKER]: `yeah I guess I trust myself`,
	[keys.DOYOUTRUSTOTHERSUSPECT_CONSTANCE]: `not really`,
	[keys.DOYOUTRUSTOTHERSUSPECT_PETE]: `nope`,
	[keys.WHYBETSYMURDERED]: `I guess she had enemies more serious than she realized`,
	[keys.GETALONGBETSY]: `Of course I did. She was my business partner and I was her head chef.`,
	[keys.DIDBETSYCONSTNOTLIKEEACHOTHER]: `They were not friends`,
	[keys.OTHERSUSPECTALIBI_BRANDI]: `She was at my place`,
	[keys.OTHERSUSPECTALIBI_TUCKER]: `I was at home`,
	[keys.OTHERSUSPECTALIBI_CONSTANCE]: `I don't know where Constance was`,
	[keys.OTHERSUSPECTALIBI_PETE]: `I don't know`,
	[keys.TALKTOBETSY]: `Isn't Betsy dead? `,
	[keys.WHATTHINKOTHERSUSPECT_BRANDI]: `I love that girl`,
	[keys.WHATTHINKOTHERSUSPECT_TUCKER]: `I'm Tucker`,
	[keys.WHATTHINKOTHERSUSPECT_CONSTANCE]: `she is a hate-filled woman. `,
	[keys.WHATTHINKOTHERSUSPECT_PETE]: `I don't like that guy`,

	[keys.TUCKER_HOWLONGWORKBETSY]: `Not that it matters, but about three years.`,
	[keys.TUCKER_DIDBRANDYGOTOSLEEP]: `I think so.  I'm not sure.`,
	[keys.TUCKER_STILLWORKATBBQ]: `I did, until she was murdered. `,

	[keys.YOUWANTTOKILLBETSY]: `No. I didn't have anything against Betsy`,
	[keys.WHOBETSYENEMIES]: `I don't really know.  Maybe Brandi's grandmother`,
	[keys.WEREYOUALONE]: `I was with my girl.`,
	[keys.WHENBUYRECIPE]: `Just a few months after I started, about 9 months ago`,
	[keys.CONFIRMALIBI]: `my girl.`,
	[keys.WHENHEARMURDER]: `I heard late last night.`,
	[keys.FIGHTWITHBETSY]: `Actually no.  She always trusted me to do my work`,
	[keys.WHOOTHERSUSPECT_BRANDI]: `Brandy is my lady`,
	[keys.WHOOTHERSUSPECT_CONSTANCE]: `She is Brandi's grandmother`,
	[keys.WHOOTHERSUSPECT_PETE]: `He is Brandi's dad and my former boss`,
	[keys.WHOOTHERSUSPECT_TUCKER]: `I am Tucker`,
	[keys.WITHOTHERSUSPECT_BRANDI]: `Yeah she was with me`,
	[keys.WITHOTHERSUSPECT_CONSTANCE]: `No`,
	[keys.WITHOTHERSUSPECT_PETE]: `Nope`,
	[keys.WITHOTHERSUSPECT_TUCKER]: `You're asking strange questions.  I was with myself.`,
	[keys.OTHERSUSPECTANGRYBETSY_BRANDI]: `She was probably angry after what happened last week`,
	[keys.OTHERSUSPECTANGRYBETSY_CONSTANCE]: `Yeah I've heard Brandi talk about how much Betsy and her hated each other`,
	[keys.OTHERSUSPECTANGRYBETSY_PETE]: `I think he did, yeah`,
	[keys.OTHERSUSPECTANGRYBETSY_TUCKER]: `I didn't have any reason to be.  She was a great boss`,

	[keys.TUCKER_PETEFIRED]: `No he didn't fire me.  I quit to go work for Betsy`,
	[keys.TUCKER_BETSYFIRED]: `No she didn't fire me.  Everything was going great`,

	[keys.TUCKER_WHAT_TIME_GO_SLEEP]: "I went to sleep around midnight.",

	[keys.TUCKER_WHATSMOKING]: "Lucky Strikes.",
	[keys.WHATDRINKING]: "nothing, pal.",
	[keys.HOWAREYOUTODAY]: "I suppose I'm doing alright.",
	[keys.WHYTUCKERSWITCHJOBS]: "I had to get out of that place.  Pete didn't respect me.",

}