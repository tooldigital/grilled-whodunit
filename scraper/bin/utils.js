
module.exports = {
   forceToArray(l){
        let type = (Array.isArray(l)) ? "array" : "object";
        let a = (type === "array") ? l : Object.keys(l);
        return a.map((i) => {
            let item, key
            if(type==="object") {
                l[i].key = i
                i = l[i]
            }
            return i
        })
    },

    buildUniqueKeys(l1, l2, name = "key"){
        let log = []
        return l1.map((item) => {
            if(!item[name]) return
            let key = (item[name].indexOf("NEW_") === 0) ? item[name].split("NEW_")[1] : item[name]
            if(Object.keys(l2).indexOf(key) > -1) 
                return console.log(`\n======\nKey: ${key} :: This key already exists!\n=====\n`)
            return key
        }).filter((key) => {
            if(log.indexOf(key) < 0) {
                log.push(key)
                return key
            }
        })
        delete log
    },

    checkIfKeyExistsInDeepObject(obj, keys){
        let output = keys
        const iter = (obj) => {
            keys.forEach((k) => {
                if(Object.keys(obj).indexOf(k) > -1) {
                    output.splice(output.indexOf(k), 1)
                }
            })

            Object.keys(obj).forEach((k) => {
                if(
                    obj[k] instanceof Object &&
                    !(obj[k] instanceof Function)
                ) {
                    iter(obj[k])
                }
            })
        }
        iter(obj)

        return output
    }
}