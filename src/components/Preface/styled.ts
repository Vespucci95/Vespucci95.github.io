import styled from '@emotion/styled';

export const Container = styled.div`
    width: 100%;
    margin-bottom: 4em;
`;

export const Title = styled.h1`
    margin-bottom: 0.5em;
    font-size: 2.25em;
    font-weight: 200;
    color: ${({ theme }) => theme.color.black};
`;

export const TagContainer = styled.div`
    display: flex;
    gap: 0.25em;
    max-width: 70%;
`;

export const Date = styled.p`
    font-size: 0.875em;
    font-weight: 200;
    color: ${({ theme }) => theme.color.black};
`;

export const Row = styled.div`
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
`;
