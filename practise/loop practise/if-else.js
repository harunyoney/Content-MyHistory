console.log("-----IF - ELSE-----");
/* Pratik 1 - Kullanıcıdan bir sayı isteyelim. Bu sayının tek mi çift mi olduğunu console'da yazdıralım.
Pratik 2 - Kullanıcıdan 1 ile 7 arasında bir sayı girmesini isteyelim. Kullanıcı farklı bir sayı girerse 1-7 arasında sayı girmesi gerektiği hatırlatıp yeniden sayı girmesini isteyelim. 1-7 arasında sayı girildiğinde ise haftanın kaçıncı gününe denk geliyorsa bunu console'da yazdıralım. (1- Pazartesi, 7- Pazar)


Pratik 5 - Kullanıcıdan 2 tane sayı girmesini isteyip 4 işlemden hangisi yapmak istediğini soralım. Kullanıcının seçimlerine göre matematiksel sonucu console'da yazdıralım.
Pratik 6 - Kullanıcıdan ders notunu girmesini isteyip notunu console'a yazdıralım. (0-20 F, 21-40 D, 41 -60 C, 61-80 B, 81-100 A), Kullanıcı 0-100 harici sayı girerse hata mesajı vermeli ve yeni sayı girmesini isteyelim */



// *************pratik 1*************

// let p1 = +prompt("bir sayı girin")

// if(p1%2===0) {
//     console.log("bu bir çift sayıdır");
// }
// else{console.log("bu bir tek sayidir");}


// *************pratik 2*************


/* let p2 = +prompt ("1-7 arasinda bir sayi girin")
if(p2<1 || p2>7) {alert("lütfen 1-7 arasinda bir sayi giriniz")
p2 = +prompt ("1-7 arasinda bir sayi girin")
}

if(p2===1) {
    console.log(`${p2}-Pazartesidir.`);
}
else if (p2===2) {
    console.log(`${p2}-salidir.`);
}
else if (p2===3) {
    console.log(`${p2}-çarşambadir.`);
}
else if (p2===4) {
    console.log(`${p2}-perşembedir.`);
}
else if (p2===5) {
    console.log(`${p2}-cumadir.`);
}
else if (p2===6) {
    console.log(`${p2}-cumartesidir.`);
}
else if (p2===7) {
    console.log(`${p2}-pazardir.`);
} */

// *************pratik 2*************
// Pratik 3 - Kullanıcıdan yaşını ve ehliyete sahip olup olmadığını sorup hem 18+ hem de ehliyetli ise araba kullanabilir mesajını, bunlardan bir eksiklik var ise duruma göre belirleyeceğiniz mesajı console'da yazdıralım

let p3yas= +prompt("lütfen yaşınız giriniz")

let p3ehliyet = prompt("ehliyetiniz varmi yokmu evet-hayir")
if (p3ehliyet === "evet") {p3ehliyet=2
}
else if (p3ehliyet === "hayir" || "hayır" ) {p3ehliyet= 3}

console.log(p3yas);


if(p3yas>=18 && p3ehliyet==2) {
    alert("araba kullanabilirsiniz"); 
}
else{alert("araba kullanaMAZSINIZ")
}



// Pratik 4 - Kullanıcıdan id ve password isteyelim. Eğer her ikisi de doğru girilirse giriş başarılı mesajını, eğer biri bile eksikse duruma göre belirleyeceğiniz mesajı console'da yazdıralım.