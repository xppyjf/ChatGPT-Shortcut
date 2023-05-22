const zhNavbar = {
  hideOnScroll: true,
  title: "ChatGPT 提问模板",
  logo: {
    alt: "ChatGPT 提问模板",
    src: "img/logo.svg",
  },
  items: [
    {
      to: "https://www.aibxw.com",
      label: "AI三杯茶官网",
      position: "left",
    },
    
    {
      to: "https://lu8qxb9xdh.feishu.cn/share/base/form/shrcnaXwpVXm8PY8iyBklidIMfe",
      label: "反馈/添加提示词",
      position: "left",
    },
    { type: "localeDropdown", position: "right" },

  ],
};

module.exports = zhNavbar;
