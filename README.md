# nstudio.

Tianle Niu 的独立 AI for Science 研究工作室网站。使用 Astro、Tailwind CSS 和 TypeScript，静态输出可部署到 GitHub Pages。

## 本地运行

安装 Node.js 24 LTS。解压 ZIP 后，在含有 `package.json` 的目录运行：

```sh
npm ci
npm run dev
```

打开终端显示的本地地址（通常为 `http://localhost:4321/`）。

```sh
npm run check    # Astro 和 TypeScript 检查
npm run build    # 生成 dist/
npm run preview  # 预览已构建的站点
```

## 更新内容

| 内容 | 文件位置 |
| --- | --- |
| 作品及详情页 | `src/content/works/*.md` |
| 作品封面 | `public/works/` |
| 新闻及详情页 | `src/content/news/*.md` |
| 研究方向、About 与创始人链接 | `src/pages/index.astro` |
| 原始 N Logo（导航、首屏、浏览器图标） | `public/branding/niulab-logo.png` |
| 字体、颜色与响应式样式 | `src/styles/global.css` |

新增作品或新闻时，复制一个对应的 Markdown 文件，再修改文件名与头部字段。文件名决定详情页 URL，例如 `my-project.md` 对应 `/works/my-project/`。日期以带引号的 `"YYYY-MM-DD"` 填写，首页按日期倒序展示。作品的 `cover` 指向 `public/` 下的站点路径，例如 `/works/my-project.webp`，`alt` 用来描述封面。

作品、封面和新闻均为示例，页面已标明。发布前可用真实内容替换示例，并删除真实条目的 `sample: true`。首屏保留原始 Logo，粒子可暂停，并遵循系统减少动态效果的设置。

## 部署到 TianleNiu.github.io

1. 将解压后的项目文件放入 `TianleNiu.github.io` 仓库根目录。记得包含隐藏的 `.github/workflows/pages.yml` 和 `.gitignore`。
2. 在仓库的 **Settings → Pages → Build and deployment → Source** 选择 **GitHub Actions**。
3. 推送到 `main`，或在 **Actions → Deploy nstudio to GitHub Pages** 手动运行。若默认分支名不同，修改工作流中的 `branches`。
4. 部署完成后打开 `https://tianleniu.github.io/`。

`astro.config.mjs` 已按用户站点根路径配置。如果改用其他根域名，将 `site` 改成新域名。

布局参考 [LL Lab](https://lllab.org/) 的作品集组织方式。部署配置可参考 [Astro 的 GitHub Pages 指南](https://docs.astro.build/en/guides/deploy/github/)。
