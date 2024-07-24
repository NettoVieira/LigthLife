import React, { useRef } from 'react';
import { View, Text, FlatList, StyleSheet, Dimensions } from 'react-native';
import Animated, {
  useAnimatedScrollHandler,
  useSharedValue,
  useAnimatedStyle,
  interpolate,
} from 'react-native-reanimated';

const { width: screenWidth } = Dimensions.get('window');
const ITEM_SIZE = screenWidth * 0.2;

export function HeightPicker() {
  const heights = Array.from({ length: 61 }, (_, i) => 140 + i); // Alturas de 140 a 200
  const scrollX = useSharedValue(0);
  const flatListRef = useRef(null);

  const animatedStyle = useAnimatedStyle(() => {
    const scale = interpolate(
      scrollX.value,
      [(2 - 2) * ITEM_SIZE, 2 * ITEM_SIZE, (2 + 2) * ITEM_SIZE],
      [0.8, 1, 0.8]
    );
    const opacity = interpolate(
      scrollX.value,
      [(2 - 2) * ITEM_SIZE, 2 * ITEM_SIZE, (2 + 2) * ITEM_SIZE],
      [0.5, 1, 0.5]
    );
    return {
      transform: [{ scale }],
      opacity,
    };
  });

  const onScroll = useAnimatedScrollHandler({
    onScroll: (event) => {
      scrollX.value = event.contentOffset.x;
    },
  });

  return (
    <View style={styles.container}>
      <Animated.FlatList
        ref={flatListRef}
        data={heights}
        renderItem={({ item, index }) => (
          <Animated.View style={[styles.itemContainer, animatedStyle]}>
            <Text style={styles.itemText}>{item}</Text>
          </Animated.View>
        )}
        keyExtractor={(item) => item.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
        snapToInterval={ITEM_SIZE}
        decelerationRate="fast"
        onScroll={onScroll}
        scrollEventThrottle={16}
        contentContainerStyle={styles.flatListContentContainer}
      />
      <View style={styles.indicator}>
        <Text style={styles.indicatorText}>▲</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  flatListContentContainer: {
    paddingHorizontal: (screenWidth - ITEM_SIZE) / 2,
  },
  itemContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: ITEM_SIZE,
    height: 100,
  },
  itemText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  indicator: {
    position: 'absolute',
    top: '40%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  indicatorText: {
    fontSize: 24,
    color: '#f1c40f',
  },
});

export default HeightPicker;
