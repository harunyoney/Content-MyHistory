console.log("hello world");

var degiskenIsmi = 10;
console.log(degiskenIsmi);

// Global Scope
// her yerden erişebilen değişken
// herhangi bir {} içinde filan olmayan

const a = 5;

// function Scope
// function{} içinde kalan kodlar için

function method1() {
  const b = 12;
  console.log(b + 5);
}
method1();

let giriş = 25;
let çıkış = 12;
let sonuc = giriş * çıkış;
console.log(sonuc);

let insan = {
  isim: "harun",
  soyisim: "twq",
  yas: 23,
};
console.log(typeof insan);
console.clear();

console.log(5 + 8 * 3 + 7);

let x = 5;
let y = 120;
console.log(x + y);


let yas = 28;
let para = 3330;
let saglik = true;
console.log(yas>=18 && para>3000 &&saglik==true);

console.log(yas>18 || para>3000 ||saglik==false ) ;

console.log(5*3==15 && 2*3);

console.log((yas>18 && para>3000) || (yas>18 && saglik==true));

console.clear();

console.log(5==5);
console.log(5!=5);
console.log(-3.13>=3.13);


console.log(window);

