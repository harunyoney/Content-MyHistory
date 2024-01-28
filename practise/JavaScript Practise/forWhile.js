console.log("*******************FOR-WHILE PRACTISE*******************");



//for döngüsü ile  1den 25e kadar sayıları clg'da yazsın ve yanınada tek veya çift olduklarını yazsın. örnek:5=tek sayı

// for(let i1=0 ; i1<=25 ; i1++   ) {
//     if( i1%2===0 ) { console.log(`${i1}=çift sayı`);}
//     else {console.log(`${i1}=tek sayı`);}

// }

console.log("*******************FOR-WHILE PRACTISE*******************");

//for döngüsü ile  random 20 tane sayı yazdıralım ve bu yazılan random sayılar clgde tek veya çift oldugunu belirtelim  örn: 45 = tek sayıdır
// let toplam=0;
// for (let i2=50 ; i2>=0 ; --i2) {
//     let x = Math.floor(Math.random()*100) ;
//     if(x%2==0) {console.log(`${x} = tam sayıdır`)}
//     else {console.log(`${x} = tek sayıdır`)}
//     toplam+=x
// }
// console.log(`sayıların toplamı = ${toplam}`);


console.log("*******************FOR-WHILE PRACTISE*******************");


// for(let i3=1 ; 10>=i3; i3++) {
//     for (x3=1; 10>=x3;x3++) {
//     console.log(`${i3}*${x3} = ${x3*i3}`);

// }
// console.log("*******************************************************");

// }


console.log("*******************FOR-WHILE PRACTISE*******************");
// let x =12
// sayi 
// for(let i4 = 1 ; i4<=x ; i4++) {


//     for( let a=2 ; a <= Math.floor(x/2) ; a++)
//     if( x%a==0 ) { }
//     else{console.log(`${x} asal`);}

// }





let xx=200
for(say1=2 ;say1<=xx ;say1++ ){
    let x =say1
let sonuc=true
for (let i=2 ; i<=Math.floor(x/2); i++) {
    if (x%i==0) { 
        sonuc =false
        
        break; }

}
if(sonuc) {console.log(`${x} asal`)

}
else{console.log(`${x} asal değil`);}

}






