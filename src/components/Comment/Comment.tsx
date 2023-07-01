import {View, Text, StyleSheet, Image, Pressable} from 'react-native';
import React, {useState} from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import colors from '../../theme/colors';
import fonts from '../../theme/fonts';
import {IComment} from '../../Types/models';

interface ICommentProps {
  comment: IComment;
  includeDetails: boolean;
}

const Comment = ({comment, includeDetails = false}: ICommentProps) => {
  const [liked, setLiked] = useState(false);

  return (
    <View>
      <View style={styles.comment}>
        {includeDetails && (
          <Image source={{uri: comment.user.image}} style={styles.avatar} />
        )}
        <View style={styles.middleColumn}>
          <Text style={styles.commentText}>
            <Text style={styles.bold}>{comment.user.username}</Text> {'  '}
            {comment.comment}
          </Text>
          {includeDetails && (
            <View style={styles.footerRow}>
              <Text style={styles.footerText}>2d</Text>
              <Text style={styles.footerText}>5 Likes</Text>
              <Text style={styles.footerText}>Reply</Text>
            </View>
          )}
        </View>
        <Pressable onPress={() => setLiked(v => !v)} hitSlop={5}>
          <AntDesign
            name={liked ? 'heart' : 'hearto'}
            size={14}
            style={[styles.icon, {color: liked ? colors.accent : colors.black}]}
          />
        </Pressable>
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
    lineHeight: 18,
  },
  bold: {
    fontWeight: fonts.weight.bold,
  },
  avatar: {
    width: 40,
    aspectRatio: 1,
    borderRadius: 25,
    marginRight: 5,
  },
  middleColumn: {
    flex: 1,
  },
  footerRow: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  footerText: {
    marginRight: 10,
  },
});

export default Comment;
