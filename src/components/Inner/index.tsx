import React, { ReactNode } from 'react';
import * as S from './styled';
type Props = {
    children: ReactNode;
};
const Inner = ({ children }: Props) => <S.Container>{children}</S.Container>;

export default Inner;
