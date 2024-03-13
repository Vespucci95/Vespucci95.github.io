import styled from '@emotion/styled';

export const Wrapper = styled.span`
    font-size: 0.75em;
    font-weight: 500;
    background-color: ${({ theme }) => theme.color.primary};
    color: #fff;
    padding: 4px 8px;
    border-radius: 4px;
    text-transform: uppercase;
`;
