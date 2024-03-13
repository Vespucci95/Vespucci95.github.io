import styled from '@emotion/styled';
import { Link } from 'gatsby';
import { MEDIA_QUERY_MAX_WIDTH } from '@/styles/Theme';

export const Container = styled.header`
    max-width: 768px;
    display: flex;
    margin: 0 auto;
    align-items: center;
    justify-content: space-between;
    height: 140px;
    @media ${MEDIA_QUERY_MAX_WIDTH} {
        font-size: 0.825em;
    }
`;

export const Title = styled(Link)`
    font-family: Morena, Pretendard, sans-serif;
    font-size: 1.5em;
    font-weight: 700;
    text-align: justify;
    text-transform: uppercase;
    color: ${({ theme }) => theme.color.black};
`;

export const MenuGroup = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
`;

export const Menu = styled(Link)`
    font-family: Pretendard, sans-serif;
    font-size: 1em;
    font-weight: 200;
    text-transform: uppercase;
    color: ${({ theme }) => theme.color.black};
    padding-bottom: 4px;
`;
