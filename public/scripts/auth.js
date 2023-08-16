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


const checkIfLogin = () => {
    // const navigations = {
    //     auth: '/public/pages/auth.html'
    // }
    
    // const isAuth = window.sessionStorage.getItem('data-chathub-is-auth');
    
    
    // if(!isAuth) window.location.href = navigations.auth;
    
}
