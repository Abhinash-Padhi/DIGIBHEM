let display=document.getElementById('Dis')
let buttons=document.getElementsByClassName('ModifyDis')
let button1=document.getElementById('Ln')
for(let i=0;i<buttons.length;i++){
    buttons[i].addEventListener("click",()=>{
        display.innerText+=buttons[i].innerText
    })
}
button1.addEventListener("click",()=>{
    display.innerText+=button1.innerText+"("
})
function equal(){
    if(display.innerText.includes("ln(") && display.innerText.includes(")")){
        let number=display.innerText.slice(3,display.innerText.length-1)
        let num=parseFloat(number)
        num=Math.log(num)
        display.innerText=""+num
    }
    else if (display.innerText.includes(String.fromCharCode(8730))){
        let number=display.innerText.slice(1,display.innerText.length)
        let num=parseFloat(number)
        num=Math.sqrt(num)
        display.innerText=""+num
    }
    else{
        display.innerText=eval(display.innerText)
    }
}
function pi(){
    display.innerText+=3.1415926
}
function exp(){
    display.innerText+=2.7182818
}
function remove(){
    display.innerText=display.innerText.slice(0,display.innerText.length-1)
}
function clearDis(){
    display.innerText=""
}
