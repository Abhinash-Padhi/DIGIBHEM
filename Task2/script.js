let list=document.getElementById("list")
let comp=document.getElementById("comp")
let pen=document.getElementById("pen")
let hid=document.getElementById("hid")
let cid=document.getElementById("cid")
let pid=document.getElementById("pid")
let db=document.getElementById("dialogBox")
let editTitle=document.getElementById("editTitle")
let editDateTime=document.getElementById("editDateTime")
let markc=document.getElementById("markc")
let marki=document.getElementById("marki")
let del=document.getElementById("del")
let listEle
document.addEventListener("click",()=>{
    db.style.display="none"
})
db.addEventListener("mouseleave",(e)=>{
    db.style.display="none";
})
let searchBar=document.getElementById("searchBar")
list.innerHTML=localStorage.getItem("listData")
comp.innerHTML=localStorage.getItem("compData")
pen.innerHTML=localStorage.getItem("penData")
comp.hidden=true
pen.hidden=true
hid.addEventListener("click",()=>{
    comp.hidden=true
    pen.hidden=true
    list.hidden=false
    searchBar.hidden=false
})
cid.addEventListener("click",()=>{
    pen.hidden=true
    list.hidden=true
    comp.hidden=false
    searchBar.hidden=true
})
pid.addEventListener("click",()=>{
    comp.hidden=true
    list.hidden=true
    pen.hidden=false;
    searchBar.hidden=true
})
function store(){
    localStorage.setItem("listData",list.innerHTML)
}
function storeComp(){
    localStorage.setItem("compData",comp.innerHTML)
}
function storePen(){
    localStorage.setItem("penData",pen.innerHTML)
}
list.addEventListener("click",(e)=>{
    let obj=new Date(); 
    let tar
    if(e.target.tagName=="LI" || e.target.tagName=="DIV"){
        if(e.target.tagName=="LI") tar=e.target
        else tar=e.target.parentElement
        let a1=tar.children[1]
        a1.innerHTML = obj.getDate()+"/"+(obj.getMonth()+1)+"/"+obj.getFullYear()+","+obj.getHours()+":"+obj.getMinutes()+":"+obj.getSeconds()
        let a=tar.classList.toggle("checked")
        if(a) {
            alert("Task added to the Completed Section")
            getComp()
            getPen()
        }
        else {
            alert("Task added to the Pending Section.")
            getComp()
            getPen()
        }
        store()
        storeComp()
        storePen()
    }
    if(e.target.tagName=="SPAN")
        {
        e.target.parentElement.remove();
        store()
        getComp()
        getPen()
        storeComp()
        storePen()
    }
})
list.addEventListener("contextmenu",(e)=>{
    e.preventDefault();
    let tar
    if(e.target.tagName=="LI" || e.target.tagName=="DIV"){
        if(e.target.tagName=="LI") tar=e.target
        else tar=e.target.parentElement
        listEle=tar
        if(db.style.display=="block") db.style.display="none"
        else{
            db.style.display="block"
            db.style.top=`${e.clientY-10}px`
            db.style.left=`${e.clientX-10}px`
    
        }

    }
})
editTitle.addEventListener("click",()=>{
    let obj=new Date()
    let a1=listEle.children[1]
    a1.innerHTML = obj.getDate()+"/"+(obj.getMonth()+1)+"/"+obj.getFullYear()+","+obj.getHours()+":"+obj.getMinutes()+":"+obj.getSeconds()
    let value=prompt("Enter the title")
    listEle.childNodes[0].data=value
    getComp()
    getPen()
    store()
    storeComp()
    storePen()
})
editDateTime.addEventListener("click",()=>{
    let value=prompt("Enter the date and time")
    listEle.childNodes[2].innerText=value
    getComp()
    getPen()
    store()
    storeComp()
    storePen()
})
del.addEventListener("click",()=>{
    listEle.remove()
    getComp()
    getPen()
    store()
    storeComp()
    storePen()
})
markc.addEventListener("click",(e)=>{
    let obj=new Date()
    let a1=listEle.children[1]
    if(!listEle.classList.contains("checked")){
    a1.innerHTML = obj.getDate()+"/"+(obj.getMonth()+1)+"/"+obj.getFullYear()+","+obj.getHours()+":"+obj.getMinutes()+":"+obj.getSeconds()
    let a=listEle.classList.toggle("checked")
    alert("Task added to the Completed Section")
    getComp()
    getPen()
    store()
    storeComp()
    storePen()
    }
    else 
    alert("Already marked complete")
})
marki.addEventListener("click",()=>{
    let obj=new Date()
    let a1=listEle.children[1]
    if(listEle.classList.contains("checked")){
        a1.innerHTML = obj.getDate()+"/"(+obj.getMonth()+1)+"/"+obj.getFullYear()+","+obj.getHours()+":"+obj.getMinutes()+":"+obj.getSeconds()
        let a=listEle.classList.toggle("checked")
        alert("Task added to the Pending Section")
        getComp()
        getPen()
        store()
        storeComp()
        storePen()
    }
    else 
    alert("Already marked incomplete")
})
comp.addEventListener("click",(e)=>{
    if(e.target.tagName=="SPAN"){
        e.target.parentElement.remove()
        storeComp()
    }
})
pen.addEventListener("click",(e)=>{
    if(e.target.tagName=="SPAN"){
        e.target.parentElement.remove()
        storePen()
    }
})
let add=document.getElementById("add");
let inp=document.getElementById("inp")
add.addEventListener("click",()=>{
    if(inp.value==""){
        alert("Title Name can't be empty!!")
    }
    else{
        let ele=document.createElement("li");
        ele.innerHTML=inp.value
        let span=document.createElement("span")
        let div=document.createElement("div")
        span.id="s1"
        ele.append(span)
        ele.append(div)
        let obj=new Date()
        div.innerHTML=obj.getDate()+"/"+(obj.getMonth()+1)+"/"+obj.getFullYear()+","+obj.getHours()+":"+obj.getMinutes()+":"+obj.getSeconds()
        list.append(ele);
        getPen()
        alert("Task added to the Pending Section")
    }
    inp.value=""
    store();
    storeComp()
    storePen()
    
})
function getComp(){
    comp.innerHTML=""
    let arr=list.children;
    for(let i=0;i<arr.length;i++){
        if(arr[i].classList.contains("checked")){
            let compEle=document.createElement("li");
            compEle.innerHTML=arr[i].innerHTML
            compEle.classList.add("checked")
            comp.append(compEle)
        }
    }
    comp.hidden=true
}
function getPen(){
    pen.innerHTML=""
    let arr=list.children;
    for(let i=0;i<arr.length;i++){
        if(!arr[i].classList.contains("checked")){
            let penEle=document.createElement("li");
            penEle.innerHTML=arr[i].innerHTML
            pen.append(penEle)
        }
    }
    pen.hidden=true
}
