import {View, Text, StyleSheet, Image} from 'react-native';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import colors from '../../theme/colors';
import fonts from '../../theme/fonts';
import {IComment} from '../../Types/models';

interface ICommentProps {
  comment: IComment;
}

const Comment = ({comment}: ICommentProps) => {
  console.log('comment', comment);
  return (
    <View>
      <View style={styles.comment}>
        <Image source={{uri: comment.user.image}} style={styles.avatar} />
        <Text style={styles.commentText}>
          <Text style={styles.bold}>{comment.user.username}</Text> {'  '}
          {comment.comment}
        </Text>
        <AntDesign name={'hearto'} size={14} style={styles.icon} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  icon: {
    color: colors.black,
    marginHorizontal: 5,
  },
  text: {
    color: colors.black,
    lineHeight: 18,
  },
  comment: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  commentText: {
    color: colors.black,
    flex: 1,
    lineHeight: 18,
    marginHorizontal: 5,
  },
  bold: {
    fontWeight: fonts.weight.bold,
  },
  avatar: {
    width: 40,
    aspectRatio: 1,
    borderRadius: 25,
  },
});

export default Comment;
