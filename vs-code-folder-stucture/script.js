let input=document.getElementById('folder-input')
let addBtn=document.getElementById('add-btn')
let mainThread=document.getElementById('main-thread')
let folderSet=[{name:"xyz",children:[{name:"jkl",children:[],id: 287},{name:"lmn",children:[],id: 18797}],id: 1233},{name:"rtf",children:[],id: 432422}]

addBtn.addEventListener('click',function(e){
    folderSet.push({name:input.value,children:[],id: Date.now()})
    renderData(folderSet)
})
function placeDataAtRightPosition(folderSet,parentEle,itemToBeAdded) {
    console.log("hiii")
    folderSet.forEach(element => {
        if(element.id===parentEle.id){
            element.children.push(itemToBeAdded)
        }else{
            if(element.children.length>0){
                placeDataAtRightPosition(element.children,parentEle,itemToBeAdded)

            }
        }
    });
 
}
function renderData(folder,level=0) {
    folder.forEach((item)=>{
        let mainDiv=document.createElement('div')
        let div=document.createElement('div')
        let btn=document.createElement('button')
        let input =document.createElement('input')
        btn.textContent="Add"
        let isShowInput=false
        btn.addEventListener("click",()=>{
            if(!isShowInput){
                mainDiv.appendChild(input)
                isShowInput=true
            }else{
                placeDataAtRightPosition(folderSet,item,{name:input.value,children:[],id: Date.now()})
                mainDiv.removeChild(input)
                mainThread.innerHTML=""
                renderData(folderSet)
            }
        })
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

