document.addEventListener('DOMContentLoaded', function() {
    // Atualiza o ano automaticamente no footer
    const copyrightElement = document.getElementById('copyright');
    if (copyrightElement) {
        const currentYear = new Date().getFullYear();                                                              
        copyrightElement.textContent = `© ${currentYear} João Pedro Macena Correa. Todos os direitos reservados.`; 
    }

    // Seção dos filtros para os projetos
    const botoesFiltro = document.querySelectorAll('.botaoFiltro'); // Corrigido de .btn-filtro para .botaoFiltro
    const todosProjetos = document.querySelectorAll('.projetosCaixas');
    const blocosCategoria = document.querySelectorAll('.categoriaDosProjetos');

    botoesFiltro.forEach(botao => {
        botao.addEventListener('click', function() {
            botoesFiltro.forEach(b => b.classList.remove('ativo')); 
            this.classList.add('ativo');

            const filtroSelecionado = this.getAttribute('data-filter');

            todosProjetos.forEach(projeto => {
                const tecnologias = projeto.getAttribute('data-tech') || "";
                const periodo = projeto.getAttribute('data-periodo') || "";

                if (filtroSelecionado === 'todos' || tecnologias.includes(filtroSelecionado) || periodo.includes(filtroSelecionado)) {
                    projeto.classList.remove('escondido');
                } else {
                    projeto.classList.add('escondido');
                }
            });

            blocosCategoria.forEach(bloco => {
                const projetosNoBloco = bloco.querySelectorAll('.projetosCaixas:not(.escondido)');
                if(projetosNoBloco.length === 0) {
                    bloco.style.display = 'none';
                } else {
                    bloco.style.display = 'block';
                }
            });
        });
    });
});

function revelarElementos() {
        const elementos = document.querySelectorAll('.reveal');
        const alturaJanela = window.innerHeight;
        const pontoDeRevelacao = 100; // Distância do fundo da tela

        elementos.forEach(elemento => {
            const topoElemento = elemento.getBoundingClientRect().top;
            if (topoElemento < alturaJanela - pontoDeRevelacao) {
                elemento.classList.add('ativo');
            }
        });
    }

    window.addEventListener('scroll', revelarElementos);
    revelarElementos();
