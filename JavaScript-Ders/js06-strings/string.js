const str1 = "new string"
const str2 = 'new string'
const str3 = `new string`  //template literal
const str4 = new String ("new string")


console.log(str1);
console.log(str2);
console.log(str3);
console.log(str4);
console.log("🍊🥭🕌🕋");


// "Escape charecters" (kacis karekterleri), ozel bir anlamı olan karekterlerin belirtilmiş bir amaç için kullanilmasini saglayan karekterlerdir

// \Escape karakterler   \ isareti ile kullanilir.

// \ isareti  bi sonraki yazılan seyin bir stringe girmesini saglar.


let metin= `öm'er,'in kalemi`
console.log(metin);
let path="c\\users\\kullanici"


console.log(path);


// \n   new line==> bir alt satira geçmesini sağlar

// \t tab boşlugu verir  (8karekterlik bir bosluga tekabul eder)



/* -------------------------------------------------------------------------- */
//!                         STRING PROPERTY AND METHODS                       */
/* -------------------------------------------------------------------------- */

//! ************STRING PROPERTY (Özellikleri) ************
// Property bir stringin kendi özelliğidir bir method(fonksiyon) değildir bu nedenle parantez açıp kapatmaya gerek yoktur


//  length
// prototype

let x="abc"
console.log(x.length);

let xx="clarus way qwe"
let xxx= xx.split(" ")
console.log(xxx);
console.log(xxx.reverse().join(" "));


let lorem="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit quas voluptatum saepe molestiae corrupti quae, possimus doloribus consequuntur libero, officiis at tempore rem assumenda. Dolor natus enim necessitatibus vel ata itaque cum delectus maxime, iusto perferendis ducimus assumenda? Exercitationem dolor quo itaque illo similique ullam odit nemo, dolorum cum, ipsum sunt, quos incidunt! Quasi commodi velit omnis inventore in labore tempora nisi! Aut a ab sequi, omnis sit saepe dolore nihil voluptatem dede possimus quidem soluta accusamus nam asperiores. Voluptates accusantium doloribus dolores ipsam. Voluptatibus a harum hic, placeat velit nam soluta aliquid repudiandae quia cumque ipsum fugit quasi libero! Deserunt eaque adipisci quae exercitationem officiis quaerat dignissimos suscipit sit, magni maiores delectus. Sit illo officiis est deleniti provident, eaque libero ut in enim odio, distinctio nobis? Totam est ipsum perspiciatis praesentium eveniet tenetur similique rerum veritatis! Quidem voluptatibus in facere voluptas suscipit quas consequuntur, magni libero delectus, cupiditate voluptates omnis officia! ece"
let loremtek= lorem.split(" ")

for(let i = 0;i<loremtek.length ; i++){
    let loremters=loremtek[i].split("").reverse().join("")    
    if(loremtek[i] === loremters && loremters.length !== 1)
    {console.log(`"${loremters}"  is polindrom`);}
    
    
}

















// console.log(lorem.slice(0,5));
// console.log(lorem.lastIndexOf("s"));

// console.log(lorem.replace(/fav/,"wtf"));
// console.log(lorem.search("wtf"));


