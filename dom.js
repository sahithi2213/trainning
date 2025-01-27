 // let element = document.getElementById("demo");
// element.innnerText="DOM";
// console.log(element);

// let div=document.getElementById("test");
// div.innerHTML="<h1>Header</h1>";
// console.log(div);

// let ele=document.getElementsByClassName("test");
// // console.log(ele);
// // console.log(Array.isArray(ele));
// ele[0].style.backgroundColor="yellow";

// //spread operator
// let x=[...ele];
// console.log(x, Array.isArray(x));
// x.map((element)=>{
//     // console.log(element);
//     element.style.backgroundColor="teal";
// })

// let ele=document.getElementsByTagName("div");
// console.log(ele);

// let ele=document.querySelector("#demo");
// console.log(ele);

// let ele=document.querySelectorAll(".test");
// // console.log(ele);
// [...ele].map((element)=>{
//     console.log(element.innerText);
// })

let bgColour = document.querySelectorAll(".bgColour");
//console.log(bgcolour);
[...bgColour].map((element)=>{
    //console.log(element);
    element.addEventListener("mouseover",()=>{
        element.style.backgroundColour=element.innerText;
    });
    element.addEventListener("mouseleave",()=>{
        element.Style.backgroundColour="transparent";
    })
    
})