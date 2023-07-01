import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Pressable,
  KeyboardAvoidingView,
  Keyboard,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import colors from '../../theme/colors';
import fonts from '../../theme/fonts';

const Input = () => {
  const [bottomPadding, setBottomPadding] = useState<number>(5);
  const [newComment, setNewComment] = useState<string>('');
  const onExpress = () => {
    console.log('posting');
    setNewComment('');
  };
  useEffect(() => {
    const showSubscription = Keyboard.addListener('keyboardDidShow', () => {
      setBottomPadding(25);
    });
    const hideSubscription = Keyboard.addListener('keyboardDidHide', () => {
      setBottomPadding(5);
    });

    return () => {
      showSubscription.remove();
      hideSubscription.remove();
    };
  }, []);

  return (
    <KeyboardAvoidingView behavior="padding">
      <View style={[styles.root, {marginBottom: bottomPadding}]}>
        <Image
          source={{
            uri: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8d29tYW4lMjBwcm9maWxlfGVufDB8fDB8fHww&w=1000&q=80',
          }}
          style={styles.avatar}
        />
        <TextInput
          placeholder="Express your message..."
          placeholderTextColor={colors.lightgrey}
          onChangeText={setNewComment}
          value={newComment}
          multiline
          style={styles.input}></TextInput>
        <Text onPress={onExpress} style={styles.button}>
          EXPRESS
        </Text>
      </View>
    </KeyboardAvoidingView>
  );
};

export default Input;

const styles = StyleSheet.create({
  avatar: {
    width: 40,
    aspectRatio: 1,
    borderRadius: 50,
  },
  root: {
    flexDirection: 'row',
    padding: 5,
    alignItems: 'flex-end',
    borderTopWidth: 1,
    borderColor: colors.border,
    backgroundColor: colors.white,
  },
  input: {
    flex: 1,

    borderColor: colors.border,
    borderWidth: 1,
    color: colors.black,
    borderRadius: 25,
    paddingHorizontal: 10,
    paddingVertical: 5,
    paddingRight: 65,

    marginLeft: 5,
  },
  button: {
    position: 'absolute',
    right: 20,
    bottom: 15,
    fontSize: fonts.size.small,
    fontWeight: fonts.weight.full,
    color: colors.primary,
  },
});
