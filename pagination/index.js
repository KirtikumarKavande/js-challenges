let data = Array(200).fill("").map((i, index) => `item ${index + 1}`)

document.addEventListener('DOMContentLoaded', function () {
  fetchData(35)
})
document.addEventListener('scroll',onScroll)

let dataFetchedCount = 0
let dataContainer = document.getElementById("paginated-data")
let paginatedData = []
function fetchData(length) {
  let currentData = data.slice(dataFetchedCount, dataFetchedCount+length)
  dataFetchedCount = dataFetchedCount + length

  dataContainer.innerHTML = ""
  paginatedData = [...paginatedData, ...currentData]
  for (let i = 0; i < paginatedData.length; i++) {
    let div = document.createElement("div")
    div.textContent = paginatedData[i]

    dataContainer.appendChild(div)
  }
}

function onScroll(){
let {scrollTop,clientHeight,scrollHeight}= document.documentElement
if(clientHeight+scrollTop>=scrollHeight){
  fetchData(10)
}
}