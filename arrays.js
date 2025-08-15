let items=[250, 300, 900, 150, 400];
let i=0;
for(let val of items){
    let offer=val/10;
    items[i]=items[i]-offer;
    console.log(`value after offer= ${items[i]}`);
    i++;
}

let arr=[1,2,3,4,5,6,7];
let arr2=[8,9,10];
arr.splice(2,2,101, 102);
console.log(arr);

arr.push(100);
console.log(arr);

arr.pop();
console.log(arr);

arr.unshift(100);
console.log(arr);

arr.shift(100);
console.log(arr);

console.log(arr1.concat(arr2));