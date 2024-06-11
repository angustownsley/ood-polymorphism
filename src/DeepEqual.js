class DeepEqual {
    constructor(obj1, obj2) {
        this.obj1 = obj1
        this.obj2 = obj2
    }

    check(obj1 = this.obj1, obj2 = this.obj2) {
        if (obj1 === obj2) {
            return true
        }

        if(typeof obj1 !== 'object' || typeof obj2 !== 'object' || obj1 == null || obj2 == null){
            return false
        }

        let keys1 = Object.keys(obj1)
        let keys2 = Object.keys(obj2)

        if(keys1.length !== keys2.length) {
            return false
        }


        for(let i = 0; i < keys1.length; i++) {
            const deepEqual = new DeepEqual(obj1[keys1[i]], obj2[keys2[i]])
            if(!deepEqual.check()){
                return false
            }
        }

        return true
    }
}

module.exports = DeepEqual
