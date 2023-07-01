import {StyleSheet, Text, View, Pressable} from 'react-native';
import React from 'react';
import colors from '../../theme/colors';
import fonts from '../../theme/fonts';

interface IButton {
  text?: string;
  onPress?: () => void;
}

const Button = ({text = '', onPress = () => {}}: IButton) => {
  return (
    <Pressable style={styles.container} onPress={onPress}>
      <Text style={styles.text}>{text}</Text>
    </Pressable>
  );
};

export default Button;

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 4,

    padding: 5,
    flex: 1,
    alignItems: 'center',
    margin: 5,
  },
  text: {
    color: colors.black,
    fontWeight: fonts.weight.semi,
  },
});
