const email     = document.querySelector('#authentication-form #email');
const password  = document.querySelector('#authentication-form #password');
const auth_form = document.querySelector("#authentication-form");


const login = (form, email, password) => {
    console.log(form, email, password)
}

auth_form.addEventListener('submit', (e) => {
    e.preventDefault(); 
    login(e.target, email.value, password.value);   
}) 

