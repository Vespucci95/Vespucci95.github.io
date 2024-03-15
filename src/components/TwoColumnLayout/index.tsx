import React, { ReactNode } from 'react';
import * as S from './styled';

type Props = {
    leftColumn: ReactNode;
    rightColumn: ReactNode;
};

const TwoColumnLayout = ({ leftColumn, rightColumn }: Props) => {
    return (
        <S.Wrapper>
            <S.LeftColumn>{leftColumn}</S.LeftColumn>
            <S.RightColumn>{rightColumn}</S.RightColumn>
        </S.Wrapper>
    );
};

export default TwoColumnLayout;
