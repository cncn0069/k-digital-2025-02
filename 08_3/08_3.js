document.addEventListener("DOMContentLoaded",()=>{
    let ra;
    let bts = document.querySelectorAll('.bt');
    let reset = document.querySelector('.resetBox');
    let message = document.querySelector('.messageBox');
    
    let array = [0,0,0,0,0,0,0,0,1];

    //전체 카운트
    
    

    for(let [i,c] of bts.entries())
    {
        c.innerHTML =  i + 1;
    }

    //폭탄섞기 버튼이 눌러졌나
    let resetBoom = false;

    for(let [i,bt] of bts.entries())
    {
        bt.addEventListener('click', ()=>{
            heartValue = document.querySelectorAll('.inBox img')

            //폭탄섞기 버튼을
            if(resetBoom != false)
            {
                
                //폭탄이라면
                if(array[i] == 1)
                    {
                        if(heartValue.length == 8){
                            bt.innerHTML ="<img src=\"../img/hart.png\">";
                            message.innerHTML = '성공!';
                        }else{
                            bt.innerHTML ="<img src=\"../img/boom.png\">";
                            message.innerHTML = '실패!';
                            resetBoom = false;
                        }
                        
                    }
                    else{ 
                        bt.innerHTML ="<img src=\"../img/hart.png\">";
                        message.innerHTML = '';
                    }
        
            }else{
                message.innerHTML = '폭탄섞기 버튼을 누르세요!';
            }
            

        });
    }

    reset.addEventListener("click", ()=>{
        array.sort(()=>Math.random() - 0.5);
        console.log(array);
        resetBoom = true;


        for(let n = 0;n < array.length ; n++)
        {
            bts[n].innerHTML = "";
        }
 

    })



});
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