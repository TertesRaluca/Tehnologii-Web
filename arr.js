const arr=[1,2,3,4];
//console.log(arr.length);

// arr.push(5)

// console.log(arr);



// const lastitem=arr.pop()
// console.log(lastitem)

// arr.shift
// console.log(arr)

for(let i=0; i<arr.length; i++)
{
    console.log(arr[i])
}
for(item of arr)
{
    console.log(item)
}

console.log('Schimbare')
for(item in arr){
    console.log(item)
}

console.log('pentru foreach')
arr.forEach(item =>{
    console.log(item);
})