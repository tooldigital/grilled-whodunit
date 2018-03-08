const utils = require('./utils')
const suspects = require('./data/suspects')
// NOTE: contexts must be lower case
module.exports = utils.enumerate([
    'gamestate',
    'intro',
    'intro_interrogate_followup',
    'select_suspect',
    'tellabout',
    'askhawkins',
    'question_suspect',
    'question_suspect_fallback',
    'history',
    'replay',
    'hints',
    'presscharges1',
    'presscharges2',
    'thinkothersuspectkilled',
    'knowothersuspect',
    'doyoutrustothersuspect',
    'othersuspectalibi',
    'whatthinkothersuspect',
    'othersuspectsuspicious',
    'whoothersuspect',
    'withothersuspect',
    'othersuspectangrybetsy',

])
const contextString = (str) => str.toLowerCase().replace(/\s/g, '_')
module.exports.suspects = {
    [suspects.BRANDI]: contextString(suspects.BRANDI),
    [suspects.TUCKER]: contextString(suspects.TUCKER),
    [suspects.PETE]: contextString(suspects.PETE),
    [suspects.CONSTANCE]: contextString(suspects.CONSTANCE),
}