const botao = document.getElementById('botao-tema');
const body = document.body;

// Persistência do tema 
const temaSalvo = localStorage.getItem('tema');
temaEscuro(temaSalvo === 'escuro');

// Função para alternar entre tema claro e escuro 
function temaEscuro(tipo) {
    if (tipo == true) {
        body.classList.add('escuro');
        botao.innerHTML = '<i class="fa-solid fa-sun"></i>';
    } else {
        body.classList.remove('escuro');
        botao.innerHTML = '<i class="fa-solid fa-moon"></i>';
    }
}

botao.addEventListener('click', () => {
    const isescuro = body.classList.toggle('escuro');
    temaEscuro(isescuro);
    localStorage.setItem('tema', isescuro ? 'escuro' : 'claro');
});
