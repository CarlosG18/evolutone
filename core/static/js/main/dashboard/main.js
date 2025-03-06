const button_barra_lateral = document.getElementById('btn-barra-lateral')
const dashboard_body = document.getElementById('dashboard-body')
const nav_search = document.getElementById('nav-search')

button_barra_lateral.addEventListener('click', ativar_animacao)

function ativar_animacao(){
    console.log("dentu")
    const navbar = document.getElementById("navbar")

    if (navbar.classList.contains('ativo')){
        dashboard_body.classList.remove('ativo');
        navbar.classList.remove('ativo');
        navbar.classList.add('animation');
        dashboard_body.classList.add('animation-body');
        nav_search.classList.add('animation-body');
    }else{
        navbar.classList.add('ativo');
        dashboard_body.classList.add('ativo');
        dashboard_body.classList.remove('animation-body');
        nav_search.classList.remove('animation-body');
    }
    
}

