import * as React from 'react';
import { graphql, PageProps } from 'gatsby';
import Seo from '@/components/Seo';
import { AllMarkdownRemark } from 'GatsbyGraphQL';
import Layout from '@/components/Layout';
import { MainPost } from '@/components/MainPost';
import styled from '@emotion/styled';

type Props = {
    posts: AllMarkdownRemark;
};

const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 42px;
`;

const HashTagTemplate: React.FC<PageProps> = ({ data }) => {
    const { posts } = data as Props;
    return (
        <Layout>
            <Container>
                {posts.edges.map((edge, index) => (
                    <MainPost edge={edge} key={edge.node.id} />
                ))}
            </Container>
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
                ...Post
            }
        }
    }
`;

export default HashTagTemplate;
