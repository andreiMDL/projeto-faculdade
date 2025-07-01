Documentação Técnica - Portfolio Pessoal 🚀
Este projeto consiste na criação de um portfólio pessoal responsivo, desenvolvido com HTML5, CSS3 e JavaScript, com o objetivo de apresentar habilidades, projetos e formas de contato. A navegação entre as páginas é fluida e amigável, com foco na experiência do usuário e na aplicação prática dos conhecimentos da disciplina.

Estrutura de Páginas 📂
O website é composto por quatro páginas interligadas:

Home (home.html): Apresentação pessoal e redes sociais. 👋

Habilidades (habilidades.html): Tecnologias com ícones visuais. 💻

Projetos (projetos.html): Galeria de projetos com links para o GitHub Pages. ✨

Contato (contato.html): Formulário com validação. ✉️

Tecnologias Utilizadas 🛠️
HTML5

CSS3

JavaScript Vanilla

Font Awesome

Devicons

Google Fonts (Poppins)

Media Queries

Responsividade 📱💻
O layout se adapta perfeitamente a desktops, tablets e celulares, com media queries específicas e ocultação de elementos como imagens em telas pequenas. O body inclusive tem uma imagem de fundo diferente para dispositivos móveis (assets/bg-green-mobile.png).

Navegação 🗺️
O menu está presente em todas as páginas com destaque para a seção ativa. Em dispositivos móveis, a navegação se adapta.

Formulário com Validação ✅
O formulário na página de Contato (contato.html) possui validações para nome, e-mail, telefone, assunto e mensagem. As validações utilizam expressões regulares para e-mail e telefone, e lógica condicional para verificar o comprimento ou se os campos não estão vazios. Em caso de erro, uma mensagem de span-required é exibida.

Efeitos Interativos com JavaScript 💡
Validação Dinâmica do Formulário: Os campos do formulário na página de contato são validados dinamicamente à medida que o usuário digita ou tenta enviar o formulário, fornecendo feedback visual para entradas inválidas.

Scrollspy para Destacar o Item do Menu: A navegação da barra de cabeçalho atualiza a classe active em seus links com base na seção que está visível na tela, criando um efeito de "scrollspy".

SEO Básico Aplicado 🔍
O projeto utiliza tags semânticas, títulos únicos para cada página (<title>MyPortfolio-Home</title>, <title>MyPortfolio-Habilidades</title>, etc.), texto alternativo em imagens (alt) e a meta tag viewport para responsividade.

Design e Estilo 🎨
O layout é predominantemente escuro (--bg-color: #080808;), com cores em destaque utilizando gradientes (--main-color: #00ffee; e linear-gradient). Existem animações com keyframes (como slideUp para o texto animado na home e image-appear para as seções) e transições visuais em elementos interativos como links e ícones. A tipografia é moderna, utilizando a fonte "Poppins" do Google Fonts.

Arquitetura do Código 🏗️
O projeto segue uma separação clara entre a estrutura (HTML), o estilo (CSS) e o comportamento (JavaScript). Os códigos são organizados e reutilizáveis, com estilos definidos em style.css e scripts em script.js.

Desafios Enfrentados 🚧
A adaptação para telas pequenas, a validação robusta de formulário sem bibliotecas externas e o refinamento visual sem frameworks externos foram desafios no desenvolvimento deste projeto.

Conclusão 🎉
Este projeto demonstra domínio de HTML, CSS e JavaScript, além de boas práticas de SEO, acessibilidade e design responsivo.
