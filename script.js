// 站点内容均为公开展示概要；原始知识库、内部资料及联系方式不随站点发布。
const mapContent = {
  industry: { topic: "行业理解 → 产品思考", core: "工程 × AI", nodes: ["现场经验", "RAG / 知识检索", "需求与场景", "验证与交付"], category: "从行业理解到产品判断", title: "先理解现场，再设计智能。", description: "把设备、流程与人的真实约束，带入行业 AI 的场景选择。", link: "#project-agent", linkLabel: "查看行业 AI 实践" },
  knowledge: { topic: "共享信息 → 高效协同", core: "知识与协同", nodes: ["需求与交底", "同版本同步", "责任与变更", "知识可追溯"], category: "密灯 / 企业知识与协同实践", title: "让交接有依据，让变化可追踪。", description: "从设计、采购与项目协作的交接问题，思考知识工作台的价值。", link: "#project-mideng", linkLabel: "查看密灯产品实践" },
  companion: { topic: "日常行动 → 有意义的反馈", core: "健康与陪伴", nodes: ["饮食记录", "AI 陪伴宠", "运动习惯", "能量账本"], category: "养芽 / 健康陪伴产品探索", title: "让日常的小行动，得到回应。", description: "连接饮食、运动和陪伴反馈，探索更容易坚持的健康记录体验。", link: "#project-yangya", linkLabel: "查看养芽产品探索" },
};
const tabs = [...document.querySelectorAll("[data-map]")];
const compactLayout = matchMedia("(max-width: 700px)");
const syncTabOrientation = () => document.querySelector('[role="tablist"]').setAttribute("aria-orientation", compactLayout.matches ? "horizontal" : "vertical");
syncTabOrientation();
compactLayout.addEventListener("change", syncTabOrientation);
function activateTab(tab) {
  const item = mapContent[tab.dataset.map];
  if (!item) return;
  tabs.forEach(button => {
    const selected = button === tab;
    button.setAttribute("aria-selected", String(selected));
    button.tabIndex = selected ? 0 : -1;
  });
  document.querySelector("#map-panel").setAttribute("aria-labelledby", tab.id);
  for (const [selector, value] of Object.entries({ "#map-topic": item.topic, "#node-core": item.core, "#map-category": item.category, "#map-title": item.title, "#map-description": item.description })) document.querySelector(selector).textContent = value;
  ["one", "two", "three", "four"].forEach((name, index) => document.querySelector(`#node-${name}-label`).textContent = item.nodes[index]);
  const link = document.querySelector("#map-link");
  link.href = item.link;
  link.setAttribute("aria-label", item.linkLabel);
}
tabs.forEach((tab, index) => {
  tab.addEventListener("click", () => activateTab(tab));
  tab.addEventListener("keydown", event => {
    let next;
    if (event.key === "ArrowDown" || event.key === "ArrowRight") next = (index + 1) % tabs.length;
    if (event.key === "ArrowUp" || event.key === "ArrowLeft") next = (index - 1 + tabs.length) % tabs.length;
    if (event.key === "Home") next = 0;
    if (event.key === "End") next = tabs.length - 1;
    if (next === undefined) return;
    event.preventDefault();
    activateTab(tabs[next]);
    tabs[next].focus();
  });
});
const details = {
  agent: {
    label: "行业 AI / 个人实践概要", title: "暖通运维 Agent",
    sections: [
      ["为什么关注这个问题", "暖通运维涉及设备手册、操作规程、巡检与异常处理。工程经历让我关心：信息能否及时找到，答案能否回到依据，异常是否有明确的处理路径。"],
      ["我探索的产品链路", "以设备手册和规程的检索问答为切入点，再考虑巡检、告警分级与报表之间的连接。把引用、人工复核与失败后的处理方式，一起放进产品设计。"],
      ["当前展示的边界", "这是依据个人实践资料整理的方向概要。此页面没有接入运行中的 Agent，也不以示意图证明功能已全部实现；真实数据范围、演示与评测结果需要单独核验。"],
    ],
  },
  mideng: {
    label: "ToB / 协作产品实践概要", title: "密灯 · 知识与协同",
    sections: [
      ["从交接问题开始", "跨部门协作里，同一份需求的不同版本、设计与采购之间的信息差，以及变更后的责任边界，往往比缺少一个聊天入口更影响工作。密灯围绕这些交接环节展开。"],
      ["产品思考", "把需求入口、交底、设计回写、采购交接与项目例外连接起来。重点是稳定的业务对象、同步的版本、可见的变更和明确的负责人，让知识进入实际流程。"],
      ["我的参与与展示范围", "个人项目资料记录了产品推进、范围取舍和协作流程梳理。本页仅展示概括后的产品方向，不公开内部交底、团队资料或项目参数，也不把阶段性验收等同于商业收益。"],
    ],
  },
  yangya: {
    label: "健康陪伴 / 协作产品探索概要", title: "养芽 · 健康陪伴",
    sections: [
      ["探索的问题", "饮食与运动记录需要持续投入。养芽尝试让 AI 陪伴宠成为反馈的载体，以能量账本连接日常行为与成长感。"],
      ["产品方向", "以 H5 作为一期形态，围绕饮食、运动记录、陪伴反馈与互动展开探索。核心在于记录是否足够轻、反馈是否易于理解，以及使用者能否修正系统的判断。"],
      ["范围与取舍", "资料中的产品定位是探索中的方案。本页没有提供可运行的健康服务，也不承诺识别精度、用户规模或健康效果；展示的是问题定义与产品思路。"],
    ],
  },
  handoff: {
    label: "学习整理 / 企业协同", title: "比增加一个聊天框更重要的，是理清交接。",
    sections: [
      ["我在关注什么", "阅读企业协同与数字化转型资料时，我更关注交接本身：交付的是哪个对象、哪个版本，由谁负责，变化以后谁需要知道。"],
      ["带回产品实践", "在设计知识协同产品时，可以先画清一条具体的信息流，找到反复解释、等待核对和返工的环节，再判断 AI 在哪里有用。先理清事实来源与责任，再决定交互形式。"],
      ["整理说明", "本篇是依据个人知识库的主题笔记重新整理的短文，反映学习与产品思考，不将参考文章中的预期收益当作个人实测结果。"],
    ],
  },
  "agent-loop": {
    label: "学习整理 / Agent 任务闭环", title: "回答完整，和事情办成，是两种标准。",
    sections: [
      ["从回复看到任务", "一个清楚的回答不等于用户的目标已经实现。我的学习笔记把关注点从单次输出，延伸到执行状态、工具反馈、可恢复位置和最终交付。"],
      ["设计时多问一步", "这一步真的执行了吗？结果在哪里？如果失败，能否从已有进度继续？需要用户确认时，能否先给出可审阅的结果？这些问题，比把每条路径都做得更自主更具体。"],
      ["整理说明", "本篇为学习与实践归纳，重点是任务验收与人机协作，不构成对某个 Agent 产品能力的测试结论。"],
    ],
  },
  evidence: {
    label: "学习整理 / RAG 与证据", title: "先问依据在哪里，再判断答案好不好。",
    sections: [
      ["把问题拆开", "我的 RAG 学习笔记把资料整理、检索过程和答案生成分开看。答案不理想时，先回到材料与检索结果，定位是哪一环节失去了依据。"],
      ["与工程经验的连接", "在工程里，判断需要回到图纸、规程和现场。把类似的可追溯意识带入 AI 产品，可以帮助我们设计引用、复核、资料更新与反馈路径。"],
      ["整理说明", "这是基于知识库主题页的个人学习摘要。本页未部署检索系统，也不展示未经核验的准确率与业务指标。"],
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
    const sections = detail.sections.map(([title, text]) => {
      const section = document.createElement("section");
      const heading = document.createElement("h3");
      const paragraph = document.createElement("p");
      heading.textContent = title;
      paragraph.textContent = text;
      section.append(heading, paragraph);
      return section;
    });
    content.replaceChildren(...sections);
    dialog.showModal();
    dialog.scrollTop = 0;
  });
});
document.querySelectorAll(".dialog-close, .dialog-done").forEach(button => button.addEventListener("click", () => dialog.close()));
dialog.addEventListener("click", event => {
  if (event.target !== dialog) return;
  const box = dialog.getBoundingClientRect();
  if (event.clientX < box.left || event.clientX > box.right || event.clientY < box.top || event.clientY > box.bottom) dialog.close();
});
dialog.addEventListener("close", () => lastTrigger?.focus({ preventScroll: true }));
document.querySelector("#year").textContent = new Date().getFullYear();
