const comparison = (input, random) => {

    if (input == random) {
        return 'good';
    } else if (input > random) {
        return 'down';
    } else {
        return 'up';
    }
};

// const comparison = (input,random) => {(input == random?'good':((input > random) ? 'up' : 'down'))}


document.addEventListener("DOMContentLoaded", () => {
    let bt = document.querySelector(".inBox button");
    let ra = Math.floor(Math.random() * 30 + 1);
    let input = document.querySelector(".inBox input");
    let img = document.querySelector("div > .inImg img");
    let reset = document.querySelector(".resetBox");
    reset.style.display = 'none'

    console.log(ra);
    // ra = Math.floor(Math.random * 3 + 1);

    bt.addEventListener('click', () => {

        result = comparison(input.value, ra);
        img.setAttribute("src", `../img/${result}.png`);
        if (result == "good") {
            input.style.display = 'none'
            bt.style.display = 'none'
            reset.style.display = 'block'
        }

    })

    reset.addEventListener('click', () => {
        ra = Math.floor(Math.random() * 30 + 1);

        input.style.display = 'block';
        bt.style.display = 'block';
        reset.style.display = 'none';
        img.setAttribute("src", `../img/what.png`);

        console.log(ra);
    })
});