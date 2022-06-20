module.exports = {
  pathPrefix: '/', // Change to `/running_page` when running on github pages
  siteMetadata: {
    siteTitle: 'Kris Running Page',
    siteUrl: 'https://run.chixq.com',
    logo: 'https://github.com/chixq/running_page/blob/a914ae46306d8cfc298361425c746495e99a5edd/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20220620211943.jpg?raw=true',
    description: '飞致云南区跑步记录',
    navLinks: [
      {
        name: 'Blog',
        url: 'https://chixq.com',
      },
      {
        name: 'About',
        url: 'https://chixq.com',
      },
    ],
  },
  plugins: [
    'gatsby-transformer-json',
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: './src/static/',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: './src/images/',
      },
    },
    {
      resolve: 'gatsby-alias-imports',
      options: {
        rootFolder: './',
      },
    },
    {
      resolve: 'gatsby-plugin-sass',
      options: {
        cssLoaderOptions: {
          esModule: false,
          modules: {
            namedExport: false,
          },
        },
      },
    },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /assets/,
        },
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#e1e1e1',
        theme_color: '#e1e1e1',
        display: 'minimal-ui',
        icon: 'src/images/favicon.png', // This path is relative to the root of the site.
      },
    }
  ],
};
