const check1 = () => {
    let s = document.getElementById("txt1").value;
    let t = ""
    // for(let i = s.length-1;i >=0;i--)
    // {
    //     t = t+s[i];
    // }

    //배열로 하는 법
    t = s.replace(' ',i => '').split('').reverse().join('');


    console.log(t);

    if(s.replaceAll(' ','') == t)
    {
        document.getElementById("txt2").value = "회문입니다."
    }else
    {
        document.getElementById("txt2").value = "회문이 아닙니다."
    }
}

const check2 = () => {
    let s = document.getElementById("txt1").value;
    let t = 0;

    for(let i of s)
    {
        if(!(isNaN(i)))
        {
            t += parseInt(i);
        }
    }

    document.getElementById("txt2").value = t;

}

const check3 = () => {
    document.getElementById("txt1").value = "";
    document.getElementById("txt2").value = "";
}