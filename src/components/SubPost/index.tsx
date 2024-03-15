import React from 'react';
import { Edges } from 'GatsbyGraphQL';
import { Link } from 'gatsby';
import * as S from './styled';

type Props = {
    edges: Edges[];
};

export const SubPost = ({ edge }: { edge: Edges }) => {
    const hasHashTag = edge.node.fields.hashTag && edge.node.fields.hashTag.length > 0;
    return (
        <Link to={edge.node.fields.slug} style={{ width: '100%' }}>
            <S.Wrapper>
                <S.Title>{edge.node.frontmatter.title}</S.Title>
                <S.Row>
                    <S.Info>
                        {edge.node.frontmatter.categories}
                        {hasHashTag ? ' ∣ ' + edge.node.fields.hashTag.join(', ') : null}
                    </S.Info>
                    <S.Date>{edge.node.frontmatter.date}</S.Date>
                </S.Row>
            </S.Wrapper>
        </Link>
    );
};

const SubPosts = ({ edges }: Props) => {
    return (
        <S.Container>
            {edges.map(edge => (
                <SubPost edge={edge} key={edge.node.id} />
            ))}
        </S.Container>
    );
};

export default SubPosts;
