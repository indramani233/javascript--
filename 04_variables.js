console.log(1+2);
console.log(2-2);
console.log(2**7);

let str="hello"
let str2="hitesh"
let str3=str+str2

console.log(str3)

console.log("1"+2);
console.log(1+"2");
console.log("1"+2+2);
console.log(1+2+"2");

console.log(typeof (1+2+"2"));

console.log(3+4*5%3)

console.log(-"1");


console.log(null>0)    // false
console.log(null==0)   // false
console.log(null>=0)   // true as the resaon is that an equality check == and comparisons > < >= <= werk differently
                       // comaprisons convert null to a number, treating it as 0. that's why  the third(3) null>=0 is true and null>0 is false.


console.log(undefined>0)    // false
console.log(undefined==0)   // false
console.log(undefined>=0)   // false
console.log("2"==2)