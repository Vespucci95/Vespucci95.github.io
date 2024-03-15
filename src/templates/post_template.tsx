import { graphql, PageProps } from 'gatsby';
import * as React from 'react';

import MDXRender from '@/components/MDXRender';
import { MarkdownRemark } from 'GatsbyGraphQL';
import PostNavigation from '@/components/PostNavigation';
import Preface from '@/components/Preface';
import Seo from '@/components/Seo';
import { Utils } from '@/utils/Utils';
import Layout from '@/components/Layout';
import { GatsbyImage } from 'gatsby-plugin-image';
import TwoColumnLayout from '@/components/TwoColumnLayout';
import styled from '@emotion/styled';
import { INNER } from '@/constants';

type Props = {
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

const PostLayout: React.FC<PageProps> = ({ data }) => {
    const { post, prev, next } = data as Props;
    const result = Utils.HashTag.create(post.html);
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
                            <MDXRender html={result} />
                        </div>
                        <PostNavigation prevPost={prev} nextPost={next} />
                    </Content>
                }
                rightColumn={<div>nav</div>}
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
        post: markdownRemark(fields: { slug: { eq: $slug } }) {
            id
            html
            rawMarkdownBody
            frontmatter {
                date(formatString: "YYYY.MM.DD")
                title
                tags
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
        prev: markdownRemark(fields: { slug: { eq: $prevSlug } }) {
            id
            rawMarkdownBody
            frontmatter {
                date(formatString: "YYYY.MM.DD")
                title
                tags
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
                tags
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
