document.addEventListener ('DOMContentLoaded', function () {
    const buttons = document.querySelectorAll('[data-tab-button]');
    const questions = document.querySelectorAll('[data-faq-question]');
    
    // verifica a posicao para aparecer o header
    const heroSection = document.querySelector('.hero');
    const alturahero = heroSection.clientHeight;
    window.addEventListener('scroll', function () {
        const posicaoAtual = window.scrollY;

        if (posicaoAtual < alturahero) {
            ocultaElementosHeader();
        } else {
            exibeElementosHeader();
        }
    })

    // Para as abas
    for (let i = 0; i< buttons.length; i++){
        buttons[i].addEventListener('click', function(botao) {
            const abaAlvo = botao.target.dataset.tabButton;
            const aba = document.querySelector(`[data-tab-id=${abaAlvo}]`)
            escondeTabs();
            aba.classList.add('shows__list--is-active');
            removeBotaoativo();
            botao.target.classList.add('shows__tabs__button--is-active');
        })
    }

    // parte do faq
    for (let i = 0; i< questions.length; i++){
        questions[i].addEventListener('click', abreOuFechaResposta);
    }
})

function escondeTabs() {
    const tabs = document.querySelectorAll('[data-tab-id]');

    for (let index = 0; index < tabs.length; index++) {
        tabs[index].classList.remove('shows__list--is-active');
    }
}

function removeBotaoativo() {
    const buttons = document.querySelectorAll('[data-tab-button]');

    for (let index = 0; index < buttons.length; index++) {
        buttons[index].classList.remove('shows__tabs__button--is-active');
    }
}

function abreOuFechaResposta(elemento) {
    const classe = 'faq__questions__item--is-open';
    const elementoPai = elemento.target.parentNode;

    elementoPai.classList.toggle(classe);
}

function ocultaElementosHeader() {
    const header = document.querySelector('header');
    header.classList.add('header--is-hidden');
}

function exibeElementosHeader() {
    const header = document.querySelector('header');
    header.classList.remove('header--is-hidden');
}