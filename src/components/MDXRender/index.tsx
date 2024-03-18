import React, { FunctionComponent } from 'react';
import styled from '@emotion/styled';

interface PostContentProps {
    html: string;
}

const MarkdownRenderer = styled.div`
    * {
        line-height: 1.6;
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    p,
    li {
        color: ${({ theme }) => theme.color.black};
    }

    h1,
    h2,
    h3 {
        margin-top: 1.25em;
        line-height: 1.14;
    }

    h1 {
        margin-bottom: 0.4em;
        font-size: 2em;
        font-weight: 300;
        :first-child {
            margin-top: unset;
        }
    }
    h2 {
        margin-bottom: 0.3em;
        font-size: 1.8em;
        font-weight: 300;
        :first-child {
            margin-top: unset;
        }
    }
    h3 {
        margin-bottom: 0.25em;
        font-size: 1.5em;
        font-weight: 300;
        :first-child {
            margin-top: unset;
        }
    }
    h4 {
        margin-bottom: 0.2em;
        font-size: 1.375em;
        font-weight: 300;
    }
    h5 {
        font-size: 1.3em;
        font-weight: 300;
    }
    h6 {
        font-size: 1.1em;
        font-weight: 300;
    }

    p {
        margin-bottom: 0.825em;
        line-height: 1.5;
    }

    ul {
        padding-left: 2em;
        list-style-type: '– ';
    }
    ol {
        padding-left: 2em;
    }
    li:last-child {
        margin-bottom: 1em;
    }
    img {
        pointer-events: none;
        display: block;
        margin: 0 auto;
        position: relative;
    }
    img::before {
        content: '😎 이미지 휴가 중: 다녀올 때까지 기다려주세요. 🏖️🌴';
        display: block;
        overflow: hidden;
        width: 100%;
        height: 100%;
        background: ${({ theme }) => theme.color.bg};
        position: absolute;
        left: 0;
        top: 0;
        text-align: center;
        text-decoration: line-through;
        color: ${({ theme }) => theme.color.gray500};
    }

    table {
        width: 100%;
        border: 1px solid ${({ theme }) => theme.color.black};
        border-collapse: collapse;
    }

    th,
    td {
        color: ${({ theme }) => theme.color.black};
        border: 1px solid ${({ theme }) => theme.color.black};
    }

    th {
        padding: 4px 0;
        font-weight: 300;
    }

    td {
        padding: 2px 10px;
    }

    hr {
        margin: 2.5em 0;
    }

    strong {
        font-weight: 500;
    }
`;

const MDXRender: FunctionComponent<PostContentProps> = function ({ html }) {
    return <MarkdownRenderer dangerouslySetInnerHTML={{ __html: html }} />;
};

export default MDXRender;
