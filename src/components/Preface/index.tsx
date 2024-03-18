import React from 'react';
import * as S from './styled';
import { Frontmatter } from 'GatsbyGraphQL';

const Preface = ({
    title,
    date,
    tags,
    categories,
}: Omit<Frontmatter, 'stage' | 'description'> & { tags: string[] }) => {
    const hasHashTag = tags && tags.length > 0;
    return (
        <S.Container>
            <S.Title>{title}</S.Title>
            <S.Row>
                <S.Body>
                    <p>{categories}</p>
                    {hasHashTag && ' ∣ '}
                    {hasHashTag &&
                        tags.map(tag => (
                            <S.Tag key={tag} to={`/hashtag/${tag.replace('#', '')}`}>
                                {tag}
                            </S.Tag>
                        ))}
                </S.Body>
                <S.Date>{date}</S.Date>
            </S.Row>
        </S.Container>
    );
};

export default Preface;
