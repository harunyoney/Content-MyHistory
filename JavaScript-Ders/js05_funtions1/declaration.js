// ? ===========================
// ?        FUNCTIONS
// ? ============================

console.log("** FUNC DECLARATION **")

//* ORNEK1:
//*******************************/

// function selamla (cor ,kort) {
//     console.log(`${cor} ${kort}           selam maksdmk`);

// }

// selamla("kamsdkamsd","qweqwertttty")

// let y=""
// function carp(n1,n2){
//    y= n1*n2
//    console.log(y);
// }

// let x= carp(3,5)
// console.log(x);



// const mesajVer= ()=> console.log("kasmda kasmas asdmaksd akdmasd");

// mesajVer()




// const kareAl = x => x*x
// console.log(kareAl(3));


// const dogumHesapla = (yil) => 2024 - yil

// const yil = 1992

// console.log(dogumHesapla(+prompt("hi")));


// const mesajVer1 = () =>{
//     console.log("harun");
// }
// mesajVer1()


const topla = (s1,s2) => s1+s2
const cikart = (s1,s2) => s1-s2
const carp = (s1,s2) => s1*s2
const bol = (s1,s2) => s1/s2

const hesapla = (num1,num2,op) => {
    let sonuc= 0
switch (op) {
    case "+":
        sonuc = topla(num1,num2)
        break;
        case "-":
            sonuc = cikart(num1,num2)
        break;
        case "*":
            sonuc = carp(num1,num2)
        break;
        case "/":
            sonuc = bol(num1,num2)
        break;

    default:
        break;

}

return sonuc
}









let i = 0;
let mult=5;
while (i < 3) {
  let mult=5
  mult = mult * i;
  i++;
  console.log (`The answer is: ${mult}`);
}
console.log (`The answer is: ${mult}`);  
