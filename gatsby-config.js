module.exports = {
  siteMetadata: {
    title: 'Spacious Champoluc apartment for rent | Italy',
    description:
      'Lovley 3 bedroom apartment for rent in Champoluc in the Italian alps.',
    author: 'Andreas',
    siteUrl: 'https://blanchard.netlify.com/',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-emotion',
    'gatsby-plugin-sitemap',
    'gatsby-plugin-robots-txt',
    'gatsby-plugin-netlify',
    'gatsby-plugin-theme-ui',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'gallery-items',
        path: `${__dirname}/src/images/gallery-items`,
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'blanchard',
        short_name: 'blanchard',
        start_url: '/',
        background_color: '#fff',
        theme_color: '#fff',
        display: 'standalone',
        icon: 'src/images/icon.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 750,
              quality: 90,
              linkImagesToOriginal: true,
            },
          },
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'UA-145768757-1',
      },
    },
  ],
};
