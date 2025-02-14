let obj = {'사과' : '🍎','바나나' : '🍌','당근' : '🥕','양파' : '🧅'};

console.log(obj);

console.log(obj['양파']);
//추가
obj['밤'] = '🌰';

console.log(obj['밤']);

//삭제
delete obj['바나나'];

// console.log(obj);

// // console.log(Object.keys(obj));

// // console.log(Object.values(obj));

// console.log(Object.entries(obj));

// for(let i = 0; i < Object.keys(obj).length; i++)
// {
//     console.log(Object.keys(obj)[i],Object.values(obj)[i],obj[Object.keys(obj)[i]]);
// }

// for(let i in Object.keys(obj)){
//     console.log(Object.keys(obj)[i],Object.values(obj)[i],obj[Object.keys(obj)[i]]);
// }

// for(let item of Object.keys(obj)){
//     console.log(item,obj[item]);
// }

for(let [k,d] of Object.entries(obj))
{
    console.log(k,d);
}

let obj4 = {
    '과일': {'사과' : '🍎','바나나' :'🍌'},
    '채소': {'당근' : '🥕','양파' : '🧅'}
};

console.log(obj4.과일.사과);
console.log(obj4['과일']['사과']);