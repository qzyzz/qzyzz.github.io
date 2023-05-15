# 个人博客

博客基于 [Docusaurus 2](https://v2.docusaurus.io/) JAMStack 静态网站生成器实现。

## 目录介绍

下面是主要目录的介绍：

```bash
├── _templates                     # hygen 模板
│   ├── blog                       # 博客模板
│   ├── doc                        # 文档模板
│   ├── generator                  # hygen 生成器模板
│   └── video-doc                  # 视频文档模板
├── babel.config.js
├── blog                          
│   ├── 2020-02-21-first-blog.md   # 博客文件
│   └── img                        # 博客图片
├── docs                          
│   └── doc1.md                    # 文档          
├── docusaurus.config.js
├── drafts                         # 草稿目录（自定义）
├── i18n
│   └── en                         # 英文本地化
├── package.json
├── scripts                        # 自动化脚本
│   ├── create.mjs                 # 自动创建视频文档模板
│   └── getVideoList.mjs           # 获取本人所有视频列表（测试用途）
├── sidebars.js                    
├── src
│   ├── components                 # 自定义组件
│   ├── css                        # 自定义 CSS
│   ├── pages                      # 自定义页面
│   ├── plugin                     # 自定义插件
│   └── theme                      # 自定义主题
├── static
│   ├── icons                      # 公用图标
│   ├── img                        # 公用图片（以及遗留的博客图片）
│   └── katex                      # Latext 公式插件所需资源
└── yarn.lock
```

## 自动生成博客和文档

由于 docusaurus 对于博客、文档的格式要求比较多，所以使用自动化工具可以协助我们快速创建相关文档和配置。项目使用了 hygen 来根据定义的模板创建博客或文档 md 文件，你需要在本地全局下安装 hygen 才能使用。模板所在目录为 `_templates`。

安装 hygen:

```bash
$ npm i -g hygen
```

创建一篇新的博客文章：

```bash
hygen blog new [博客名称]
#例如
hygen blog new react-get-started
```
无需填写日期，hygen 模板中会自动获取当前的日期，在创建完博客之后，同时会在 `blogs/img` 文件夹下创建与博客同名的文件夹，用于存放用到的图片。

博客模板内容可通过 `_templates/blog/new/index.ejs.t` 文件进行修改。

创建一篇新的文档：

```bash
hygen doc new [文档名称]
#例如
hygen doc new react-get-started
```
创建好的文档会直接放到 `docs/react-examples` 目录下，这个目录可以通过 hygen 模板中的参数进行修改，可以通过命令行指定，或者在模板中编写固定路径，由于文档的配置项比较少，所以我自己一般通过复制粘贴之前的文档形式来创建新的文档，并手动追加到 `sidebars.js` 文件中。

关于和 Bilibili 视频相关的文字版脚本，可以使用 `yarn gen` 命令创建。