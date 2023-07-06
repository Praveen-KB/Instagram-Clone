import {Image, FlatList} from 'react-native';
import React from 'react';
import {
  ParamListBase,
  RouteProp,
  useNavigation,
  useRoute,
} from '@react-navigation/native';
import user from '../../assets/data/user.json';
import ProfileHeader from './ProfileHeader';
import FeedGridView from '../../components/FeedGridView/FeedGridView';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

interface IParams {
  Userprofile: {
    userId: string;
  };
}

type ParamList = {
  userId: string;
};

const ProfileScreen = () => {
  const route = useRoute<RouteProp<ParamListBase | any>>();

  const userId = route.params?.userId;

  const navigation = useNavigation();
  navigation.setOptions({title: user.username});
  return <FeedGridView data={user.posts} ListHeaderComponent={ProfileHeader} />;
};

export default ProfileScreen;
