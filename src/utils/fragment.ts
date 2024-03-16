import { graphql } from 'gatsby';

export const SiteFragment = graphql`
    fragment MetaData on Site {
        siteMetadata {
            title
            description
            siteUrl
            author
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

export const PostFragment = graphql`
    fragment Post on MarkdownRemarkEdge {
        next {
            fields {
                slug
            }
        }
        node {
            id
            wordCount {
                paragraphs
                sentences
                words
            }
            excerpt
            frontmatter {
                title
                date(formatString: "YYYY-MM-DD")
                stage
                categories
                description
                thumbnail {
                    childImageSharp {
                        gatsbyImageData(width: 800)
                    }
                }
            }
            fields {
                slug
                hashTag
            }
        }
    }
`;
