
// const numberCheck = value.split('').filter(va => !isNaN(va)).join('');

function numberCheck(value){

    let str = '';

    for(va of value)
    {
        if(!isNaN(va))
        str = str + va;
    }

    return str
}

document.addEventListener("DOMContentLoaded", () => {
    let Ra = Math.floor(Math.random() * 6 + 1);
    const bts = document.querySelectorAll('button');
    const dics = document.querySelectorAll('img');
    const result = document.querySelector('.result1');

    for (let bt of bts) {
        bt.addEventListener('click', () => {

            //랜덤 주사위 생성
            Ra = Math.floor(Math.random() * 6 + 1);
            dics[0].setAttribute("src", `../img/${Ra}.png`);


            console.log(bt.getAttribute("class"));
            //class 정보를 가져와서 2번째 다이스에 덮음
            dics[1].setAttribute("src", `../img/${numberCheck(bt.getAttribute("class"))}.png`);
            

            //랜덤 주사위 값이랑 같은지 아닌지 비교
            //이 부분을 다르게 못할까?
            //가지고 올 수 있는 정보 혹은 가지고 있는 정보
            //1. getA 를 통한 클래스정보 bt.getAttribute("class")
            //2. bt의 인덱스 정보 
            //2-1 bt가 가지고 있는 정보가 정확히 뭔가
            //2-2 bt는 정보를 어떻게 가져오나?
            //bts에 모든 button 태그를 가져온다 -> 모든 버튼을 순회한다
            // ->버튼이 눌린다 -> 각각의 버튼에대한 addEvent가 감지를 한다 (각각 순회를 하는건가?) -> 오 그런듯?

            if(Ra.toString() == numberCheck(bt.getAttribute("class")))
            {
                result.innerHTML = "같음";
            }else{
                 result.innerHTML = "다름";
            }

       
        });
    }

});


// 메모
// 이벤트 리스너는 계속해서 이벤트를 듣고 있기 때문에 for문 필요 x
//
//
//
//

//버튼 요서 가져오기
//1개인 경욷오 결과는 노드리스트
// const bts = document.querySelectorAll('button');

// //속성 변경 방법
// for (let bt of bts) {
//     bt.addEventListener('click', () => {
//         bt.setAttribute("id", bt.textContent);
//         console.log(bt.getAttribute);
//     });
// }



//태그 안의 값 가져오기
// for (let bt of bts) {
//     bt.addEventListener('click', () => {
//         bt.innerHTML = bt.textContent + "1";
//     });
// }

// for(let bt of bts){
//     bt.addEventListener('click', () => {
//         console.log(bt.textContent)
//     });
// }


//속성 변경법, 주사위
// for (let bt of bts) {
//     bt.addEventListener('click', () => {
//         Ra = Math.floor(Math.random() * 6 + 1);

//         console.log(Ra);
//         dic.setAttribute("src", `../img/${Ra}.png`);
//         console.log(dic.getAttribute("src"));
//     });
// }