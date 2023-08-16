const app_env = {
    app_title: "ChatHub",
    app_version: "0.0.0",
    app_navigations: [
        {
            name: 'authentication',
            url: '/public/pages/auth.html',
            isNotIncludedInDisplay: true
        },
        {
            name: 'news feed',
            url: '/public/pages/index.html',
            icon: 'fa-solid fa-newspaper'
        },
        {
            name: 'chat',
            url: '/public/pages/chat.html',
            icon: 'fa-solid fa-comment'
        },
        {
            name: 'groups',
            url: '/public/pages/groups.html',
            icon: 'fa-solid fa-people-group'
        },
        {
            name: 'settings',
            url: '/public/pages/settings.html',
            icon: 'fa-solid fa-gears'
        }
    ],
    app_navigation_default_icon: 'fa-solid fa-globe'
}

