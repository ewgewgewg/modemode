//default is to return greatest number in a tie
//adding optional second parameter of true will instead return array responses, including the possibility of an array of ties

module.exports = function mode (array, doYouWantAnArray = false) {
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
        } else if ((doYouWantAnArray === false) &&
            (bank[key] === resultCount) &&
            (key > result)){
                result = +key;
        } else if ((doYouWantAnArray === true) &&
            (bank[key] === resultCount)){
                if (typeof result === "number") result = [result, +key];
                else result = result.concat(+key);
            }
    }
    return (doYouWantAnArray === true) && (typeof result === "number") ? [result] : result;
}
