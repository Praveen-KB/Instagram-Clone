import {
  View,
  Text,
  FlatList,
  Image,
  useWindowDimensions,
  ViewabilityConfig,
  ViewToken,
} from 'react-native';
import React, {useState, useRef} from 'react';
import colors from '../../theme/colors';
import DoublePressable from '../DoublePressable';

interface ICarousel {
  images: string[];
  onDoublePress?: () => void;
}

const Carousel = ({images, onDoublePress}: ICarousel) => {
  const {height, width} = useWindowDimensions();
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const onViewableItemsChanged = useRef(
    ({viewableItems}: {viewableItems: Array<ViewToken>}) => {
      viewableItems.length > 0 &&
        setActiveImageIndex(viewableItems[0].index || 0);
    },
  );
  const viewabilityConfig: ViewabilityConfig = {
    itemVisiblePercentThreshold: 51,
  };

  return (
    <View>
      <FlatList
        data={images}
        renderItem={({item}) => (
          <DoublePressable onDoublePress={onDoublePress}>
            <Image
              source={{uri: item}}
              style={{width: width, aspectRatio: 1}}
            />
          </DoublePressable>
        )}
        keyExtractor={e => e}
        horizontal
        pagingEnabled
        onViewableItemsChanged={onViewableItemsChanged.current}
        viewabilityConfig={viewabilityConfig}
        showsHorizontalScrollIndicator={false}
      />
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          position: 'absolute',
          bottom: 0,
          width: '100%',
        }}>
        {images.map((e, i) => (
          <View
            style={{
              width: activeImageIndex === i ? 7 : 5,
              aspectRatio: 1,
              borderRadius: 5,
              backgroundColor:
                activeImageIndex === i ? colors.primary : colors.white,
              marginVertical: 10,
              marginHorizontal: 5,
            }}
            key={i}
          />
        ))}
      </View>
    </View>
  );
};

export default Carousel;
