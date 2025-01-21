// console.log(10);
// console.log(20);
// setTimeout(()=>{
//         console.log(40);
// }, 5000)
// console.log(50);
// setInterval(()=>{
//         document.writeln("MRU");
// },0.05)
  

//! promise
 //let p1 = new Promise(( resolve , reject)=>{});
// console.log(p1);


let p2 = new Promise(( resolve , reject)=> {
     resolve("success");
});
//console.log(p2);
p2.then((response) =>
{
        console.log(response);
}).catch((error)=>{
        console.log(error);
}).finally(()=>console.log("finally printing for both"))

let p3 = new Promise(( resolve , reject)=>{
         reject("failures");
 });
 //console.log(p3);
p3.then((response) =>
{
        console.log(response);
}).catch((error)=>{
        console.log(error);
}).finally(()=>console.log("finally printing for both"))

