import React from 'react';
import * as S from './styled';
import { Frontmatter } from 'GatsbyGraphQL';
import Tag from '@/components/Tag';

const Preface = ({ title, date, tags }: Omit<Frontmatter, 'stage'>) => {
    return (
        <S.Container>
            <S.Title>{title}</S.Title>
            <S.Row>
                <S.TagContainer>{tags && tags.map((tag, idx) => <Tag tag={tag} key={idx} />)}</S.TagContainer>
                <S.Date>{date}</S.Date>
            </S.Row>
        </S.Container>
    );
};

export default Preface;
