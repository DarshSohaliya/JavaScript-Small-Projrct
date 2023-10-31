function removeDuplicates(){
    const uniqueArray = []
    const uniqueSet = new Set()

    for(let i = 0 ; i<arguments.length ; i++)
    {
        if(!uniqueArray.has([i])){
            uniqueArray.push([i])
            uniqueSet.add([i])
        }
    }
    return uniqueSet
}

function removeDuplicates(a){
    return [...new Set(a)]
}

const inputArray = [1,2,3,4,5,6,6,7,7,8,8,9,91,1,]
const uniqueEle = removeDuplicates(inputArray)
console.log(uniqueEle);