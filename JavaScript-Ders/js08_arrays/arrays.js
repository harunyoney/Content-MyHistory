/* // ?==============================================
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
  6,
  [1, 3],
  "Ara Vakti",
  "Ders başladi",
  "Bir sornaki ara geldi",
]
console.log(names)
console.log("Uzunluk:", names.length)
console.log(typeof names) //* object

//* Diziden Veri Okuma-Yazma (indisleme)
//* ---------------------------------------------------------

//? OKUMA
console.log(names[3]) //? Can
console.log(names[4]) //? true
console.log(names[6][0]) //? 1

//? Dizinin son elemanını bir değişkene saklayalım

// const lastElement = names[7] //? hard-code
const lastElement = names[names.length - 1] //?
console.log(lastElement)

//? YAZMA
names[4] = "Canan"
console.log(names)

names[0] = "Mehmet"
names[5]++

names[2] = names[2].toLocaleLowerCase()
console.log(names)

//! arrays.js:46 Uncaught TypeError: Assignment to constant variable.
// names = [4, 6, 7]

// ! 2.Yöntem (Object Constructor)
const programmingLangs = new Array("GO", "JS", "Java")
console.log(programmingLangs)

//! 10 elemanlik bos bir Array olusturdu
//! eger constructora parametre olarak tek bir sayi(number) girilirse,
//! construtor bunu o sayida bir bellek alani acilacakmis gibi dusunur.
const myArr = new Array(10) //? [empty × 10]
console.log(myArr)

// ! 3.Yöntem (Array.of())
const sayilar = Array.of(4)
console.log(sayilar)

//? ===========================================================
//?  DIZIYI DEGISTIREN (MUTATOR) METOTLAR
//? ===========================================================

const cars = ["BMW", "Mercedes", "Audi", "Togg", "Anadol", "Devrim"]

cars[cars.length] = "Şahin"
console.log(cars)

//* push() dizinin sonuna eleman ekler ve dizinin son eleman sayisini dondurur.
const el = cars.push("Kartal")
console.log(cars, el)

//** pop() son elemani siler ve sildigi elemani dondurur.
const deletedCar = cars.pop()
console.log(deletedCar, cars)

//* shift, dizinin 0. indeks elemanini siler ve silenen elemani dondurur.
const bmw = cars.shift()
console.log(bmw, cars)

//* unshift dizinin 0. indeksine eleman ekler ve dizinin son eleman sayisini dondurur.
const newEl = cars.unshift("Toros")
console.log(cars, newEl)

//* splice()
//? 1.parametre: eklenecek indis numarasi
//? 2.parametre: 0 ise araya ekleme, 1 ise uzerine yazma
//? 3.parametre: yeni eklenecek veri
cars.splice(1, 0, "Porsche")
console.log(cars)

cars.splice(4, 0, "Serçe", "tofaş")
console.log(cars)

//* reverse()
cars.reverse()
console.log(cars)

//* sort()

//! sort metodu diziyi iterasyona ugratir ve ascii karaktere göre sıralama yapar.
//! Dolayısıyla string'le doğru şekilde sıralama yapabilir.
cars.sort()
console.log(cars)
cars.reverse()
console.log(cars)

//! Ancak sayılar ile doğrudan siralama yapilirsa ascii'Den dolayı yanlis degerler siralanmiş olabilir.
const numbers = [3, 2, 22, 6, 1, 11, 9, 3]

numbers.sort((a, b) => a - b) //? Asc küçükten büyüğe
numbers.sort((a, b) => b - a) //? DESC (büyükten küçüğe)
console.log(numbers)

//* fill()

const degerler = [2, 1, 4, 33, 7, 9, 22]
degerler.fill(0)

// for (let i = 0, j = 1; i < degerler.length; i++) {
//   degerler[i] = j++
// }

degerler.fill(77, 3) //?1.parmetere: deger, 2.start index
degerler.fill(44, 3, 5) //?1.parmetere: deger, 2.start index, 3. end index (not inclusive)

console.log(degerler)




let xxx=0
const numberss =[ 3,5,13,666,23,355,78]

numberss.forEach ( solonumber => {
  xxx+=solonumber
  

}       )

console.log(xxx)
console.log(numberss);
 
console.clear();

var start = 1;
function setEnd(){
 var end = 10; }


 for(let i =9 ;i>=8;i--) {
  var end2 =10
  
 }
 */


// console.log(end);


/* 

function setEnd(){
 end = 10;
}
setEnd();
console.log(end);

console.log(end===10);




let nameEach = []
const namess = ["harun" , "şevki" , "ayşe" ,"ekrem", "bilal"]
console.log(namess);
namess.forEach ( name =>  {
  nameEach.push(name)
  
}  ) 

console.log(nameEach); */


// Print all the multiplication tables with numbers from 1 to 10

const tablo = function (a,b) {
  
for(let i = 1; i <=a ; i++){
  for(let j =1; j <=b ;  j++){
    let b = `${i} * ${j} = ` + i*j
    console.log(b);
     
    
  }
 
}

}
tablo(10,10)
// console.log(tablo());

console.clear()


// function setEnd(){
// var end = 10;
// }
// setEnd();
// console.log(end);


// let harun = () =>  { var harun2 = 10 ;
// }
// harun()
// console.log(harun2);




let names = ["mustafa", "murat", "ahmet", "ayşe", "mustafa"];

names.map((isim, indis, dizi) => {
  names.push(isim.toLocaleUpperCase());
});

console.log(names);
names.toLocalUppercase;

const k3=[1,5,9,8,7]
const k4 =k3
console.log(k4);
k3.sort()
console.log(k4);



