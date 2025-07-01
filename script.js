// Seleciona o elemento da barra de navegação pelo seu seletor de classe
let navbar = document.querySelector('.navbar');
// Seleciona todas as seções do documento
let sections = document.querySelectorAll('section');
// Seleciona todos os links de navegação dentro do cabeçalho
let navLinks = document.querySelectorAll('header nav a');
// Seleciona o elemento do logotipo
let logo = document.querySelector('.logo');
// Seleciona o formulário pelo seu ID
let form = document.getElementById('form');
// Seleciona todos os campos de input com a classe 'required'
let fields = document.querySelectorAll('.required');
// Seleciona todos os spans com a classe 'span-required' (usados para mensagens de erro)
let spans = document.querySelectorAll('.span-required');
// Expressão regular para validar formato de e-mail
let emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
// Expressão regular para validar formato de telefone brasileiro (com ou sem DDI +55, parênteses, etc.)
let phoneRegex = /^(?:\+?55\s?)?\(?\d{2}\)?[\s.-]?\d{4,5}[-.\s]?\d{4}$/;

// Adiciona um ouvinte de evento para o envio do formulário
form.addEventListener('submit', (event) => {
  // Previne o comportamento padrão de envio do formulário (que recarregaria a página)
  event.preventDefault();
  // Chama as funções de validação para cada campo e armazena seus resultados booleanos
  let isNameValid = nameValidate();
  let isEmailValid = emailValidate();
  let isPhoneValid = phoneValidate();
  let isSubjectValid = subjectValidate();
  let isMessageValid = messageValidate();

  // Se todos os campos forem válidos (todas as validações retornarem true)
  if (isNameValid && isEmailValid && isPhoneValid && isSubjectValid && isMessageValid) {
    // Exibe um alerta de sucesso para o usuário
    alert('Mensagem enviada com sucesso! Agradeço o contato!')
    // Reinicia (limpa) todos os campos do formulário
    form.reset();
  }
});

// Função para validar o campo de mensagem
function messageValidate() {
  // Verifica se o comprimento do valor do campo de mensagem (índice 4 no array fields) é menor que 30 caracteres
  if (fields[4].value.length < 30) {
    // Se for menor, aplica o estilo de erro (borda vermelha e span visível)
    setError(4);
    // Retorna false, indicando que a validação falhou
    return false;
  } else {
    // Caso contrário, remove o estilo de erro
    removeError(4);
    // Retorna true, indicando que a validação foi bem-sucedida
    return true;
  }
};

// Função para validar o campo de assunto
function subjectValidate() {
  // Verifica se o comprimento do valor do campo de assunto (índice 3 no array fields) é menor que 1 (ou seja, está vazio)
  if (fields[3].value.length < 1) {
    // Se estiver vazio, aplica o estilo de erro
    setError(3);
    // Retorna false
    return false;
  } else {
    // Caso contrário, remove o estilo de erro
    removeError(3);
    // Retorna true
    return true;
  }
};

// Função para validar o campo de telefone
function phoneValidate() {
  // Testa o valor do campo de telefone (índice 2 no array fields) contra a expressão regular phoneRegex
  if (phoneRegex.test(fields[2].value)) {
    // Se corresponder à regex, remove o estilo de erro
    removeError(2);
    // Retorna true
    return true;
  } else {
    // Caso contrário, aplica o estilo de erro
    setError(2);
    // Retorna false
    return false;
  }
};

// Função para validar o campo de e-mail
function emailValidate() {
  // Testa o valor do campo de e-mail (índice 1 no array fields) contra a expressão regular emailRegex
  if (emailRegex.test(fields[1].value)) {
    // Se corresponder à regex, remove o estilo de erro
    removeError(1);
    // Retorna true
    return true;
  } else {
    // Caso contrário, aplica o estilo de erro
    setError(1);
    // Retorna false
    return false;
  }
};

// Função para validar o campo de nome
function nameValidate() {
  // Verifica se o comprimento do valor do campo de nome (índice 0 no array fields) é menor que 3 caracteres
  if (fields[0].value.length < 3) {
    // Se for menor, aplica o estilo de erro
    setError(0);
    // Retorna false
    return false;
  } else {
    // Caso contrário, remove o estilo de erro
    removeError(0);
    // Retorna true
    return true;
  }
};

// Função para aplicar estilos de erro a um campo específico
function setError(index) {
  // Define a borda do campo para 2px sólido vermelho
  fields[index].style.border = '2px solid #d84b57';
  // Torna o span de mensagem de erro visível
  spans[index].style.display = 'block';
};

// Função para remover estilos de erro de um campo específico
function removeError(index) {
  // Remove o estilo de borda do campo (volta ao padrão)
  fields[index].style.border = '';
  // Oculta o span de mensagem de erro
  spans[index].style.display = 'none';
};

// Adiciona um ouvinte de evento para o evento de rolagem da janela
window.onscroll = () => {
  // Itera sobre cada seção do documento
  sections.forEach(sec => {
    // Obtém a posição atual da rolagem vertical da janela
    let top = window.scrollY;
    // Calcula o offset superior da seção menos um valor para ajuste visual
    let offset = sec.offsetTop - 150;
    // Obtém a altura da seção
    let height = sec.offsetHeight;
    // Obtém o ID da seção
    let id = sec.getAttribute('id');

    // Verifica se a posição de rolagem está dentro dos limites da seção atual
    if (top >= offset && top < offset + height) {
      // Remove a classe 'active' de todos os links de navegação
      navLinks.forEach(link => {
        link.classList.remove('active');
      });
      // Seleciona o link de navegação correspondente ao ID da seção atual
      let activeLink = document.querySelector(`header nav a[href="#${id}"]`);
      // Se o link for encontrado, adiciona a classe 'active' a ele
      if (activeLink) activeLink.classList.add('active');
    }
  });
};

// Adiciona um ouvinte de evento para o clique no logotipo
logo.onclick = () => {
  // Alterna a classe '.active' no logotipo (o efeito visual não é definido no CSS fornecido)
  logo.classList.toggle('.active');
};