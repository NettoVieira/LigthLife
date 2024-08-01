import styled from 'styled-components/native';

import { moderateScale, verticalScale } from '~/utils/scale';

export const Container = styled.View`
  height: ${verticalScale(107)}px;
  width: 100%;
  align-items: center;
  justify-content: center;
`;

export const CountStep = styled.Text`
  font-family: ${({ theme }) => theme.fonts.poppins_medium};
  color: ${({ theme }) => theme.colors.dark};
  font-size: ${moderateScale(12)}px;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.poppins_medium};
  color: ${({ theme }) => theme.colors.primary};
  font-size: ${moderateScale(28)}px;
`;

export const Description = styled.Text`
  font-family: ${({ theme }) => theme.fonts.poppins_medium};
  color: ${({ theme }) => theme.colors.neutra_gray};
  font-size: ${moderateScale(14)}px;
`;
