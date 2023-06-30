import React from 'react';

import {View, FlatList} from 'react-native';
import FeedPost from '../../components/FeedPost';

import posts from '../../assets/data/posts.json';

export default function HomeScreen() {
  return (
    <View>
      <FlatList
        data={posts}
        renderItem={({item}) => <FeedPost post={item} />}
        keyExtractor={item => `post-${item.createdAt}-${Math.random()}`}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}
