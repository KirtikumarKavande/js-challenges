document.addEventListener('DOMContentLoaded', function () {
    showButton(0)
    paginationFn(0)

  })
  
  let data = Array(200).fill(0).map((_, i) => `Item ${i + 1}`);
  
let noOfBtnPerPage = Math.floor(data.length / 5)
let currentBtnClicked = 0
let btnArray=[]
let btnList = document.getElementById("btn-list")

  function showButton(currentPage){

    for (let i = currentPage>4?currentPage-4:0; i <(currentPage+4<noOfBtnPerPage?currentPage+4:noOfBtnPerPage); i++) {
      
      let btns = document.createElement("button")
      btns.textContent = i + 1
      btnList.appendChild(btns)
    }

  }
  

    let listContainer = document.getElementById("paginated-data")
      function paginationFn(currentBtnClicked) {
    let slicedData = data.slice(currentBtnClicked * 5, (currentBtnClicked + 1) * 5)
    slicedData.forEach((item) => { 
      let eachElement = document.createElement('div')
      eachElement.textContent = item
      console.log(eachElement)
      listContainer.appendChild(eachElement)
  
    })
  }
  btnList.addEventListener('click', function (e) {
    listContainer.innerHTML = ''
    currentBtnClicked = e.target.textContent - 1
    btnList.innerHTML = ''

    showButton(currentBtnClicked)

    paginationFn(currentBtnClicked)
      
  })

  document.getElementById('start').addEventListener('click', function () {
    listContainer.innerHTML = ''
    currentBtnClicked=currentBtnClicked-1
    btnList.innerHTML = ''

    showButton(currentBtnClicked)
    paginationFn(currentBtnClicked)
  })

  document.getElementById('end').addEventListener('click', function () {
    listContainer.innerHTML = ''
    currentBtnClicked=currentBtnClicked+1
    btnList.innerHTML = ''

    showButton(currentBtnClicked)
    paginationFn(currentBtnClicked)
  })