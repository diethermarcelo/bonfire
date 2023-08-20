
/**
 * 
 */
const reroute = () => {
    window.sessionStorage.setItem("current_before_reroute", window.location.href);
    window.location.href = "/public/pages/";
}

reroute();
