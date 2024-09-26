const themeToggle = document.getElementById('themeToggle');
// constante do tema theme toggle = alternar tema no documento pegando  o elemento pelo id = themetoggle mudar tema
const scrollToTopBtn = document.getElementById('scrollToTop');
// constante imutavel = const, scrolltotop = pegar do documento pegando o elemento pelo id scrolltotop do html, que não funcionou mas era pra scrolar a pagina de lá de baixo para cima

const body = document.body;
// constante imutavel do body = documento.corpo do site

themeToggle.addEventListener('click', () => {
    // alternar tema com o click, com a programação do java escutando(addeventlistener) com a função click
    body.classList.toggle('dark');
    // alternando o corpo do site a classe lista alternar para o tema escuro
});

// Validação de e-mail
const emailInput = document.getElementById('email');
// constante imutavel de inserir email 
// ao colocar email no documento, pegar elemento pelo id email = email do usuario
const emailFeedback = document.getElementById('emailFeedback');
// constante imutavel do email = dar um feedaback para o usuario ao colocar o email puxando pelo id emailfeedback do html

emailInput.addEventListener('input', () => {   
    // o emailinput da constante emailinput
    const emailValue = emailInput.value;
    const isValid = /\\S+@\\S+\\.\\S+/.test(emailValue);
    // confirmar se o email é valido
    emailFeedback.textContent = isValid ? 'E-mail válido!' : 'E-mail inválido!';
    // confirmar para o usuario se o email é valido ou invalido com base nos caracteres especiais
});

// Scroll suave para voltar ao início que não funcionou 
window.onscroll = () => {
    scrollToTopBtn.style.display = document.documentElement.scrollTop > 100 ? 'block' : 'none';
};

scrollToTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Menu hambúrguer
//Variavel com alteração de arquivo documento HTMML utilizando o DOM, pegando o elemento pelo ID menuToggle descrito no HTML (escrito pela professora) constante não mutaveis pegando do documento o elemento pelo id menutoggle e navList
const menuToggle = document.getElementById('menuToggle');
const navList = document.getElementById('navList');


// funções para trocar a cor do menu, no click e quando clicar = ('aparecer') 
menuToggle.addEventListener('click', () => { 
    navList.classList.toggle('show');
}); 