let button = document.querySelector('.btn-modal')
let modalWindow = document.querySelector('.modal')
let onClose = document.querySelector('.modal__close')

button.addEventListener('click', (event) => {
    event.preventDefault()
    modalWindow.style.display = 'block'


})
onClose.addEventListener('click', () => {
    modalWindow.style.display = 'none'
})
window.onclick = (event) => {
    if (event.target === modalWindow) {
        modalWindow.style.display = 'none'
    }
}