# Lean 学习笔记

使用 VitePress 默认主题，笔记保存在 `docs/notes/`。

## 本地写作

```sh
npm install
npm run docs:dev
```

打开终端显示的本地地址。在 `docs/notes/` 新建 Markdown 文件，把笔记加到[侧栏配置](docs/.vitepress/config.mts)的对应章节，并在[总览](docs/index.md)添加链接。

## 构建

```sh
npm run docs:build
npm run docs:preview
```

## GitHub Pages

在 GitHub 仓库的 **Settings → Pages → Build and deployment → Source** 中选择 **GitHub Actions**。向 `main` 推送后，工作流会构建并发布笔记，访问地址显示在部署结果中。如果配置 Pages 时已经推送过代码，可以在 **Actions → Deploy notes to GitHub Pages → Run workflow** 手动发布。
