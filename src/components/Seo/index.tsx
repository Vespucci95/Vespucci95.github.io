import * as React from 'react';
import { IGatsbyImageData } from 'gatsby-plugin-image';
import { MetaData } from 'GatsbyGraphQL';
import { graphql, useStaticQuery } from 'gatsby';

type SeoProps = {
    meta: MetaData;
    ogImage: {
        childImageSharp: {
            gatsbyImageData: IGatsbyImageData;
        };
        publicURL: string;
    };
    profileImage: {
        childImageSharp: {
            gatsbyImageData: IGatsbyImageData;
        };
        publicURL: string;
    };
};

type Props = {
    title?: string;
    ogImageURL?: string | null;
};

const Seo = ({ title = '', ogImageURL }: Props) => {
    const { meta, ogImage }: SeoProps = useStaticQuery(graphql`
        query MetaQuery {
            meta: site {
                ...MetaData
            }
            ogImage: file(name: { eq: "og-image" }) {
                ...ImageURL
            }
            profileImage: file(name: { eq: "profile-image" }) {
                ...ImageURL
            }
        }
    `);

    const convertTitleFormat = (content: string) => (title ? `${title} | ${content}` : content);

    return (
        <>
            <title>{`${title ?? meta.siteMetadata.author}`}</title>
            <meta lang="ko" />
            <meta property="og:type" content="website" />
            <meta httpEquiv="content-type" content="text/html; charset=UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <meta name="description" content={meta.siteMetadata.description} />
            <meta property="og:title" content={convertTitleFormat(meta.siteMetadata.author)} />
            <meta property="og:description" content={meta.siteMetadata.description} />
            <meta property="og:image" content={ogImageURL ?? ogImage.publicURL} />
            <meta property="og:site_name" content={convertTitleFormat(meta.siteMetadata.author)} />
            <meta property="og:site_title" content={convertTitleFormat(meta.siteMetadata.author)} />
            <meta property="og:author" content={meta.siteMetadata.author} />
            <meta name="twitter:card" content="summary" />
            <meta name="twitter:title" content={convertTitleFormat(meta.siteMetadata.author)} />
            <meta name="twitter:description" content={meta.siteMetadata.description} />
            <meta name="twitter:image" content={meta.siteMetadata.siteUrl} />
            <meta name="google-site-verification" content="NRo4yKk2rmtkRhrG_L6RCXb1Jcw8VZwg6beWfo3U2t0" />
            <meta name="naver-site-verification" content="bad4dc83cef571597393ea6e13eed3807d2b3a7f" />
            <meta name="twitter:site" content="Vespucci95" />
            <meta name="twitter:creator" content="Vespucci95" />
        </>
    );
};

export default Seo;
