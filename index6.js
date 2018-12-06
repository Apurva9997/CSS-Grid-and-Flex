console.log('Hello world')
let animal ="dog"
console.log('animal')
let value = "someone";
console.log(typeof(value))
console.log(10/0); //(console log Infinity)
console.log(0/0); // NaN (not a number but its type is NaN)

//Arrays
let fruits = ['mango','apple',3,'banana','peach'];
fruits.push(44)
fruits.pop()
fruits.unshift(12)
console.log(fruits[0])
console.log(fruits[1])
console.log(fruits[2])
console.log(fruits[3])
console.log(fruits[4])
console.log(fruits[5])
fruits.splice(0,1,'orange','pineapple','guava')
console.log(fruits[0])
console.log(fruits[1])
console.log(fruits[2])
console.log(fruits[3])
console.log(fruits[4])
console.log(fruits[5])
//splice
//can also be used to insert elements into the array after deletion
//to do that pass the values to be added as additional parameters like so
//fruits.splice(0,1,'orange','pineapple','guava')
console.log(fruits.join(' '))
let a = 10
let ab= '10'
if(a===ab){
    console.log(true,'that')
}
if(a==ab){
    console.log(true,'that too')
}

/* truthy   falsy
~falsy            false
true            0
0.5            "" ''
'0'            null
            undefined
            NaN */
let randomNum = Math.random()*52;
randomNum = Math.trunc(randomNum)
console.log(randomNum)
let todaydata = new Date().toDateString();
console.log(todaydata);
