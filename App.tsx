import React from 'react';

import {Dimensions, StyleSheet, ScrollView, View, FlatList} from 'react-native';
import FeedPost from './src/components/FeedPost';

import posts from './src/assets/data/posts.json';
import HomeScreen from './src/screens/HomeScreen/HomeScreen';
import CommentsScreen from './src/screens/CommentsScreen/CommentsScreen';
import ProfileScreen from './src/screens/ProfileScreen/ProfileScreen';
import EditProfileScreen from './src/screens/EditProfileScreen/EditProfileScreen';
import PostUploadScreen from './src/screens/PostUploadScreen/PostUploadScreen';
function App(): JSX.Element {
  return (
    <View style={styles.application}>
      <PostUploadScreen />
    </View>
  );
}

const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
  application: {height},
});

export default App;
