const count = document.querySelector('.count')


let contador = 0
const idIterval = setInterval(() => {
    count.innerHTML = `${contador}<span>%</span>`
    if (contador >= 100) {
        clearInterval(idIterval)
    }
    contador = contador + 1
}, 15)

window.addEventListener('load', ()=> {
    const blurStyle = document.querySelector('.blur').classList.add('noBlur');
    const count = document.querySelector('.count').classList.add('noColor')
});