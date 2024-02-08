//* =======================================
//*           FOREACH METHOD
//* =======================================

console.log("****** ITERATION **********")

const sayilar = [4, 5, 1, 4, 6, 9]
sayilar.forEach((x) => console.log(x))
console.log("************")

//? alternatif
sayilar.forEach(yazdir)
function yazdir(x) {
  console.log(x)
}

//? ORNEK: 2 parametreli forEach
sayilar.forEach((x, i) => console.log("Deger:", x, "sıra:", i))

//? Ornek: toplam
let sum = 0
sayilar.forEach((sayi) => (sum += sayi))
console.log("SUM:", sum)

//? Ornek: 3-parametreli forEach
const notlar = [40, 50, 10, 40, 60, 90]

//! Süslü parantezli olarak da yazılaabilir
// notlar.forEach((not, indis, array) => {
//   array[indis] = not * 1.1
// })

notlar.forEach((not, indis, array) => (array[indis] = not * 1.1))
console.log(notlar)

//? forEach return yapmaz (void function)
console.log(notlar.forEach((x) => x * x)) //? undefined
const deneme = notlar.forEach((x) => x * x)
console.log(deneme) //? undefined

//* =======================================
//*            MAP METHOD
//* =======================================
//?-------------- ÖRNEK -------------------