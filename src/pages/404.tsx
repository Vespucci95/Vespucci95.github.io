import * as React from 'react';
import { Link, HeadFC, PageProps } from 'gatsby';
import Layout from '@/components/Layout';
import styled from '@emotion/styled';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
`;

const Text = styled.h1`
    font-size: 4.375em;
    font-weight: 700;
    color: ${({ theme }) => theme.color.black};
`;

const Button = styled(Link)`
    color: ${({ theme }) => theme.color.black};
`;

const NotFoundPage: React.FC<PageProps> = () => {
    return (
        <Layout>
            <Container>
                <Text>404</Text>
                <p>페이지를 찾을 수 없습니다.</p>
                <Button to="/">홈으로</Button>
            </Container>
        </Layout>
    );
};

export default NotFoundPage;

export const Head: HeadFC = () => <title>Not found</title>;
