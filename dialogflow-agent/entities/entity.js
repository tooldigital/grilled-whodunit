const defaults = {
    automatedExpansion: true,
    isOverridable: true,
    isEnum: false,
}
class Entity {
    constructor(name, entries, options = {}){
        let obj = Object.assign({}, defaults)
        obj = Object.assign(obj, options)
        obj.name = name
        obj.entries = entries
        return obj
    }
}
module.exports = Entity