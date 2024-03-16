import React, { ReactNode, useContext } from 'react';
import * as S from './styled';
import { ThemeProvider } from '@emotion/react';
import GlobalStyle from '@/styles/GlobalStyle';
import { ThemeManagerContext } from 'gatsby-emotion-dark-mode';
import { darkTheme, lightTheme } from '@/styles/Theme';
import Footer from '@/components/Footer';
import Header from '@/components/Header';

type Props = {
    children: ReactNode;
};

const Layout = ({ children }: Props) => {
    const theme = useContext(ThemeManagerContext);
    return (
        <ThemeProvider theme={theme.isDark ? darkTheme : lightTheme}>
            <GlobalStyle />
            <Header />
            <S.Container>{children}</S.Container>
            <Footer />
        </ThemeProvider>
    );
};

export default Layout;
