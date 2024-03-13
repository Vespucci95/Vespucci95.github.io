import React from 'react';
import * as S from './styled';
import { MarkdownNode } from 'GatsbyGraphQL';
import { Link } from 'gatsby';
import Tag from '@/components/Tag';

type Props = {
    post: MarkdownNode;
};

const Post = ({ post }: Props) => {
    return (
        <S.Wrapper>
            <Link to={post.fields.slug} key={post.id}>
                <S.Title>{post.frontmatter.title}</S.Title>
                <S.Description>{post.excerpt}</S.Description>
                <S.Row>
                    <S.TagContainer>{post.frontmatter.tags && post.frontmatter.tags.map((tag, idx) => <Tag tag={tag} key={idx} />)}</S.TagContainer>
                    <S.Date>{post.frontmatter.date}</S.Date>
                </S.Row>
            </Link>
        </S.Wrapper>
    );
};

export default Post;
