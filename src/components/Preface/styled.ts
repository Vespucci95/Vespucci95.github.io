import styled from '@emotion/styled';
import { Link } from 'gatsby';

export const Container = styled.div`
    width: 100%;
    margin-bottom: 4em;
`;

export const Title = styled.h1`
    margin-bottom: 0.5em;
    font-size: 1.75em;
    line-height: 1.14;
    font-weight: 200;
    color: ${({ theme }) => theme.color.black};
`;

export const Date = styled.p`
    font-size: 0.875em;
    font-weight: 200;
    color: ${({ theme }) => theme.color.gray300};
    white-space: nowrap;
`;

export const Body = styled.p`
    display: flex;
    gap: 4px;
    flex-wrap: wrap;
    font-size: 1em;
    font-weight: 200;
    color: ${({ theme }) => theme.color.gray300};
`;

export const Row = styled.div`
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
`;

export const Tag = styled(Link)``;
