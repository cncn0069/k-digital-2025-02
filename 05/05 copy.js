const handleRand = () => {
    let n;
}

function check1(){
    let s = document.getElementById("txt1").value;
    document.getElementById("txt2").value = s[s.length - 1];
    console.log(s);

    for(let i of s)
    {
        console.log(i);
    }

    console.log(s.indexOf("ss"));
    console.log(s.includes("ss"));

    console.log(s.slice(0,2));
    console.log(s.substring(7,2));
}

const check2 = () => {
    let s1 = document.getElementById("txt1").value;
    let s2 = document.getElementById("txt2").value;

    document.getElementById("msg").innerHTML = parseInt(s1) + parseInt(s2);
}

const check3 = () =>{
    document.getElementById("txt1").value = "";
    document.getElementById("txt2").value = "";

}