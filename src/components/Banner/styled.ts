import styled from '@emotion/styled';

export const Container = styled.div`
    width: 100%;
    display: flex;
    padding: 10px 0;
    align-items: center;
    justify-content: space-between;
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
    line-height: 1.2;
`;

export const Profile = styled.div`
    width: 245px;
    height: 245px;
    overflow: hidden;
`;

export const Mask = styled.div<{ src: string }>`
    display: flex;
    width: 100%;
    height: 100%;
    mask: url(${props => props.src}) no-repeat 50% 50% / contain;
    -webkit-mask-image: url(${props => props.src} no-repeat 50% 50% / contain;;;;;;
`;
