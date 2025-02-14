
function hello(){
    alert("Hello JS");
    console.log();
}
//화살표함수
const hello2 = () => {
    alert("Hello2 JS");
}

const myHello = (msg) => {
    document.getElementById("msg").innerHTML = "Hello" + "<span>"+msg+"</span>" + "!!";
}