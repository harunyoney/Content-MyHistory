// ?==============================================
// ?            DIZILER (ARRAYS)
// ?==============================================

console.log("***** ARRAYS ******")

//* Dizi Tanimlama
//*-----------------------------------------------

//! 1-Square bracket ( Array Literal) yöntemi ile dizi tanımlama 
//! En çok tercih edilen yöntem
const names = [
  "Ahmet",
  "İsmet",
  "Saffet",
  "Can",
  true,
  6.6,
  [1, 3],
  "Ara Vakti",
]
console.log(names)
console.log("Uzunluk:", names.length)
console.log(typeof names) //* object

//* Diziden Veri Okuma-Yazma (indisleme)
//* ---------------------------------------------------------

console.log(names[3]) //? Can
console.log(names[4]) //? true
console.log(names[6][0]) //? 1


//? Dizinin son elemanını bir değişkene saklayalım

++names[5]
console.log(typeof(names[4]));
console.log(Window.prototype);