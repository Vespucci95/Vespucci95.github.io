import styled from '@emotion/styled';
import { MEDIA_QUERY_MAX_WIDTH } from '@/styles/Theme';
import { MAX_WIDTH } from '@/constants';

export const Container = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: ${MAX_WIDTH}px;
    height: 100vh;
    min-height: 100vh;
    margin: 0 auto;
    padding: 20px 0 60px 0;
    flex: 1;
    box-sizing: border-box;

    @media ${MEDIA_QUERY_MAX_WIDTH} {
        padding: 10px 0 40px 0;
    }
`;
