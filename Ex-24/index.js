let apple = "apple";
let uppercaseApple = "APPLE";
console.log("Test equality with strings");
console.log(apple == "apple");
console.log("\nTest inequality with string");
console.log(apple == "Apple");
console.log("\nTest equality with lower case function");
console.log(uppercaseApple.toLowerCase() == "apple");
console.log("\nTest inequality with lower case function");
console.log(uppercaseApple.toLowerCase() != "apple");
// Numerical Tests
let num1 = 10;
let num2 = 20;
console.log("\n Is ten is not equal to twenty");
console.log(num1 != num2);
console.log("\n Is ten is equal to twenty");
console.log(num1 == num2);
console.log("\n Is ten is less than twenty");
console.log(num1 < num2);
console.log("\n Is ten is greater than twenty");
console.log(num1 > num2);
console.log("\n Is ten is greatet than or equal to five");
console.log(num1 >= 5);
console.log("\n Is ten is less than or equal to five");
console.log(num1 <= 5);
// Test using AND & OR operators.
console.log("\n Is ten is less than twenty OR twenty is greater than ten");
console.log(num1 < num2 || num2 > num1);
console.log("\n Is ten is equal twenty OR twenty is less than ten");
console.log(num1 == num2 || num2 < num1);
console.log("\n Is ten is not equal to twenty AND twenty is greater than ten");
console.log(num1 != num2 && num2 > num1);
console.log("\n Is ten is equal to twenty AND ten is less than twenty");
console.log(num1 == num2 && num1 < num2);
// Test whether an item is included in array.
let fruits = ["apple", "banana", "orange"];
console.log("Is apple in included in array?");
console.log(fruits.includes("apple"));
// Test whether an item is not included in an array.
console.log("Is grapes in included in array?");
console.log(fruits.includes("grapes"));
console.log();
console.log();
export {};
