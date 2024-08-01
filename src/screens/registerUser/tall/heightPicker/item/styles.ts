import Animated from 'react-native-reanimated';
import styled from 'styled-components/native';

import { ITEM_WIDTH } from './';

import { moderateScale, verticalScale } from '~/utils/scale';

export const Container = styled(Animated.View)`
  justify-content: center;
  align-items: center;
  border-radius: ${moderateScale(10)}px;
`;

export const ItemText = styled.Text`
  font-size: ${moderateScale(44)}px;
  font-family: ${({ theme }) => theme.fonts.poppins_medium};
  color: ${({ theme }) => theme.colors.dark};
`;
