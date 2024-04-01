import styled from '@emotion/styled';
import { MEDIA_QUERY_MAX_WIDTH } from '@/styles/Theme';

export const Wrapper = styled.div`
    display: flex;
    width: 100%;
    gap: 15px;
    @media ${MEDIA_QUERY_MAX_WIDTH} {
        flex-direction: column;
    }
`;

export const LeftColumn = styled.div`
    display: flex;
    width: 100%;
    max-width: calc(100% - 288px);
    flex-direction: column;
    @media ${MEDIA_QUERY_MAX_WIDTH} {
        max-width: 100%;
    }
`;
export const RightColumn = styled.div`
    display: flex;
    min-width: 288px;
    max-width: 288px;
    flex-direction: column;
    @media ${MEDIA_QUERY_MAX_WIDTH} {
        max-width: 100%;
    }
`;
