let btn=document.querySelector(".btn");
let btn2=document.getElementById("btn");
let arr=[1,2,3,4,5,6,7,8,9];    
btn.addEventListener("click",()=>{
    let clr1="#";
    for (let i=0; i<6; i++){
        let randInd=Math.floor(Math.random()*8);
        clr1+=arr[randInd]
    }
    let clr2="#";
    for (let i=0; i<6; i++){
        let randInd2=Math.floor(Math.random()*8);
        clr2+=arr[randInd2]
    }
     let clr3="#";
    for (let i=0; i<6; i++){
        let randInd3=Math.floor(Math.random()*8);
        clr3+=arr[randInd3]
    }
    document.body.style.background=`linear-gradient(135deg,${clr1},${clr2},${clr3})`;
});
