import { graphql } from 'gatsby';

export const SiteFragment = graphql`
    fragment MetaData on Site {
        siteMetadata {
            title
            description
            siteUrl
        }
    }
`;

export const FileFragment = graphql`
    fragment ImageURL on File {
        childImageSharp {
            gatsbyImageData(width: 120, height: 120)
        }
        publicURL
    }
`;
