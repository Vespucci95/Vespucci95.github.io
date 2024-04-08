import React, { ReactNode } from 'react';
import * as S from './styled';
import { ThemeProvider } from '@emotion/react';
import GlobalStyle from '@/styles/GlobalStyle';
import { lightTheme } from '@/styles/Theme';
import Footer from '@/components/Footer';
import Header from '@/components/Header';

type Props = {
    children: ReactNode;
};

const Layout = ({ children }: Props) => {
    return (
        <ThemeProvider theme={lightTheme}>
            <GlobalStyle />
            <Header />
            <S.Container>{children}</S.Container>
            <Footer />
        </ThemeProvider>
    );
};

export default Layout;
