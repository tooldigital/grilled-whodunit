const suspects = require('../../config/suspects')
const keys = require('../../config/intent-keys')
const Hints = require('./hints')

const suspectsResponses = {
	[suspects.BRANDI]: require('./brandilynn/'),
	[suspects.TUCKER]: require('./tucker/'),
	[suspects.PETE]: require('./pete/'),
	[suspects.CONSTANCE]: require('./constance/'),
}

const suspectList = 'The suspects are Brandi, Tucker, Pete and Constance.'

module.exports = {
	welcome: `<p> Hello detective,<break time=".2s" /> my name is Police Chief Hawkins.<break time=".25s" /> Thanks for coming in.<break time=".5s" /> Betsy Harris, owner of Betsy’s BBQ Shack, was found dead last night at 11pm.<break time="1s" />  We've detained 4 suspects who are awaiting questioning.<break time=".6s" /> None of them are career criminals, so try to find the nervous one, and catch them in a lie.<break time=".6s" /> When you've found the killer say “I’d like to press charges.”</p> <p> Now let’s get started. If this is your first time, you should ask me how to play the game. </p>`,
	listsuspects: suspectList,
	suggestions: {
		catchkiller: `There are a small set of things that can actually link the killer to the murder. They’ll either lie about their alibi, evidence found at the scene, or know information about the scene that hasn’t been released. Once you’ve found the lie, say "I'd like to press charges", then be prepared with your proof.`,
		interview: 'Are you new to this? Remember this is a police case. We need to establish their alibi, their relationship to the victim and potentially to one another. Try starting with "where were you on the night of the murder," or, "what was your relationship to the victim?"',
		toogeneric: 'Try asking more specific questions. Instead of saying something like Why did she do that? Say Why did Betsy fire Brandy?',
	},
	howto: `<p>The point of the game is to catch the killer in a lie.<break time=".6s" />  When you think you’ve caught the killer, say “Hawkins, I’d like to press charges.”<break time=".6s" />  Interview each suspect, compare their answers, and listen for the nervous sounding one to find the liar.</p>
			<p>Once again, my name is Hawkins.<break time=".6s" /> I can list the suspects, go over the crime scene, or even suggest questions.</p>
			<p>Now, would you like to interview the suspects, or go over the crime scene?</p>`,
	casefile: 'Police responded to a fire at Betsy’s Barbecue Shack last night around 11pm.<break time=".6s" /> Owner, Betsy Harris, was found dead inside, padlocked in a broom closet.<break time=".6s" /> Initial tests say that the killer used some kind of paint thinner to start the blaze.<break time=".6s" /> The suspects know that Betsy died in a fire, but they shouldn’t know any other details.',
	help1: 'Try questioning a suspect. ' + suspectList,
	help2: 'If you want to interrogate a suspect, you can say something like, "Let me talk to Tucker."',
	help3: 'Try asking each suspect the same questions and comparing their answers.',
	hints: (variation) => {
		let combinedHints = Hints.common
		let variationHints = Hints.variations[variation]
		combinedHints.splice(4, 0, ...variationHints)
		return combinedHints
	},
	presscharges: {
		whokiller: 'Who do you think killed Betsy?',
		whatevidence: `What proof do you have? Is it their alibi? Or if it's a piece of evidence, name the specific thing.`,
		evidenceError: 'Try simplifying your answer. If the suspect lied about their alibi say "his alibi," or if it was a piece of evidence name the specific thing.',
	},
	goodbye: 'See you around, detective.',
	youwin: '<emphasis level="strong">Congratulations! You’ve found the killer and solved Grilled Murder Mystery!<break time=".8s" /></emphasis>The good people of Lockhart are forever in your debt.<break time=".7s" /> Would you like to play again?',
	youlose: 'You chose <break time=".5s" /> poorly. Would you like to try again?',
	suggestioninterview: 'If you want to interrogate a suspect, you can say something like, "Let me talk to Tucker." ' + suspectList,
	[keys.CANMULTIPLEPEOPLEMURDER]: `Only one of the suspects is the killer.`,
	connective: {
		general: 'What would you like to do next?',
		selectsuspect: 'Who would you like to speak to?',
		aboutsuspect: 'Who do you want to know about?',
		namenotfound: (name) => `Sorry, ${name} is not a suspect in this investigation. The suspects are Brandi, Pete, Constance, and Tucker.`,
	},
	suspects: {
		list: suspectList,
		[suspects.BRANDI]: suspectsResponses[suspects.BRANDI],
		[suspects.TUCKER]: suspectsResponses[suspects.TUCKER],
		[suspects.PETE]: suspectsResponses[suspects.PETE],
		[suspects.CONSTANCE]: suspectsResponses[suspects.CONSTANCE],
	},
}
