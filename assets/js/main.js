// Guarda os elementos que serão usados para abrir, fechar e navegar pelo menu.
const menu = document.getElementById('mobile-menu');
const botaoAbrir = document.getElementById('menu-toggle');
const botaoFechar = document.getElementById('menu-close');
const linkAgendamento = document.getElementById('menu-schedule');
const linkLocalizacao = document.getElementById('menu-location');
const linkContato = document.getElementById('menu-contact');

// Mostra o menu lateral na tela.
function abrirMenu() {
    menu.classList.add('aberto');
}

// Esconde o menu lateral quando o visitante termina de usar.
function fecharMenu() {
    menu.classList.remove('aberto');
}

// Eventos principais dos botões do menu.
botaoAbrir.addEventListener('click', abrirMenu);
botaoFechar.addEventListener('click', fecharMenu);

// Os links externos fecham o menu antes de abrir o destino.
linkAgendamento.addEventListener('click', fecharMenu);
linkLocalizacao.addEventListener('click', fecharMenu);
linkContato.addEventListener('click', fecharMenu);
