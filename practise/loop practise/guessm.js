
let random = Math.floor(Math.random() * 100);
console.log(random);
alert("Bul Beni Oyununa Hoşgeldin!");
let hak = +prompt("Kaç kere denemek istersin?");
for (i = 1; i <= hak ; hak--) {
    let kulSayi = +prompt("0-100 arasi bir sayi gir bakalim!");
    kulSayi === random
      ? alert("Vay canina! Hemen buldun Tebrikler!")
      : kulSayi < random
      ? alert(
          `Olmadi be! Daha büyük bir sayi girmelisin. ${hak - 1} hakkin kaldi.`
        )
      : alert(
          `Olmadi be! Daha küçük bir sayi girmelisin. ${hak - 1} hakkin kaldi.`
          
        );
    console.log(hak);
  }