// const profile = {
//     userId : "mr._.dipak.c",
//     isFollow : true,
//     post : 195,
//     followers : 500000,
//     following : 4,
//     userName : "Dipak Chande",
//     info : "Apan College | Ex-Micorsoft DRDO"
// };

// console.log(profile);
// let mode = "dark-mode";
// let color = "dark-mode";
// if(mode === "dark-mode")
// {
//     console.log("color is red ");
// }

// get user to input a number usinf prompt ("enter a number"). Check if the number is a multipe of 5 or not

// let num = prompt("Enter a number :");
// if(num %5 === 0){
//     console.log(num,"is multiple of 5");
// }else{
//     console.log(num,"is not a multiple by 5");

// }

// write a code which can give grades to students according to their scrores

// let score = prompt("Enter mark out of 100 ");
// if(score >=90 && score <=100){
//     console.log("A");
// } else if(score >=70 && score<=89){
//     console.log("B");
// }
//  else if(score >=60 && score<=69){
//     console.log("C");
// }
//  else if(score >=50 && score<=59){
//     console.log("D");
// }
// else if (score >0 && score <= 49)
// {
//     console.log("F");
// }
// else{
//     console.log("Invalid");
// }

//                  11-10-2025

// console.log("11/10/2025");

// for(let i = 1; i<=7; i++){
//     console.log("Dipak Chande ");
// }

//Calculate sumo of 1 to n
// let sum = 0;

//     for(let i = 1; i<=10; i++){
//         sum = sum + i;
//     }
//         console.log("total sum of n Number= ",sum);

// print all even numbers from 0 to 100

// for(let i = 0; i<=100; i++){
//    if(i%2==0){ //even number
//     console.log( i);
//    }
// }

// create a game wher you start with any random game unmber ask the the user to keep guessing the game number until the user enters correct value

// let gameNum = 25;
// let userNum = prompt("Guess the game number :");
// // console.log(userNum);
// while(userNum != gameNum){
//     userNum =  prompt("You enterd a wrong number  :");
// }
// console.log("Congratulations , you entered the right number");

// console.log("STRING");
//string

// let str = "dipak";
// let str1 = 'chande';

// console.log("Template litrels");
// console.log("dipak \n  chande");

// console.log("STRING METHOD");
// let str = "dipak chande";

// let str = 'dipak';
// let str1 = 'chande';
// console.log(str.slice(1, 3));
// let res = str1.concat(str); // res = "My name is the :-" str + str1;
// console.log(res);

console.log("12/10/2025");
// let heroes = ["dipak", "annasaheb", "rohit", "yogesh"];

// let marks = [45, 65, 89, 78, 54];
// console.log(marks);
// console.log(marks.length); //property
// heroes[1]= "ram";
// console.log(heroes);

// let heroes = [
//     "Iron Man",
//     "Captain America",
//     "Thor",
//     "Hulk",
//     "Black Widow",
//     "Hawkeye",
//     "Spider-Man",
//     "Doctor Strange",
//     "Black Panther",
//     "Scarlet Witch"
// ];
// using a for loop
// for(let index = 0; index < heroes.length; index++){
//     console.log(heroes[index]);
// }

// for of
// for(let hero of heroes){
//     console.log(hero);
// }

let marks = [85, 97, 44, 37, 76, 60];
let avg;
let total = 0;
// for(let i = 0; i<marks.length; i++)
// {
//     total +=marks[i];
// }

// avg = total/marks.length;

// console.log(total);
// console.log(avg);

// console.log("Second way to solve");

// for(let val of marks){
//     total +=val;
// }
// avg = total / marks.length;
// console.log(`avg marks of the class = ${avg}`);

// Practice question
// for a given array with prices of 5 items ->[250,645,300,900,50] all items have an offer of 10% off on them change the array to store final priice after applying offer.
// let items = [253,645,300,900,50];
// let i = 0;
// for(let val of items){
//     console.log(`value at index ${i} = ${val}`);
//     let offer = val /10;
//     items[i] = items[i] - offer;
//     console.log(`value after offer = ${items[i]}`);
//     i++;
// }

// for(let i = 0; i<items.length; i++){
//     console.log("orginal value",items[i]);
//     let offer = items[i] /10;
//     items[i] -= offer;
//     console.log("offer value",items[i]);
// }

// console.log(items);

// Array in javascript

let foodItems = ["apple", "litchi", "tomato", "potato"];

// foodItems.push("chips","burger");

// foodItems.pop();

// console.log(foodItems);

console.log(foodItems);
console.log(foodItems.toString()); // create a new array orginal array as it
