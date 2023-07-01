import React, {useRef, useState} from 'react';

import {View, FlatList, ViewToken, ViewabilityConfig} from 'react-native';
import FeedPost from '../../components/FeedPost';

import posts from '../../assets/data/posts.json';

export default function HomeScreen() {
  const [activePostId, setActivePostId] = useState<string | null>(null);
  console.log('activePostId', activePostId);
  const onViewableItemsChanged = useRef(
    ({viewableItems}: {viewableItems: Array<ViewToken>}) => {
      viewableItems.length > 0 && setActivePostId(viewableItems[0].item.id);
    },
  );
  const viewabilityConfig: ViewabilityConfig = {
    itemVisiblePercentThreshold: 51,
  };

  return (
    <FlatList
      data={posts}
      renderItem={({item}) => (
        <FeedPost post={item} isVisible={activePostId === item.id} />
      )}
      keyExtractor={item => {
        return item.id;
      }}
      showsVerticalScrollIndicator={false}
      viewabilityConfig={viewabilityConfig}
      onViewableItemsChanged={onViewableItemsChanged.current}
    />
  );
}
