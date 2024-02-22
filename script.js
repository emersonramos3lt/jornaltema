const chk = document.getElementById('chk')
// Olha se o modo noturno está ativado
const isDarkMode = localStorage.getItem('darkMode') === 'true'
// verifica o estado do tema no carregamento, fazendo que quando a pessoa entre na 2 pagina ela continua no modo dark/claro
if (isDarkMode) {
    document.body.classList.add('dark')
    chk.checked = true
}

chk.addEventListener('change', () => {
    // Altera o tema
    document.body.classList.toggle('dark')
    // salva o estado noturno ou claro dependendo do que você escolher
    localStorage.setItem('darkMode', chk.checked)
})

window.sr = ScrollReveal ({reset: true});