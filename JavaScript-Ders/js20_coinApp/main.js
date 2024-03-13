import './scss/style.scss'
import { getCoins } from './src/getCoins.mjs'
// selectors

const form=document.querySelector("header form")

form.addEventListener("submit",(e)=>{
e.preventDefault()

getCoinData()





e.target.reset()
})



const getCoinData =()=>{
const input=document.querySelector("header form input")
console.log(input.value);
if(!input.value.trim()){
  alert("sd")
}else{
  getCoins(input.value)
}

}
