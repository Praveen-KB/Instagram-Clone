import React, {useState} from 'react';

import {
  Dimensions,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Pressable,
} from 'react-native';
import colors from '../../theme/colors';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import fonts from '../../theme/fonts';
import styles from './styles';
import Comment from '../Comment/Comment';
import {IPost} from '../../Types/models';
import DoublePressable from '../DoublePressable';
import Carousel from '../Carousel/Carousel';
interface IFeedPost {
  post: IPost;
}

function FeedPost({post}: IFeedPost): JSX.Element {
  const [isDescriptionExpanded, setisDescriptionExpanded] = useState(false);
  const [liked, setLiked] = useState(false);
  const toggleDesExpanded = () => {
    setisDescriptionExpanded(v => !v);
  };
  const toggleLike = () => setLiked(v => !v);

  let content = null;

  if (post.image) {
    content = (
      <DoublePressable onDoublePress={toggleLike}>
        <Image
          source={{
            uri: post.image,
          }}
          style={styles.image}
        />
      </DoublePressable>
    );
  } else if (post.images) {
    content = <Carousel images={post.images} onDoublePress={toggleLike} />;
  }

  return (
    <View style={[styles.post]}>
      {/* Header */}
      <View style={styles.header}>
        <Image
          source={{
            uri: post.user.image,
          }}
          style={styles.userAvatar}
        />
        <Text style={styles.userName}>{post.user.username}</Text>
        <Entypo
          name="dots-three-horizontal"
          size={16}
          style={styles.threeDots}
          color={colors.black}
        />
      </View>
      {/* content */}
      {content}
      {/* footer */}
      <View style={styles.footer}>
        <View style={styles.iconContainer}>
          <AntDesign
            name={liked ? 'heart' : 'hearto'}
            size={24}
            style={[styles.icon, {color: liked ? colors.accent : colors.black}]}
            onPress={toggleLike}
          />
          <Ionicons name={'chatbubble-outline'} size={24} style={styles.icon} />
          <Feather name={'send'} size={24} style={styles.icon} />
          <Feather
            name={'bookmark'}
            size={24}
            style={[styles.icon, {marginLeft: 'auto'}]}
          />
        </View>
        {/* Likes */}
        <Text style={styles.text}>
          Loved by <Text style={styles.bold}>Vinothini</Text> and{' '}
          <Text style={styles.bold}>{post.nofLikes} others</Text>
        </Text>

        {/* post description */}
        <Text style={styles.text} numberOfLines={isDescriptionExpanded ? 0 : 3}>
          <Text style={styles.bold}>{post.user.username}</Text> {'  '}
          {post.description}
        </Text>
        <Text onPress={toggleDesExpanded}>
          Show {isDescriptionExpanded ? 'less' : 'more'}
        </Text>

        {/* comments */}
        <Text>View all {post.nofComments} comments</Text>
        {post.comments.map(e => (
          <Comment key={e.id} comment={e} />
        ))}
        {/* posted date */}
        <Text>{post.createdAt}</Text>
      </View>
    </View>
  );
}

const {width, height} = Dimensions.get('window');

export default FeedPost;
