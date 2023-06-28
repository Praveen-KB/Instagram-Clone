import React from 'react';

import {
  Dimensions,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import colors from './src/theme/colors';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import fonts from './src/theme/fonts';
function App(): JSX.Element {
  return (
    <View style={styles.post}>
      {/* Header */}
      <View style={styles.header}>
        <Image
          source={{
            uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Instagram-Icon.png/1200px-Instagram-Icon.png',
          }}
          style={styles.userAvatar}
        />
        <Text style={styles.userName}>Praveen</Text>
        <Entypo
          name="dots-three-horizontal"
          size={16}
          style={styles.threeDots}
          color={colors.black}
        />
      </View>
      {/* content */}

      <Image
        source={{
          uri: 'https://blog.hootsuite.com/wp-content/uploads/2022/09/Instagram-notes-556x556.png',
        }}
        style={styles.image}
      />
      {/* footer */}
      <View style={styles.footer}>
        <View style={styles.iconContainer}>
          <AntDesign name={'hearto'} size={24} style={styles.icon} />
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
          <Text style={styles.bold}>66 others</Text>
        </Text>

        {/* post description */}
        <Text style={styles.text}>
          <Text style={styles.bold}>Vinothini</Text> {'  '}
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta sunt
          aliquam ut eveniet, hic atque suscipit dolore asperiores repudiandae
          quis necessitatibus odit incidunt amet sed, fuga magnam! Error,
          corrupti. Reprehenderit!
        </Text>

        {/* comments */}
        <Text>View all 16 comments</Text>
        <View style={styles.comment}>
          <Text style={styles.commentText}>
            <Text style={styles.bold}>Vinothini</Text> {'  '}
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta sunt
          </Text>
          <AntDesign name={'hearto'} size={14} style={styles.icon} />
        </View>

        {/* posted date */}
        <Text>19 December, 2021</Text>
      </View>
    </View>
  );
}

const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
  image: {
    width: '100%',
    aspectRatio: 1,
  },
  post: {
    backgroundColor: colors.white,
  },
  header: {
    flexDirection: 'row',
    padding: 10,
    alignItems: 'center',
  },
  userName: {
    fontWeight: fonts.weight.bold,
    color: colors.black,
  },
  userAvatar: {
    width: 40,
    height: 40,
    borderRadius: 50,
    marginRight: 10,
  },
  threeDots: {
    marginLeft: 'auto',
  },
  iconContainer: {
    flexDirection: 'row',
    marginBottom: 5,
  },
  icon: {
    color: colors.black,
    marginHorizontal: 5,
  },
  footer: {
    padding: 5,
  },
  text: {
    color: colors.black,
    lineHeight: 18,
  },
  bold: {
    fontWeight: fonts.weight.bold,
  },
  comment: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  commentText: {
    color: colors.black,
    flex: 1,
    lineHeight: 18,
  },
});

export default App;
