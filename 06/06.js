const lotto = () => {
    let lotto = [];

    //랜덤 수 만들기
    let ran = Math.floor(Math.random() * 45 +1);

    //lotto안에 배열 로또번호 6개 보너스 1개 + 칸 한개  
    while (lotto.length < 7)
    {
        ran = Math.floor(Math.random() * 45 +1);

        //배열에 중복수 수가 없다면
        if (!lotto.includes(ran))
        {
            //로또에 랜덤수 넣기
            lotto.push(ran);
      //46미만 최소 1 랜덤 수 
        }
    }


    //로또 오름차순
    lotto.sort((a,b) => a - b);


    //로또에 플러스 넣기
    lotto.splice(6,0,'+');
   
    //spantags 넣기, 쉼표 없애기
    spantags = lotto.map(i => i == '+'? `<span class = "plus"}>+</span>`:`<span class = "c${Math.floor((i/10))}">${i}</span>`).join('');


    //msg에 HTML넣기
    document.getElementById("msg").innerHTML = spantags;

};

// let spanTags = lotto.map((item, i) => {
//     if(i==6){
//         return `<span id = "bonus">+</span>`
//     }

//     if (item < 10) {
//         return `<span class = "c1">${item}</span>`
//     } else if (item < 20) {
//         return `<span class = "c2">${item}</span>`
//     }
//     else if (item < 30) {
//         return `<span class = "c3">${item}</span>`
//     }
//     else if (item < 40) {
//         return `<span class = "c4">${item}</span>`
//     }
//     else {
//         return `<span class = "c5">${item}</span>`
//     }

// }).join('');

// const lotto = () => {
//     let lotto = [];
//     let ran = Math.floor(Math.random() * 45 + 1);

//     //lotto안에 배열 로또번호 6개 보너스 1개 + 칸 한개  
//     while (lotto.length != 7)
//     {
//         //배열에 중수 수가 없다면
//         if (!(lotto.includes(ran)))
//         {
//             //로또에 랜덤수 넣기
//             lotto.push(ran);
//             //46미만 최소 1 랜덤 수 
//             ran = Math.floor(Math.random() * 45 + 1);
//         }
//     }

//     //로또 오름차순
//     lotto.sort((a, b) => a - b);

//     //로또에 플러스 넣기
//     lotto.splice(6,0,'+');

//     // lotto = lotto.toString().replaceAll(',','');


//     //spantags 넣기
//     let spanTags = lotto.map((item,i) => item== '+' ? `<span id = "plus">+</span>`:`<span class = "c${Math.floor(item/10)}">${item}</span>`
//     ).join('');


//     //msg에 HTML넣기
//     document.getElementById("msg").innerHTML = spanTags;
// };