import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import Seo from '@/components/Seo';
import Layout from '@/layout';
import { graphql } from 'gatsby';
import { AllMarkdownRemark } from 'GatsbyGraphQL';

type Props = {
    mainPosts: AllMarkdownRemark;
    subPosts: AllMarkdownRemark;
};

const IndexPage: React.FC<PageProps> = ({ data }) => {
    const { mainPosts, subPosts } = data as unknown as Props;
    return (
        <Layout>
            <div>
            </div>
        </Layout>
    )
}

export const Head: HeadFC = () => <Seo title="Home" />

export default IndexPage

export const query = graphql`
    query ExcerptPost {
        mainPosts: allMarkdownRemark(filter: { frontmatter: { categories: {regex: "/main/" } } }, sort:{frontmatter: {date:DESC}}) {
            totalCount
            edges {
                ...Post
            }
        }
        subPosts: allMarkdownRemark(filter: { frontmatter: { categories: {regex: "/sub/" } } }, sort:{frontmatter: {date:DESC}}) {
            totalCount
            edges {
                ...Post
            }
        }
    }
`
