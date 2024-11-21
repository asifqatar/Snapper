#!/bin/bash

# Create the Docusaurus site structure
mkdir -p docusaurus-site/docs
mkdir -p docusaurus-site/src/css

# Create the Docusaurus configuration file
cat > docusaurus-site/docusaurus.config.js << EOL
module.exports = {
  title: 'Project Documentation',
  tagline: 'Comprehensive Project Documentation',
  url: 'https://asifqatar.github.io',
  baseUrl: '/Snapper/',
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  organizationName: 'asifqatar', // GitHub org/user name
  projectName: 'Snapper', // Repo name
  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          routeBasePath: '/', // Serve documentation at the site root
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
  themeConfig: {
    navbar: {
      title: 'Project Docs',
      items: [
        {
          type: 'doc',
          docId: 'intro',
          position: 'left',
          label: 'Documentation',
        },
      ],
    },
  },
};
EOL

# Create the sidebar configuration file
cat > docusaurus-site/sidebars.js << EOL
module.exports = {
  mySidebar: [
    {
      type: 'doc',
      id: 'intro',
    },
  ],
};
EOL

# Create a basic custom CSS file
echo "/* Custom CSS */" > docusaurus-site/src/css/custom.css

# Create a basic introductory markdown file
echo "# Introduction to the Project" > docusaurus-site/docs/intro.md

echo "Docusaurus configuration files created successfully!"
