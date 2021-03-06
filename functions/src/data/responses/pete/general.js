// Pete General
const keys = require('../../../config/intent-keys')
module.exports = {

	hints: {},

	[keys.FIRSTNAME]: 'Pete.',
	[keys.FULLNAME]: 'Peter Randall Bradford Judsen.',
	[keys.TELLABOUTSELF]: 'I ran what was once the most successful barbecue joint here in Lockhart, Texas. Then Betsy came along and put me out of business.',

	//core
	[keys.WHATRELATIONSHIPTOBETSY]: 'We were business competitors, and all is fair in love and war<break time=".4s" /> and business<break time=".4s" /> when no one\'s looking.',
	[keys.ANGRYWITHBETSY]: 'Yeah I had a few reasons to be angry at Betsy, but none strong enough to want to kill her.',
	[keys.HOWLONGKNOWBETSY]: 'My whole life unfortunately. Actually longer she hated me before I was born.',
	[keys.WHOKILLEDBETSY]: 'I know it wasn\'t me.',
	[keys.NIGHTOF]: 'I was alone at my restaurant, cleaning it out. I can\'t believe we\'re closing down this week.',
	[keys.DIDYOUKILLHER]: 'Nope. I cook pigs, not people. Besides, I was at my restaurant all night, on the other side of town.',

	//realization 1
	[keys.TELLABOUT_TUCKER]: 'Tucker Mitts was Betsy\'s head chef and is my daughter\'s boyfriend. He says he loves her, but the guy worked for me for 5 years and I\'ve seen how he is. But Brandi won\'t listen to me.',
	[keys.TELLABOUT_BRANDI]: 'Brandi Lynn is my baby daughter. She\'s just turned 21, so I guess I need to get used to the idea of her being an adult.',
	[keys.TELLABOUT_PETE]: 'guy.<break delay="1s" /> Are you paying attention?',
	[keys.TELLABOUT_CONSTANCE]: 'Constance is my mother. She\'s been a pillar in the Lockhart community for nearly 40 years and before that was raised here.',
	[keys.PETE_WHODAUGHTER]: 'Brandi Lynn is my baby daughter. She\'s just turned 21, so I guess I need to get used to the idea of her being an adult.',
	[keys.PETE_WHOMOTHER]: 'Constance is my mother. She\'s been a pillar in the Lockhart community for nearly 40 years and before that was raised here.',
	[keys.PETE_WHODAUGHTERBF]: 'Tucker Mitts was Betsy\'s head chef and is my daughter\'s boyfriend. He says he loves her, but the guy worked for me for 5 years and I\'ve seen how he is. But Brandi won\'t listen to me.',
	[keys.WHATBETSYDOBRANDI]: 'Brandi Lynn worked at Betsy\'s BBQ Shack up until last week when Betsy cornered poor Brandi and screamed at her in front of a crowd then fired her. It was sadistic if you ask me.',

	//realization 2
	[keys.PETE_WHYYOURFAULT]: 'Well, Betsy had this famous recipe that she didn\'t even create. She bought it. But it seemed like that was the difference in her taking business away from my place and ultimately shutting me down. So, A few months back my mom convinces me to enlist Brandi Lynn to go work for Betsy, since Betsy never knew Brandi Lynn. Well the idea was that Brandi Lynn would gain Betsy\'s trust and then convince Betsy to show her the recipe, then report back to us. The whole thing made me real uneasy, but I went through with it anyway. It blew up in Brandi Lynn\'s face when Betsy found out and now Betsy is dead.',
	[keys.PETE_WHYTUCKERHAPPY]: 'Tucker is the type of guy you just can\'t trust. I thought him and I were going to run my restaurant together for the next 20 years and I didn\'t get as much as a thanks when he jetted over to Betsy\'s new restaurant. Then I heard that Betsy made him a partner and even put him on the insurance. You know what that means right? He just got paid for the restaurant burning down and Betsy dying, and not a small amount either, so yeah. I\'d bet that snake is feeling pretty good.',
	[keys.WHYCONSTBETSYHATEEACHOTHER]: 'You\'re really going to have to ask my mom about that. The story has been told in so many ways, I just don\'t know what\'s true.',

	//peripheral	
	[keys.WHATRECIPE]: 'That\'s the million dollar question. If I could find some way to get my hands on it, I would. I guess you\'ll just have to ask Tucker, though. After all, he\'s the head chef.',
	[keys.BETSYDOSOMETHINGTOYOU]: 'Well I\'m embarrassed to say. Betsy put me out of business. I was going strong for a few years. She came onto the scene to compete and I was still in the lead. Then she bought that damn recipe and everything turned around from there.',
	[keys.WHENLASTSEEBETSY]: 'I think I saw her a week ago around town. I\'m not sure where.',
	[keys.PETE_WHYGOOUTOFBUSINESS]: 'Well I\'m embarrassed to say. Betsy put me out of business. I was going strong for a few years. She came onto the scene to compete and I was still in the lead. Then she bought that damn recipe and everything turned around from there.',
	[keys.PETE_HOWBETSYPUTYOUOUTBIZ]: 'Well, the only reason she got into business was to compete with me and by proxy stick it to my mom. Business was fine until she bought that recipe. Then she started crushing me.',
	[keys.PETE_WHYDAUGHTERFIRED]: 'Betsy was a rotten old lady and didn\'t really need a reason. Before last night, we hadn\'t spoken since she got fired, though. So you should ask Brandi Lynn.',
	[keys.PETE_WHYDAUGHTERWORKFORCOMP]: 'Ok I\'ll admit to it. Brandi Lynn was going to steal the recipe that put Betsy on top in Lockhart. It was my idea. That damn recipe.',
	[keys.PETE_WHYANGRYWITHBETSY]: 'She\'s been an enemy of my family since before I was born. I guess now that I think about it, the biggest reason I hated her, was because she hated me. She\'s always been mean to me',
	[keys.PETE_WHYENEMYOFFAM]: 'You\'ll really have to ask my mom about that',
	[keys.PETE_BETSYHATEBEFOREBORN]: 'Betsy and my mother had been feuding for decades. I don\'t even know why',
	[keys.PETE_WHEREDAUGHTERGOING]: 'I didn\'t say my daughter was going anywhere. What are you talking about?',
	[keys.PETE_WHYNOTTRUSTTUCKER]: 'He\'s got a few too many notches on the belt. I used to go out with him when I was bored. That guy doesn\'t care about anybody but himself',
	[keys.PETE_HOWFARRESTAURANTFROMBETSY]: 'It\'s not close, bud. I\'d say about a 20 minute drive.',
	[keys.PETE_WHATSPEAKABOUTDAUGHTER]: 'I didn\'t say I spoke with my daughter.',
	[keys.PETE_BRANDICALLLASTNIGHT]: 'She didn\'t call me last night.',
	[keys.PETE_ALONELASTNIGHT]: 'I didn\'t see anybody last night. I just put on some music and tried to make the best of breaking down my life\'s work to sell for parts.',
	[keys.PETE_CATCH_IN_LIE]: 'I never said anything about that. I don\'t know what you\'re talking about.',

	[keys.TALKABOUTMURDER]: `What would you like to know?`,
	[keys.WHENBESTYFINDOUTBRANDI]: `She found out last week right before she fired Brandi Lynn.`,
	[keys.OTHERSUSPECTSUSPICIOUS_BRANDI]: `definitely not.`,
	[keys.OTHERSUSPECTSUSPICIOUS_TUCKER]: `I find him a little suspicious.`,
	[keys.OTHERSUSPECTSUSPICIOUS_CONSTANCE]: `well. I'm not sure.`,
	[keys.OTHERSUSPECTSUSPICIOUS_PETE]: `I hope not.`,
	[keys.THINKOTHERSUSPECTKILLED_BRANDI]: `She's a sweet girl. I don't see it.`,
	[keys.THINKOTHERSUSPECTKILLED_TUCKER]: `Who knows. Nothing would surprise me with Tucker.`,
	[keys.THINKOTHERSUSPECTKILLED_CONSTANCE]: `They hated each other, but my mom is so proper. I can't see it.`,
	[keys.THINKOTHERSUSPECTKILLED_PETE]: `hahahah. No. I don't think he did it.`,
	[keys.WHATBETSYDOINGNIGHTOFMURDER]: `I have no idea. `,
	[keys.KNOWBETSY]: `yeah I knew her.`,
	[keys.WHOISBETSY]: `Betsy was a terrible old woman who now lies dead.`,
	[keys.KNOWOTHERSUSPECT_BRANDI]: `Know her? I raised her. She's my daughter.`,
	[keys.KNOWOTHERSUSPECT_TUCKER]: `yeah, I know that guy.`,
	[keys.KNOWOTHERSUSPECT_CONSTANCE]: `That's my mother. Yeah, I know her.`,
	[keys.KNOWOTHERSUSPECT_PETE]: `My name is Pete. Nice to meet you.`,
	[keys.TELLABOUTMURDER]: `All I know is that Betsy died in a fire. `,
	[keys.HOWOLDBRANDI]: `My daughter is 21 years old. `,
	[keys.HOWFEELABOUTBETSY]: `I hate her. She put me out of business! `,
	[keys.DOYOUTRUSTOTHERSUSPECT_BRANDI]: `Sure yeah.`,
	[keys.DOYOUTRUSTOTHERSUSPECT_TUCKER]: `Not after he left me to work for Betsy.`,
	[keys.DOYOUTRUSTOTHERSUSPECT_CONSTANCE]: `Yeah I think so.`,
	[keys.DOYOUTRUSTOTHERSUSPECT_PETE]: `Yep.`,
	[keys.WHYBETSYMURDERED]: `She could be vicious. I guess someone just retaliated.`,
	[keys.GETALONGBETSY]: `She hated my mother. That's all I needed to know.`,
	[keys.DIDBETSYCONSTNOTLIKEEACHOTHER]: `They didn't like each other.`,
	[keys.OTHERSUSPECTALIBI_BRANDI]: `She was at her boyfriend's.`,
	[keys.OTHERSUSPECTALIBI_TUCKER]: `At his place.`,
	[keys.OTHERSUSPECTALIBI_CONSTANCE]: `I think she was at her house.`,
	[keys.OTHERSUSPECTALIBI_PETE]: `I was at my restaurant.`,
	[keys.TALKTOBETSY]: `Very funy. She's dead.`,
	[keys.WHATTHINKOTHERSUSPECT_BRANDI]: `I love her.`,
	[keys.WHATTHINKOTHERSUSPECT_TUCKER]: `I don't trust him.`,
	[keys.WHATTHINKOTHERSUSPECT_CONSTANCE]: `I love her.`,
	[keys.WHATTHINKOTHERSUSPECT_PETE]: `I'm Pete.`,

	[keys.PETE_DIDBETSYHATEBRANDI]: `I'd ask her but she's dead. But she didn't particularly care for my family.`,
	[keys.PETE_WHYBRANDICALL]: `Brandi did not call me.`,
	[keys.PETE_WHATDAUGHTERRAMBLING]: `I don't know what you're talking about.`,
	[keys.PETE_DIDDAUGHTERWORKFORBETSY]: `She did.`,

	[keys.YOUWANTTOKILLBETSY]: `I imagined doing it. But, no. I'm not a killer.`,
	[keys.WHOBETSYENEMIES]: `Well.. my mom for one.`,
	[keys.WEREYOUALONE]: `yeah I was alone.`,
	[keys.WHENBUYRECIPE]: `9 months and 5 days ago. The moment that things started to turn south for my business.`,
	[keys.CONFIRMALIBI]: `No. I was alone in the restaurant all night.`,
	[keys.WHENHEARMURDER]: `Just this morning.`,
	[keys.FIGHTWITHBETSY]: `A few times we've had confrontations, especially since she opened her business.`,
	[keys.WHOOTHERSUSPECT_BRANDI]: `Brandi is my daughter.`,
	[keys.WHOOTHERSUSPECT_CONSTANCE]: `Constance is my mother.`,
	[keys.WHOOTHERSUSPECT_PETE]: `That's me`,
	[keys.WHOOTHERSUSPECT_TUCKER]: `Tucker is Brandi's boyfriend. The traitor also used to work for me.`,
	[keys.WITHOTHERSUSPECT_BRANDI]: `No I was by myself.`,
	[keys.WITHOTHERSUSPECT_CONSTANCE]: `No I didn't see her.`,
	[keys.WITHOTHERSUSPECT_PETE]: `Yes.`,
	[keys.WITHOTHERSUSPECT_TUCKER]: `Nope.`,
	[keys.OTHERSUSPECTANGRYBETSY_BRANDI]: `Yeah I would guess so. Especially after last week`,
	[keys.OTHERSUSPECTANGRYBETSY_CONSTANCE]: `Yeah. It almost seemed like she enjoyed how much they hated each other sometimes.`,
	[keys.OTHERSUSPECTANGRYBETSY_PETE]: `In a way I supposed I did.`,
	[keys.OTHERSUSPECTANGRYBETSY_TUCKER]: `I couldn't tell ya.`,

	[keys.CONST_CHARASS]: `Too many stories to recount. I guess the most recent bad deed she's done to me indirectly was put my son out of business.`,
	
	[keys.WHATDRINKING]: "Hawkins got me some coffee. Thanks Hawkins!",
	[keys.HOWAREYOUTODAY]: "A little bewildered, to be honest. It's just so terrible what happened to Betsy.",
	[keys.WHYTUCKERSWITCHJOBS]: "I don't know. I thought I could trust that guy.",
	[keys.PETE_WHO_REDOING_WALLS]: "The handimen?",
	[keys.PETE_WHAT_IS_NAME_OF_RESTAURANT]: "Pete's Smokehouse Church.",

}
