const zhNavbar = {
  hideOnScroll: true,
  title: "ChatGPT sc",
  logo: {
    alt: "ChatGPT sc",
    src: "img/logo.svg",
  },
  items: [
    {
      to: "https://www.aibxw.com/",
      label: "Ai三杯茶官网",
      position: "left",
    },
        {
          label: 'Find on Product Hunt',
          href: 'https://www.producthunt.com/posts/chatgpt-shortcut?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-chatgpt&#0045;shortcut',
        },
      ],
    },
    {
      to: "https://xq7pd3qu17.feishu.cn/share/base/form/shrcnK7oaSPaAcj1YAHfy4jo0Jh",
      label: "反馈/添加提示词",
      position: "left",
    },
    { type: "localeDropdown", position: "right" },
    {
      href: "https://github.com/rockbenben/ChatGPT-Shortcut",
      position: "right",
      className: "header-github-link",
    },
    {
      href: "https://discord.gg/PZTQfJ4GjX",
      position: "right",
      className: "header-discord-link",
    },
  ],
};

module.exports = zhNavbar;
