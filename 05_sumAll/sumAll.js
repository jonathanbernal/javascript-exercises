/**
 *  This function returns the sum of all the numbers specified
 *  in the range provided and includes the bounds as part of the result.
 * @param {} low the lowest number to add from
 * @param {*} high the highest number to add to
 * @returns the sum of all the numbers specified by low and high.
 */
const sumAll = function(low, high) {
    // Sanitize bounds
    if( typeof(low) !== 'number' || typeof(high) !== 'number')
      return 'ERROR';
    else if(low < 0 || high < 0)
      return 'ERROR';

    let lowBound = Math.min(low, high);
    let highBound = Math.max(low, high);
    let accumulator = 0;

    for(let i = lowBound; i <= highBound; i++){
        accumulator += i;
    }
    
    return accumulator;
};


// Do not edit below this line
module.exports = sumAll;
