const Go = document.getElementById("start");
const Stop = document.getElementById("end");

let Interval;

function startFn() {
    Interval = setInterval(function () {
        // console.log('Hello');
        let colorchange = Math.random();
        const randomColor = "#" + colorchange.toString(16).slice(2, 8);
        console.log(randomColor);

        document.body.style.backgroundColor = randomColor;
    }, 500.1);
}

function endFn() {
    // console.log('Hello'); 
    setTimeout(() => {
        clearInterval(Interval);
    }, 700.1);
}

Go.addEventListener("click", function () {
    startFn();



});

Stop.addEventListener("click", function () {
    endFn();

});


