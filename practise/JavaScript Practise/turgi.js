/* 
// let a = 0
// console.log(typeof (a));

// console.log("8"+ (2+5+8+4+7));
// // if () 
// // {
    
// // } 
// // else {  }


// x = Math.max(5, 11, 123)

// console.log(x);


const num1 = 333
const num2 = 3233
const num3 = 32344

if(num1 >= num2 && num1 >= num3) {console.log(num1);}
else if(num2 >= num1 && num2>= num3) {console.log(num2);}
else if(num3 >= num1 && num3 >= num2) {console.log(num3);}

let bignum = num3

if(num1 > bignum) {bignum = num1}
if(num2 > bignum) {bignum = num2}
console.log(bignum);




let cal1 = +prompt ("ilk çarpani giriniz:" ,"12")
let islem = prompt ("yapmak istediğiniz işlem  + - * / " , "*") 
let cal2 = +prompt ("ikinci çarpani giriniz:" , "13")



if(islem === "+") {cal1 + cal2 
console.log(cal1+cal2) }
else if(islem === "-") {cal1 - cal2
console.log(cal1-cal2) } 
else if(islem === "*") {cal1 * cal2 
console.log(cal1*cal2) }
else if(islem === "/") {cal1 / cal2 
console.log(cal1/cal2) }

else console.log("geçerli bir düzen girin");
 */




let salary = 43.8
let year = 11
marriage = true

 year >= 10 && marriage && (salary = salary*1.5)
console.log(salary);



console.log(typeof salary);


 salary =parseInt(salary)
 console.log(typeof(salary) , salary);


const myArr= ["1","harun",2]
const newArr = myArr
myArr.sort()

console.log(newArr);


const myArr2= ["1","harun",2]
const newArr2 = myArr2.reverse()


console.log(newArr2);