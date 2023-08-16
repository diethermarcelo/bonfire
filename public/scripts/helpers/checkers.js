const checkIfReroute = () => {
    const current_before_reroute = window.sessionStorage.getItem('current_before_reroute')
    window.sessionStorage.removeItem('current_before_reroute');
    if(current_before_reroute) {
        getContent(current_before_reroute);
        window.history.pushState("Reroute", "", current_before_reroute);
    } 
}

const checkIfLoggedIn = () => {
    const user = window.sessionStorage.getItem('user');
    if(!user){
        window.location.href = getEnvNavigationByName("login").url;
    }
}
