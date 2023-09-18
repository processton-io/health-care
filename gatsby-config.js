const path = require('path')
require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
})
const siteUrl = process.env.GATSBY_APP_URL || 'http://localhost:8000';
module.exports = {
  siteMetadata: {
    siteUrl: siteUrl,
    siteDescription: ''
  },
  flags: {
    DEV_SSR: true,
  },
  plugins: [
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    'gatsby-plugin-preload-fonts',
    'gatsby-plugin-image',
    'gatsby-plugin-dark-mode',
    'gatsby-plugin-postcss',
    'gatsby-plugin-recaptcha',
    {
      resolve: `gatsby-plugin-netlify`,
      options: {
        mergeCachingHeaders: false, // boolean to turn off the default caching headers
        headers: {
          "/schema/": ["Access-Control-Allow-Origin:*"],
        },
      },
    },
    {
      resolve: 'gatsby-plugin-brotli',
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-relative-images`,
            options: {
              name: 'uploads',
            },
          },
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1000,
              quality: 72,
              withWebp: true,
              withAvif: true,
            },
          },
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-sitemap',
      options: {
        resolveSiteUrl: () =>
          process.env.GATSBY_APP_URL || 'http://localhost:8000',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/static/img`,
        name: 'uploads',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/content`,
        name: 'pages',
      },
    },
    {
      resolve: 'gatsby-transformer-json',
      options: {
        path: `${__dirname}/content/schema/objects/`,
        name: 'structureObjects',
      },
    },
    {
      resolve: 'gatsby-transformer-json',
      options: {
        path: `${__dirname}/content/schema/permissions/`,
        name: 'structurePermissions',
      },
    },
    {
      resolve: 'gatsby-plugin-root-import',
      options: {
        '@': path.join(__dirname, 'src'),
        '~': path.join(__dirname, ''),
        styles: path.join(__dirname, 'src/styles'),
        img: path.join(__dirname, 'static/img'),
      },
    },
    {
      resolve: 'gatsby-plugin-netlify-cms',
      options: {
        manualInit: true,
        modulePath: `${__dirname}/cms/cms.js`,
      },
    },
    {
      resolve: 'gatsby-background-image-es5',
      options: {
        specialChars: '/:',
      },
    },
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: process.env.GATSBY_APP_URL || 'http://localhost:8000',
        sitemap: process.env.GATSBY_APP_URL || 'http://localhost:8000' + '/sitemap-0.xml',
        policy: [{userAgent: '*', disallow: ['/sponsered-by', '/theme/*']}]
      }
    },
    {
      resolve: `gatsby-plugin-json-output`,
      options: {
        siteUrl: siteUrl, // defined on top of plugins
        graphQLQuery: `
          {
            allPermissionsJson {
              nodes {
                id
                key
                name
                sub_group
                group
                type
              }
            }
          }
        `,
        feedMeta: {
          author: {
            name: 'Service center Schema',
          },
          description: "This Feed Contain Permissions schema",
          favicon: `${siteUrl}/icons/icon-48x48.png`,
          title: "Permission",
        },
        serializeFeed: results => results.data.allPermissionsJson.nodes.map((key, name, group, sub_group, type) => {
          return {
            key: key,
            name: name,
            group: group,
            sub_group: sub_group,
            type: type
          }
        }),
        feedFilename: "schema/permissions",
        nodesPerFeedFile: 1000,
      }
    },
    {
      resolve: `gatsby-plugin-json-output`,
      options: {
        siteUrl: siteUrl, // defined on top of plugins
        graphQLQuery: `
          {
            allObjectsJson {
              nodes {
                id
                key
                name
                type
              }
            }
          }
        `,
        feedMeta: {
          author: {
            name: 'Service center Schema',
          },
          description: "This Feed Contain Objects schema",
          favicon: `${siteUrl}/icons/icon-48x48.png`,
          title: "Objects",
        },
        serializeFeed: results => results.data.allObjectsJson.nodes.map(({key, name, type}) => {
          return {
            slug: key,
            name: name,
            type: type
          }
        }),
        feedFilename: "schema/objects",
        nodesPerFeedFile: 1000,
      }
    },
    'gatsby-plugin-sitemap',
    {
      resolve: "gatsby-plugin-sitemap",
      excludes: ['/sponsered-by', '/theme/*']
    },
    'gatsby-plugin-netlify', // make sure to keep it last in the array
  ],
}
