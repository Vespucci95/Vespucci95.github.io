import React from 'react';
import * as S from './styled';
import { Frontmatter } from 'GatsbyGraphQL';

const Preface = ({ title, date, tags, categories }: Omit<Frontmatter, 'stage' | 'description'>) => {
    return (
        <S.Container>
            <S.Title>{title}</S.Title>
            <S.Row>
                <S.Category>
                    {categories}
                    {tags && tags.length > 0 ? ' ∣ ' + tags.join(', ') : null}
                </S.Category>
                <S.Date>{date}</S.Date>
            </S.Row>
        </S.Container>
    );
};

export default Preface;
