
//?PC'ye 1-20 arasında bir sayı tutturduk
let rastgeleSayi =  Math.ceil(Math.random()*20)
console.log(rastgeleSayi)

let mesaj = document.querySelector(".msg");

let skor = 10;
//skoru index.html'den çekebilirdik. Ama çok kullnacağımız için bu daha tercih edilen bir yol.
let enYuksekSkor = 0;


document.querySelector(".check").addEventListener("click", () => {
    const tahmin = document.querySelector(".guess").value
    // console.log(tahmin)
    // document.querySelector(".guess").value = "";


    //!Tahmin girmeden butona basıldıysa
    if (!tahmin) {
        mesaj.textContent = "Lütfen bir sayı giriniz..."

    //!Tahminim Doğruysa    
    } else if(tahmin == rastgeleSayi) {
        
        mesaj.textContent = "Tebrikler Bildiniz...👏"
        document.querySelector("body").style.backgroundColor = "green"
        document.querySelector(".number").textContent = rastgeleSayi;

        // top-score Kontrolü yap 

        if (skor > enYuksekSkor ) {
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
        } else {
            //! GAME OVER
            mesaj.textContent = "Oyunu Kaybettiniz🥺"
            document.querySelector(".score").textContent = 0;
            document.querySelector("body").style.backgroundColor = "red"

        }
        
    }

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

}


//! ENTER tuşu çalışsın!

//Klavyeden enter butonuna basıldığında check butonunu tetikle

document.addEventListener("keydown", function(e){
    // console.log(e)

    if (e.key === "Enter") {
        document.querySelector(".check").click()
    }
} )


