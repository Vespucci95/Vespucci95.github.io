import dotenv from 'dotenv';
import type { GatsbyConfig } from 'gatsby';

dotenv.config();

const config: GatsbyConfig = {
    siteMetadata: {
        title: `이현서`,
        siteUrl: `https://vespucci95.github.io`,
        author: `이현서`,
        description: `frontend developer`,
        giscus: {
            id: 'comments',
            repo: 'Vespucci95/Vespucci95.github.io',
            repoId: 'R_kgDOLf3Y2Q',
            category: 'Comments',
            categoryId: 'DIC_kwDOLf3Y2c4CeCH6',
            mapping: 'pathname',
            strict: '0',
            reactionsEnabled: '1',
            emitMetadata: '0',
            inputPosition: 'bottom',
            theme: 'light_tritanopia',
            lang: 'ko',
        },
    },
    graphqlTypegen: true,
    plugins: [
        {
            resolve: 'gatsby-plugin-robots-txt',
            options: {
                policy: [{ userAgent: '*', allow: '/' }],
            },
        },
        {
            resolve: 'gatsby-plugin-canonical-urls',
            options: {
                siteUrl: '<https://vespucci95.github.io/>',
                stripQueryString: true,
            },
        },
        {
            resolve: 'gatsby-plugin-typescript',
            options: {
                isTSX: true,
                allExtensions: true,
            },
        },
        `gatsby-plugin-sass`,
        'gatsby-plugin-emotion',
        'gatsby-plugin-sitemap',
        {
            resolve: 'gatsby-plugin-sharp',
            options: {
                formats: ['auto', 'webp'],
                quality: 100,
                placeholder: 'blurred',
            },
        },
        'gatsby-transformer-sharp',
        'gatsby-plugin-image',
        {
            resolve: `gatsby-emotion-dark-mode`,
            options: {
                light: { mainColor: 'brandyRose' },
                dark: { mainColor: 'manatee' },
            },
        },
        {
            resolve: 'gatsby-transformer-remark',
            options: {
                plugins: [
                    {
                        resolve: 'gatsby-remark-smartypants',
                        options: {
                            dashes: 'oldschool',
                        },
                    },
                    {
                        resolve: `gatsby-remark-autolink-headers`,
                        options: {
                            offsetY: `100`,
                            className: `post-toc`,
                            maintainCase: false,
                            removeAccents: true,
                            elements: [`h1`, `h2`, `h3`],
                        },
                    },
                    {
                        resolve: 'gatsby-remark-prismjs',
                        options: {
                            classPrefix: 'language-',
                        },
                    },
                    {
                        resolve: 'gatsby-remark-images',
                        options: {
                            maxWidth: 768,
                            quality: 100,
                            withWebp: true,
                        },
                    },
                    {
                        resolve: 'gatsby-remark-copy-linked-files',
                        options: {},
                    },
                    {
                        resolve: 'gatsby-remark-external-links',
                        options: {
                            target: '_blank',
                            rel: 'nofollow',
                        },
                    },
                ],
            },
        },
        {
            resolve: 'gatsby-plugin-google-gtag',
            options: {
                trackingIds: [
                    'G-2CJELGV3LJ', // Google Analytics / GA
                ],
            },
        },
        {
            resolve: 'gatsby-plugin-manifest',
            options: {
                icon: 'src/images/icon_moon.png',
            },
        },
        {
            resolve: `gatsby-plugin-mdx`,
            options: {
                extensions: [`.mdx`, `.md`],
                defaultLayouts: {
                    default: `${__dirname}/src/templates/default-template.tsx`,
                },
            },
        },
        {
            resolve: `gatsby-remark-images`,
            options: {
                maxWidth: 800,
                linkImagesToOriginal: false,
                backgroundColor: 'transparent',
            },
        },
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: 'images',
                path: `${__dirname}/src/images/`,
            },
            __key: 'images',
        },
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: 'static-image',
                path: `${__dirname}/static`,
            },
        },
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: 'pages',
                path: `${__dirname}/src/pages/`,
            },
            __key: 'pages',
        },
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: 'media',
                path: `${__dirname}/contents/Vespucci95.github.io/media`,
            },
        },
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: 'posts',
                path: `${__dirname}/contents`,
                ignore: [`**/.*`],
            },
        },
    ],
};

export default config;
