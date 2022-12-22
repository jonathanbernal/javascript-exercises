const removeFromArray = function(originalArray, ...args) {
    let argsToRemove = [...args];
    let currArray = originalArray;
    
    for(let i = 0; i < argsToRemove.length; i++){
        currArray = currArray.filter(item => item !== argsToRemove[i]);
    }

    return currArray;
}

removeFromArray([1, 3, 6, 9, 12, 15, 11, 18], 
    1, 2, 3, 4, 5, 11, 12);

// Do not edit below this line
module.exports = removeFromArray;
