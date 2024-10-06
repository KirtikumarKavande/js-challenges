let input = document.getElementById('searchBox')
let debounced = debounce()
input.addEventListener('input', (e) => {
    debounced(e.target.value, function cb(value) {
        console.log(value)
    })
})
function debounce() {
    let id;
    return (text,fn) => {
        id && clearTimeout(id)
        id= setTimeout(() => {
            fn(text)
        }, 2000)
          }
}