const leapYears = function(testYear) {
    if (testYear % 4 === 0 && testYear % 100 !== 0)
        return true;
    else if (testYear % 400 === 0){
        return true;
    }
    // If the conditions are not met, then the year
    // is not a leap year.
    return false;
};

// Do not edit below this line
module.exports = leapYears;
