# 利用vuepress搭建个人博客

最近利用vuepress搭建了自己的个人博客，在搭建过程中踩了不少坑，特此记录一下。

## 什么是vuepress  

 先看一下官方介绍  
::: tip 
VuePress 由两部分组成：一个以 Vue 驱动的主题系统的简约静态网站生成工具，和一个为编写技术文档而优化的默认主题。由 VuePress 生成的每个页面，都具有相应的预渲染静态 HTML，页面加载之后，Vue 就会将这些静态内容，接管为完整的单页面应用程序(SPA)。
:::
简单说就是：VuePress是以Vue驱动的静态网站生成器，实际是一个由Vue、Vue-Router和webpack驱动的单页应用。  

[这是vue官方中文文档](https://vuepress.vuejs.org/zh/)

## 上手搭建  

### 安装  

#### node环境
vuepress可以利用npm或yarn进行安装，要求node.js版本>=8.0。  
可以在cmd终端中利用
``` bash
node -v
```
查看node版本  
如果没有node环境,请自行安装。  
[node.js传送门](http://nodejs.cn/download/)  



### 搭建目录  


全局安装  
``` bash
npm install -g vuepress  
```

首先创建一个项目文件夹，这里我起名```vuepress```，使用cd命令进入该项目  

初始化项目  
``` bash
npm init -y  
```

安装依赖  
``` bash
npm install
```

在已有项目中安装  
``` bash
npm install -D vuepress  
``` 

创建一个docs文件夹  

``` bash
mkdir docs
```

在```package.json```中添加  
``` bash
{
"scripts": {
    "dev": "vuepress dev docs", #运行本地服务
    "build": "vuepress build docs", #打包生成静态文件
  }
}
```

进入docs文件夹并创建一个叫```.vuepress```的文件夹,   ```.vuepress```目录主要用于存放vuepress相关的文件。     
在```.vuepress```文件夹下创建```public```文件夹，用以存放静态资源文件。  
创建config.js文件，用来配置vuepress。  

``` bash
cd docs 
mkdir .vuepress

cd .vuepress
mkdir public

touch config.js
```

在docs文件夹下创建一个README.md文件，这个markdown文件会被渲染成静态html，用来做Blog展示的首页。  

此时项目目录应该是这样的  
```
.
vuepress
├─── docs
│     │── .vuepress
│     │      ├──── public
│     │      └──── config.js
│     └─── README.md
└─── package.json
```


### 配置  

#### 网站信息  
  首先在config.js文件里添加  
``` bash
module.exports = {
  title: 'Hello VuePress',
  description: 'My Blog',
   head: [
        ['link', {
            rel: 'shortcut icon',
            type: "image/x-icon",
            href: `/favicon.ico`
        }]
    ],
}
```  
#### 默认主题配置（Blog首页）  

向docs文件夹下的README.md文件添加  
``` bash
---
home: true
heroImage: /head.jpg
actionText: My Blog →
actionLink: /vue/
footer: MIT Licensed | Copyright © 2018-present Fog3211
---
```  

#### 导航栏配置   

```bash
module.exports = {
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
                        text: 'css',
                        link: '/css/'
                    },{
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
        ]
    }
}
```

::: tip
其中导航栏配置的路由要在docs文件下建立对应的文件夹，并在每个文件夹下都要有一个README.md文件。
:::

其他详细配置部分参考[官方文档](https://www.vuepress.cn/guide/basic-config.html)
 