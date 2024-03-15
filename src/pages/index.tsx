import * as React from 'react';
import type { HeadFC, PageProps } from 'gatsby';
import Seo from '@/components/Seo';
import { graphql } from 'gatsby';
import { AllMarkdownRemark } from 'GatsbyGraphQL';
import Banner from '@/components/Banner';
import Layout from '@/components/Layout';
import MainPosts from '@/components/MainPost';

type Props = {
    mainPosts: AllMarkdownRemark;
    subPosts: AllMarkdownRemark;
};

const IndexPage: React.FC<PageProps> = ({ data }) => {
    const { mainPosts, subPosts } = data as unknown as Props;
    return (
        <Layout>
            <Banner />
            <div style={{ display: 'flex', width: '100%' }}>
                <div style={{ width: '100%', display: 'flex' }}>
                    <MainPosts edges={mainPosts.edges} />
                </div>
                <div style={{ minWidth: '288px', display: 'flex' }}>
                    하루에 4시간만 일하면서 연 20억을 넘게 버는 1인 창업가들
                </div>
            </div>
        </Layout>
    );
};

export const Head: HeadFC = () => <Seo title="Home" />;

export default IndexPage;

export const query = graphql`
    query ExcerptPost {
        mainPosts: allMarkdownRemark(
            filter: { frontmatter: { stage: { regex: "/main/" } } }
            sort: { frontmatter: { date: DESC } }
        ) {
            totalCount
            edges {
                ...Post
            }
        }
        subPosts: allMarkdownRemark(
            filter: { frontmatter: { stage: { regex: "/sub/" } } }
            sort: { frontmatter: { date: DESC } }
        ) {
            totalCount
            edges {
                ...Post
            }
        }
    }
`;
