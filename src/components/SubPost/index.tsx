import React from 'react';
import { Edges } from 'GatsbyGraphQL';
import * as S from './styled';

type Props = {
    edges: Edges[];
};

const SubPosts = ({ edges }: Props) => {
    return (
        <S.Container>
            {edges.map(edge => {
                const hasHashTag = edge.node.fields.hashTag && edge.node.fields.hashTag.length > 0;
                return (
                    <S.Wrapper key={edge.node.id}>
                        <S.Title>{edge.node.frontmatter.title}</S.Title>
                        <S.Row>
                            <S.Info>
                                {edge.node.frontmatter.categories}
                                {hasHashTag ? ' ∣ ' + edge.node.fields.hashTag.join(', ') : null}
                            </S.Info>
                            <S.Date>{edge.node.frontmatter.date}</S.Date>
                        </S.Row>
                    </S.Wrapper>
                );
            })}
        </S.Container>
    );
};

export default SubPosts;
