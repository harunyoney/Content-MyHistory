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

// let p3yas= +prompt("lütfen yaşınız giriniz")

// let p3ehliyet = prompt("ehliyetiniz varmi yokmu evet-hayir")
// if (p3ehliyet === "evet") {p3ehliyet=2
// }
// else if (p3ehliyet === "hayir" || "hayır" ) {p3ehliyet= 3}

// console.log(p3yas);


// if(p3yas>=18 && p3ehliyet==2) {
//     alert("araba kullanabilirsiniz"); 
// }
// else{alert("araba kullanaMAZSINIZ")
// }



// Pratik 4 - Kullanıcıdan id ve password isteyelim. Eğer her ikisi de doğru girilirse giriş başarılı mesajını, eğer biri bile eksikse duruma göre belirleyeceğiniz mesajı console'da yazdıralım.














// Pratik 1 - Kullanıcıdan bir sayı isteyelim . Bu sayının tek mi çift mi olduğunu console'da yazdıralım.



// let x = prompt("lütfen bir sayi girin")
// let sonuc = x  % 2
// if ( sonuc == 1 ) { console.log(` ${x}: bir tek sayidir`);

// }else {
//     console.log(`${x}: bir çift sayıdır`);

// }


// Pratik 2 - Kullanıcıdan 1 ile 7 arasında bir sayı girmesini isteyelim. Kullanıcı farklı bir sayı girerse 1-7 arasında sayı girmesi gerektiği hatırlatıp yeniden sayı girmesini isteyelim. 1-7 arasında sayı girildiğinde ise haftanın kaçıncı gününe denk geliyorsa bunu console'da yazdıralım. (1- Pazartesi, 7- Pazar)


// let x = prompt("lütfen 1-7 arasında sayı girin")


// switch (x<8 || x>=1)  {

//     case (x==1) : 
//     console.log("pazartesi")
//     break;

//     case (x==2): console.log("sa") 
//     break;
    

//     case (x==3): console.log("ca") 
//     break;

//     case (x==4): console.log("per") 
//     break;
//     case (x==5): console.log("cu") 
//     break;
//     case (x==6): console.log("cumartes") 
//     break;
//     case (x==7): console.log("pazar") 
//     break;
//     default :
//         console.log("1-7 arasi lütfen");
// }



// Pratik 3 - Kullanıcıdan yaşını ve ehliyete sahip olup olmadığını sorup hem 18+ hem de ehliyetli ise araba kullanabilir mesajını, bunlardan bir eksiklik var ise duruma göre belirleyeceğiniz mesajı console'da yazdıralım

// let x = prompt("yaşınız")
// let yeniSatir = "\r\n"
// let y = ("1 - Ehliyetiniz Var" + yeniSatir
// +"0 - Ehliyetiniz Yok "+ yeniSatir +"Lütfen bir değer giriniz")
//   let k = +prompt (y)

// console.log( "kasmdkamskdmaks  \r\n asdasdasdsd \r\n asdasdasdasd" ); 


// let z = ((x>=18 && x<64) && k==1)
// console.log(typeof (z));

// if (z==1) { 
//     console.log("araba kullanabilir");
// }

// else  {console.log("araba kullanamaz");}


// Pratik 4 - Kullanıcıdan id ve password isteyelim. Eğer her ikisi de doğru girilirse giriş başarılı mesajını, eğer biri bile eksikse duruma göre belirleyeceğiniz mesajı console'da yazdıralım.

// let yeniSatir = "\r\n"

// let ehliyet = "1 - Var" + yeniSatir
//     "0 - Yok "+ yeniSatir
//                      "Lütfen bir değer giriniz"
//                      ehliyet = 1
// let ehli = 1
// if ( (ehli ==1) &&  (yas >=18) ){
//    console.log("sürebilir"); 
// } else {
//   console.log( "süremez" ); }


// Pratik 6 - Kullanıcıdan ders notunu girmesini isteyip notunu console'a yazdıralım. (0-20 F, 21-40 D, 41 -60 C, 61-80 B, 81-100 A), Kullanıcı 0-100 harici sayı girerse hata mesajı vermeli ve yeni sayı girmesini isteyelim


// let x = +prompt("lütfen notu giriniz \r\n 1-100 arası bir değer" )

// switch(true) {
//     case (x>=0 && x<=20) :
//     console.log (`${x}=FF`) 
//     break ;
//     case (x>=21 && x<=100) :
//     console.log (`${x}=aferin`) 
//     break ;
//     default : console.log("1-100 arası değer")
   
     
// }

// Pratik 7 -
//  1 ile 10 arasındaki sayılar için çarpım tablosu yazdıralım. (1x1 ile başlayacak 10x10 ile bitecek)




// for (let y = 1; y<=10; y++) { 
//     for (let x = 1; x<=10 ;x++) { 
//     console.log(`${y}x${x}=${x*y}`)  
//     }

//     console.log("****************************");
// }


// Pratik 8 - Pratik 4'teki login örneğini yapalım ancak kullanıcıya 3 giriş hakkı verelim. Kullanıcı her başarız giriş yaptığında kaç hakkının kaldığını console'a yazdıralım, Eğer hakkı kalmadıysa hakkının tükendiğini belirtip tekrar id password talep etmeyelim.


// let id = prompt("id giriniz")
// let pass = prompt("sifre giriniz")
// let hak =3

 
// if (id == "harun" && pass=="1234" ) 
// {
//     console.log("giriş başarili");
// } 
// else { 
//     do {
//         console.log(`${hak} giriş hakkiniz kaldi`); 
//         id = prompt("id giriniz");
//         pass = prompt("sifre giriniz")
        
//         if (id == "harun" && pass=="1234" ) 
//     {
//         console.log("giriş başarili");
//         break;
//     } 
    
//         hak-- ;
//     }

    

//     while ( hak>=0);
// }







// Kullanıcıdan 2 tane sayı girmesini isteyip bu sayı arasındaki tüm sayıların toplamını console'a yazdıralım


// let s1=62
// let s2=65

// let sonuc=0


// if(s2>s1) {
// for(s1;s1<=s2; s1++)
// {    sonuc+=s1   }
// console.log(sonuc);
// }
// else{ 
//     for(s2;s2<=s1; s2++){
//         sonuc+=s2
//     }
//         console.log(sonuc);
//     }



// Pratik 10 - Kullanıcı negatif sayı girene kadar girdiği tüm pozitif sayıları toplayıp, negatif sayı girdiği esnada işlemi durdurup (negatif sayı hesaba katılmayacak) kaç sayı girildiğini, en küçük sayıyı, en büyük sayıyı, girilen sayıların ortalamasını console'a yazdıralım.

// let x=Number(prompt("sayi gir lo"))
// toplam=0
// girilenSayiAdedi= 0

// do
//  {

// toplam+=x
// x=Number(prompt("sayi gir lo"))
// girilenSayiAdedi++
// } while(x>=0);

// console.log(`negatif sayı hesaba katılmayacaktır. toplam:${toplam} ${girilenSayiAdedi} `);



