import React, { useRef, useState } from 'react';
import {
  Button,
  Dimensions,
  FlatList,
  FlatListProps,
  NativeScrollEvent,
  NativeSyntheticEvent,
  Platform,
  Text,
} from 'react-native';
import Animated, {
  useAnimatedScrollHandler,
  useSharedValue,
  FlatListPropsWithLayout,
  useAnimatedStyle,
  interpolate,
} from 'react-native-reanimated';

import { Item } from './item';
import { Container, ContentList, HeaderList, ChevronIcon } from './styles';

const { width: screenWidth } = Dimensions.get('window');
const ITEM_WIDTH = screenWidth / 3;

export function HeightPicker() {
  const heights = Array.from({ length: 61 }, (_, i) => 160 + i); // Alturas de 120 a 210
  const [height, setHeight] = useState(heights[0]);
  const transX = useSharedValue(0);
  const flatListRef = useRef<Animated.FlatList<FlatListPropsWithLayout<any>>>(null);
  const scrollHandler = useAnimatedScrollHandler({
    onScroll: (event) => {
      transX.value = event.contentOffset.x;
    },
  });

  const handleScrollEnd = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const offsetX = event.nativeEvent.contentOffset.x;
    const index = Math.round(offsetX / ITEM_WIDTH);
    setHeight(heights[index]);
  };
  return (
    <Container>
      {/* <Indicator>
        <IndicatorText>▲</IndicatorText>
      </Indicator> */}
      <ContentList>
        <HeaderList>
          <ChevronIcon name="caret-down" />
        </HeaderList>
        <Animated.FlatList
          ref={flatListRef}
          data={heights}
          renderItem={({ item, index }) => <Item index={index} item={item} sharedValue={transX} />}
          keyExtractor={(_, index) => index.toString()}
          horizontal
          style={{
            flexGrow: 0,
            paddingHorizontal: (screenWidth - ITEM_WIDTH) / 2.14,
          }}
          onScroll={scrollHandler}
          snapToInterval={ITEM_WIDTH}
          pagingEnabled
          onMomentumScrollEnd={handleScrollEnd}
          decelerationRate="fast"
          centerContent
          showsHorizontalScrollIndicator={false}
          scrollEventThrottle={16}
          alwaysBounceHorizontal
        />
      </ContentList>
      <Button
        title={height.toString()}
        onPress={() => {
          console.log(flatListRef.current?.getScrollResponder());
        }}
      />
    </Container>
  );
}

export default HeightPicker;
