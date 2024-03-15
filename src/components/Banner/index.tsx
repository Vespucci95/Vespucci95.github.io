import React from 'react';
import * as S from './styled';
import { graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';

const Banner = () => {
    const { image, svg } = useStaticQuery(graphql`
        query getProfile {
            image: file(relativePath: { eq: "profile-image.png" }) {
                childImageSharp {
                    gatsbyImageData(width: 245, height: 245)
                }
            }
            svg: file(relativePath: { eq: "mask.svg" }) {
                publicURL
            }
        }
    `);
    return (
        <S.Container>
            <S.TitleWrapper>
                <S.Title>
                    안녕하세요.
                    <br />
                    프론트엔드 개발자
                    <br />
                    이현서입니다.
                </S.Title>
                <S.SubTitle>TypeScript, React, ReactNative를 좋아합니다.</S.SubTitle>
            </S.TitleWrapper>
            <S.Profile>
                <S.Mask src={svg.publicURL}>
                    <GatsbyImage
                        alt={'profile'}
                        image={image.childImageSharp.gatsbyImageData}
                        style={{ width: 245, height: 245 }}
                    />
                </S.Mask>
            </S.Profile>
        </S.Container>
    );
};

export default Banner;
