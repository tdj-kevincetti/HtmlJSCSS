// Import stylesheets
import './style.css';

// Write TypeScript code!
let a:number = 1
let b:boolean = true
let c:string = "A"
let a2:number[]=[1,2,3,4]
let c2:string[]=["Tu","Pom","Daeng"]
for (var i=0;i<c2.length;i++){
  console.log("Here: ",c2[i])
}
function sum(a:number, b:number){
  return a+b
}
let obj: object = {
  name: "arnon",
  age : 36
}
let result = (a:number ,b:number)=> a+b
console.log("result = " ,result(10,5))
function Hi(){
  return "Hello World!"
}
var hey = ()=> "Hello"
console.log(hey())
c2.forEach((obj)=>{
  console.log("Object : ",obj)
})
let arr:number[] = [1,2,3,4]
var r = arr.map(obj => obj * -1)
console.log("r : ",r)