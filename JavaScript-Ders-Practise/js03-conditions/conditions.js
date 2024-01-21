// * ============================================
// *               KARAR YAPILARI
// * ============================================

console.log("*** CONDITIONS ***")

//! Ornek1
// const num1 = +prompt("Bir sayi giriniz:")
// const num1 = Number(prompt("Bir sayi giriniz:"))
const num1 = 5
// console.log(num1, typeof num1)
// console.log("Toplam:", num1 + num2) //? String birleştirme (concatination)

if (num1 < 0) {
  console.log("Girilen sayi negatiftir")
} else if (num1 > 0) {
  console.log("Girilen sayi pozitiftir")
} else {
  console.log("Girilen sayi 0'a eşittir")
}
//! Ornek2: 3 sayinin en buyugu

// const sayi1 = NaN
// const sayi2 = ""
// const sayi3 = 3

//? 1.yontem built-in fonks yardimiyla
// const enBuyuk = Math.max(sayi1, sayi2, sayi3)
// console.log("EnBuyuk:", enBuyuk)

//? 2.yontem (nested if)
// if (sayi1 >= sayi2) {
//   if (sayi1 >= sayi3) {
//     console.log("Enbuyuk:", sayi1)
//   }
// }
// if (sayi2 >= sayi1) {
//   if (sayi2 >= sayi3) {
//     console.log("Enbuyuk:", sayi2)
//   }
// }
// if (sayi3 >= sayi1) {
//   if (sayi3 >= sayi2) {
//     console.log("Enbuyuk:", sayi3)
//   }
// }

//? 3.yontem (Logic operatorler ile)
// if (sayi1 >= sayi2 && sayi1 >= sayi3) {
//   console.log("Enbuyuk:", sayi1)
// } else if (sayi2 >= sayi1 && sayi2 >= sayi3) {
//   console.log("Enbuyuk:", sayi2)
// } else if (sayi3 >= sayi1 && sayi3 >= sayi2) {
//   console.log("Enbuyuk:", sayi3)
// } else {
//   console.log("yanlis sayi formati")
// }

// console.log(sayi2 === sayi3) //? 3'lü operatorler type kontrolü yapar
// console.log(true == "true")

//? 4.yontem (Logic operatorler ile)
const sayi1 = 5
const sayi2 = 6
const sayi3 = 7

let enBuyuk = sayi1

if (sayi2 > enBuyuk) {
  enBuyuk = sayi2
}
if (sayi3 > enBuyuk) {
  enBuyuk = sayi3
}

console.log("EnBuyuk:", enBuyuk)


let x =5
{
  let x =7
  x =x+2
  console.log(x);
}
console.log(x);