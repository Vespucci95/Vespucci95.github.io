import * as S from './styled';
import React, { useContext, useEffect } from 'react';
import { ThemeManagerContext } from 'gatsby-emotion-dark-mode';
import { graphql, useStaticQuery } from 'gatsby';
type FaviconImage = {
    dark: {
        publicURL: string;
    };
    light: {
        publicURL: string;
    };
};

const Theme: React.FC = () => {
    const theme = useContext(ThemeManagerContext);
    const { dark, light }: FaviconImage = useStaticQuery(graphql`
        query Favicon {
            dark: file(name: { eq: "icon_moon" }) {
                publicURL
            }
            light: file(name: { eq: "icon_sun" }) {
                publicURL
            }
        }
    `);

    useEffect(() => {
        const favicon = document.querySelector("link[rel~='icon']")!;
        favicon.setAttribute('href', theme.isDark ? dark.publicURL : light.publicURL);
    }, [theme]);
    return (
        <S.Wrapper isDark={theme.isDark} onClick={() => theme.toggleDark()}>
            {theme.isDark ? '🌝' : '🌞'}
        </S.Wrapper>
    );
};

export default Theme;
