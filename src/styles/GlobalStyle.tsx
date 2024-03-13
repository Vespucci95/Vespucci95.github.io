import React from 'react';
import { Global, css, Theme } from '@emotion/react';
import { MEDIA_QUERY_MAX_WIDTH } from '@/styles/Theme';

const style = (theme: Theme) => css`
    html {
        background: ${theme.color.bg};
        @media ${MEDIA_QUERY_MAX_WIDTH} {
            font-size: 14px;
            line-height: 1.2;
        }
    }
    a {
        text-decoration: unset;
        color: ${theme.color.link};
    }
    p {
        color: ${theme.color.black};
    }
`;

const GlobalStyle: React.FC = () => <Global styles={style} />;

export default GlobalStyle;
