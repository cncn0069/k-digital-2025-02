//배열 선언

let arr = [];
let arr2 = [1, 2, 3, 4]//; 초기 값이 있는 배열
let arr3 = new Array(5);

// console.log(arr);
// console.log(arr2);
// console.log(arr3);

// arr.push(10);

// console.log(arr);

// for (let i = 0; i < 10; i++) {
//     arr.push(i + 1);
// }

// arr[0] = 0;

// //배열 순회
// arr = [1, 2, 3, 4, 5];

// for (let i = 0; i < arr.length; i++) {
//     console.log(i);
// }

// for (let i in arr) {
//     console.log(arr[i]);
// }

// for (let i of arr) {
//     console.log(i);
// }

// for(let [i,item] of arr.entries())//구조 분해
// {
//     console.log(i,item);
// }

// console.log("foreach 메소드");
// arr.forEach((item, i) => {//순서가 바뀐다.
//     console.log(i,item);
// });

// arr = arr.map((i)=>{
//     console.log(i);

//     return i*2;
// });

// console.log(arr);

// console.log(arr.map((item, i) => { //콜백 함수의 구조
//     console.log(i);
    
//     return item*i;
// }));

// //filter()

// console.log("fillter 메소드")
// console.log(arr.filter(i => i%2 == 0));
// let arrRand = Math.floor(Math.random() * 6)+1;


// arr = [];
// console.log(arrRand);

// for(let i = 0; i < 6; i++)
// {
//     arr.push(Math.floor(Math.random() * 6)+1);
// }

// console.log(arr);

// let a = Array.from(6, () => Math.floor(Math.random() * 6)+1);


// console.log("아아")
// console.log(a);

// console.log(arr.sort((a,b) => a -b));

// console.log(arr.reverse());

// console.log(arr.join(""));//join안에 뭐로 나눌건지 넣으면


// let arrCopy;

// arrCopy = arr; //주소값을 넣어서 arrCopy를 바꾸면 arr도 바뀐다.
// console.log(arr);
// console.log(arrCopy);

// arrCopy.push(1);
// console.log(arr);
// console.log(arrCopy);


