
const activateNavigationEvents = () => {
    const navigations = document.querySelectorAll('.navigation > a');
    addEventListenerList(navigations, 'click', (e) => {
        e.preventDefault();
        const { href, innerText} = e.target;
        window.history.pushState(innerText, "", href)
        getContent(href);
    })
}

const getContent = async (link) => {
    fetch(link)
        .then(response => response.text())
        .then(html => outputContentToMain(html));
}

const outputContentToMain = (html) => {
    const main = document.querySelector('#main-content')
    main.innerHTML = html;
}

/**
 * display sidebar navigations based on app_navigations from env
 */
const displayAppNavigations = () => {
    const nav_el                = document.querySelector('.display-app-navbars');
    const app_navigations       = get_env('app_navigations');
    const default_icon          = get_env('app_navigation_default_icon');
    let app_nav_template        = '';

    for(let app_navigation of app_navigations){
        if(!app_navigation.isNotIncludedInDisplay) {
            app_nav_template += 
                `<li class="p-2 navigation"> 
                    <i class="${app_navigation.icon || default_icon} mr-3"> </i> 
                    <a href="${app_navigation.url}"> ${capitalizeEachWord(app_navigation.name)} </a> 
                </li>`;
        }
    }

    let ul_el                   = document.createElement('ul');
    ul_el.innerHTML             = app_nav_template;

    nav_el.appendChild(ul_el);

    activateNavigationEvents();
}

/**
 * display app title based if class is given
 */
const displayAppTitle = () => {
    const app_title_els = document.querySelectorAll('.display-app-title')    
    for(let app_title_el of app_title_els){
        app_title_el.innerHTML = get_env('app_title');
    }
}

// const displayLayout = () => {
//     fetch("/public/pages/layout.html").then(response => {        
// 	    return response.text();
//     }).then((html) => {
//         console.log(html, 'html')
//     })
// }



/**
 * prepare the application, includes displaying of app title, navigations, etc.
 */
const prepareApp = () => {
    // displayLayout();
    displayAppTitle();
    displayAppNavigations();
}

