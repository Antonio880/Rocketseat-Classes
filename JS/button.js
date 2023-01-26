let button = document.getElementById('openModel')
let site = document.querySelector('.modal-wrapper')

button.onclick = function() {
    site.classList.remove('invisible')
}

document.addEventListener('keydown', function(event) {
    console.log(event)
    const isEscKey = event.key === 'Escape';
    if(isEscKey){
        site.classList.add('invisible')
    }
}
)