const getFatch  = async () => {
    let apiKey = "";
    let baseUrl = "http://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?";
    let url = `${baseUrl}key=${apiKey}&targetDt=20250219`;


    // await은 동기 방식
        try
        {
            const resp = await fetch(url)
            const data = await resp.json();
            console.log(data.boxOfficeResult.dailyBoxOfficeList)
        } catch{
            console.log("error")
        }
        console.log('getFetch',url);

    //fetch .then
    // fetch(url)
    //     .then((resp)=>resp.json())//비동기~~
    //     .then(data => console.log(data.boxOfficeResult.dailyBoxOfficeList))
    //     .catch((err) => console.log(err));

}

// 이벤트리스너는 비동기 동작을 하지만 명령문의 비동기와는
// 다르게 생각해야한다 
// 이벤트를 잡는거지 명령이라는 조금 결이다르다
document.addEventListener("DOMContentLoaded", () => {
    const bt = document.querySelector("button");
    
    bt.addEventListener('click', ()=>{
        getFatch();
    })
    

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