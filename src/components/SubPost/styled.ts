import styled from '@emotion/styled';
import { INNER } from '@/constants';

export const Container = styled.div`
    display: flex;
    width: 100%;
    max-width: 288px;
    flex-direction: column;
    gap: 28px;
    padding: ${INNER}px;
`;

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    cursor: pointer;
    transition: all 0.2s;
    &:hover {
        transform: scale(1.015);
    }
`;

export const Title = styled.p`
    font-size: 0.875em;
    font-weight: 300;
    line-height: 1.14;
`;

export const Row = styled.div`
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
`;
export const Info = styled.p`
    overflow: hidden;
    white-space: nowrap;
    font-size: 0.875em;
    color: #939393;
    text-overflow: ellipsis;
`;
export const Date = styled.p`
    white-space: nowrap;
    font-size: 0.75em;
    color: #939393;
`;
