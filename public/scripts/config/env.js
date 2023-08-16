const pages_path = '/public/pages';

const app_env = {
    app_title: "ChatHub",
    app_version: "0.0.0",
    app_navigations: [
        {
            name: 'login',
            url: pages_path + '/auth/login.html',
            isNotIncludedInDisplay: true
        },
        {
            name: 'news feed',
            url: pages_path + '/feed.html',
            icon: 'fa-solid fa-newspaper'
        },
        {
            name: 'chat',
            url: pages_path + '/chat.html',
            icon: 'fa-solid fa-comment'
        },
        {
            name: 'groups',
            url: pages_path + '/groups.html',
            icon: 'fa-solid fa-people-group'
        },
        {
            name: 'settings',
            url: pages_path + '/settings.html',
            icon: 'fa-solid fa-gears'
        },
        {
            name: 'logout',
            url: pages_path + '/auth/logout.html',
            icon: 'fa-solid fa-right-from-bracket',
            // useCallbackFunction: true
            isNotIncludedInDisplay: true
        }
    ],
    app_navigation_default_icon: 'fa-solid fa-globe',
    api_url: 'http://localhost:9000/data/'
}

