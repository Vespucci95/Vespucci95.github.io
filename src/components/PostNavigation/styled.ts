import styled from '@emotion/styled';
export const Container = styled.div`
    margin-top: 4em;
    display: flex;
    width: 100%;
    justify-content: space-between;
`;

export const Wrapper = styled.div`
    padding: 4px 8px;
    max-width: 40%;
    min-width: 26%;
`;

export const Label = styled.p`
    font-size: 0.875em;
    margin-bottom: 0.5em;
`;

export const Title = styled.p`
    font-size: 0.875em;
    margin-bottom: 10px;
    line-height: 1.14;
`;

export const GrayText = styled.p`
    font-size: 0.875em;
    font-weight: 200;
    color: ${({ theme }) => theme.color.gray300};
`;

export const Row = styled.div`
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
`;
