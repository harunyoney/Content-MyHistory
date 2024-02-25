
//?PC'ye 1-20 arasında bir sayı tutturduk
let rastgeleSayi =  Math.ceil(Math.random()*20)
console.log(rastgeleSayi)

let mesaj = document.querySelector(".msg");

let skor = 10;
//skoru index.html'den çekebilirdik. Ama çok kullnacağımız için bu daha tercih edilen bir yol.

//! Local Storage da top-score adıyla bir değişken varsa onu getir yoksa 0 olsun
let enYuksekSkor = localStorage.getItem("top-score") || 0;

//! -----browserda, DOM da top score değerinilocal storage dan okuyarak güncelle, özellikle 2. ve 3. oyuncular için gerekli
document.querySelector(".top-score").textContent = enYuksekSkor


document.querySelector(".check").addEventListener("click", () => {
    const tahmin = document.querySelector(".guess").value
    const tahminSayi = parseInt(tahmin)
    if (tahminSayi>=1 && tahminSayi <=20 && !isNaN(tahminSayi)){
    
    // console.log(tahmin)
   
    

    //!Tahmin girmeden butona basıldıysa
    if (!tahmin) {
        mesaj.textContent = "Lütfen bir sayı giriniz..."

    //!Tahminim Doğruysa    
    } else if(tahmin == rastgeleSayi) {
        
        mesaj.textContent = "Tebrikler Bildiniz...👏"
        document.querySelector("body").style.backgroundColor = "green"
        document.querySelector(".number").textContent = rastgeleSayi;
        document.querySelector(".check").disabled = true

        // top-score Kontrolü yap 

        if (skor > enYuksekSkor ) {

            localStorage.setItem("top-score", skor)
            enYuksekSkor = skor
            document.querySelector(".top-score").textContent = skor
        }
    //!Tahmin Yanlışsa    
    }else{
        //? Skor 1'den büyük olduğu sürece hakkım var

        if (skor > 1) {
            skor--;
            document.querySelector(".score").textContent = skor

            tahmin < rastgeleSayi 
            ? mesaj.textContent = "Arttır👆" 
            : mesaj.textContent = "Azalt👇"
            document.querySelector(".guess").value = "";
            document.querySelector(".guess").focus();
        } else {
            //! GAME OVER
            mesaj.textContent = "Oyunu Kaybettiniz🥺"
            document.querySelector(".score").textContent = 0;
            document.querySelector("body").style.backgroundColor = "red"

        }
        
    }
}else {
           mesaj.textContent = "Geçersiz sayı girdiniz (1 - 20 arasında bir sayı giriniz"
           document.querySelector(".guess").value = "";
           document.querySelector(".guess").focus();}
} )

//?Again butonuna basınca ayarlar başlangıç değerlerine kurulsun. Aka plan #2d3436 olsun

document.querySelector(".again").onclick = () => {

    document.querySelector("body").style.backgroundColor = "#2d3436"

    rastgeleSayi = Math.ceil(Math.random() * 20 )
    console.log("yeni rastgele sayı", rastgeleSayi)

    skor = 10;

    document.querySelector(".score").textContent = skor

    document.querySelector(".number").textContent = "?"

    document.querySelector(".guess").value = "";

    mesaj.textContent = "Oyun yeni oyuncu için başlıyor... "

    document.querySelector(".check").disabled = false
    document.querySelector(".guess").focus();


}


//! ENTER tuşu çalışsın!

//Klavyeden enter butonuna basıldığında check butonunu tetikle

document.addEventListener("keydown", function(e){
    // console.log(e)

    if (e.key === "Enter") {
        document.querySelector(".check").click();
        // document.querySelector(".quess").value= "0";

    }
} )

//!Geçersiz sayı girdiniz 1 ile 20 arasında bir sayı giriniz..

// document.querySelector(".check").addEventListener("click", () => {
//     tahmin = document.querySelector(".guess").value

//     

//     if (tahminSayi>=1 && tahminSayi <=20 && !isNaN(tahminSayi)) {
//         //Doğru sayı girilmişse oyunu devam ettir
//     } 
//         skor ++
//         document.querySelector(".guess").value = ""
//         document.querySelector("body").style.backgroundColor = "magenta"
//     }
// })
