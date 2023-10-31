function findMaxAndMin(a){
    return {
        max : Math.max(...a),
        min : Math.min(...a)
    }

}
const inputArray = [1,2,3,4,5,4,21,3,45,6,7,5,4,3]
const result = findMaxAndMin(inputArray)
console.log(result);