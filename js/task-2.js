function makeArray(firstArray, secondArray, maxLength) {
    let array = [];
    for (let i = 0; array.length < maxLength && (i < firstArray.length || i < secondArray.length); i++) {
        if (i < firstArray.length && array.length < maxLength) {
            array.push(firstArray[i]);
        }
        if (i < secondArray.length && array.length < maxLength) {
            array.push(secondArray[i]);
        }
       
    }
    return array
}


console.log(makeArray(["Mango", "Poly"], ["Ajax", "Chelsea"], 3)); // ["Mango", "Poly", "Ajax"]
console.log(makeArray(["Mango", "Poly", "Houston"], ["Ajax", "Chelsea"], 4)); // ["Mango", "Poly", "Houston", "Ajax"]
console.log(makeArray(["Mango"], ["Ajax", "Chelsea", "Poly", "Houston"], 3)); // ["Mango", "Ajax", "Chelsea"]
console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 2)); // ["Earth", "Jupiter"]
console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 4)); // ["Earth", "Jupiter", "Neptune", "Uranus"]
console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus", "Venus"], 0)); // []


