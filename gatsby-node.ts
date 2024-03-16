import { Actions, GatsbyNode, Node } from 'gatsby';
import TsconfigPathsPlugin from 'tsconfig-paths-webpack-plugin';
import { createFilePath } from 'gatsby-source-filesystem';
import { AllMarkdownRemark, Edges } from 'GatsbyGraphQL';

type CreateNodeFn = <T extends Record<string, unknown> = Record<string, string>>(
    node: Node & T,
    actions: Actions
) => unknown;
type CreatePageFn<T> = (actions: Actions, payload: T) => void;
type CreatePageProps = {
    allMarkdownRemark: AllMarkdownRemark;
};

const query = `
query CreatePage {
  allMarkdownRemark(sort: {frontmatter: {date:DESC}}) {
    edges {
      next {
        frontmatter {
          title
          date(formatString: "YYYY-MM-DD")
          stage
          categories
          description
        }
        fields {
          slug
          hashTag
        }
      }
      previous {
        frontmatter {
          title
          date(formatString: "YYYY-MM-DD")
        }
        fields {
          slug
          hashTag
        }
      }
      node {
        frontmatter {
          title
          date(formatString: "YYYY-MM-DD")
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

const createHashTagField: CreateNodeFn = (node, actions) => {
    const { createNodeField } = actions;
    if (node.internal.content) {
        const hashTags = new Set(node.internal.content.match(/#[A-Za-z0-9가-힣]+/gm));
        createNodeField({ node, name: 'hashTag', value: [...hashTags] });
    }
};

const createHashTagPage: CreatePageFn<string[]> = (actions, hashTags) => {
    const { createPage } = actions;
    createPage({
        path: `/hashtag`,
        component: `${__dirname}/src/templates/hashtags_template.tsx`,
        context: { hashTags },
    });
};

const createHashTagPages: CreatePageFn<string[]> = (actions, hashTags) => {
    const { createPage } = actions;
    hashTags.forEach(hashTag => {
        const hashTagName = hashTag.replace(/#/, '');
        createPage({
            path: `/hashtag/${hashTagName}`,
            component: `${__dirname}/src/templates/hashtag_template.tsx`,
            context: { hashTag: `/${hashTag}\\s/gm`, title: hashTagName },
        });
    });
};

const createPostPages: CreatePageFn<Edges> = (action, edge) => {
    const { createPage } = action;
    const { slug } = edge.node.fields;
    createPage({
        path: slug,
        component: `${__dirname}/src/templates/post_template.tsx`,
        context: {
            title: edge.node.frontmatter.title,
            slug: slug,
            nextSlug: edge.next?.fields.slug ?? '',
            prevSlug: edge.previous?.fields.slug ?? '',
        },
    });
};

export const onCreateWebpackConfig: GatsbyNode['onCreateWebpackConfig'] = ({ getConfig, actions }) => {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    const output = (getConfig().output as object) || {};

    actions.setWebpackConfig({
        output,
        resolve: {
            plugins: [new TsconfigPathsPlugin()],
        },
    });
};
export const createPages: GatsbyNode['createPages'] = async ({ actions, graphql, reporter }) => {
    const res = await graphql<CreatePageProps, void>(query);

    if (res.errors || !res.data) {
        reporter.panicOnBuild(`Error while running query`);
        return;
    }
    const hashTags: Set<string> = new Set();
    res.data.allMarkdownRemark.edges.forEach(edge => {
        const { hashTag } = edge.node.fields;
        if (hashTag) {
            hashTag.forEach(tag => hashTags.add(tag));
        }
        createPostPages(actions, edge);
    });
    createHashTagPage(actions, [...hashTags]);
    createHashTagPages(actions, [...hashTags]);
};

export const onCreateNode: GatsbyNode['onCreateNode'] = ({ node, getNode, actions }) => {
    const { createNodeField } = actions;
    if (node.internal.type === `MarkdownRemark`) {
        const slug = createFilePath({
            node,
            getNode,
            basePath: `Vespucci95.github.io`,
        }).replace(/(\/)$/gm, '');
        createNodeField({ node, name: `slug`, value: slug });
        createHashTagField(node, actions);
    }
};
