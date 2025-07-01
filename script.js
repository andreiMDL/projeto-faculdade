let navbar = document.querySelector('.navbar');
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');
let logo = document.querySelector('.logo');
let form = document.getElementById('form');
let fields = document.querySelectorAll('.required');
let spans =document.querySelectorAll('.span-required');
let emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
let phoneRegex = /^(?:\+?55\s?)?\(?\d{2}\)?[\s.-]?\d{4,5}[-.\s]?\d{4}$/;

form.addEventListener('submit', (event) => {
  event.preventDefault();
  let isNameValid = nameValidate();
  let isEmailValid = emailValidate();
  let isPhoneValid = phoneValidate();
  let isSubjectValid = subjectValidate();
  let isMessageValid = messageValidate();

  if (isNameValid && isEmailValid && isPhoneValid && isSubjectValid && isMessageValid) {
    alert('Mensagem enviada com sucesso! Agradeço o contato!')
    form.reset();
  }
});

function messageValidate() {
  if(fields[4].value.length < 30) {
    setError(4);
    return false;
  }
  else {
    removeError(4);
    return true;
  }
};

function subjectValidate() {
  if(fields[3].value.length < 1) {
    setError(3);
    return false;
  }
  else {
    removeError(3);
    return true;
  }
};

function phoneValidate() {
  if(phoneRegex.test(fields[2].value)) {
    removeError(2);
    return true;
  }
  else {
    setError(2);
    return false;
  }
};

function emailValidate() {
  if(emailRegex.test(fields[1].value)) {
    removeError(1);
    return true;
  }
  else {
    setError(1);
    return false;
  }
};

function nameValidate() {
  if(fields[0].value.length < 3) {
    setError(0);
    return false;
  }
  else {
    removeError(0);
    return true;
  }
};

function setError(index) {
  fields[index].style.border = '2px solid #d84b57';
  spans[index].style.display = 'block';
};

function removeError(index) {
  fields[index].style.border = '';
  spans[index].style.display = 'none';
};

window.onscroll = () => {
  sections.forEach(sec => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');

    if (top >= offset && top < offset + height) {
      navLinks.forEach(link => {
        link.classList.remove('active');
      });
      let activeLink = document.querySelector(`header nav a[href="#${id}"]`);
      if (activeLink) activeLink.classList.add('active');
    }
  });
};

logo.onclick = () => {
  logo.classList.toggle('.active');
};