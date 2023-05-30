console.log('~~~~~~~~~~~~ Get negative numbers ~~~~~~~~~~~~~~')

function getNegativeFunction(numbers) {
    return numbers.filter(function(value){
        return value < 0;
    })
}
console.log(getNegativeFunction([1, -5, -3, 12, -152])); // [-5, -3, -152]

console.log('~~~~~~~~~~~~ Get divided by ~~~~~~~~~~~~~~')

function getDivideByFunction(divider) {
    return function(divident) {
        return divident / divider;
    }
}

const divideByFive = getDivideByFunction(5);
console.log(divideByFive(10)); // 2
console.log(divideByFive(50)); // 10

const divideByTwo = getDivideByFunction(2);
console.log(divideByTwo(8)); // 4
console.log(divideByTwo(50)); // 25

console.log('~~~~~~~~~~~~ Get delta function ~~~~~~~~~~~~~~')

function getDeltaFunction(object) {
    return function({a = object.a, b = object.b, c = object.c} = {}) {
        return b ** 2 - (4 * a * c) ?? NaN;
    }
}

// delta = b*b - 4*a*c
const getDelta = getDeltaFunction({ a: 1, b: 2, c: 3 });
console.log(getDelta()); // -8
console.log(getDelta({ b: 12 })); // 132
console.log(getDelta({ a: 4, b: 10 })); // 52
console.log(getDelta({ a: 4, b: 0 })); // -48

// The nested function returns NaN if any of the arguments are missing
console.log(getDeltaFunction({ a: 1, c: 3 })()); // NaN
console.log(getDeltaFunction({ a: 1, c: 3 })({ b: 15 })); // 213

console.log('~~~~~~~~~~~~ Is string in array ~~~~~~~~~~~~~~')

function isStringInArray(array, string) {
    return Boolean(array.find(function(element) {
        return element === string;
    }))
}

console.log(isStringInArray(['Orange', 'Apple'], 'Apple')); // true
console.log(isStringInArray(['Onion', 'Cabbage'], 'Potato')); // false

console.log('~~~~~~~~~~~~ ForEach from scratch ~~~~~~~~~~~~~~')

function forEach(array, someFunction) {
    for (let i = 0; i < array.length; i++) {
        someFunction(array[i], i);
    }
}

const vegetables = ['Carrot', 'Cabbage', 'Onion'];

function printVegetable(vegetable, index) {
    console.log(vegetable, index);
}

forEach(vegetables, printVegetable);
// Carrot 0
// Cabbage 1
// Onion 2

const fruits = ['Apple', 'Orange', 'Watermelon'];
forEach(
    fruits,
    function(fruit, index) {
        console.log(fruit, index);
    }
)
// Apple 0
// Orange 1
// Watermelon 2

console.log('~~~~~~~~~~~~~~~~~~ Additional exercises ~~~~~~~~~~~~~~~~~~~~')
console.log('~~~~~~~~~~~~ Execute after five seconds ~~~~~~~~~~~~~~')

function executeAfterFiveSeconds(aFunction) {
    return setTimeout(aFunction, 5000);
}

function sayHello() {
    console.log('Hello!');
}

executeAfterFiveSeconds(sayHello);

console.log('~~~~~~~~~~~~ Random integer generator ~~~~~~~~~~~~~~')

function getRandomIntegerGenerator(min, max) {
    return function() {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }
}

const getRandomDigit = getRandomIntegerGenerator(0, 9);
console.log(getRandomDigit()); // random number between 0 and 9

console.log(getRandomIntegerGenerator(-10, 10)()); // random number between -10 and 10

console.log('~~~~~~~~~~~~ Random character generator ~~~~~~~~~~~~~~')

function getRandomCharacterGenerator (characters) {
    return function() {
        const randomIndex = Math.floor(Math.random() * characters.length);
        return characters[randomIndex];
    }
}

const getRandomDigitString = getRandomCharacterGenerator('0123456789');

console.log(getRandomDigitString()); // returns a random string that contains a single digit


const getRandomABC = getRandomCharacterGenerator('abcABC');
console.log(getRandomABC()); // returns a random string that is a, A, b, B, c, or C

console.log('~~~~~~~~~~~~ find object property ~~~~~~~~~~~~~~')

function findObjectProperty(object, functionToCall) {
    for (const [key, value] of Object.entries(object)) {
        if (functionToCall(value)){
            return key;
        }
    }
}

const redApple = {
    color: 'red',
    weightInGrams: 150
}

const propertyName = findObjectProperty(redApple, function(propertyValue) {
    return propertyValue === 'red';
})
console.log(propertyName); // color

const john = {
    name: 'John',
    bestFriend: {
        name: 'Adam'
    }
}

const adamPropertyName = findObjectProperty(john, function(propertyValue) {
    return propertyValue && propertyValue.name === 'Adam';
})
console.log(adamPropertyName); // bestFriend

console.log('~~~~~~~~~~~~ Prefixed string generator ~~~~~~~~~~~~~~')

function getPrefixedStringGenerator(prefix) {
    return function(string) {
        return `${prefix}${string}`;
    }
}

const prefixStringWithMister = getPrefixedStringGenerator('Mr.');
console.log(prefixStringWithMister(' John')); // Mr. John
console.log(prefixStringWithMister(' Adam')); // Mr. Adam

const prefixStringWithMiss = getPrefixedStringGenerator('Ms.');
console.log(prefixStringWithMiss(' Kate')); // Ms. Kate
console.log(prefixStringWithMiss(' Julie')); // Ms. Julie

const prefixStringWithNegative = getPrefixedStringGenerator('un');
console.log(prefixStringWithNegative('happy')); // unhappy
console.log(prefixStringWithNegative('productive')); // unproductive
console.log(prefixStringWithNegative('fair')); // unfair

console.log('~~~~~~~~~~~~ Wait ~~~~~~~~~~~~~~')
console.log('~~~~~~~~~~~~ For ~~~~~~~~~~~~~~')
console.log('~~~~~~~~~~~~ It ~~~~~~~~~~~~~~')
executeAfterFiveSeconds(function(){return console.log('~~~~~~~~~~~~ The end ~~~~~~~~~~~~~~')})