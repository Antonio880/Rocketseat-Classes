/*let h1 = document.querySelector('h1')

h1.addEventListener('mouseover', print)

function print() {
    console.log('print')
}

let h1 = document.querySelector('h1')

h1.onclick = print

function print() {
    console.log('print')
}*/

let input = document.querySelector('input')

input.onkeydown = function(event) {
    console.log(event.currentTarget.value)
}