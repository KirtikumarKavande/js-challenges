let container=document.getElementById("container")

let numberOfInputRequired=4
let currentInputFocused=0
for (let index = 0; index < numberOfInputRequired; index++) {
    let input=document.createElement('input')
    input.addEventListener('input',(e)=>{
        if(e.target.value.length>1){
            e.target.value=e.target.value.slice(0,1)
        }
        if(e.target.value && +e.target.id+1 <numberOfInputRequired){
           
          let nextInput= document.getElementById (`${+e.target.id+1}`)
          nextInput.focus()
        }
    })
    input.setAttribute("id",index)

   
    container.appendChild(input)
}

let firstEle=document.querySelector("[id='0']")
firstEle.focus()



