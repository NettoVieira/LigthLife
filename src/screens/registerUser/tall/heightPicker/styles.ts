import { FontAwesome6 } from '@expo/vector-icons';
import Animated from 'react-native-reanimated';
import styled from 'styled-components/native';

import { moderateScale } from '~/utils/scale';

export const Container = styled.View``;

export const ContentList = styled.View`
  height: 280px;
  width: 100%;
  align-items: center;
  justify-content: center;
`;

export const HeaderList = styled.View`
  margin-bottom: 12px;
`;

export const ChevronIcon = styled(FontAwesome6)`
  font-size: ${moderateScale(24)}px;
  color: ${({ theme }) => theme.colors.yellow_text};
`;

export const List = styled(Animated.FlatList)``;
