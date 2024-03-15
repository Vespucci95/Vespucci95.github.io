import styled from '@emotion/styled';
import { INNER } from '@/constants';
import { GatsbyImage } from 'gatsby-plugin-image';

export const Container = styled.div`
    width: 100%;
    display: flex;
    margin-bottom: 24px;
    padding: 10px ${INNER}px;
    align-items: center;
    justify-content: space-between;
    background: red;
`;

export const TitleWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
`;

export const SubTitle = styled.p``;

export const Title = styled.h1`
    font-family: Pretendard, sans-serif;
    font-size: 2.375em;
    font-weight: 700;
    line-height: 1.14;
`;

export const ProfileWrapper = styled.div`
    width: 264px;
    height: 264px;
    overflow: hidden;
`;

export const Mask = styled.div<{ src: string }>`
    display: flex;
    width: 100%;
    height: 100%;
    mask: url(${props => props.src}) no-repeat 50% 50% / contain;
    -webkit-mask-image: url(${props =>
        props.src} no-repeat 50% 50% / contain;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
`;

export const Profile = styled(GatsbyImage)`
    width: 100%;
    height: 100%;
`;
