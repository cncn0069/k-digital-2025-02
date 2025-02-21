document.addEventListener("DOMContentLoaded",()=>{   

    //버튼
    let bts = document.querySelectorAll(".inBox .bt");
    //리셋 버튼
    let reset = document.querySelector(".resetBox");
    //메세지 호출
    let msg = document.querySelector(".messageBox");
    //주사위 배열생성
    let dice = new Array(9).fill(0);
    dice[8] = 1;


    //전체 카운트
    let heartValue;
    
    

    //숫자 넣기
    for(let [i,bt] of bts.entries())
    {
        bt.innerHTML = i + 1;
    }
    
    //폭탄섞기 버튼
    let boomReset = false;

    //버튼별 이벤트 리스너
    for(let [i,bt] of bts.entries())
        {
             //클릭이 발생하였을 때
            bt.addEventListener("click",() => {


                 //하트의 갯수를 저장
                 heartValue = document.querySelectorAll(".inBox img");
                //폭탄섞기 버튼을 눌렀다면

                if(boomReset == true)
                    {
                        //폭탄이라면
                        if(1 == dice[i])
                        {
                            //하트 갯수가 8개라면
                            if(heartValue.length == 8)
                            {
                                bt.innerHTML = `<img src="../img/hart.png">`;
                                msg.innerHTML = "성공!"
                                boomReset = false
                            }else{
                                bt.innerHTML = `<img src="../img/boom.png">`;
                                msg.innerHTML = "실패.."
                                boomReset = false
                            }
                           
                            
                        }else{
                            bt.innerHTML = `<img src="../img/hart.png">`;
                             msg.innerHTML = "도전!"
                        }
                        
                {
                    
                    
                }//폭탄이 아니라면
                //폭탄섞기 버튼을 안 눌렀다면
                    }  
                    else{
                        msg.innerHTML = "섞기 버튼을 누르세요";
                    } 
                
            });
        }
 //폭탁 섞기 버튼을 눌렀다면
    reset.addEventListener("click",() => {
        boomReset = true;
        dice.sort(() => (Math.floor(Math.random() - 0.5)));
        console.log(dice);
        //숫자 지우기
        for(let bt of bts)
            {
                bt.innerHTML = "";
            }
            
    });
});
            

   

        //정열
        
//"<img src=\"\">";




// for(let [i,c] of bts.entries())
//     {
//         c.innerHTML =  i + 1;
//     }

//     //폭탄섞기 버튼이 눌러졌나
//     let resetBoom = false;

//     for(let [i,bt] of bts.entries())
//     {
//         bt.addEventListener('click', ()=>{
            

//             heartValue = document.querySelectorAll(".inBox img");
//             let count_check = 0;

//             console.log(resetBoom);
//             //리셋버튼을 안 눌렀다면 혹은 초기화 됐다면
//             if(resetBoom == false)
//             {
//                 console.log("눌러지지 않음.");
//             }else{
//                 //폭탄을 눌렀다면
//                 if(ra == i){
//                     //하트 8개가 눌러지면
//                     if(heartValue.length == 8){
//                         bt.innerHTML ="<img src=\"../img/hart.png\">";
//                         message.innerHTML = '성공!';
//                     }else{
//                         bt.innerHTML ="<img src=\"../img/boom.png\">";
//                         message.innerHTML = '실패!';
//                         resetBoom = false;
//                     }

                    
                    
//                 }else{
//                     bt.innerHTML ="<img src=\"../img/hart.png\">";
//                     message.innerHTML = '';
                    
//                 }
                
//             }
//         });
//     }

//     reset.addEventListener("click", ()=>{

//         resetBoom = true;
        
//         //폭탄 위치 바꾸기
//         ra = Math.floor(Math.random() * 8) + 1;
//         for(let [i,c] of bts.entries())
//             {
//                 c.innerHTML =  "";
//             }

//         message.innerHTML = '시작!';
//         console.log(ra+1);
//     })