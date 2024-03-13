import React from 'react';
import * as S from './styled';
import { MarkdownRemark } from 'GatsbyGraphQL';
import { Link } from 'gatsby';
import Tag from '@/components/Tag';
const Navigation = (post: Omit<MarkdownRemark, 'html'> & { label: string }) => {
    return (
        <>
            <Link to={post.fields.slug}>
                <S.Label>{post.label}</S.Label>
                <S.Title>{post.frontmatter.title}</S.Title>
            </Link>
            <S.TagContainer>
                {post.frontmatter.tags.map((tag, index) => (
                    <Tag key={index} tag={tag} />
                ))}
            </S.TagContainer>
        </>
    );
};

type Props = {
    prevPost: MarkdownRemark | null;
    nextPost: MarkdownRemark | null;
};

const PostNavigation = ({ prevPost, nextPost }: Props) => {
    return (
        <S.Container>
            <S.Wrapper>{nextPost && <Navigation {...nextPost} label="이전 포스트" />}</S.Wrapper>
            <S.Wrapper>{prevPost && <Navigation {...prevPost} label="다음 포스트" />}</S.Wrapper>
        </S.Container>
    );
};

export default PostNavigation;
