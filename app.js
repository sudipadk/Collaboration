const getColor= () =>{
    
    const h5=document.getElementById('head3');
    
    let colorchange =Math.random();
    const randomColor="#"+ colorchange.toString(16).slice(2,8);
    console.log(randomColor);
    
    h5.innerHTML=randomColor;
    
    document.body.style.backgroundColor=randomColor ;
}

    changeColor.addEventListener('click', getColor);

    function callFn(){ 
        const Interval = setInterval(function(){
            console.log('Hello');
        },1000);
    
        setTimeout(()=>{
            clearInterval(Interval);
        },3000);
    }