const chimi = document.querySelector('.chimi')
const menu = document.querySelector('.menu-navegacion')


chimi.addEventListener('click', ()=>{
    menu.classList.toggle("spread")
})

window.addEventListener('click', e => {
    if(menu.classList.contains('spread') && e.target != menu && e.target != chimi){
        menu.classList.toggle("spread")
    }
})