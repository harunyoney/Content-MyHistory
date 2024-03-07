//*==================================================
//*        1- Senkron-Asenkron Programlama
//*==================================================

//! Javascript, single-threaded ve Asenkron Programlama dilidir.

//? Asenkron Programlama
//? --------------------------------------------------------------
//? Asenkron Programlama, bir alt gorevin uygulamanin asil thread'inden
//? bagimsiz olarak arka planda calistirilmasina izin veren paralel programlama
//? teknigidir. Bu alt gorev tamamlandiginda (basriyla veya basarisizlikla)
//? asil thread bu konuda bilgilendirilir. Asenkron programlama, uygulamalarin
//? performansininin artirilmasina ve daha iyi kullanici deneyimine katki saglamaktadir.

//? Ozellikle bir API'den veya Veritabanindan veri cekme, Giris/Cikis islemleri,
//? Dosya Okuma/Yazma islemleri gibi zaman tuketen kodlarda Asyn Programlama
//? kullanilmasi cok onemlidir.

//* Senkron
//* ------------------------------------------------
const gecikme = (sure) => {
  //? Senkron blocking code
  const basla = new Date().getTime()
  while (new Date().getTime() < basla + sure) {
    console.log(new Date().getTime());
  }
}

// console.log("Senkron")
// // alert("Blocking") //? Senkron calismada bir komut cok uzun sürerse uygulamayı bloklar.
// console.time("timer")
// gecikme(2000)
// console.timeEnd("timer")

// console.log("FS16")

//* Asenkron (setTimeout()) - Belirli sure sonraya zaman kurar.
//* ------------------------------------------------
const timeoutID = setTimeout(() => {
  console.log("Timeout1 doldu")
}, 2000)

setTimeout(() => {
  console.log("Timeout2 doldu")
  
}, 1000)

console.log("Start")

setTimeout(() => {
  clearTimeout(timeoutID)
}, 500)

console.log("Uygulama bitti")
let sayac =0
const saniye =setInterval(()=>{
console.log(++sayac);

if (sayac==2){
  clearInterval(saniye)
}
},1000)

//! Callback Hell (nested ve birbirine bagli callback'ler)
//!-----------------------------------------------------
//* Eger birbirine bagimli asenkron kodlarin yazilmasi gerekirse,nested callback
//* yapisinin kullanilmasi gerekebilir. Fakat bu iyi bir programlama yaklasimi degildir.
// !callback hell olarak adlandirilan bu yapinin anlasilmasi ve surdurulebilirligi oldukca zordur.

setTimeout(() => {
  console.log("john:Hi") //? veri isteği (req)
  setTimeout(() => {
    console.log("Sarah: Hello") //? res geliyor
    setTimeout(() => {
      console.log("John: How Are you?") //? veri gonder
      setTimeout(() => {
        console.log("Sarah:Fine and you?") //?gondermeye baslaniyor
      }, 1000)
    }, 1000)
  }, 1000)
}, 1000)


//? COZUMLER:
//?----------------------------------------------------
//* 1- XMLHttpRequest (Eski yontem, Ornek: AJAX)
//? https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest
//* 2- Promise (Custom async kod yazmak için elverişli- Advance)
//! 3- Fetch API (Promise'in basitlestirilmis hali),
//! 4- ASYNC-AWAIT (Fetch API'nin makyajlanmis hali)
