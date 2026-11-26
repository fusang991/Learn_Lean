import { defineConfig } from 'vitepress'

export default defineConfig({
  lang: 'zh-CN',
  title: 'Lean 学习笔记',
  description: '记录 Lean 4 的学习经验、证明思路和遇到的问题。',
  themeConfig: {
    sidebar: [
      { text: '总览', link: '/' },
      {
        text: '基础证明',
        items: [
          { text: '用 intro 和 exact 证明 P → P', link: '/notes/intro-exact' },
        ],
      },
    ],
    sidebarMenuLabel: '目录',
    returnToTopLabel: '返回顶部',
    outline: { label: '本页目录' },
    docFooter: { prev: '上一篇', next: '下一篇' },
  },
})
