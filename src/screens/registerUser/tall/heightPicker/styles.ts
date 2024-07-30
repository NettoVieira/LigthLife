import { FlatList, FlatListProps } from 'react-native';
import Animated, { FlatListPropsWithLayout } from 'react-native-reanimated';
import styled from 'styled-components/native';

export const Container = styled.View``;

export const Indicator = styled.View`
  position: absolute;
  top: 40%;
  justify-content: 'center';
  align-items: 'center';
`;

export const IndicatorText = styled.Text`
  font-size: 24px;
  color: '#f1c40f';
`;

export const ContentList = styled.View`
  height: 280px;
  width: 100%;
`;

export const List = styled(Animated.FlatList)``;
