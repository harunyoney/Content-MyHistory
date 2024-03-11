//*************************************/
//* ES-MODULES (APP.JS)
//*************************************/
//? ES Modules, EcmaScript 2015 versiyonu ile gelmiştir.
//? Günümüzde birçok browser ES modül yapısını desteklemektedir.
//? JS kodlarının kolay ve performansli bir şekilde farklı dosyalara ayrilmasina ve gerektiginde birleştirmesine olanak saglamaktadir.
//? Bir degisken,dizi,obje, fonksiyon, class v.b "export" deyimi ile başka dosyalarinin kullanimina açilmabilir.
//? Kullanima acilanlar ise import deyimi ile istenilen dosyaya eklenebilir.
import { add } from "./hesapMakinasi.js"
import { sub, mul, div } from "./hesapMakinasi.js"

console.log("ADD:", add(3, 5))
console.log("SUB:", sub(3, 5))
console.log("MUL:", mul(6, 5))
console.log("DIV:", div(8, 5))
