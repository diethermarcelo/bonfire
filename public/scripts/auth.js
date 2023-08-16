const email     = document.querySelector('#authentication-form #email');
const password  = document.querySelector('#authentication-form #password');
const auth_form = document.querySelector("#authentication-form");


const attemptLogin = async (form, email, password) => {
    const userAPI = new UsersAPI();
    const user = await userAPI.getUserByEmail(email);

    if(!user) throw new Error("No user found with that email.");

    const hashed = await hashCharacters(password, 'hard');

    if(hashed != user.user_password) throw new Error("Wrong password.");

    if(hashed === user.user_password) return user;
}

const attemptLogout = () => {
    window.sessionStorage.removeItem("user")    
    window.location.href = getEnvNavigationByName("login").url;
    return;    
}

if(auth_form) {
    auth_form.addEventListener('submit', async (e) => {
        e.preventDefault(); 
        try {
            const user = await attemptLogin(e.target, email.value, password.value);   
            window.sessionStorage.setItem('user', JSON.stringify(user));
            console.log(window.sessionStorage.getItem('user'))
    
            navigateTo('news feed');
        } catch (e) {
            console.log(e, 'error')
        }
    }) 
}
