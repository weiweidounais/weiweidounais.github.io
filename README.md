# weiweidounais 的个人网站

原生 HTML、CSS、JavaScript，无依赖、无构建步骤。所有作品和随笔都明确标注为示例。

## 本地打开

直接双击 `index.html` 即可使用，也可以在此目录运行 `python3 -m http.server 8000`，然后访问 http://localhost:8000。

## 修改内容

- `script.js` 顶部的 `profile`：修改姓名和联系邮箱。邮箱为空时显示“联系方式待补充”，填入后自动启用邮件链接。
- `index.html`：修改自我介绍、项目名称、项目简介、随笔标题和页面描述。
- `script.js` 的 `details`：修改点击作品、随笔后展示的详情。
- `style.css`：修改配色、字体和布局，开头的变量控制主要颜色。

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

`.openai/` 为此前初始化工具产生的配置，已从后续 Git 提交中忽略；本站本地运行及 GitHub Pages 均不依赖它。
