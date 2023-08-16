
/**
 * get an env value based on given variable
 * @param {string} env 
 * @returns environment value
 */
const get_env = (env) => {
    return app_env[env];
}

/**
 * Capitalize first letter of each word
 * @param {string} word 
 * @returns string
 */
const capitalizeEachWord = (word) => {
    const words = word.split(" ");
    let sentence = '';
    for(let i = 0; i < words.length; i++){
        sentence += words[i].charAt(0).toUpperCase() + words[i].slice(1) + (i !== words.length && " ");
    }
    return sentence;
}

/**
 * add an event listener for each Node List
 * @param {NodeList} list 
 * @param {string} event 
 * @param {Function} fn 
 */
const addEventListenerList = (list, event, fn) => {
    for (let i = 0, len = list.length; i < len; i++) {
        list[i].addEventListener(event, fn, false);
    }
}

