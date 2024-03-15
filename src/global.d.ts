declare module 'GatsbyGraphQL' {
    import { IGatsbyImageData } from 'gatsby-plugin-image';

    interface Frontmatter {
        readonly title: string;
        readonly date: string;
        readonly tags: string[];
        readonly stage: string;
        readonly categories: string;
        readonly description: string;
        readonly thumbnail: IGatsbyImageData | undefined
    }
    interface Fields {
        readonly slug: string;
        readonly hashTag: string[];
    }
    interface WordCount {
        paragraphs: number;
        sentences: number;
        words: number;
    }
    interface MarkdownNode {
        readonly id: string;
        readonly html: string;
        readonly wordCount: WordCount;
        readonly excerpt: string;
        readonly frontmatter: Frontmatter;
        readonly fields: Fields;
    }
    interface Edges {
        readonly next: MarkdownNode;
        readonly previous: MarkdownNode;
        readonly node: MarkdownNode;
    }
    interface AllMarkdownRemark {
        readonly totalCount: number;
        readonly edges: Edges[];
    }
    interface MarkdownRemark {
        readonly id: string;
        readonly html: string;
        readonly rawMarkdownBody: string;
        readonly frontmatter: Frontmatter;
        readonly fields: Fields;
    }
    interface SiteMetaData {
        readonly title: string;
        readonly description: string;
        readonly siteUrl: string;
        readonly author: string;
    }
    interface MetaData {
        siteMetadata: SiteMetaData;
    }
}
