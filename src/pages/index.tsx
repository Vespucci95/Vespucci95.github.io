import * as React from 'react';
import type { HeadFC, PageProps } from 'gatsby';
import Seo from '@/components/Seo';
import { graphql } from 'gatsby';
import { AllMarkdownRemark } from 'GatsbyGraphQL';
import Banner from '@/components/Banner';
import Layout from '@/components/Layout';
import MainPosts from '@/components/MainPost';
import SubPosts from '@/components/SubPost';
import TwoColumnLayout from '@/components/TwoColumnLayout';

type Props = {
    mainPosts: AllMarkdownRemark;
    subPosts: AllMarkdownRemark;
};

const IndexPage: React.FC<PageProps> = ({ data }) => {
    const { mainPosts, subPosts } = data as unknown as Props;
    return (
        <Layout>
            <Banner />
            <TwoColumnLayout
                leftColumn={<MainPosts edges={mainPosts.edges} />}
                rightColumn={<SubPosts edges={subPosts.edges} />}
            />
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
