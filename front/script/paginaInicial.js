// Script para a página inicial do Dragon Ball World

function Iniciar(){
    setTimeout(() => {
    let recepcao = document.querySelector('#main')
    recepcao.innerHTML = `good to see you!`
    setTimeout(() => {
        recepcao.innerHTML = `Wellcome to the Dragon Ball World!`
        setTimeout(() => {
            window.location.href = 'login.html'
        },3000)
    }, 1500)
}, 1000)}
Iniciar()