document.addEventListener ('DOMContentLoaded', function () {
    const buttons = document.querySelectorAll('[data-tab-button]');
    console.log(buttons);

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