// 1. Lógica do Botão de Alternância de Tema (Dark Mode)
const themeToggleBtn = document.getElementById('theme-toggle');
const body = document.body;

themeToggleBtn.addEventListener('click', () => {
    // Adiciona ou remove a classe 'dark-mode' no body
    body.classList.toggle('dark-mode');
    
    // Altera o texto do botão
    if (body.classList.contains('dark-mode')) {
        themeToggleBtn.textContent = '☀️ Light Mode';
    } else {
        themeToggleBtn.textContent = '🌙 Dark Mode';
    }
});

// 2. Renderizar dinamicamente os projetos via dados
const projetosData = [
    {
        id: 1,
        titulo: "Meu Portfólio Base (HTML/CSS/JS)",
        descricao: "Meu primeiro portfólio desenvolvido como projeto de aprendizado, focado em semântica HTML, estilização com CSS puro (Grid/Flexbox) e interatividade com JavaScript.",
        link: "#"
    },
    {
        id: 2,
        titulo: "Portfólio Dinâmico (React)",
        descricao: "Evolução do portfólio base. Refatorado para a biblioteca React usando Vite, com arquitetura baseada em componentes e gerenciamento de estado (useState).",
        link: "#"
    },
    {
        id: 3,
        titulo: "Calculadora Web",
        descricao: "Projeto em desenvolvimento: Uma calculadora funcional construída do zero, aplicando lógica de programação para manipulação de DOM e operações matemáticas.",
        link: "#"
    }
];

const projectsGrid = document.getElementById('projects-grid');

// Percorre o array de projetos e cria o HTML para cada um
projetosData.forEach(projeto => {
    // Cria o elemento div do card
    const card = document.createElement('div');
    card.classList.add('card');
    
    // Preenche o conteúdo HTML do card
    card.innerHTML = `
        <h3>${projeto.titulo}</h3>
        <p>${projeto.descricao}</p>
        <a href="${projeto.link}" target="_blank">Ver Projeto &rarr;</a>
    `;
    
    // Adiciona o card na tela
    projectsGrid.appendChild(card);
});

// 3. Implementar um alerta ao enviar o formulário
const contactForm = document.getElementById('contact-form');

contactForm.addEventListener('submit', function(event) {
    // Impede que a página recarregue ao enviar o formulário
    event.preventDefault();
    
    // Exibe o alerta exigido na atividade
    alert("Obrigada pelo contato! Sua mensagem foi enviada com sucesso.");
    
    // Limpa os campos do formulário
    contactForm.reset();
});