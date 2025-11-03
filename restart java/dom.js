// document.body.childNodes[3].innerText = "abcd";
// document.body.childNodes[3].innerText = "abcd";

// By Id
// let myid = document.getElementById("myid");
// console.dir(myid);

// by class
// let heading = document.getElementsByClassName("heading");
// console.dir(heading);
// console.log(heading);

// by Tag Name
// let para = document.getElementsByTagName("p");
// console.dir(para);

// by query selector 

// let firstEl = document.querySelector("p"); // 1st element
// console.dir(firstEl);

// let allEl = document.querySelectorAll("p"); // all element
// console.dir(allEl);

// let div = document.querySelector("div");
// console.dir(div);

// let heading = document.querySelector("h1");

// Practice question

// let h2 = document.querySelector("h2");

// console.dir(h2.innerText);
// h2.innerText = h2.innerText + "from diapk lerner";

// Practice question second
let divs = document.querySelectorAll(".box");
divs[0].innerText = "new unique value 1";
divs[1].innerText = "new unique value 2";
divs[2].innerText = "new unique value 3";

// second Web 
let idx = 1;
for(div of divs)
{
    div.innerText = `new unique value ${idx}`;
    idx++; 
}


