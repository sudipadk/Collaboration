const start = document.getElementById('start');
const end = document.getElementById('end');

let Interval;
start.addEventListener('click',function(){
    startFn();
});

end.addEventListener('click',function(){
    endFn();
});

function startFn(){
    Interval = setInterval(function(){
        let colorchange = Math.random();
        const randomColor = "#" + colorchange.toString(16).slice(2,8);
        console.log(randomColor);

        document.body.style.backgroundColor=randomColor ;
    }, 1000);
}

function endFn(){
    setTimeout(() => {
        clearInterval(Interval);    
    }, 100);   
}