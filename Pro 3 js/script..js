function randomElement([first,second ,...rest]){
    const arr = [first,second,rest]
    const last = rest.pop()
    return [first,second,last]
}

const inputArry = [1,2,3,4,5,6,7,8,6,5,3,3,2]
const result = randomElement(inputArry)
console.log(result);








