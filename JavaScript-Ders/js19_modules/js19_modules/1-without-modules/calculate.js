// "use strict" //! Derleyici direktifi

console.log("CALCULATE.JS")

const totalPrice = (products) => {
  return products.reduce((sum, product) => sum + product.price, 0)
}

//? Global namespace
// const students = ["Canan", "Can"]

myVariable = "my string" //! use Strict -> myVariable is not defined
console.log(myVariable)

console.log(this) //? window
