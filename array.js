// array practice basic: Their are three type of declaration is array
//first type

var arr1=["mango","apple","chikoo","Kiwi","Pineapple"];

for(var i=0;i<arr1.length;i++){
    console.log(arr1[i]);
}



//second Type for basic array declaration

var arr2=new Array();
arr2[0]="Bmw";
arr2[1]="Yamaha";
arr2[2]="Triumph";
arr2[3]="RE";
arr2[4]="Hero"

console.log(arr2);


//3rd type for the basic array declaration
let arr3=new Array("BMW","Yamaha","Triumph","RE","HERO");
console.log(arr3);
for(let j=arr3.length-1;j>=0;j--){
    console.log(arr3[j]);
}