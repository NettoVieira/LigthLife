import React from 'react';
import { Dimensions, Text, StyleSheet } from 'react-native';
import Animated, {
  Extrapolation,
  interpolate,
  SharedValue,
  useAnimatedStyle,
  useSharedValue,
} from 'react-native-reanimated';
import { useTheme } from 'styled-components';

import { Container, ItemText } from './styles';

interface Props {
  index: number;
  item: any;
  sharedValue: SharedValue<number>;
}
const { width: screenWidth } = Dimensions.get('window');
const ITEM_WIDTH = screenWidth / 5;
const ITEM_SIZE = screenWidth / 2;
export function Item({ index, item, sharedValue }: Props) {
  const { colors } = useTheme();

  const animatedStyle = useAnimatedStyle(() => {
    return {
      opacity: opacityAnimation(sharedValue.value, index),
      transform: [
        {
          scale: scaleAnimation(sharedValue.value, index),
        },
      ],
    };
  });
  return (
    <Animated.View style={[styles.box, animatedStyle]}>
      <Text style={styles.label}>{item}</Text>
    </Animated.View>
  );
}
const scaleAnimation = (transX: number, index: number) => {
  'worklet';

  return interpolate(
    transX,
    [
      (index - 2) * ITEM_WIDTH,
      (index - 1) * ITEM_WIDTH,
      index * ITEM_WIDTH,
      (index + 1) * ITEM_WIDTH,
      (index + 2) * ITEM_WIDTH,
    ],
    [0.5, 0.7, 1, 0.7, 0.5]
  );
};

const opacityAnimation = (transX: number, index: number) => {
  'worklet';

  return interpolate(
    transX,
    [
      (index - 3) * ITEM_WIDTH,
      (index - 2) * ITEM_WIDTH,
      (index - 1) * ITEM_WIDTH,
      index * ITEM_WIDTH,
      (index + 1) * ITEM_WIDTH,
      (index + 2) * ITEM_WIDTH,
      (index + 3) * ITEM_WIDTH,
    ],
    [0, 0.5, 0.8, 1, 0.8, 0.5, 0]
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#efefef',
  },
  listContainer: {
    height: ITEM_WIDTH + 250,
    alignItems: 'center',
    justifyContent: 'center',
  },
  list: {
    height: ITEM_WIDTH * 2,
    flexGrow: 0,
    paddingHorizontal: ITEM_WIDTH * 2,
  },
  box: {
    width: ITEM_WIDTH,
    height: ITEM_WIDTH,
    backgroundColor: 'blue',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,

    elevation: 12,
  },
  label: {
    fontWeight: 'bold',
    fontSize: 24,
    color: '#fff',
  },
});
