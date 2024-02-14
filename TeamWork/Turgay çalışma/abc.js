// function iterateString(inputString){
//     //write your code here
    
//     for (let i=0 ; i<str.length;i++ ){
//         console.log(` harf ${str[i]}`);
//     }


//     }
//     let str = 'Hello World';
//     iterateString(str)



//     function set(x) {
//         ++x
//        return x
    
    
        
        
//     }

//     let add = set(10)
//     console.log(add(7));

//* SORU: ogrenciler dizisinde ogrenci isimleri saklanmaktadir.
//* ogrencileri aramamizi saglayacak ve aranilan ogrenciden
//* ne kadar sayida bulunuldugunu ana programa dondurecek bir
//* fonksiyon yaziniz. Eger aranilan isimde bir ogrenci yok ise
//* fonksiyon "ogrenci bulunamadi" dondurulmelidir.
// //

//     const xx = ["ahmet", "mahmut", "kamil", "ayşe", "fatma", "havva", "ahmet", "ayşe", "ahmet"]
//     let y =[]
//     const kelimeara = (isim)=> {
//       if (xx.forEach((isim2)=>isim2 != isim))  {console.log("no");}    
//      xx.map(indis =>{ if (indis===isim) {y.push(isim)}
      
//     } )
//     }
// console.log(y[2]);
    

//   kelimeara("ahmet")

    // xx.map(x=>console.log(x))


//   function ara (xx) {
//     return function () {
//      let arr=   x.filter(v=>v===xx)
//       return  arr
//     }

//   }

//   let sonuc = ara("ahmet")
//   console.log(sonuc);

//   ara("ahmet")

  
   
   
  
    
//    const dizi3 =[65,44,85,41,25,-58]
//    let toplama= 0;
//    dizi3.forEach(hesapla);
//    function hesapla(s){
//     toplama+=s   }

//    console.log(toplama); 
// //    console.log(hesapla(0));
// //    console.log(typeof(hesapla(0)));

// const dizi3 =[65,44,85,41,25,-58]
// let diz=[]
// dizi4.forEach(xx=>diz.push)



function ogrenciAra(aranilanIsim, ogrenciler) {
  let bulunanOgrenciler = [];

  ogrenciler.forEach(ogrenci => {
      if (ogrenci === aranilanIsim) {
          bulunanOgrenciler.push(ogrenci);
      }
  });

  if (bulunanOgrenciler.length > 0) {
      return bulunanOgrenciler;
  } else {
      return "ogrenci bulunamadi";
  }
}

// Örnek kullanım
const ogrenciler = ["Ali", "Ayse", "Mehmet", "Ayse", "Fatma"];
const aranilanIsim = "Ali";
console.log(ogrenciAra(aranilanIsim, ogrenciler)); // Çıktı: ["Ayse", "Ayse"]


const numbers = [10, 20, 30, 40, 50];
const threshold = 50;

const filteredNumbers = [];
let sum = 0;

numbers.forEach(function(number) {
    sum += number;
    if (sum > threshold) {
        filteredNumbers.push(number);
    }
});

console.log(filteredNumbers);

const urls = ["https://jsonplaceholder.typicode.com/posts/1", "https://jsonplaceholder.typicode.com/posts/2", "https://jsonplaceholder.typicode.com/posts/3"];

async function fetchData(url) {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
}

(async () => {
    for (const url of urls) {
        await fetchData(url);
    }
})();