// function demo(){
//     console.log("Hello i am function demo");
//     }
//     demo();

//function isPalindrome(str){
    //     let revstr="";
    //     for(let i=str.length-1;i>=0;i--){
    //         revstr+=str[i];
    //     }
    //     if(str==revstr){
    //         console.log("Palindrome");
    //     }else{
    //         console.log("Not a Palindrome");
    //     }
    // }
    // isPalindrome("sir");
    // isPalindrome("madam");


// function(){
//     console.log("Anonyous Function Example ");   
// }


// let x =function(){
//     console.log("function expression");
// };
// console.log(x);
// x();
// x();
// x();

// function demo(){
//     console.log("hello");
// } 
// demo();

// let x = _ =>console.log("hello"); 
// x();

// let x = (a,b)  =>console.log((a+b)); 
// x();

// let x = _  =>{ console.log("hi");
//                console.log("bye");
//                console.log("okk");}   
// x();

// function add(a,b){
//     return a+b;
// }
// let x = add(5,5);
// console.log(x);

let x = (a,b) => a+b;
console.log(x(10,30));

let y =(a,b)=> {return a + b};
console.log(y(3,3));