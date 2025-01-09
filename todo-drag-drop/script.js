/* input submit
column->todo pending done
  Element: draggable, event-->DragStart,DragOver, DragSTop
  
  */

let todoList = {
  todo: [{ title: "crciket", status: "todo", id: Date.now() }],
  pending: [{ title: "hockey", status: "pending", id: Date.now() }],
  done: [{ title: "football", status: "done", id: Date.now() }]



}
let todoItem = document.getElementById("todoItem")
let pendingItem = document.getElementById("pendingItem")
let doneItem = document.getElementById("doneItem")
let draggedElement = null


document.querySelectorAll(".column").forEach((item) => {
  item.addEventListener('dragover', (e) => {
    e.preventDefault()
  })
  item.addEventListener('drop', (e) => {

    e.target.id
    todoList[e.target.id].push(draggedElement)
    let filtered = todoList[draggedElement.status].filter((item)=> item.id!==draggedElement.id)
    todoList[draggedElement.status] = filtered
    renderTodos()
  })
})


  renderTodos()
  function renderTodos() {

    todoItem.innerHTML = ""
    pendingItem.innerHTML = ""
    doneItem.innerHTML = ""

    function listRenderer(status, item) {
      console.log(todoList, status)
      todoList[status].forEach(element => {
        let div = document.createElement('div')
        div.draggable = true
        div.textContent = element.title
        div.addEventListener('dragstart', (e) => {
          draggedElement=element
        })
        item.appendChild(div)
      });
    }
    listRenderer("todo", todoItem)
    listRenderer("pending", pendingItem)
    listRenderer("done", doneItem)


  }

  let btn = document.getElementById("btn")

  btn.addEventListener('click', (e) => {
    let input = document.getElementById("input")
    todoList["todo"].push({ title: input.value, status: "todo", id: Date.now() })
    renderTodos()
  })

  let pending = document.getElementById("pending")
// pending.addEventListener('drag')