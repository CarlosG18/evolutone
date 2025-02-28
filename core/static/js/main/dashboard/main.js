const button_barra_lateral = document.getElementById('btn-barra-lateral')

button_barra_lateral.addEventListener('click', ativar_animacao)

function ativar_animacao(){
    const navbar = document.getElementById("navbar")

    navbar.classList.add('animation');
}

