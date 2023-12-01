const getColor= () =>{

    
    let colorchange =Math.random();
    const randomColor="#"+ colorchange.toString(16).slice(2,8);
    // console.log(randomcolor);
    
    document.body.style.backgroundColor=randomColor ;
}


    changeColor.addEventListener('click', getColor)