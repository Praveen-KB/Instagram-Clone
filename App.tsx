import React from 'react';

import {Dimensions, StyleSheet, ScrollView, View, FlatList} from 'react-native';
import FeedPost from './src/components/FeedPost';

import posts from './src/assets/data/posts.json';
import HomeScreen from './src/screens/HomeScreen/HomeScreen';
import CommentsScreen from './src/screens/CommentsScreen/CommentsScreen';
function App(): JSX.Element {
  return (
    <View style={styles.application}>
      <CommentsScreen />
    </View>
  );
}

const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
  application: {},
});

export default App;
