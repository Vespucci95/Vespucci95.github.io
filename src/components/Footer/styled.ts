import styled from '@emotion/styled';

export const Container = styled.footer`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 80px;
    background-color: rgba(0, 0, 0, 0.08);
    box-sizing: border-box;
`;

export const Copyright = styled.p`
    font-size: 0.75em;
    color: ${({ theme }) => theme.color.black};
`;
