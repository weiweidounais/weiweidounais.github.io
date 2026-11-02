# 冯涌泉 · 个人网站

原生 HTML、CSS、JavaScript，无依赖、无构建步骤。深靛黑与淡紫色视觉，包含工程背景、项目实践、交互实践地图与学习整理。

公开内容来自本人提供的个人档案与项目概要，仅包含必要的背景、方向和实践思考。实践地图及卡片图形是内容导航与思路示意，不是产品运行截图。未发布私人知识库、内部资料、精确项目参数与非公开联系方式。

## 本地打开

直接双击 `index.html` 即可使用，也可以在此目录运行 `python3 -m http.server 8000`，然后访问 http://localhost:8000。

## 修改内容

- `index.html`：修改自我介绍、项目简介、思考标题、页面描述和 GitHub 联系入口。
- `script.js` 的 `mapContent`：修改实践地图的三个主题、节点和导航目标。
- `script.js` 的 `details`：修改点击项目、学习整理后展示的详情。
- `style.css`：修改配色、字体和布局，开头的变量控制主要颜色。

保留工程经历、产品探索与学习整理之间的区别；发布项目进展和成果数据前核验依据。

## GitHub 与在线展示

- 网站：https://weiweidounais.github.io/
- 源码：https://github.com/weiweidounais/weiweidounais.github.io
- GitHub Pages 发布源：`main` 分支的根目录。

GitHub CLI 已安装并登录 `weiweidounais`。在本地修改文件并检查效果后，执行：

```sh
git add index.html style.css script.js README.md .gitignore .nojekyll
git commit -m "Update personal website"
git push
```

推送后 GitHub Pages 会自动发布更新。在仓库的 Actions 页面可查看发布进度。无需安装依赖或运行构建命令。

`.openai/` 存放本地工具配置与内容核对记录，已忽略；本站本地运行及 GitHub Pages 均不依赖它。
