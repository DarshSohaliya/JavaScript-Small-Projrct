function removeDuplicates(){
    const uniqueArray = []
    const uniqueSet = new Set()

    for(let i =0 ; i<a.length ; i++)
    {
        if (!uniqueArray.has([i])) {
            uniqueArray.push([i])
            uniqueSet.add([i])
        }
    }
    return uniqueArray
}
function removeDuplicates(c){
    return [...new Set(c)]
}

const inputArray = [1,2,1,2,3,4,34,5,6,7,8,7,7,5,4,10,10,19,18,17]
const uniqueEle = removeDuplicates(inputArray)
console.log(uniqueEle);