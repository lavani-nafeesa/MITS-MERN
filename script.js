// console.log("Hello World");
// let arr=[10,20,30,40]
// for(let i in arr){
//      console.log(i,arr[i])
//  }
//  var obj={
//      name:"naffu",
//      age:20
//  }
//  for(let i in obj){
//      console.log(i,obj[i]);
//  }
//  for(let val of arr){
//     console.log(val);
//  }
let arr=[1,2,3,4];
// var double_arr=arr1.map((i)=>(i*2));
// console.log(double_arr)
var even=arr.filter((i)=>(i%2==0))
console.log(even);
var total=arr.reduce((sum,i)=>(sum+i),0);
console.log(total);



