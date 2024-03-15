import * as React from 'react';
import { graphql, Link, PageProps } from 'gatsby';
import Seo from '@/components/Seo';
import Layout from '@/components/Layout';

type PageContext = {
    hashTags: string[];
};

const HashTagTemplate: React.FC<PageProps> = ({ data, location, pageContext }) => {
    const query = new URLSearchParams(location.search).get('name');
    const { hashTags } = pageContext as PageContext;
    return (
        <Layout>
            <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', gap: '20px' }}>
                {hashTags.map((hashTag, index) => {
                    return (
                        <div key={hashTag}>
                            <Link to={`/hashtag/${hashTag.replace(/#/g, '')}`}>
                                <p key={index} style={{ color: '#4078c0' }}>
                                    {hashTag}
                                </p>
                            </Link>
                        </div>
                    );
                })}
            </div>
        </Layout>
    );
};

export const Head = ({ pageContext }: { pageContext: { hashTag: string; title: string } }) => {
    return <Seo title="HashTags" />;
};

export const query = graphql`
    query getAllHashTag {
        allMarkdownRemark(filter: { html: { regex: "'/다/gm" } }) {
            edges {
                node {
                    html
                    fields {
                        hashTag
                    }
                }
            }
        }
    }
`;

export default HashTagTemplate;
