
/**
 * add event for navigations for clicking
 */
const activateNavigationEvents = () => {
    const navigations = document.querySelectorAll('.navigation > a');
    addEventListenerList(navigations, 'click', (e) => {
        e.preventDefault();
        const { href, innerText } = e.target;
        window.history.pushState(innerText, "", href)
        getContent(href);
    })
}

/**
 * fetch link html for outputting to content
 * @param {string} link 
 */
const getContent = async (link) => {
    fetch(link)
        .then(response => response.text())
        .then(html => outputContentToMain(html));
}

/**
 * output html string to main container
 * @param {string} html 
 */
const outputContentToMain = (html) => {
    const main = document.querySelector('#main-content');
    main.innerHTML = html;
    runPageScripts();
}

/** 
 * run page scripts, usually called once html is fetched
*/
const runPageScripts = () => {
    const app_navigations = get_env('app_navigations');

    loopThenCallPerIteration(app_navigations, (app_navigation) => {
        const page_script = app_navigation.pageScriptFunctionName;
        if(page_script) {
            let func = createFunction(page_script);
            if(func) func();
        }
    })
}

/**
 * display sidebar navigations based on app_navigations from env
 */
const displayAppNavigations = () => {
    // const nav_el                = document.querySelector('.display-app-navbars');
    // const ul_el                 = formatNavigationsTemplate();
    // nav_el.appendChild(ul_el);

    const app_navigations       = get_env('app_navigations');
    const default_icon          = get_env('app_navigation_default_icon');
    const result_element = formatArrayElements(
        app_navigations,
        'ul',
        (app_navigation) => {
            if(!app_navigation.isNotIncludedInDisplay) {
                return (
                    `<li class="navigation bounce-in-hover"> 
                        <a href="${app_navigation.url}" class="d-block p-2"> 
                            <i class="${app_navigation.icon || default_icon} mr-3"> </i> 
                            <span> ${capitalizeEachWord(app_navigation.name)} </span>
                        </a> 
                    </li>`
                );
            }
            return '';
        }
    )

    displayElement('.display-app-navbars', result_element);

    dynamicSpacingForNavigation();
    activateNavigationEvents();
}

// /**
//  * formatting element display for navigation
//  * @param {array} app_navigations 
//  * @returns element
//  */
// const formatNavigationsTemplate = () => {    
//     const app_navigations       = get_env('app_navigations');
//     const default_icon          = get_env('app_navigation_default_icon');
//     let app_nav_template        = '';
//     loopThenCallPerIteration(app_navigations, (app_navigation) => {
//         if(!app_navigation.isNotIncludedInDisplay) {
//             app_nav_template += 
//                 `<li class="p-2 navigation"> 
//                     <i class="${app_navigation.icon || default_icon} mr-3"> </i> 
//                     <a href="${app_navigation.url}"> ${capitalizeEachWord(app_navigation.name)} </a> 
//                 </li>`;
//         }
//     })
//     let ul_el                   = document.createElement('ul');
//     ul_el.innerHTML             = app_nav_template;
//     return ul_el;
// }

/** 
 * contain spacing for navigation fixed position 
*/
const dynamicSpacingForNavigation = () => {
    const sidebar_width     = document.querySelector('.sidebar').offsetWidth;
    const main_container    = document.querySelector('#main-container');
    main_container.style.marginLeft = sidebar_width + 'px';
}


/**
 * display app title based if class is given
 */
const displayAppTitle = () => {
    const app_title_els = document.querySelectorAll('.display-app-title')    
    const app_title = get_env('app_title');
    for(let app_title_el of app_title_els){
        app_title_el.innerHTML = app_title;
    }
}

/**
 * display logout dynamically
 */
const displayLogout = () => {
    const logout_container = document.querySelector('.display-logout')
    const logout = getEnvNavigationByName('logout');
    logout_container.innerHTML = `
        <div class="mt-10 bounce-in-hover">
            <a href="${logout.url}" class="d-block p-2"/>
                <i class="${logout.icon} mr-3"></i> 
                <span> ${capitalizeEachWord(logout.name)} </span>
            </a>
        </div>
    `
}

/**
 * prepare the application, includes displaying of app title, navigations, etc.
 */
const prepareApp = () => {
    checkIfReroute();
    checkIfLoggedIn();
    displayAppTitle();
    displayAppNavigations();
    displayLogout();
}

