import * as React from 'react';
import { Link, PageProps } from 'gatsby';
import Seo from '@/components/Seo';
import Layout from '@/components/Layout';

type PageContext = {
    hashTags: string[];
};

const HashTagTemplate: React.FC<PageProps> = ({ pageContext }) => {
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

export default HashTagTemplate;
