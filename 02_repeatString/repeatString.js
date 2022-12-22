const repeatString = function(stringtoRepeat, times) {
 if(times < 0) return 'ERROR';
 
 let outputString = '';
 for(let i = 0; i < times; i++)
    outputString += stringtoRepeat;
  return outputString;
};

console.log(repeatString('hey', 3));

// Do not edit below this line
module.exports = repeatString;
