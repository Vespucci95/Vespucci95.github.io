import styled from '@emotion/styled';
import { GatsbyImage } from 'gatsby-plugin-image';
import { INNER } from '@/constants';
import { MEDIA_QUERY_MAX_WIDTH } from '@/styles/Theme';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 42px;
    padding: ${INNER}px;
`;

export const Wrapper = styled.div`
    display: flex;
    gap: 18px;
    cursor: pointer;
    transition: all 0.2s;
    &:hover {
        transform: scale(1.015);
    }
    @media ${MEDIA_QUERY_MAX_WIDTH} {
        flex-direction: column;
    }
`;

export const Thumbnail = styled(GatsbyImage)`
    border-radius: 10px;
    width: 190px;
    min-width: 190px;
    height: 170px;
    @media ${MEDIA_QUERY_MAX_WIDTH} {
        width: 100%;
    }
`;

export const PostContent = styled.div`
    display: flex;
    width: 100%;
    gap: 6px;
    flex-direction: column;
    justify-content: center;
`;

export const Title = styled.h2`
    margin-bottom: 10px;
    font-size: 1.25em;
    font-weight: 300;
    line-height: 1.14;
    color: ${({ theme }) => theme.color.black};
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
