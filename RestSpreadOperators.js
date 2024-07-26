// // **GIVEN:**
// // function filterOutOdds() {
// //   var nums = Array.prototype.slice.call(arguments);
// //   return nums.filter(function(num) {
// //     return num % 2 === 0
// //   });
// // }

// // **REFACTOR:**
// /* Write an ES2015 Version */
function filterOutOdds(...allNums){
    return allNums.filter((a)=>a%2!==0);
};

// /******************************************************************************************************/
// // ## **findMin**
// // Write a function called findMin that accepts a variable number of arguments and returns the smallest argument.
// // Make sure to do this using the rest and spread operator.
// // GIVEN:
// findMin(1,4,12,-3) // -3
// findMin(1,-1) // -1
// findMin(3,1) // 1

// // REFACTOR:
function findMin(...nums){
    return nums.reduce((a,b)=> a<b ? a:b);
};

// /******************************************************************************************************/
// // ## **mergeObjects**
// // Write a function called mergeObjects that accepts two objects and returns a new object which contains all the keys and values of the first object and second object.
// // mergeObjects({a:1, b:2}, {c:3, d:4}) // {a:1, b:2, c:3, d:4}

function mergeObjects(obj1,obj2){
    return {...obj1,...obj2};
};

// /******************************************************************************************************/
// // ## **doubleAndReturnArgs**
// // Write a function called doubleAndReturnArgs which accepts an array and a variable number of arguments. The function should return a new array with the original array values and all of additional arguments doubled.
// doubleAndReturnArgs([1,2,3],4,4) // [1,2,3,8,8]
// doubleAndReturnArgs([2],10,4) // [2, 20, 8]
function doubleAndReturnArgs(originalArray,...allArgs){
    let doubleArgs=allArgs.reduce(function(accumArg,currArg){
        return [...accumArg, (currArg*2)];
    },[]);
    return [...originalArray,...doubleArgs];
};


// /******************************************************************************************************/
// // ## **Slice and Dice!**
// // For this section, write the following functions using rest, spread and refactor these functions to be arrow functions!
// // Make sure that you are always returning a new array or object and not modifying the existing inputs.
// // **GIVEN:**
// /** remove a random element in the items array
// and return a new array without that item. */
//test: removeRandom(['green','yellow','banana','rabbit','cat','turtle','ship','car','plane'])
function removeRandom(items) {
    let randomIndex=Math.round(Math.random()*items.length);
    return items.filter((currVal,currentIndex,arrItems)=> currentIndex!=randomIndex); 
}

// /** Return a new array with every item in array1 and array2. */
//test: extend([1,2,3,4],[9,8,7,6])
function extend(array1, array2) {
    return [...array1,...array2];
}

// /** Return a new object with all the keys and values
// from obj and a new key/value pair */
//test: addKeyVal({tires:4, doors:2, spareTire:0},'car','mitsubishi')
function addKeyVal(obj, key, val) {
    return {...obj, [key]:val};
}

// /** Return a new object with a key removed. */
//test: removeKey({flavor:'blueberry',color:'purple',plant:'fruit',organic:'true'},'organic')
function removeKey(obj, key) {
    let {[key]:value,...restObj}=obj;
    return restObj;
}

// /** Combine two objects and return a new object. */
// // combine({a:1, b:2}, {c:3, d:4}) // {a:1, b:2, c:3, d:4}
function combine(obj1, obj2) {
    return {...obj1,...obj2};
}

// /** Return a new object with a modified key and value. */
//test: update({flavor:'blueberry',color:'purple',plant:'fruit',organic:'true'}, 'organic', 'false')
function update(obj, key, val) {
    return {...obj,[key]:val};
}
