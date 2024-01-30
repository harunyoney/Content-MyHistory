// * =======================================================
// *             FOR LOOP
// * =======================================================

console.log(" **** FOR ****")

//? for düngüsünde kosul cümlesinde == veya != operatorlerini kullanmak sonsuz veya girilmeyen donguye yol açması muhtemeldir. Bu sebeple, genelde >, <, <=, >= islemleri kullanilir.

//! girilmeyen dongu
// for (let i = 1; i == 50; i = i * 2) {
//   console.log(i)
// }
//! sonsuz dongu
// for (let i = 1; i != 50; i = i * 2) {
//     console.log(i)
// }
// console.log("Bitti")

//? sonsuz dongu
// for (let i = 1; ; i /= 2) {
//   console.log(i)
// }

//? Ornek 50 kişinin notu girerek ortalaması hesaplayan kodu yazınız.
// let sum = 0
// let i = 0
// for (i; i < 5; i++) {
//   const grade = Number(prompt(`Enter ${i + 1}. grade:`))
//   sum = sum + grade
//   console.log(sum)
// }
// console.log(i)
// console.log(`AVG:${sum / i}`)

//? geri yonde degişim
for (let i = 10; i >= 0; i--) {
  console.log(i)
}

//? aralik verme

let n1 = 4
let n2 = 6
let sum = 0

if (n1 > n2) {
  console.log("n2 should be bigger than n1")
} else {
  for (let i = n1; i <= n2; i++) {
    sum += i
  }
  console.log("SUM:", sum)
}

// if (n1 > n2) {
//   console.log("n2 should be bigger than n1")
// } else {
//   for (n1; n1 <= n2; n1++) {
//     sum += n1
//   }
//   console.log("SUM:", sum)
// }

//? break - continue

for (let i = 0; i <= 10; i++) {
  if (i % 3) {
    continue
  }
  if (i === 6) {
    break
  }
  console.log(i)
}
