//default is to return greatest number in a tie
//adding optional second parameter of true will instead return an array of ties

module.exports = function mode (array, doYouWantAnArrayOfTies = false) {
    const bank = {};
    for (let element of array){
        if (!bank[element]){
            bank[element] = 1;
        } else {
            bank[element] += 1;
        }
    }
    let result = null;
    let resultCount = -Infinity;
    for (let key in bank){
        if(bank[key] > resultCount){
            result = +key;
            resultCount = bank[key];
        } else if (doYouWantAnArrayOfTies === false &&
            bank[key] === resultCount && key > result){
                result = +key;
        } else if (doYouWantAnArrayOfTies === true &&
            bank[key] === resultCount){
                const ties = [result] || [...result];
                ties.push(+key);
                result = ties;
            }
    }
    return result;
}


