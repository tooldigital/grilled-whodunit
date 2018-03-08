//intents keys
const utils = require('./utils')
module.exports = utils.enumerate([
    'QUIT',
    'NO_INPUT',
	'FALLBACK',
	'NEW_GAME',
	'HOWTO',
	'HELP',
	'TEST',
    'REPEAT',
	'INTRO',
	'REPLAY_YES',
	'REPLAY_NO',
	'ASKHAWKINS',
	'ASKFORCASEFILE',
	'EVIDENCE',
	'TALK_TO_HAWKINS',
	'TOOGENERIC',
	'PRESSCHARGES',
	'PRESSCHARGES_KILLER',
	'PRESSCHARGES_EVIDENCE',
	'PRESSCHARGES_EVIDENCE_FALLBACK',
	'SUGGESTIONINTERVIEW',
	'SUGGESTIONCATCHKILLER',
	'LIST_SUSPECTS',
	'INTRO_INTERROGATE',
	'INTRO_INTERROGATE_SELECT',
	'QUESTION_SUSPECT_FALLBACK',
	'SELECT_SUSPECT',
	'FIRSTNAME',
	'FULLNAME',
	'NIGHTOF',
	'DIDYOUKILLHER',
	'WHATRELATIONSHIPTOBETSY',
	'HOWLONGKNOWBETSY',
	'ANGRYWITHBETSY',
	'WHOKILLEDBETSY',
	'WHATBETSYDOBRANDI',
	'BETSYDOSOMETHINGTOYOU',
	'WHATRECIPE',
	'WHYCONSTBETSYHATEEACHOTHER',
	'WHENLASTSEEBETSY',
	'TELLABOUT',
	'TELLABOUTSELF',
	'TELLABOUTBRANDI',
	'TELLABOUTCONSTANCE',
	'TELLABOUTTUCKER',
	'TELLABOUTPETE',
	'WHOBETSYHEADCHEF',
	'BRANDI_WHYFIRE',
	'BRANDI_WHOBOYFRIEND',
	'BRANDI_WHYFAMILYHATETUCKER',
	'BRANDI_WHYTUCKERWORKFORBETSY',
	'BRANDI_WHODAD',
	'BRANDI_WHATDADBUSINESS',
	'BRANDI_WHOGRANDMOTHER',
	'BRANDI_DIDYOUSTEAL',
	'BRANDI_HOWLONGDATINGTUCKER',
	'BRANDI_WHATBETSYDOLASTWEEK',
	'BRANDI_WHYGMFAULT',
	'BRANDI_INSURANCE',
	'BRANDI_HOWBETSYSCARY',
	'BRANDI_THINKGMKILLEDBETSY',
	'BRANDI_HOWMEETBF',
	'BRANDI_WHATBETSYFIGHTABOUT',
	'BRANDI_CATCH_IN_LIE',
	'BRANDI_WHENTALKTODAD',
	'BRANDI_DADALONELASTNIGHT',
	'BRANDI_WHYTUCKERSHOWER',
	'BRANDI_WHYTUCKERGOOUT',
	'TUCKER_WHOGIRLFRIEND',
	'TUCKER_BRANDIGIRLFRIEND',
	'TUCKER_WHATWATCHING',
	'TUCKER_WHYFAMNOTLIKEYOU',
	'TUCKER_WHYCHANGERESTAURANTS',
	'TUCKER_WHOPETEMOM',
	'TUCKER_WHYBRANDIFIRED',
	'TUCKER_WHATTIMEBRANDYHOME',
	'TUCKER_INSURANCE',
	'TUCKER_INSURANCEAMOUNT',
	'TUCKER_WHEREGFGO',
	'TUCKER_WHOGFDAD',
	'TUCKER_WHOBRANDIGM',
	'TUCKER_WHEREBRANDYGO',
	'TUCKER_WHYBRANDYGO',
	'TUCKER_WHATLASTJOB',
	'TUCKER_HOWLONGDATING',
	'TUCKER_WHYPETENOTRESPECTYOU',
	'TUCKER_MADATPETE',
	'TUCKER_WHATWORKINGON',
	'TUCKER_HOWMEETBRANDI',
	'TUCKER_BRANDYLEAVE',
	'TUCKER_WHATTIMESEECONSTANCE',
	'TUCKER_WHYCONSTANCEAROUND',
	'TUCKER_SHOWERLASTNIGHT',
	'TUCKER_CATCH_IN_LIE',
	'CONST_WHATTERRIBLETHINGS',
	'CONST_WHOSON',
	'CONST_WHATREADING',
	'CONST_WHOGRANDDAUGHTER',
	'CONST_WHOGDBOYFRIEND',
	'CONST_WHATELSEBETSYDO',
	'CONST_HOWSONOUTOFBUSINESS',
	'CONST_WHYGDFIRED',
	'CONST_WHEREGDDRIVING',
	'CONST_WHATTIMEGDCALL',
	'CONST_YOUANDBETSYHATE',
	'CONST_WHATSTRATEGY',
	'CONST_WHYTUCKERTHRILLED',
	'CONST_WHYNOLIKETUCKER',
	'CONST_WHYWANTBETSYOUTOFBIZ',
	'CONST_HOWBETSYHUMILIATEBRANDI',
	'CONST_WHATTALKABOUTWITHGD',
	'CONST_WHATTIMETOSLEEP',
	'CONST_CATCH_IN_LIE',
	'PETE_WHODAUGHTER',
	'PETE_WHYGOOUTOFBUSINESS',
	'PETE_WHATSPEAKABOUTDAUGHTER',
	'PETE_WHOMOTHER',
	'PETE_HOWBETSYPUTYOUOUTBIZ',
	'PETE_WHYDAUGHTERFIRED',
	'PETE_WHYDAUGHTERWORKFORCOMP',
	'PETE_WHODAUGHTERBF',
	'PETE_WHYYOURFAULT',
	'PETE_WHYTUCKERHAPPY',
	'PETE_WHYANGRYWITHBETSY',
	'PETE_WHYENEMYOFFAM',
	'PETE_BETSYHATEBEFOREBORN',
	'PETE_WHEREDAUGHTERGOING',
	'PETE_WHYNOTTRUSTTUCKER',
	'PETE_HOWFARRESTAURANTFROMBETSY',
	'PETE_WHYANGRYWITHBETSY',
	'PETE_BRANDICALLLASTNIGHT',
	'PETE_ALONELASTNIGHT',
	'PETE_CATCH_IN_LIE',
	'TALKABOUTMURDER',
	'WHENBESTYFINDOUTBRANDI',
	'OTHERSUSPECTSUSPICIOUS',
	'OTHERSUSPECTSUSPICIOUS_BRANDI',
	'OTHERSUSPECTSUSPICIOUS_TUCKER',
	'OTHERSUSPECTSUSPICIOUS_CONSTANCE',
	'OTHERSUSPECTSUSPICIOUS_PETE',
	'THINKOTHERSUSPECTKILLED',
	'THINKOTHERSUSPECTKILLED_BRANDI',
	'THINKOTHERSUSPECTKILLED_TUCKER',
	'THINKOTHERSUSPECTKILLED_CONSTANCE',
	'THINKOTHERSUSPECTKILLED_PETE',
	'WHATBETSYDOINGNIGHTOFMURDER',
	'KNOWBETSY',
	'WHOISBETSY',
	'KNOWOTHERSUSPECT',
	'KNOWOTHERSUSPECT_BRANDI',
	'KNOWOTHERSUSPECT_TUCKER',
	'KNOWOTHERSUSPECT_CONSTANCE',
	'KNOWOTHERSUSPECT_PETE',
	'TELLABOUTMURDER',
	'HOWOLDBRANDI',
	'HOWFEELABOUTBETSY',
	'DOYOUTRUSTOTHERSUSPECT',
	'DOYOUTRUSTOTHERSUSPECT_BRANDI',
	'DOYOUTRUSTOTHERSUSPECT_TUCKER',
	'DOYOUTRUSTOTHERSUSPECT_CONSTANCE',
	'DOYOUTRUSTOTHERSUSPECT_PETE',
	'WHYBETSYMURDERED',
	'GETALONGBETSY',
	'DIDBETSYCONSTNOTLIKEEACHOTHER',
	'OTHERSUSPECTALIBI',
	'OTHERSUSPECTALIBI_BRANDI',
	'OTHERSUSPECTALIBI_TUCKER',
	'OTHERSUSPECTALIBI_CONSTANCE',
	'OTHERSUSPECTALIBI_PETE',
	'TALKTOBETSY',
	'WHATTHINKOTHERSUSPECT',
	'WHATTHINKOTHERSUSPECT_BRANDI',
	'WHATTHINKOTHERSUSPECT_TUCKER',
	'WHATTHINKOTHERSUSPECT_CONSTANCE',
	'WHATTHINKOTHERSUSPECT_PETE',
	'CONST_WHYBRANDYROUGH',
	'CONST_WEREHOMEALLNIGHT',
	'CONST_LIKEGRANDDAUGHTER',
	'CONST_ALONEALIBI',
	'CONST_WHYBRANDICALL',
	'TUCKER_HOWLONGWORKBETSY',
	'TUCKER_DIDBRANDYGOTOSLEEP',
	'TUCKER_STILLWORKATBBQ',
	'PETE_DIDBETSYHATEBRANDI',
	'PETE_WHYBRANDICALL',
	'PETE_WHATDAUGHTERRAMBLING',
	'PETE_DIDDAUGHTERWORKFORBETSY',
	'BRANDI_WHEREBFLASTNIGHT',
	'BRANDI_WHENWORKBETSY',
	'BRANDI_NIGHTOF',
	'BRANDI_BETSYKNOWBF',
	'BRANDI_LIKEGRANDMOTHER',
	'BRANDI_DIDYOUGETFIRED',
	'BRANDI_TIMEATBF',
	'BRANDI_WHENFIRED',
	'BRANDI_BFCONFIRM',
	'BRANDI_LEAVELASTNIGHT',

	'TUCKER_PETEFIRED',
	'TUCKER_BETSYFIRED',
	'CONST_CHARASS',
	'BRANDI_WHATDOINGWITHBOYFRIEND',
	'CANMULTIPLEPEOPLEMURDER',
	'YOUWANTTOKILLBETSY',
	'WHOBETSYENEMIES',
	'WEREYOUALONE',
	'WHENBUYRECIPE',
	'CONFIRMALIBI',
	'WHENHEARMURDER',
	'FIGHTWITHBETSY',
	'OTHERSUSPECTANGRYBETSY',
	'OTHERSUSPECTANGRYBETSY_BRANDI',
	'OTHERSUSPECTANGRYBETSY_CONSTANCE',
	'OTHERSUSPECTANGRYBETSY_PETE',
	'OTHERSUSPECTANGRYBETSY_TUCKER',
	'WHOOTHERSUSPECT',
	'WHOOTHERSUSPECT_BRANDI',
	'WHOOTHERSUSPECT_CONSTANCE',
	'WHOOTHERSUSPECT_PETE',
	'WHOOTHERSUSPECT_TUCKER',
	'WITHOTHERSUSPECT',
	'WITHOTHERSUSPECT_BRANDI',
	'WITHOTHERSUSPECT_CONSTANCE',
	'WITHOTHERSUSPECT_PETE',
	'WITHOTHERSUSPECT_TUCKER',

	"TUCKER_WHAT_TIME_GO_SLEEP",
	"HOWAREYOUTODAY",
	"BRANDI_WHATWASONTV",
	"WHYTUCKERSWITCHJOBS",
	"PETE_WHO_REDOING_WALLS",
	"WHATDRINKING",
	"BRANDI_WHY_BLAME_GRANDMA",
	"PETE_WHAT_IS_NAME_OF_RESTAURANT",
	"TUCKER_WHATSMOKING",
])