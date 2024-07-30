import React, { useRef } from 'react';
import { Dimensions, FlatList, Platform } from 'react-native';
import Animated, {
  useAnimatedScrollHandler,
  useSharedValue,
  useAnimatedStyle,
  interpolate,
} from 'react-native-reanimated';

import { Item } from './item';
import { Container, ContentList, Indicator, IndicatorText, List } from './styles';

const AnimatedFlatList = Animated.createAnimatedComponent(FlatList);
const { width: screenWidth } = Dimensions.get('window');
const ITEM_WIDTH = screenWidth / 5;
const ITEM_SIZE = screenWidth * 0.2;

export function HeightPicker() {
  console.log(ITEM_SIZE, screenWidth);
  const heights = Array.from({ length: 61 }, (_, i) => 120 + i); // Alturas de 120 a 210
  const transX = useSharedValue(0);
  const flatListRef = useRef(null);

  const scrollHandler = useAnimatedScrollHandler({
    onScroll: (event) => {
      transX.value = event.contentOffset.x;
    },
  });

  return (
    <Container>
      {/* <Indicator>
        <IndicatorText>▲</IndicatorText>
      </Indicator> */}
      <ContentList>
        <AnimatedFlatList
          ref={flatListRef}
          data={heights}
          renderItem={({ item, index }) => <Item index={index} item={item} sharedValue={transX} />}
          keyExtractor={(item, index) => index.toString()}
          horizontal
          style={{
            height: ITEM_WIDTH * 2,
            flexGrow: 0,
            paddingHorizontal: ITEM_WIDTH * 2,
          }}
          onScroll={scrollHandler}
          snapToInterval={ITEM_WIDTH}
          pagingEnabled
          decelerationRate="fast"
          centerContent
          showsHorizontalScrollIndicator={false}
          alwaysBounceHorizontal
        />
      </ContentList>
    </Container>
  );
}

export default HeightPicker;
