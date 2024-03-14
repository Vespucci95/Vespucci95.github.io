import React from 'react';
import * as S from './styled';
import Button from '@/components/Button';

const Header = () => {
    return (
        <S.Wrapper>
            <S.Container>
                <S.Title to="/">Hyunseo</S.Title>
                <S.MenuGroup>
                    <S.Menu to="/posts">Posts</S.Menu>
                    <S.Menu to="/hashtag">HashTags</S.Menu>
                    <S.Menu to="/about">About</S.Menu>
                    <Button.Theme />
                </S.MenuGroup>
            </S.Container>
        </S.Wrapper>
    );
};

export default Header;
