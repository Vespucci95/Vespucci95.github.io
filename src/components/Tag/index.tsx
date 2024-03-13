import React from 'react';
import * as S from './styled';
type Props = {
    tag: string;
};

const Tag = ({ tag }: Props) => {
    return <S.Wrapper>{tag}</S.Wrapper>;
};

export default Tag;
