'use strict'

/**
* Add new value in a specific position before index in array an return it.
* @class Array()
* @function Array.prototype._insert()
* @param index position of the array value to add new value before it.
* @param object new value to be added, it can be any JavaScript data types.
* @returns new array.
*/
Array.prototype._insert = function(index = Number(), object){
    if(index == undefined || object == undefined) return this

    if(object instanceof Array){
        object = [...object]
    }
    else{
        object = [object]
    }

    const arr = []
    const default_array = this

    try {
        for(var i = 0; i <= this.length - 1; i++){
            if(this.indexOf(this[i]) === index){
                arr.push(...object)
            }
            arr.push(this[i])
        }
        this.splice(0)
        this.push(...arr)
        return arr
        
    } catch (error) {

        this.splice(0)
        this.push(...default_array)
        throw error
    }
   
}

/**
* Remove first or all occurrences of value and return modified array.
* @class Array()
* @function Array.prototype._remove()
* @param value value to be remove not index.
* @param flag use 'g' (global) to remove all the same values
* @returns new array
*/
Array.prototype._remove = function(value, flag = String()){
    if(value == undefined) return this

    if(flag === 'g'){
        const arr = this.filter((e)=>{
            return value != e
        })
        this.splice(0)
        this.push(...arr)
        return arr
    }
    else {
        const arr = []
        let first_item = false
        try {
            for(var i = 0; i <= this.length - 1; i++){
                
                if(this[i] === value){
                    if(first_item){
                        arr.push(this[i])
                    }
                    first_item = true
                }
                else{
                    arr.push(this[i])
                }
                
            }
            this.splice(0)
            this.push(...arr)
            return arr
            
        } catch (error) {
            this.splice(0)
            this.push(...this)
            throw error
        } 
    }
}

/**
* Return number of occurrences of value.
* @class Array()
* @function Array.prototype._count()
* @param value value to be counted.
* @returns Number
*/
Array.prototype._count = function(value){
    if(value == undefined) return this
    let item_count = 0
    this.map((e)=>{
        if(e === value) item_count++
    })
    return item_count
}

/**
* Replace value(s) in array using another value.
* @class Array()
* @function Array.prototype._override()
* @param searchValue A value to search for.
* @param replaceValue A value to replace for every successful match of searchValue in this array.
* @param flag use 'g' (global) to replace all the same values
* @returns new array
*/
Array.prototype._override = function(searchValue, replaceValue, flag = String()){
    if(searchValue == undefined || replaceValue == undefined) return this

    if(flag === 'g'){
        this.filter((e)=>{
            if(searchValue === e){
                this[this.indexOf(e)] = replaceValue
            }
        })
        return this
    }
    else {
        try {
            for(var i = 0; i <= this.length - 1; i++){
                if(this[i] === searchValue){
                    this[i] = replaceValue
                    break
                }                
            }
            return this
            
        } catch (error) {
            this.splice(0)
            this.push(...this)
            throw error
        } 
    }

}

/**
* Calculate all occurrences number values with provided arithematic operator and return array.
* @class Array()
* @function Array.prototype._calc()
* @param operator An operator sign in string type eg( '+', '-', '*', '/', '%' ).
* @param operand A number operand value.
* @returns new array
*/
Array.prototype._calc = function(operator, operand){

    const operations = {
        '+': function(operand, operand2) {
                return operand + operand2   
            },
        '-': function(operand, operand2) {
                return operand - operand2   
            },
        '*': function(operand, operand2) {
                return operand * operand2   
            },
        '/': function(operand, operand2) {
                return operand / operand2   
            },
        '%': function(operand, operand2) {
                return operand % operand2   
            },
    }

    if(!operations[operator]) return this

    try {
        for(var i = 0; i <= this.length - 1; i++){
            if(typeof(this[i]) === 'number'){
                this[i] = operations[operator](this[i], operand)
            }                
        }
        return this
        
    } catch (error) {
        this.splice(0)
        this.push(...this)
        throw error
    } 
}


/**
* Provide some array functionality.
* @class Nber
* @returns new Nber instance
*/
class Nber extends Array{
    constructor(){
        super()
    }

    /**
    * Create an array.
    * @class Nber()
    * @function Array()
    * @returns An array object satisfying the specified requirements
    */
    Array({value, count = Number() || 1, random = Boolean() || false} = {}){

        // value - A value to generate, it can be String, Number, Boolean, Array, Object or any JS data types.
        // count - Number of occurences to generate
        // random - Set to 'true' to randomness the value to generate values randomly or 'false' to generate one by one.

        if(!value || value == undefined) return null

        let arr = []

        if(value instanceof Array){
            value = [...value]
        }
        else{
            value = [value]
        }

        let custom_iterate = 0

        for (let index = 0; index < count; index++) {
            if(random) arr.push(value[Math.floor(Math.random() * value.length)])  
            else{
                if(custom_iterate == value.length - 1){
                    arr.push(value[custom_iterate])
                    custom_iterate = 0
                    continue
                }
                else {
                    arr.push(value[custom_iterate]) 
                }
                custom_iterate++
            }
        }
        return arr
    }
}



//Examples

let arr = [12, 52, 85, 52]

console.log(arr._insert(1, [58, "hello", 85]))

console.log(arr._remove(85, 'g'))

console.log(arr._count(58))

console.log(arr._override(58, [12, 96, 'override']))

console.log(arr._calc('+', 100))


let nber = new Nber()
let nber_array = nber.Array({value : [3, 85, 75, 1, 54, 100, 73, true, 'Hello'], count : 50, random: true})
console.log(nber_array)
