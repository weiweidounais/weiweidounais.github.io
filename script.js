// 只需在这里修改姓名和邮箱；邮箱留空时，页面会明确显示“联系方式待补充”。
const profile = {
  name: "weiweidounais",
  email: "",
};

document.querySelectorAll("[data-name]").forEach(element => {
  element.textContent = profile.name;
});
document.querySelector("#year").textContent = new Date().getFullYear();
if (profile.name !== "你的名字") document.title = `${profile.name} · 个人主页`;
const contactLink = document.querySelector("#contact-link");
if (profile.email.trim()) {
  contactLink.href = `mailto:${profile.email.trim()}`;
  document.querySelector("#contact-status").textContent = profile.email.trim();
}

const details = {
  garden: {
    label: "示例项目 / 网页设计",
    title: "灵感花园",
    paragraphs: [
      "这是一个用来展示作品的示例案例，可替换为你自己的真实项目。灵感花园的概念是：为阅读时的摘录、随手记下的点子，以及还没成形的计划，留出一个轻松的整理空间。",
      "展示重点：清晰的信息层级、舒适的阅读节奏，以及带有自然气息的配色。首页中的画面是概念视觉，不代表已上线的独立产品。",
      "替换建议：写清项目解决的问题、你负责的部分和最终结果，再放上真实截图或项目链接。",
    ],
  },
  slow: {
    label: "示例项目 / 视觉探索",
    title: "慢一点，生活提案",
    paragraphs: [
      "这是一个以日常观察为主题的示例视觉项目。用温暖的纸张色、克制的文字和充足的留白，表达一种从容的阅读体验。",
      "首页中的书籍封面是用 CSS 绘制的概念示意。你可以将它换成自己的摄影、插画、文章合集或品牌设计作品。",
      "替换建议：补充创作背景、视觉选择的理由和成品细节，让访客了解作品背后的思考。",
    ],
  },
  focus: {
    label: "示例项目 / 产品概念",
    title: "专注时刻",
    paragraphs: [
      "这是一个帮助用户专心完成一件事的产品概念示例。设计设想是减少界面里的干扰，把注意力留给当前任务。",
      "首页的计时器是静态界面示意，并非可以运行的计时工具。此处用来展示产品思路与界面风格。",
      "替换建议：写出目标用户、关键场景、方案取舍和验证方式，用真实过程说明你的工作方法。",
    ],
  },
  start: {
    label: "示例随笔 / 关于创造",
    title: "先开始，再慢慢变好",
    paragraphs: [
      "等待准备充分，常常会让一个想法停留很久。比起一开始就做出完整答案，先完成一个能看、能用的小版本，往往更容易知道下一步要做什么。",
      "一个简单的页面、一张草图、一段写给自己的文字，都可以成为起点。把它放到真实场景里，看看哪里有用，哪里还需要改变。",
      "这是一篇演示阅读效果的示例随笔，你可以把这里替换为自己的思考与记录。",
    ],
  },
  observe: {
    label: "示例随笔 / 生活观察",
    title: "把注意力还给日常",
    paragraphs: [
      "窗边光线的变化、走过许多次却没有留意的小路、一段偶然听见的对话。日常里有很多细节，只有慢一点的时候才会显现。",
      "试着留下一张照片，或者写两句话。不一定要有结论，观察本身就值得记录。那些小小的发现，也可能成为下一次创作的起点。",
      "这是一篇示例随笔。发布自己的内容时，可以加入具体的场景和真实的感受。",
    ],
  },
};

const dialog = document.querySelector("#detail-dialog");
let lastTrigger;
document.querySelectorAll("[data-detail]").forEach(trigger => {
  trigger.addEventListener("click", () => {
    const detail = details[trigger.dataset.detail];
    if (!detail) return;
    lastTrigger = trigger;
    document.querySelector("#dialog-label").textContent = detail.label;
    document.querySelector("#dialog-title").textContent = detail.title;
    const content = document.querySelector("#dialog-content");
    content.replaceChildren(...detail.paragraphs.map(text => {
      const paragraph = document.createElement("p");
      paragraph.textContent = text;
      return paragraph;
    }));
    dialog.showModal();
    dialog.scrollTop = 0;
  });
});
document.querySelectorAll(".dialog-close, .dialog-done").forEach(button => {
  button.addEventListener("click", () => dialog.close());
});
dialog.addEventListener("click", event => {
  if (event.target !== dialog) return;
  const box = dialog.getBoundingClientRect();
  if (event.clientX < box.left || event.clientX > box.right || event.clientY < box.top || event.clientY > box.bottom) dialog.close();
});
dialog.addEventListener("close", () => lastTrigger?.focus({ preventScroll: true }));
