module.exports = {
  title: 'Project Name',
  tagline: 'Describe your project in one sentence.', // one sentence description
  url: 'https://sustech-canstudio.github.io',
  baseUrl: '/project-with-docs/',
  favicon: 'img/favicon.ico',
  organizationName: 'SUSTech-CANStudio', // Usually your GitHub org/user name.
  projectName: 'project-with-docs', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'Project Name',
      logo: {
        alt: 'SUSTech CANStudio Logo',
        src: 'img/logo.svg',
      },
      links: [
        {
          to: 'docs/doc1',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left',
        },
        {href: 'https://SUSTech-CANStudio.github.io/blog', label: 'Blog', position: 'left'},
        {href: 'https://SUSTech-CANStudio.github.io/', label: 'Home', position: 'right'},
        {
          href: 'https://github.com/SUSTech-CANStudio/project-with-docs',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Style Guide',
              to: 'docs/doc1',
            },
            {
              label: 'Second Doc',
              to: 'docs/doc2',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Slack channel',
              href: 'https://canstudio-r.slack.com',
            },
          ],
        },
        {
          title: 'Social',
          items: [
            {
              label: 'Blog',
              to: 'blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/SUSTech-CANStudio',
            }
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/SUSTech-CANStudio/project-with-docs/edit/master/docs/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
