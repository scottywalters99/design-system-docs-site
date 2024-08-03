const { description } = require("../../package");

module.exports = {
  title: "Design System",
  description: description,
  head: [
    ['link', { rel: 'icon', href: `/logo.png` }],
    ["meta", { name: "theme-color", content: "#3eaf7c" }],
    ["link", { rel: "preconnect", href: "https://fonts.gstatic.com" }],
    ['link', { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@400;500;600;700&display=swap"  }],
    ['link', { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Roboto&display=swap"  }]
  ],

  /**
   *  Theme configuration - https://vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    repo: "scottywalters99/design-system-docs-site",
    docsBranch: 'main',
    docsDir: "docs",
    logo: '/pc-logo.svg',
    editLinks: true,
    editLinkText: "Edit this page on GitHub",
    lastUpdated: true,
    nextLinks: false,
    prevLinks: false,
    smoothScroll: true,
    search: true,
    searchMaxSuggestions: 10,
    nav: require("./nav/en"),
    sidebar: {
      "/contribute/": [
        {
          title: "Contribute",
          collapsable: false,
          children: [["", "Overview"], "documentation", "components", "icons", "patterns"]
        },
      ],
      "/help/": [
        {
          title: "Help",
          collapsable: false,
          children: [["", "FAQ"], "contact"]
        },
      ],
      "/": getGuideSidebar(
        "Design",
        "Guidelines",
        "Components",
        "Patterns",
        "Data Visualization"
        ),
    },
  },

  plugins: [],
  extraWatchFiles: [
    '.vuepress/nav/en.js'
  ]
};

function getGuideSidebar(
  groupATitle,
  groupBTitle,
  groupCTitle,
  groupDTitle,
  groupETitle
) {
  return [
    {
      title: groupATitle,
      collapsable: false,
      children: [["/", "Overview"]],
    },
    {
      title: groupBTitle,
      collapsable: true,
      children: [
        "design-guide/guidelines/accessibility",
        "design-guide/guidelines/color",
        "design-guide/guidelines/icons",
        "design-guide/guidelines/spacing",
        "design-guide/guidelines/typography",
      ],
    },
    {
      title: groupCTitle,
      collapsable: true,
      children: [
        "design-guide/components/button",
        "design-guide/components/checkbox",
        "design-guide/components/dataTable",
        "design-guide/components/datePicker",
        "design-guide/components/dropdown",
        "design-guide/components/link",
        "design-guide/components/list",
        "design-guide/components/loading",
        "design-guide/components/modal",
        "design-guide/components/radio",
        "design-guide/components/search",
        "design-guide/components/select",
        "design-guide/components/tabs",
        "design-guide/components/tag",
        "design-guide/components/textInput",
        "design-guide/components/toast",
        "design-guide/components/toggle",
        "design-guide/components/globalHeader"
      ],
    },
    {
      title: groupDTitle,
      collapsable: true,
      children: [
        ["design-guide/patterns/", "Overview"],
        "design-guide/patterns/common",
        "design-guide/patterns/dialogs",
        "design-guide/patterns/emptyState",
        "design-guide/patterns/modals",
        "design-guide/patterns/notifications",
      ],
    },
    {
      title: groupETitle,
      collapsable: true,
      children: [
        ["design-guide/dataVisualization/", "Overview"],
        "design-guide/dataVisualization/charts",
        "design-guide/dataVisualization/graphs",
        "design-guide/dataVisualization/legends",
      ],
    },
  ];
}
