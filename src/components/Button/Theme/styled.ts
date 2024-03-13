import styled from '@emotion/styled';
type Props = {
    isDark: boolean;
};
export const Wrapper = styled.div<Props>`
    display: flex;
    align-items: center;
    width: 1em;
    height: 1em;
    border-radius: 50%;
    font-size: 2em;
    cursor: pointer;
    animation: 1.5s ${({ isDark }) => (isDark ? 'moonShadow' : 'sunShadow')} infinite alternate;
`;
