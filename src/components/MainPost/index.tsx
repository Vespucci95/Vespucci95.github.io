import React from 'react';
import { Edges } from 'GatsbyGraphQL';
import * as S from './styled';
import { Link } from 'gatsby';

type Props = {
    edges: Edges[];
};

const MainPosts = ({ edges }: Props) => {
    return (
        <S.Container>
            {edges.map(edge => {
                const hasHashTag = edge.node.fields.hashTag && edge.node.fields.hashTag.length > 0;
                return (
                    <Link to={edge.node.fields.slug} key={edge.node.id}>
                        <S.Wrapper>
                            <S.Thumbnail
                                alt={edge.node.id}
                                image={edge.node.frontmatter.thumbnail.childImageSharp.gatsbyImageData}
                                draggable={false}
                            />
                            <S.PostContent>
                                <S.Title>{edge.node.frontmatter.title}</S.Title>
                                <S.Description>{edge.node.frontmatter.description}</S.Description>
                                <S.Row>
                                    <S.Info>
                                        {edge.node.frontmatter.categories}
                                        {hasHashTag ? ' ∣ ' + edge.node.fields.hashTag.join(', ') : null}
                                    </S.Info>
                                    <S.Date>{edge.node.frontmatter.date}</S.Date>
                                </S.Row>
                            </S.PostContent>
                        </S.Wrapper>
                    </Link>
                );
            })}
        </S.Container>
    );
};
export default MainPosts;
