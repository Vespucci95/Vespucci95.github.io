import { Theme } from '@emotion/react';
const MEDIA_QUERY_MAX_WIDTH = `(max-width: 768px)`;
const lightTheme: Theme = {
    color: {
        bg: '#FFF',
        primary: '#F25F45',
        black: '#000',
        white: '#FFF',
        link: '#4078c0',
        gray500: '#999',
        blackA20: 'rgba(0,0,0,0.2)'
    },
};

const darkTheme: Theme = {
    color: {
        bg: '#2D3545',
        primary: '#F25F45',
        black: '#FFF',
        white: '#000',
        link: '#4078c0',
        gray500: '#999',
        blackA20: 'rgba(255,255,255,0.2)'
    },
};

export { lightTheme, darkTheme, MEDIA_QUERY_MAX_WIDTH };
