import styled from '@emotion/styled';

export type BorderProps = {
    size?: number;
    marginY?: number;
};
export const Wrapper = styled.div<BorderProps>`
  height: ${({ size = 1 }) => `${size}px`};
  width: 100%;
  background: ${({ theme }) => theme.color.black};
  opacity: 0.3;
  margin: ${({ marginY = 40 }) => `${marginY}px`} 0;
`;
