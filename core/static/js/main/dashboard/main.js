const button_barra_lateral = document.getElementById('btn-barra-lateral')
const dashboard_body = document.getElementById('dashboard-body')
const nav_search = document.getElementById('nav-search')

button_barra_lateral.addEventListener('click', ativar_animacao)

function ativar_animacao(){
    const navbar = document.getElementById("navbar")

    navbar.classList.add('animation');
    dashboard_body.classList.add('animation-body');
    nav_search.classList.add('animation-body');
}

