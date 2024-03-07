//*========================================
//*             3 - FETCH API
//*========================================

//? Dis kaynaklardan veri getirmek icin kullanilan basit bir arabirimdir.
//? Ag istekleri yapmamizi ve cevaplari yontebilmemize olanak saglar.
//? Javascript ortaminda en cok kullanilan Asenkron islem orneklerinin basinda
//? gelmektedir.

//? fetch() fonksiyonu veri getirmek istediginiz kaynagin yolunu gosteren zorunlu
//? bir parametre almaktadir ve bu istegin cevabini gosteren bir Promise dondurmektedir.

console.log("FETCH");
let userDate=""
fetch("https://api.github.com/users")
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    userDate=data
    console.log(userDate);
    showUser(data)
  });

console.log(userDate);

const showUser=(data)=>{
    const userSection =document.querySelector("#users")
   
    data.forEach((e) => { 
        const div =document.createElement("div")
        const img =document.createElement("img")
        div.classList=`${e.id}`
        userSection.appendChild(div)
        div.appendChild(img)
       
        img.src=`${e.avatar_url}`
        console.log(img);
        div.append(e.login)
       
        
    })

}