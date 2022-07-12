let arr1 = [1,3,5,7,9,11,12];
let arr2 = [1,2,3,4,5,10,12];

function mergeArrays(arr1, arr2) {
    let newArr = [...arr1, ...arr2];
    let setArr = [... new Set(newArr)]
    setArr.sort((a, b) => a-b)
    return setArr
}

function mergeArrays1(arr1, arr2) {
    return [...new Set([...arr1, ...arr2].sort((a, b) => a - b))]
}