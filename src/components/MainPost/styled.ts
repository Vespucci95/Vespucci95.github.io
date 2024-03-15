import styled from '@emotion/styled';
import { GatsbyImage } from 'gatsby-plugin-image';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
`;

export const Wrapper = styled.div`
    display: flex;
    gap: 18px;
    padding: 12px;
    cursor: pointer;
    transition: all 0.2s;
    &:hover {
        transform: scale(1.015);
    }
`;

export const Thumbnail = styled(GatsbyImage)`
    border-radius: 10px;
    width: 190px;
    min-width: 190px;
    height: 170px;
`;

export const PostContent = styled.div`
    display: flex;
    width: 100%;
    gap: 10px;
    flex-direction: column;
    justify-content: center;
`;

export const Title = styled.p`
    font-size: 1.25em;
    font-weight: 300;
`;

export const Description = styled.p`
    font-size: 0.875em;
    color: #939393;
`;

export const Row = styled.div`
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
`;
export const Info = styled.p`
    font-size: 0.875em;
    color: #939393;
`;
export const Date = styled.p`
    font-size: 0.75em;
    color: #939393;
`;
