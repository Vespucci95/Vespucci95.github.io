import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import Seo from '@/components/Seo';
import Layout from '@/layout';

const IndexPage: React.FC<PageProps> = () => {
    return (
        <Layout>
            <div>main</div>
        </Layout>
    )
}

export default IndexPage

export const Head: HeadFC = () => <Seo title="Home" />
