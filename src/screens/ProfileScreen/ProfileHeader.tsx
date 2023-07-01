import {View, Text, Image, FlatList} from 'react-native';
import React from 'react';
import user from '../../assets/data/user.json';
import {styles} from './styles';
import Button from '../../components/Button/Button';
import FeedPost from '../../components/FeedPost/FeedPost';
const ProfileHeader = () => {
  return (
    <View style={styles.root}>
      <View style={styles.headerRow}>
        <Image
          source={{
            uri: user.image,
          }}
          style={styles.avatar}
        />
        <View style={styles.numberContainer}>
          <Text style={styles.numbertext}>98</Text>
          <Text style={styles.lableText}>Posts</Text>
        </View>
        <View style={styles.numberContainer}>
          <Text style={styles.numbertext}>98</Text>
          <Text style={styles.lableText}>Posts</Text>
        </View>
        <View style={styles.numberContainer}>
          <Text style={styles.numbertext}>98</Text>
          <Text style={styles.lableText}>Posts</Text>
        </View>
      </View>

      <Text style={styles.userName}>{user.name}</Text>
      <Text style={styles.userBio}>{user.bio}</Text>
      <View style={{flexDirection: 'row'}}>
        <Button text="Edit Profile" onPress={() => console.log('edit')} />
        <Button text="Another Profile" onPress={() => console.log('edit')} />
      </View>
    </View>
  );
};

export default ProfileHeader;
