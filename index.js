// document.getElementById("count").innerText=5
// let myAge=30;
// // console.log(myAge);
// let myAge=30;
// let humanDogRatio=5;
// let result=myAge*humanDogRatio;
// console.log(result)
//......................................
// let bonusPoint=50;
// let increse=bonusPoint+100;
// console.log(increse);
// let decreace=bonusPoint-20;
// console.log(decreace)
//....................................Function
// let practice=function(){

//     console.log(42);
// }
// practice();

// let arr=()=>{
//     console.log("hi it's arrow function");
// }
// arr();

// let lap1=34;
// let lap2=33;
// let lap4=42;
// let lap3=70;

// let sum =()=>{
// let summition=lap1+lap2+lap3+lap4;
// console.log(summition);
// }
// sum();
// let lapompeted=0;

//  let increment =()=>{
//     lapompeted= lapompeted + 1

//  }
//  increment();
//  increment();
//  increment();
//...................................Onclick


let countEl=document.getElementById("count-el");


let count=0;
increment= ()=>{
  count+=1
  console.log(count)
  countEl.innerText=count;
} 
increment();

//................Save BUTTON
let saveEl=document.getElementById("save-btn");
let saveE2=document.getElementById("save-e2");


let save=()=>{
    let saveEl=count+"-";
    console.log(saveEl)
   saveE2.innerText+=" "+saveEl;
   countEl.innerText=0;
   count=0;
   

}

// let Save=()=>{
//     console.log(count)
//     let mySave=count;
// }
//......................................Strings Practice.....................
// let name="pearl";
// let str="you have 3 new notificatons";
// console.log(name+ ", "+ str)

// let names="Tamana";
// let greetings="hi my namae is ";
// let myGreetings= greetings+" "+names;
// console.log(myGreetings);
// //............
// let welcome=document.getElementById("welcome-el");
// console.log(welcome)


// let func=()=>{
//     let welcomeM="hi";
//     let hisName="masoud";
//     welcome.innerText=welcomeM+hisName;
//     console.log(welcomeM +" "+hisName)
// }
// func();
//.................paragraph dynamic..........................
// let saveE1=document.getElementById("save-bttn");

// let save=()=>{
//     let countStr=count +"-";
//     saveE1.innerText=countStr;
//     console.log(count)
// }
