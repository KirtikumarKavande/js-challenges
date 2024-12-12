let images=["https://images.unsplash.com/photo-1733888749404-20cf6133e1b1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1fHx8ZW58MHx8fHx8","https://images.unsplash.com/photo-1733863200891-22bba4483644?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0fHx8ZW58MHx8fHx8","https://images.unsplash.com/photo-1733886772949-fff9a0885591?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw3fHx8ZW58MHx8fHx8"]
let imgContainer=document.getElementById("imgContainer")
let index=-1
setInterval(()=>{
imgContainer.innerHTML=""
let img=document.createElement("img")
 index=(index+1) % images.length
img.src=images[index]
imgContainer.append(img)

},2000)