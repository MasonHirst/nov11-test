const perf = require('execution-time')();


function doublerAppend(nums){
    let new_nums = [];

    for (let i=0; i<nums.length; i++){
        let num = nums[i] * 2;
        new_nums.push(num);
    }

}


function doublerInsert(nums){

    let new_nums = [];

    for (let i=0; i<nums.length; i++){
        let num = nums[i] * 2;
        new_nums.unshift(num);
    }

}


function getSizedArray(size){
    let array = [];
    for (let i=0; i<size; i++){
        array.push(i);
    }
    return array
}


const tinyArray = getSizedArray(1000000);
const smallArray = getSizedArray(100);
const mediumArray = getSizedArray(1000);
const largeArray = getSizedArray(10000);
const extraLargeArray = getSizedArray(100000);



// How long does it take to double every number in a given 
// array? 

// Try it with first function
perf.start();                     // Starts timer
doublerAppend(tinyArray);
let resultsAppend = perf.stop();  // Stops timer and save time results


// Try it with second function
perf.start();
doublerInsert(tinyArray);
let resultsInsert = perf.stop();


console.log('Results for the tinyArray');
console.log("insert", resultsInsert.preciseWords);
console.log("append", resultsAppend.preciseWords);


// The results for the extraLargeArray are :
//    insert: 786 ms
//    append: 2.4 ms
//    The append function ran 327 times faster than the insert function


// The results for the LargeArray are :
//    insert: 8.3 ms
//    append: 615 microseconds
//    The append function ran 13.5 times faster than the insert function

// The results for the mediumArray are :
//    insert: 125 microseconds
//    append: 83 microseconds
//    The append function ran 1.5 times faster than the insert function

// The results for the smallArray are :
//    insert: 32 microseconds
//    append: 86 microseconds
//    The insert function ran 2.4 times faster than the append function

// The results for the tinyArray are :
//    insert: 21 microseconds
//    append: 59 microseconds
//    The insert function ran 2.4 times faster than the append function



// With small arrays, the insert functions actually runs about 2.5 times faster than the append function, 
// but the runtimes intersect somewhere around an array of 1000 numbers. Above 1000 numbers, the insert 
// function starts slowing down significantly faster. 
// I believe the time complexity of the append function is linear.
// I believe the time complexity of the insert function is linear.