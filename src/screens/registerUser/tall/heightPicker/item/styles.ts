import Animated from 'react-native-reanimated';
import styled from 'styled-components/native';

import { horizontalScale, moderateScale, verticalScale } from '~/utils/scale';

export const Container = styled(Animated.View)`
  justify-content: center;
  align-items: center;
  margin-left: ${horizontalScale(12)}px;

  background-color: ${({ theme }) => theme.colors.content_color};
  height: ${verticalScale(180)}px;
  width: ${horizontalScale(140)}px;
  border-radius: ${moderateScale(10)}px;
  padding: 0 ${verticalScale(22)}px 0 ${verticalScale(22)}px;
`;

export const ItemText = styled.Text`
  font-size: ${moderateScale(44)}px;
  font-family: ${({ theme }) => theme.fonts.poppins_medium};
  color: ${({ theme }) => theme.colors.dark};
`;
