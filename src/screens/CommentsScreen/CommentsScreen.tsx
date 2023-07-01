import {StyleSheet, Text, View, FlatList} from 'react-native';
import React from 'react';
import comments from '../../assets/data/comments.json';
import Comment from '../../components/Comment/Comment';
const CommentsScreen = () => {
  return (
    <View>
      <FlatList
        style={{padding: 10}}
        data={comments}
        renderItem={item => <Comment comment={item.item} />}
      />
    </View>
  );
};

export default CommentsScreen;

const styles = StyleSheet.create({});
