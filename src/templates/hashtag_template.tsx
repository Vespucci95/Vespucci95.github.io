import * as React from 'react';
import { graphql, PageProps } from 'gatsby';
import Seo from '@/components/Seo';
import { AllMarkdownRemark } from 'GatsbyGraphQL';
import Post from '@/components/Post';
import Border from '@/components/Border';
import Layout from '@/components/Layout';

type Props = {
    posts: AllMarkdownRemark;
};

const HashTagTemplate: React.FC<PageProps> = ({ data }) => {
    const { posts } = data as Props;
    return (
        <Layout>
            {posts.edges.map(({ node, next }) => (
                <>
                    <Post key={node.id} post={node} />
                    {next && <Border />}
                </>
            ))}
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
    query SearchHashTag($hashTag: String) {
        posts: allMarkdownRemark(filter: { html: { regex: $hashTag } }) {
            totalCount
            edges {
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
                        tags
                    }
                    fields {
                        slug
                        hashTag
                    }
                }
            }
        }
    }
`;

export default HashTagTemplate;
