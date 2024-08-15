const words = ['Love', 'Jhakaas', 'mast', 'Weird']
const typedTextSpan = document.querySelector(".typed-text");
const cursorSpan = document.querySelector(".cursor");

let currentLetterIndex = 0
let currentWordIndex = 0
let deleteFlag = false


function delay() {
    return new Promise((res) => {
        setTimeout(() => {
            res()
        }, 1000)
    })
}

function type() {
    typedTextSpan.textContent = words[currentWordIndex].substring(0, currentLetterIndex)

    if (!deleteFlag && currentLetterIndex !== words[currentWordIndex].length) {
        delay().then(() => {
            currentLetterIndex++
            if (currentLetterIndex === words[currentWordIndex].length) {
                deleteFlag = true
            }
            type()
        })
    } else if (deleteFlag) {
        deleteFlag = true
        delay().then(() => {
            console.log(currentWordIndex)
            currentLetterIndex--

            if (currentLetterIndex === 0) {
                currentWordIndex = (currentWordIndex + 1) % words.length
                deleteFlag = false
            }
            type()
        })

    }
}

type()