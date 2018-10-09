module.exports = {
    title: 'fog3211',
    description: '任庆忠的博客',
    head: [
        ['link', {
            rel: 'shortcut icon',
            type: "image/x-icon",
            href: `/favicon.ico`
        }]
    ],
    themeConfig: {
        nav: [{
                text: 'Home',
                link: '/'
            },
            {
                text: 'Blog',
                items: [{
                        text: 'javascript',
                        link: '/javascript/'
                    }, {
                        text: 'vue',
                        link: '/vue/'
                    }
                ]
            },
            {
                text: 'Resume',
                link: '/resume/'
            },
            {
                text: 'Github',
                link: 'https://www.github.com/fog3211'
            },
        ],
        sidebar: {
            '/vue/': [
                 '',
                 'second'
            ]
        }
    },
    serviceWorker: true,
}
