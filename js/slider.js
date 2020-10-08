//slider
let btnLeft = document.querySelector('.slider__btn-left')
let btnRight = document.querySelector('.slider__btn-right')
let sliderWrapper = document.querySelector('.slider__wrapper')

let left = 0

btnLeft.addEventListener('click', (event) => {
    event.preventDefault()

    left = left - 100

    if (left < -500) {
        left = -500
        btnLeft.style.opacity = '0.5'
    }
    btnRight.style.opacity = '1'

    sliderWrapper.style.left = `${left}px`
})

btnRight.addEventListener('click', (event) => {
    event.preventDefault()

    left = left + 100

    if (left > 0) {
        left = 0
        btnRight.style.opacity = '0.5'

    }
    btnLeft.style.opacity = '1'

    sliderWrapper.style.left = `${left}px`
})



//modal window