import {View, Text, StyleSheet, Image, TextInput} from 'react-native';
import React from 'react';
import user from '../../assets/data/user.json';
import colors from '../../theme/colors';
import fonts from '../../theme/fonts';

interface ICustomInput {
  label: string;
  multiline?: boolean;
}

const CustomInput = ({label, multiline = false}: ICustomInput) => {
  return (
    <View style={styles.inputContainer}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        placeholderTextColor={colors.lightgrey}
        style={styles.input}
        placeholder="Hello"
        multiline={multiline}
      />
    </View>
  );
};

const EditProfileScreen = () => {
  const onSubmit = () => {
    console.log('submit');
  };

  return (
    <View style={styles.page}>
      <Image source={{uri: user.image}} style={styles.avatar} />
      <Text style={styles.textButton}>Change Profile Photo</Text>
      <CustomInput label="Name" />
      <CustomInput label="UserName" />
      <CustomInput label="Website" />
      <CustomInput label="Bio" multiline />

      <Text onPress={onSubmit} style={styles.textButton}>
        Submit
      </Text>
    </View>
  );
};

export default EditProfileScreen;

const styles = StyleSheet.create({
  avatar: {width: '30%', aspectRatio: 1, borderRadius: 100},
  textButton: {
    color: colors.primary,
    fontSize: fonts.size.md,
    fontWeight: fonts.weight.semi,

    margin: 10,
  },
  page: {
    alignItems: 'center',
    padding: 10,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'stretch',
  },
  label: {
    width: 75,
  },
  input: {
    flex: 1,
    borderColor: colors.border,
    borderBottomWidth: 1,
  },
});
