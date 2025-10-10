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

let score = prompt("Enter mark out of 100 ");
if(score >=90 && score <=100){
    console.log("A");
} else if(score >=70 && score<=89){
    console.log("B");
}
 else if(score >=60 && score<=69){
    console.log("C");
}
 else if(score >=50 && score<=59){
    console.log("D");
} 
else if (score >0 && score <= 49)
{
    console.log("F");
}
else{
    console.log("Invalid");
}