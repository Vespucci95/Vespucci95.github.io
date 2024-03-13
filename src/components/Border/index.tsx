import React from 'react';
import { BorderProps } from '@/components/Border/styled';
import * as S from './styled';

const Border = ({ ...props }: BorderProps) => <S.Wrapper {...props} />;

export default Border;
