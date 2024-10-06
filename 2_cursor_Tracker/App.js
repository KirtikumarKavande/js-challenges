const cursor = document.querySelector('.circular-circle');
const body = document.querySelector('body');
const colors = [
    '#FF6633',
    '#FFB399',
    '#FF33FF',
    '#FFFF99',
    '#00B3E6',
    '#E6B333',
    '#3366E6',
    '#999966',
    '#99FF99',
    '#B34D4D',
];
let throttle = true
document.addEventListener('mousemove', (event) => {
    if (throttle) {
        throttle = false
        moveCursor(event.clientX, event.clientY)

        setTimeout(() => {
            throttle = true
        }, 2000)
    }


})
document.addEventListener('click', (event) => {
    drawSquare(event.clientX, event.clientY)
})
function moveCursor(left, top) {
    cursor.style.left = left
    cursor.style.top = top
    let randomColorIndex = Math.floor(Math.random() * colors.length)
    cursor.style.backgroundColor = colors[randomColorIndex]


}
function drawSquare(left, top) {
    let div = document.createElement('div')

    div.classList.add("squareStyle")
    div.style.left = left + "px"

    div.style.top = top + "px"
    body.appendChild(div)


}