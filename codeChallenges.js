function addToZero(arr) {
    for (i = 0; i < arr.length -1; i++) {
        for (k = 1; k < arr.length; k++) {
            if ((arr[i] + arr[k]) === 0) {
                return true
            } 
        }
    }
    return false
}

let array = [1, 2, 3]
let array2 = [1, 2, 3, -2]

// console.log('this should return false', addToZero(array))
// console.log('this should return true', addToZero(array2))
// I believe this function's time complexity is quadratic, or O of N squared.




function hasUniqueChars(str) {
    let testArr = []
    
    for (i = 0; i < str.length; i++) {
        if (testArr.includes(str[i])) {
            return false
        }
        
        testArr.push(str[i])
    }
    return true
}

// console.log(hasUniqueChars('monday'))
// console.log(hasUniqueChars('Moonday'))
// The time complexity of this function is linear



function isPangram(str) {
    str = str.toLowerCase()
    let letterCount = []

    for (let i = 0; i < str.length; i++) {
        if (!letterCount.includes(str[i]) 
        && str[i] !== ' ' 
        && str[i] !== '!' 
        && str[i] !== '.' 
        && str[i] !== "'" 
        && str[i] !== ',') {
            letterCount.push(str[i])
        }
    }

    if (letterCount.length > 25) {
        return true
    } else {
        return false
    }
}

// console.log(isPangram('The quick brown fox jumps over the lazy dog!'))
// console.log(isPangram('I like cats, but not mice'))
// I think the time complexity of this function is linear




function findLongestWord(arr) {
    let longestWord = ''

    for (i = 0; i < arr.length; i++) {
        if (arr[i].length > longestWord.length) {
            longestWord = arr[i]
        }
    }
    return longestWord.length
}

console.log(findLongestWord(["hi", "hello"]))
console.log(findLongestWord(["hi", "hello", 'purple', 'complexity']))
// I think the time complexity of this function is linear