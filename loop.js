// Q1
var output = "";

for (let i = 1; i <= 10; i++) {
  output += i + " ";
}

console.log(output);


//Q2
let i = 1;
var output = "";

while (i <= 10) {
  output += i + " ";
  i++;
}

console.log(output);


//Q3
var arr = [1, 2, 3, 4, 5];
var output = "";

for (let i = 0; i < arr.length; i++) {
  output += arr[i] + " ";
}

console.log(output);


//Q4
let result = "";
for (let i = 0; i <= 10; i += 2) {
  result += i + " ";
}
console.log(result);


//Q5
var sum = 0;

for (let i = 1; i <= 10; i++) {
  sum += i;
}

console.log(sum);


//Q6
var arr = [1, 2, 3, 4, 5];
let largest = arr[0];

for (let i = 1; i < arr.length; i++) {
  if (arr[i] > largest) {
    largest = arr[i];
  }
}

console.log(largest);


//Q7
var arr = [5, 4, 3, 2, 1];
let smallest = arr[0];

for (let i = 1; i < arr.length; i++) {
  if (arr[i] < smallest) {
    smallest = arr[i];
  }
}

console.log(smallest);


//Q8
var arr = [1, 2, 3, 4, 5];
var sum = 0;

for (let i = 0; i < arr.length; i++) {
  sum += arr[i];
}

const average = sum / arr.length;

console.log(average);


//Q9
var num = 5;
let factorial = 1;

for (let i = 1; i <= num; i++) {
  factorial *= i;
}

console.log(factorial);


//Q10
var limit = 10;
let num1 = 0, num2 = 1, nextTerm;

process.stdout.write(num1 + " " + num2 + " ");

for (let i = 2; i <= limit; i++) {
  nextTerm = num1 + num2;
  num1 = num2;
  num2 = nextTerm;
  process.stdout.write(nextTerm + " ");
}


//Q11
var limit = 20;
let isPrime;

for (let i = 2; i <= limit; i++) {
  isPrime = true;

  for (let j = 2; j < i; j++) {
    if (i % j === 0) {
      isPrime = false;
      break;
    }
  }

  if (isPrime) {
    process.stdout.write(i + " ");
  }
}


//Q12
var number = 5;

for (let i = 1; i <= 10; i++) {
  const result = number * i;
  process.stdout.write(number + " x " + i + " = " + result);

  if (i < 10) {
    process.stdout.write(", ");
  }
}


//Q13
var arr2d = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
var output = '';

for (let i = 0; i < arr2d.length; i++) {
  for (let j = 0; j < arr2d[i].length; j++) {
    output += arr2d[i][j] + ' ';
  }
}

console.log(output.trim()); // remove extra whitespace at the end


//Q14
var arr = [1, 2, 3, 4, 5];
var output = "";

for (let i = arr.length - 1; i >= 0; i--) {
  output += arr[i] + " ";
}

console.log(output.trim()); 


//Q15
var arr = [1, 2, 3, 4, 5];
var start = 2;
var end = 4;

for (let i = start; i <= end; i++) {
  process.stdout.write(arr[i] + " ");
}


//Q16
var arr = [1, 2, 3, 4, 5];
var step = 2;
for (let i = 0; i < arr.length; i += step) {
  process.stdout.write(arr[i] + " ");
}


//Q17
var arr = [1, 2, 3, 4, 5];
var num = 4;
var found = false;

for (let i = 0; i < arr.length; i++) {
  if (arr[i] === num) {
    found = true;
    break;
  }
}

console.log(found);


//Q18
var arr = [1, 2, 1, 3, 2, 1];
var num = 1;
let count = 0;

for (let i = 0; i < arr.length; i++) {
  if (arr[i] === num) {
    count++;
  }
}

console.log(count);



