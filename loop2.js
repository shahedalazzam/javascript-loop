var output = "";

for (let i = 2; i <= 50; i += 2) {
    output += i + " ";
}

console.log(output);

// Using while loop
var i = 2;
var output = "";

while (i <= 50) {
    output += i + " ";
    i += 2;
}

console.log(output);


for (var i = 2; i <= 50; i += 2) {
    console.log(i + " ");
}


// Using a single for loop to print even and odd numbers in the same row
let even = "";
let odd = "";

for (var i = 1; i <= 50; i++) {
    if (i % 2 === 0) {
        even += i + " ";
    } else {
        odd += i + " ";
    }
}

console.log("Even numbers: " + even);
console.log("Odd numbers: " + odd);


for (var i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        process.stdout.write("FizzBuzz ");
    } else if (i % 3 === 0) {
        process.stdout.write("Fizz ");
    } else if (i % 5 === 0) {
        process.stdout.write("Buzz ");
    } else {
        process.stdout.write(i + " ");
    }
}
console.log("----------------------------------------")

function fizzBuzz(num) {
    if (num % 3 === 0 && num % 5 === 0) {
        return "FizzBuzz";
    } else if (num % 3 === 0) {
        return "Fizz";
    } else if (num % 5 === 0) {
        return "Buzz";
    } else {
        return num;
    }
}

let output2 = "";
for (let i = 1; i <= 100; i++) {
    output2 += fizzBuzz(i) + " ";
}

console.log(output2);


function fizzBuzzRecursive(num) {
    if (num <= 100) {
        let output = "";
        if (num % 3 === 0) {
            output += "Fizz";
        }
        if (num % 5 === 0) {
            output += "Buzz";
        }
        if (output === "") {
            output = num;
        }
        process.stdout.write(output + " ");
        fizzBuzzRecursive(num + 1);
    }
}

fizzBuzzRecursive(1);
console.log()

function convertToBanknotes(amount, banknotes) {
    if (amount === 0) {
        return [];
    } else {
        const maxBanknote = banknotes.find(note => note <= amount);
        const remainingAmount = amount - maxBanknote;
        return [maxBanknote, ...convertToBanknotes(remainingAmount, banknotes)];
    }
}
var result = convertToBanknotes(57, [25, 10, 5, 1]);
console.log(result.join(', '));



function countChar(str, char) {
    var count = 0;
    for (var i = 0; i < str.length; i++) {
        if (str[i].toLowerCase() === char.toLowerCase()) {
            count++;
        }
    }
    return count;
}

var inputStr = "Coding Academy by Orange";
var inputChar = "o";
var result = countChar(inputStr, inputChar);

console.log(result);




//a
for (let i = 0; i <= 20; i++) {
    process.stdout.write(i + " ");
}
console.log()


//b
for (let i = 3; i <= 29; i++) {
    if (i % 2 !== 0) {
        process.stdout.write(i + " ");
    }
}
console.log()



//c
for (let i = 12; i >= -14; i--) {
    if (i % 2 === 0) {
        process.stdout.write(i + " ");
    }
}
console.log()



//d
for (let i = 50; i >= 20; i--) {
    if (i % 3 === 0) {
        process.stdout.write(i + " ");
    }
}

console.log()


var str = 'CodingAcademy';
var arr = [7, 500, 'KH404', 'black', 36];

// Print each element of the array to a new line
for (let i = 0; i < arr.length; i++) {
    process.stdout.write(arr[i] + " ");
}

// Print each string character in reverse order to a new line
process.stdout.write("\n");

for (let i = str.length - 1; i >= 0; i--) {
    process.stdout.write(str[i] + " ");
}
console.log()



var arr = [7, 23, 18, 9, -13, 38, -10, 12, 0, 124];
var evens = [];
var odds = [];

for (var i = 0; i < arr.length; i++) {
  if (arr[i] % 2 === 0) {
    evens.push(arr[i]);
  } else {
    odds.push(arr[i]);
  }
}

console.log(`Evens: ${evens.join(', ')}`);
console.log(`Odds: ${odds.join(', ')}`);



var proteins = ['chicken', 'pork', 'tofu', 'beef', 'fish', 'beans'];
var grains = ['rice', 'pasta', 'corn', 'potato', 'quinoa', 'crackers'];
var vegetables = ['peas', 'green beans', 'kale', 'edamame', 'broccoli', 'asparagus'];
var beverages = ['juice', 'milk', 'water', 'soy milk', 'soda', 'tea'];
var desserts = ['apple', 'banana', 'more kale', 'ice cream', 'chocolate', 'kiwi'];

function generateMeal() {
  var meal = [];
  meal.push(proteins[Math.floor(Math.random() * proteins.length)]);
  meal.push(grains[Math.floor(Math.random() * grains.length)]);
  meal.push(vegetables[Math.floor(Math.random() * vegetables.length)]);
  meal.push(beverages[Math.floor(Math.random() * beverages.length)]);
  meal.push(desserts[Math.floor(Math.random() * desserts.length)]);
  return meal;
}

function generateMeals(numMeals) {
  var meals = [];
  while (meals.length < numMeals) {
    const meal = generateMeal();
    if (!meals.some((m) => JSON.stringify(m) === JSON.stringify(meal))) {
      meals.push(meal);
    }
  }
  return meals;
}

var numMeals = 5;
var meals = generateMeals(numMeals);
for (var i = 0; i < numMeals; i++) {
  console.log(`Meal ${i+1}: ${meals[i].join(', ')}`);
}

