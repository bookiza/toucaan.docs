import * as path from 'path'
import externalLinks from 'remark-external-links'

const PUBLIC = path.resolve(__dirname, 'public')
const SRC = path.resolve(__dirname, 'src')

export default {
  title: 'Toucaan',
  description: 'Style framework based on CSS Grids.',
  indexHtml: 'public/index.html',
  theme: 'src/theme/index',
  typescript: true,
  propsParser: false,
  mdPlugins: [externalLinks],
  ignore: ['site-map.md', 'readme.md', 'src/theme/**'],
  public: './public',
  htmlContext: {
    favicon: '/public/images/favicon-32x32.png',
  },
  menu: [
    {
      name: 'General',
      menu: [
        'Introduction',
        'Getting started',
        'Writing MDX',
        'Built-in components',
        'Document settings',
        'Deploying your docs',
      ],
    },
    {
      name: 'Customizing',
      menu: ['Powered by Gatsby', 'Gatsby Theme', 'Creating your themes'],
    },
    {
      name: 'References',
      menu: [
        'Migration Guide',
        'Project Configuration',
        'Reusable Helpers',
        'Creating Plugins',
        'MDX Plugins',
      ],
    },
  ],
  onCreateWebpackChain: config => {
    config.resolve.alias
      .set('@fonts', `${PUBLIC}/fonts`)
      .set('@images', `${PUBLIC}/images`)
      .set('@components', `${SRC}/theme/components`)
      .set('@styles', `${SRC}/theme/styles`)

    return config
  },
}