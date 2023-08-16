const navigations = {
    auth: '/public/pages/auth.html'
}

const isAuth = window.sessionStorage.getItem('data-chathub-is-auth');


// if(!isAuth) window.location.href = navigations.auth;