import styled from '@emotion/styled';

export const Wrapper = styled.div`
    text-decoration: unset;
    width: 100%;
`;

export const Title = styled.h4`
    margin-bottom: 0.625em;
    font-size: 2em;
    font-weight: 200;
    color: ${({ theme }) => theme.color.black};
`;

export const Description = styled.p`
    margin-bottom: 1em;
    font-size: 1em;
    font-weight: 200;
    color: ${({ theme }) => theme.color.black};
`;

export const Date = styled.p`
    font-size: 0.75em;
    font-weight: 200;
    color: ${({ theme }) => theme.color.black};
`;

export const TagContainer = styled.div`
    display: flex;
    gap: 4px;
    max-width: 70%;
`;

export const Row = styled.div`
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
`;
