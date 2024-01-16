console.log("hello world")

var degiskenIsmi =10;
console.log(degiskenIsmi);


// Global Scope
// her yerden erişebilen değişken
// herhangi bir {} içinde filan olmayan

const a= 5; 

// function Scope  
// function{} içinde kalan kodlar için 

function method1(){
    const b =12;
    console.log(b+5);
   
}
method1();

 