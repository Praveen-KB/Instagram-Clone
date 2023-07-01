import {StyleSheet, Text, View, FlatList} from 'react-native';
import React from 'react';
import comments from '../../assets/data/comments.json';
import Comment from '../../components/Comment/Comment';
import Input from './Input';
const CommentsScreen = () => {
  return (
    <View style={{flex: 1}}>
      <FlatList
        style={{padding: 10}}
        data={comments}
        renderItem={item => (
          <Comment includeDetails={true} comment={item.item} />
        )}
      />
      <Input />
    </View>
  );
};

export default CommentsScreen;

const styles = StyleSheet.create({});
