import {NavigationContainer} from '@react-navigation/native';
import CommentsScreen from '../screens/CommentsScreen/CommentsScreen';
import React from 'react';
import {Image} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ProfileScreen from '../screens/ProfileScreen/ProfileScreen';
import HomeScreen from '../screens/HomeScreen/HomeScreen';

const Stack = createNativeStackNavigator(); // {Navigator , Screen}
const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Feed">
        <Stack.Screen
          name="Feed"
          component={HomeScreen}
          options={{
            headerTitle: HeaderTitle,
            headerTitleAlign: 'center',
          }}
        />

        <Stack.Screen
          name="UserProfile"
          component={ProfileScreen}
          options={{
            title: 'Profile',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const HeaderTitle = () => {
  return (
    <Image
      style={{width: 150, height: 40}}
      resizeMode="contain"
      source={require('../assets/images/fontbolt.png')}
    />
  );
};

export default Navigation;
