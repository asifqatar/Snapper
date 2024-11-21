#!/bin/bash

# Create the necessary directory structure
mkdir -p docusaurus-site/docs
mkdir -p docusaurus-site/src/css

# Create Docusaurus configuration file
cat > docusaurus-site/docusaurus.config.js << EOL
module.exports = {
  title: 'Project Documentation',
  tagline: 'Comprehensive Project Documentation',
  url: 'https://yourusername.github.io',
  baseUrl: '/Snapper/',
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  organizationName: 'yourusername',
  projectName: 'Snapper',
  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          routeBasePath: '/', # Serve documentation at the site root
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

# Create minimal sidebars file
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

# Create a basic intro doc
echo "# Introduction to the Project" > docusaurus-site/docs/intro.md
