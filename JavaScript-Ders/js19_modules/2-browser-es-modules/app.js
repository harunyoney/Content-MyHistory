//*************************************/
//* ES-MODULES (APP.JS)
//*************************************/
//? ES Modules, EcmaScript 2015 versiyonu ile gelmiştir.
//? Günümüzde birçok browser ES modül yapısını desteklemektedir.
//? JS kodlarının kolay ve performansli bir şekilde farklı dosyalara ayrilmasina ve gerektiginde birleştirmesine olanak saglamaktadir.
//? Bir degisken,dizi,obje, fonksiyon, class v.b "export" deyimi ile başka dosyalarinin kullanimina açilmabilir.
//? Kullanima acilanlar ise import deyimi ile istenilen dosyaya eklenebilir.
import { add as extAdd } from "./hesapMakinasi.js"
import { sub, mul, div } from "./hesapMakinasi.js"

console.log("ADD:", extAdd(3, 5))
console.log("SUB:", sub(3, 5))
console.log("MUL:", mul(6, 5))
console.log("DIV:", div(8, 5))

import { PI as pi } from "./hesapMakinasi.js" //? Hoisted
console.log(pi)

import giveMessage from "./hesapMakinasi.js"
giveMessage()

//? internal add function
const add = (a, b, c) => a + b + c

console.log(add(3, 4, 5))

//! use strict modu dogrudan enable oldugu icin hata verir.
// deneme = 5

//? global scope this kelimesi window nesnesini göstermez
console.log(this) //? undefined
