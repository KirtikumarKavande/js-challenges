// [{name:"",children:[]}]
let input=document.getElementById('folder-input')
let addBtn=document.getElementById('add-btn')
let mainThread=document.getElementById('main-thread')
let folderSet=[{name:"xyz",children:[{name:"jkl",children:[],id: 1},{name:"lmn",children:[],id: 1}],id: 1},{name:"rtf",children:[],id: 2}]

addBtn.addEventListener('click',function(e){
console.log( Date.now())
    folderSet.push({name:input.value,children:[],id: Date.now()})
   renderData(folderSet)
})


function renderData(folderSet,level=0) {
    folderSet.forEach((item)=>{
        let mainDiv=document.createElement('div')
        let div=document.createElement('div')
        let btn=document.createElement('button')
        btn.textContent="add"
        div.textContent=item.name
        mainDiv.appendChild(div)
        mainDiv.appendChild(btn)
        mainDiv.style.marginLeft=`${level*50}px`
        mainDiv.style.display="flex"

        mainThread.appendChild(mainDiv)
        if(item.children.length>0){
            renderData(item.children,level+1)
        }
        
    })
   
    
}

// function reRenderList(){
//     console.log(folderSet)
//     mainThread.innerHTML=""
//     folderSet.forEach((item)=>{
//     let mainDiv=document.createElement('div')
//     let div=document.createElement('div')
//     let btn=document.createElement('button')
//     btn.setAttribute("isOpen","closed")
//     btn.addEventListener('click',function(e){
        
//         if(btn.getAttribute("isOpen")==="closed"){
//            let input= document.createElement('input')
//             mainDiv.appendChild(input)
            
//             btn.setAttribute("isOpen","opened")
//         }else{
            
//         }
      

//     })
//     mainDiv.style.display="flex"
//     btn.textContent="add"
//         div.textContent=item.name
//         mainDiv.appendChild(div)
//         mainDiv.appendChild(btn)

//         mainThread.appendChild(mainDiv)
//     })
// }