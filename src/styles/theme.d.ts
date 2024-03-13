import '@emotion/react';

declare module '@emotion/react' {
    export interface Theme {
        color: {
            bg: string;
            primary: string;
            black: string;
            white: string;
            link: string;
            gray500: string;
        };
    }
}
