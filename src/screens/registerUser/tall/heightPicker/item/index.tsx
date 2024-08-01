import React from 'react';
import { Dimensions, Text, StyleSheet } from 'react-native';
import { interpolate, SharedValue, useAnimatedStyle } from 'react-native-reanimated';
import { useTheme } from 'styled-components';

import { Container, ItemText } from './styles';

interface Props {
  index: number;
  item: any;
  sharedValue: SharedValue<number>;
}
const { width: screenWidth } = Dimensions.get('window');
export const ITEM_WIDTH = screenWidth / 3;
export function Item({ index, item, sharedValue }: Props) {
  const { colors } = useTheme();

  const animatedStyle = useAnimatedStyle(() => {
    return {
      opacity: opacityAnimation(sharedValue.value, index),
      backgroundColor: colors.content_color,
      width: ITEM_WIDTH,
      height: 200,
      transform: [
        {
          scale: scaleAnimation(sharedValue.value, index),
        },
      ],
      borderRadius: 10,
    };
  });
  return (
    <Container style={[animatedStyle]}>
      <ItemText>{item}</ItemText>
    </Container>
  );
}
const scaleAnimation = (transX: number, index: number) => {
  'worklet';

  return interpolate(
    transX,
    [(index - 1) * ITEM_WIDTH, index * ITEM_WIDTH, (index + 1) * ITEM_WIDTH],
    [0.7, 1, 0.7]
  );
};

const opacityAnimation = (transX: number, index: number) => {
  'worklet';

  return interpolate(
    transX,
    [
      (index - 3) * ITEM_WIDTH,
      (index - 2) * ITEM_WIDTH,
      index * ITEM_WIDTH,
      index * ITEM_WIDTH,
      index * ITEM_WIDTH,
      (index + 2) * ITEM_WIDTH,
      (index + 3) * ITEM_WIDTH,
    ],
    [0, 0.5, 0.8, 1, 0.8, 0.5, 0]
  );
};
