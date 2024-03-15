import React from 'react';
import * as S from './styled';

const Banner = () => {
    return (
        <S.Container>
            <S.TitleWrapper>
                <S.Title>
                    안녕하세요.
                    <br />
                    프론트엔드 개발자
                    <br />
                    이현서입니다.
                </S.Title>
                <S.SubTitle>TypeScript, React, ReactNative를 좋아합니다.</S.SubTitle>
            </S.TitleWrapper>
            <S.Profile></S.Profile>
        </S.Container>
    );
};

export default Banner;
