
/**
 * get an env value based on given variable
 * @param {string} env 
 * @returns environment value
 */
const get_env = (env) => {
    return app_env[env];
}

/**
 * capitalize first letter of each word
 * @param {string} word 
 * @returns string
 */
const capitalizeEachWord = (word) => {
    if(word) {
        const words = word.split(" ");
        let sentence = '';
        for(let i = 0; i < words.length; i++){
            sentence += words[i].charAt(0).toUpperCase() + words[i].slice(1) + (i !== words.length && " ");
        }
        return sentence;
    }
    return '';
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

/**
 * returns an object with passed name
 * @param {string} name 
 * @returns app_navigations object with that name
 */
const getEnvNavigationByName = (name) => {
    return get_env('app_navigations').find(object => object.name === name)
}

const simpleHash = async (characters) => {
    let hash = 0, i, chr;
    if (characters.length === 0) return hash;
    for (i = 0; i < characters.length; i++) {
        chr = characters.charCodeAt(i);
        hash = ((hash << 5) - hash) + chr;
        hash |= 0; // Convert to 32bit integer
    }
    return hash;
}

const mediumHash = async (str, seed = 0) => {
    let h1 = 0xdeadbeef ^ seed, h2 = 0x41c6ce57 ^ seed;
    for(let i = 0, ch; i < str.length; i++) {
        ch = str.charCodeAt(i);
        h1 = Math.imul(h1 ^ ch, 2654435761);
        h2 = Math.imul(h2 ^ ch, 1597334677);
    }
    h1  = Math.imul(h1 ^ (h1 >>> 16), 2246822507);
    h1 ^= Math.imul(h2 ^ (h2 >>> 13), 3266489909);
    h2  = Math.imul(h2 ^ (h2 >>> 16), 2246822507);
    h2 ^= Math.imul(h1 ^ (h1 >>> 13), 3266489909);
    
    // return new Promise((resolve, reject) => {

    // }).then()
    
    return 4294967296 * (2097151 & h2) + (h1 >>> 0);
}

const hardHash = (str, algo = "SHA-256") => {
    let strBuf = new TextEncoder().encode(str);
    return crypto.subtle.digest(algo, strBuf)
        .then(hash => {
        window.hash = hash;
        // here hash is an arrayBuffer, 
        // so we'll connvert it to its hex version
        let result = '';
        const view = new DataView(hash);
        for (let i = 0; i < hash.byteLength; i += 4) {
            result += ('00000000' + view.getUint32(i).toString(16)).slice(-8);
        }
        return result;
    });
}

const hashCharacters = (characters, difficulty = "simple") => {
    switch(difficulty) {
        case "simple":
            return simpleHash(characters)
            break;
        case "medium":
            return mediumHash(characters);
            break;
        case "hard":
            return hardHash(characters).then(hashed => {
                // console.log(hashed, 'hashed')
                return hashed
            });
            break;
    }
}

/**
 * create a dynamically named function
 * @param {string} function_name 
 * @returns new function
 */
const createFunction = (function_name) => {
    return new Function(
        "return "+ function_name
    )();
}

/**
 * navigates to navigation name from env url
 * @param {string} name 
 */
const navigateTo = (name) => {
    window.location.href = getEnvNavigationByName(name).url;
}

/** 
 * 
*/

const loopThenCallPerIteration = (iteration_array, callback) => {
    for(let iteration of iteration_array){
        callback(iteration);
    }
}



/**
 * format array elements
 * @param {*} iteration 
 * @param {*} root_container_element 
 * @param {*} callbackPerIterate 
 * @returns formatted html from array elements 
 */
const formatArrayElements = (iteration, root_container_element, callbackPerIterate, additional_root_container_class) => {
    let container_element = ''; 
    for(let iterate of iteration){
        container_element += callbackPerIterate(iterate);
        // console.log(callbackPerIterate(iterate), 'container_element...')
    }
    
    let root_container_element_created          = document.createElement(root_container_element ?? 'ul');

    if(additional_root_container_class) addClassesSpaceString(additional_root_container_class, root_container_element_created);

    root_container_element_created.innerHTML    = container_element

    return root_container_element_created;
}

const addClassesSpaceString = (additional_root_container_class, element) => {
    const split_classes = additional_root_container_class.split(" ");
    for(let split_class of split_classes){
        element.classList.add(split_class);
    }
}

const displayElement = (locator, display_element_html) => {
    const locator_el = document.querySelector(locator)
    // console.log(display_element_html, 'display_element_html')
    if(locator_el) locator_el.appendChild(display_element_html)
}


const truncateText = (words) => {
    const max_characters = 400;
    return words.slice(0, max_characters) + (words.length > max_characters ? '...': '');
}