const getFatch  = async (tDt) => {
    let apiKey = "";
    let baseUrl = "http://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?";
    
    //날짝 받아오기
    let date = tDt.value.replaceAll('-','');

    //받아온 정보 쓸곳
    let mvOut = document.querySelector('.jsonDive ul')

    let url = `${baseUrl}key=${apiKey}&targetDt=${date}`;
    
    //url을 받아와서
    const resp = await fetch(url);

    //json형식으로 변경
    const data = await resp.json();

    console.log(data);

    let temp =  mvOut.innerHTML;
    for(da of data.boxOfficeResult.dailyBoxOfficeList)
    {
       temp = temp + `<li><span>${da.movieNm}</span></li>`;
    }
    mvOut.innerHTML = temp;


}



// 이벤트리스너는 비동기 동작을 하지만 명령문의 비동기와는
// 다르게 생각해야한다 
// 이벤트를 잡는거지 명령이라는 조금 결이다르다
document.addEventListener("DOMContentLoaded", () => {
    const date = document.querySelector(".dateDive input");
    

    
    date.addEventListener('change',(bt)=>{
        console.log(date);
        getFatch(date);


    });

});



// 패치 then은 비동기 방식
// const getFatch = () => {
//     console.log("아 !");
//     let apiKey = "";
//     let baseUrl = "http://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?";
//     let url = `${baseUrl}key=${apiKey}&targetDt=20250219`;

//     console.log('getFetch',url);

//     fetch(url)
//         .then((resp)=>resp.json())//비동기~~
//         .then(data => console.log(data.boxOfficeResult.dailyBoxOfficeList))
//         .catch((err) => console.log(err));


//     //fetch .then
//     // fetch(url)
//     //     .then((resp)=>resp.json())//비동기~~
//     //     .then(data => console.log(data.boxOfficeResult.dailyBoxOfficeList))
//     //     .catch((err) => console.log(err));

// }

// // 이벤트리스너는 비동기 동작을 하지만 명령문의 비동기와는
// // 다르게 생각해야한다 
// // 이벤트를 잡는거지 명령이라는 조금 결이다르다
// document.addEventListener("DOMContentLoaded", () => {
//     const bt = document.querySelector("button");
    
//     bt.addEventListener('click', ()=>{
//         getFatch();
//     })
    

// });


// const getFatch  = async (tDt) => {
//     let apiKey = "";
//     let baseUrl = "http://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?";
//     let url = `${baseUrl}key=${apiKey}&targetDt=20250219`;


//     //input 박스 데이터 가져와서 날짜에 저장 할때에 -를 ''로 변경!
//     let targetDt = tDt.value.replaceAll('-','');

  
//     url = `${baseUrl}key=${apiKey}&targetDt=${targetDt}`;


//     //글자를 쓸 바디 부분
//     let bodyDive = document.querySelector(".jsonDive ul");
//     console.log(bodyDive);

//     //fetch로 url 불러오기
//     const resp = await fetch(url);

//     //받아온 fetch json으로 변경
//     const data = await resp.json();


//     let tags = bodyDive.innerHTML;

//     //json->키,값으로 되어있는 json으로 받아오는걸 key값을 이용해서 불러옴
//     for(let i of data.boxOfficeResult.dailyBoxOfficeList)
//     {
//         tags = tags + `<li><span class="sp">${i.movieNm}</span></li>`;
//     }       
    
//     bodyDive.innerHTML = tags;
// // await은 동기 방식
        
       

// //fetch .then
// // fetch(url)
// //     .then((resp)=>resp.json())//비동기~~
// //     .then(data => console.log(data.boxOfficeResult.dailyBoxOfficeList))
// //     .catch((err) => console.log(err));

// }


// // 이벤트리스너는 비동기 동작을 하지만 명령문의 비동기와는
// // 다르게 생각해야한다 
// // 이벤트를 잡는거지 명령이라는 조금 결이다르다
// document.addEventListener("DOMContentLoaded", () => {
//     const date = document.querySelector(".dateDive input");
    

    
//     date.addEventListener('change',(bt)=>{
//         console.log(date);
//         getFatch(date);


//     });

// });