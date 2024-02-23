console.log("**** CREATE NODE ****")

//? 1- yeni bir li elementi olustur
const newLi = document.createElement("li")

//? 2- Eger text tabanlı bir element ise text dugumunu olustur
const textLi = document.createTextNode("Go")

//? 3- Olusturulan text dugumunu yeni elemente bagla (append)
newLi.appendChild(textLi)

//?4- Yeni olusan elementi DOM tree'ye ekle.
document.querySelector("ul").appendChild(newLi)

//?* 2. bir li olusturalım
const newLi2 = document.createElement("li")
newLi2.textContent = "C++"

//? Element.before() veya element.after() ile bir elementi istediğmiz elementin onune veya devamına eklemek mümkündür.
const react = document.querySelector("ul li:nth-child(4)")
react.before(newLi2, newLi)

//* ------- ID, CLASS GIBI OZELLIKLERI ATAMA ------

//? 1- element.attribute = "yeni deger"
//* yazma
newLi.className = "list bold text-success bg-warning"
newLi.id = "new-li"
newLi.name = "list"

//* okuma
console.log(newLi.className)

//? 2- setAttribute(atr,"deger") getAttrbute("atr")
newLi2.setAttribute("class", "list red bold")

console.log(newLi2.getAttribute("id"))
console.log(newLi2.getAttribute("class"))

//? 3) Yontem (classList)
newLi.classList.add("border", "border-danger", "border-3")

newLi.classList.remove("bold", "text-success")

console.log(newLi2.classList.contains("red"))

newLi.classList.toggle("red")
newLi2.classList.toggle("red")

//* ------- YENI BIR ELEMENT OLUSTURMA (InnerHTML)------

document.querySelector("main").innerHTML += `
    <div class="d-flex gap-2">
        <input type="text" class="form-control"/>
        <button class="btn btn-danger">Submit</button>
    </div>

    <div class="card mt-4" style="width: 13rem;">
        <img src='https://images.pexels.com/photos/19789774/pexels-photo-19789774/free-photo-of-black-and-white.jpeg?auto=compress&cs=tinysrgb&w=300' class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
    </div>
`
