//* ============================================
//*                FOR LOOP
//* ============================================
console.log("**** LOOPS IN ARRAYS ***")

//? Ornek
const maaslar = [50000, 35000, 120000, 44000]

let sum = 0
for (let i = 0; i < maaslar.length; i++) {
  sum += maaslar[i]
  console.log(i, sum)
}
console.log("SUM:", sum)

//?-------------- ÖRNEK -------------------
//? notlar dizisindeki notların 50'den kucuk olanları ve buyuk olanları 2 ayri diziye kaydediniz.
const notlar = [50, 45, 67, 100, 10]

const ellidenKucukNotlar = []
const ellidenBuyukNotlar = []

for (let i = 0; i < notlar.length; i++) {
  if (notlar[i] < 50) {
    ellidenKucukNotlar.push(notlar[i])
  } else {
    ellidenBuyukNotlar.push(notlar[i])
  }
}
console.log(notlar)
console.log(ellidenBuyukNotlar)
console.log(ellidenKucukNotlar)

//?-------------- FOR IN -------------------
const sayilar = [50000, 35000, 120000, 44000]

let total = 0
for (let i in sayilar) {
  total += sayilar[i]
}
console.log("AVG:", total / sayilar.length)

//?-------------- FOR IN -------------------
//? notlar dizisindeki notların 50'den kucuk olanları ve buyuk olanları 2 ayri diziye kaydediniz.
const notlar1 = [50, 45, 67, 47, 89, 10]

const ellidenKucukNotlar1 = []
const ellidenBuyukNotlar1 = []

for (let i in notlar1) {
  notlar1[i] < 50
    ? ellidenKucukNotlar1.push(notlar1[i])
    : ellidenBuyukNotlar1.push(notlar1[i])
}
console.log(notlar1)
console.log(ellidenBuyukNotlar1)
console.log(ellidenKucukNotlar1)

//? low-level language example
// deneme: mov a,b
//         add R1,R2
//         djmp R1, deneme

//?-------------- FOR OF -------------------
const students = ["ahmet", "mehmet", "ismet", "saffet", "ahmet", "saffet"]

const strArrayUpperCase = (students) => {
  let upperCasedArray = []

  for (let student of students) {
    upperCasedArray.push(student.toUpperCase())
  }
  return upperCasedArray
}
const myArray = strArrayUpperCase(students)
console.log(myArray, students)

//*-------------------------------------------------------
//* SORU: ogrenciler dizisinde ogrenci isimleri saklanmaktadir.
//* ogrencileri aramamizi saglayacak ve aranilan ogrenciden
//* ne kadar sayida bulunuldugunu ana programa dondurecek bir
//* fonksiyon yaziniz. Eger aranilan isimde bir ogrenci yok ise
//* fonksiyon "ogrenci bulunamadi" dondurulmelidir.
//*--------------------------------------------------------

//! ogrenciAra("ahmet")  ===> "Ahmet 2 adet bulundu"
//! ogrenciAra("canan")  ===> "Canan bulunamadı"
