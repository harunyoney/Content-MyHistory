console.log("***** SELECTORS *****")

//*===========================================
//*            GETELEMENTBYID()
//*===========================================
document.getElementById("add-new-item").style.color="red"
const h2NewId= document.getElementById("add-new-item")

h2NewId.style.border="2px red solid"


const htmlli= document.getElementById("html-li")
htmlli.style.color="blue"
console.log(htmlli);
htmlli.innerText="html 2.version"
const javaScriptli= document.getElementById("Javascript-li")
javaScriptli.innerHTML= "<h2>JS<h2>"


const input1 = document.getElementById("input")


//*===========================================
//*          GETELEMENTSBYTAGNAME()
//*===========================================

const allLi= document.getElementsByTagName("li")
console.log(allLi);
console.log(allLi[1].textContent);

for(let li of allLi)
{
    console.log(li.textContent);

    
}
//*===========================================
//*          GETELEMENTSBYCLASSNAME()
//*===========================================

//* ========================================
//*              QUERYSELECTOR()
//* ========================================

//* ========================================
//*              QUERYSELECTORALL()
//* ========================================
