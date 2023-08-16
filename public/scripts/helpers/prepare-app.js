

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
                `<li class="p-2"> 
                    <i class="${app_navigation.icon || default_icon} mr-3"> </i> 
                    <a href="${app_navigation.url}"> ${capitalizeEachWord(app_navigation.name)} </a> 
                </li>`;
        }
    }

    let ul_el                   = document.createElement('ul');
    ul_el.innerHTML             = app_nav_template;

    nav_el.appendChild(ul_el);
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

/**
 * prepare the application, includes displaying of app title, navigations, etc.
 */
const prepareApp = () => {
    displayAppTitle();
    displayAppNavigations();
}

