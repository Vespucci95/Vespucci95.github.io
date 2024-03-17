import { graphql, PageProps } from 'gatsby';
import * as React from 'react';

import MDXRender from '@/components/MDXRender';
import { MarkdownRemark, MetaData } from 'GatsbyGraphQL';
import PostNavigation from '@/components/PostNavigation';
import Preface from '@/components/Preface';
import Seo from '@/components/Seo';
import { Utils } from '@/utils/Utils';
import Layout from '@/components/Layout';
import { GatsbyImage } from 'gatsby-plugin-image';
import TwoColumnLayout from '@/components/TwoColumnLayout';
import styled from '@emotion/styled';
import { INNER } from '@/constants';
import { MEDIA_QUERY_MAX_WIDTH } from '@/styles/Theme';
import Giscus from '@giscus/react';

type Props = {
    giscus: MetaData;
    post: MarkdownRemark;
    prev: MarkdownRemark;
    next: MarkdownRemark;
};

const Content = styled.div`
    padding: 10px ${INNER}px;
`;

const Thumbnail = styled(GatsbyImage)`
    width: 100%;
    height: 360px;
    border-radius: 12px;
    margin-bottom: ${INNER * 4}px;
`;

const TOC = styled.div`
    position: sticky;
    top: 40px;
    display: flex;
    padding: 10px ${INNER}px;
    font-size: 0.875em;
    font-weight: 300;
    justify-content: center;

    a {
        color: ${({ theme }) => theme.color.gray300};
    }

    ul {
        display: flex;
        flex-direction: column;
        gap: 4px;

        li {
            margin-left: 10px;
        }
    }

    @media ${MEDIA_QUERY_MAX_WIDTH} {
        display: none;
    }
`;

const PostLayout: React.FC<PageProps> = ({ data }) => {
    const {
        post,
        prev,
        next,
        giscus: {
            siteMetadata: { giscus },
        },
    } = data as Props;
    const { thumbnail } = post.frontmatter;
    return (
        <Layout>
            <TwoColumnLayout
                leftColumn={
                    <Content>
                        {thumbnail ? (
                            <Thumbnail
                                alt={post.frontmatter.title}
                                image={thumbnail.childImageSharp.gatsbyImageData}
                                draggable={false}
                            />
                        ) : null}
                        <Preface
                            title={post.frontmatter.title}
                            thumbnail={post.frontmatter.thumbnail}
                            tags={post.fields.hashTag}
                            date={post.frontmatter.date}
                            categories={post.frontmatter.categories}
                        />
                        <div className="markdown">
                            <MDXRender html={Utils.convertPostFormatMDX(post.html)} />
                        </div>
                        <PostNavigation prevPost={prev} nextPost={next} />
                        <Giscus {...giscus} />
                    </Content>
                }
                rightColumn={<TOC dangerouslySetInnerHTML={{ __html: post.tableOfContents }} />}
            />
        </Layout>
    );
};

export const Head = ({
    pageContext,
}: {
    pageContext: { title: string; slug: string; nextSlug: string; prevSlug: string };
}) => {
    return <Seo title={pageContext.title} />;
};

export const query = graphql`
    query PostDetailBySlug($slug: String, $nextSlug: String, $prevSlug: String) {
        giscus: site {
            siteMetadata {
                giscus {
                    id
                    repo
                    repoId
                    category
                    categoryId
                    mapping
                    strict
                    reactionsEnabled
                    emitMetadata
                    inputPosition
                    theme
                    lang
                    loading
                }
            }
        }
        post: markdownRemark(fields: { slug: { eq: $slug } }) {
            id
            html
            rawMarkdownBody
            frontmatter {
                date(formatString: "YYYY.MM.DD")
                title
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
            tableOfContents
        }
        prev: markdownRemark(fields: { slug: { eq: $prevSlug } }) {
            id
            rawMarkdownBody
            frontmatter {
                date(formatString: "YYYY.MM.DD")
                title
                stage
                categories
            }
            fields {
                slug
            }
        }
        next: markdownRemark(fields: { slug: { eq: $nextSlug } }) {
            id
            rawMarkdownBody
            frontmatter {
                date(formatString: "YYYY.MM.DD")
                title
                stage
                categories
            }
            fields {
                slug
            }
        }
    }
`;

export default PostLayout;
