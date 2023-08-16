const pages_path = '/public/pages';

const app_env = {
    app_title: "ChatHub",
    app_version: "0.0.0",
    app_navigations: [
        {
            name: 'authentication',
            url: pages_path + '/auth.html',
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
        }
    ],
    app_navigation_default_icon: 'fa-solid fa-globe'
}

