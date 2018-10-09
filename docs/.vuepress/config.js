module.exports = {
    title: 'fog3211',
    description: '任庆忠的博客',
    head: [
        ['link', {
            rel: 'shortcut icon',
            type: "image/x-icon",
            href: `/favicon.ico`
        }],
        ['link', {
            rel: 'manifest',
            href: '/manifest.json'
        }],
    ],
    serviceWorker: true,
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
                    },
                    {
                        text: 'CSS',
                        link: '/css/'
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
            '/vue/': genSidebarConfig('vue')
        },
        sidebarDepth: 2,
        lastUpdated: 'Last Updated',
    },
}

// function genSidebarConfig(title) {
//     return [{
//         title,
//         collapsable: false,
//         children: [
//             ['/javascript/js-1', '第一篇文章'],
//             ['/javascript/js-2', '第二篇文章'],
//         ]
//     }]
// }



function genSidebarConfig(title) {
    return [{
        title,
        collapsable: false,
        children: [
            '',
            'second'
        ]
    }]
}