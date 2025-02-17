const convert = (s1, s2, txt1, txt2,spa) => {

    if(s1.value == "℃")
    {
        s2.value = "℉"
    }else{
        s2.value = "℃"
    }

    spa[0].textContent = s1.value;
    spa[1].textContent = s2.value;

    txt1.value = "";
    txt2.value = "";
    txt1.focus();

};



document.addEventListener("DOMContentLoaded",() => {

    const sec1 = document.querySelector('#sel1');
    const sec2 = document.querySelector('#sel2');

    const txt1 = document.getElementById('txt1');
    const txt2 = document.getElementById('txt2');
    // const txt1 = document.querySelector('.bt2 input:nth-child(1)');
    // const txt2 = document.querySelector('.bt2 input:nth-child(2)');
    const spa = document.querySelectorAll('.bt2 span');

    //1번 인풋 박스 안의 값을 가져옴

    sec1.addEventListener("change",() =>{

        // let input = txt1.value;

        convert(sec1,sec2,txt1,txt2,spa);
 
    });

    sec2.addEventListener("change",() =>{
        console.log("sec2",sec2.values);

        convert(sec2,sec1,txt1,txt2,spa);

    });

    txt1.addEventListener("input", () =>{
        if(sec1.value == "℃")
        {
            txt2.value = (txt1.value*(9/5) + 32);
        }else
        {
            txt2.value = (txt1.value-32) * (5/9);
        }
    });




});