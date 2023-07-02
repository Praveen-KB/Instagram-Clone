import {View, Text, StyleSheet, Image, TextInput} from 'react-native';
import React, {useState} from 'react';
import {Asset, launchImageLibrary} from 'react-native-image-picker';

import user from '../../assets/data/user.json';
import colors from '../../theme/colors';
import {useForm, Controller, Control} from 'react-hook-form';
import fonts from '../../theme/fonts';
import {IUser} from '../../Types/models';

type IEditableUserFields = 'name' | 'username' | 'website' | 'bio';

type IEditableUser = Pick<IUser, IEditableUserFields>;

interface ICustomInput {
  control: Control<IEditableUser, object>;
  label: string;
  name: IEditableUserFields;
  multiline?: boolean;
  rules?: object;
}

const URL_REGX =
  /^((ftp|http|https):\/\/)?(www.)?(?!.*(ftp|http|https|www.))[a-zA-Z0-9_-]+(\.[a-zA-Z]+)+((\/)[\w#]+)*(\/\w+\?[a-zA-Z0-9_]+=\w+(&[a-zA-Z0-9_]+=\w+)*)?\/?$/i;

const CustomInput = ({
  control,
  label,
  multiline = false,
  name,
  rules = {},
}: ICustomInput) => {
  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      render={({field: {onChange, value, onBlur}, fieldState: {error}}) => {
        console.log(name, error);

        return (
          <View style={styles.inputContainer}>
            <Text style={styles.label}>{label}</Text>
            <View style={{flex: 1}}>
              <TextInput
                value={value}
                onChangeText={onChange}
                onBlur={onBlur}
                placeholderTextColor={colors.lightgrey}
                style={[
                  styles.input,
                  {borderColor: error ? colors.error : colors.border},
                ]}
                placeholder="Hello"
                multiline={multiline}
              />
              {error && (
                <Text style={{color: colors.error}}>
                  {error.message || 'Error'}
                </Text>
              )}
            </View>
          </View>
        );
      }}
    />
  );
};

const EditProfileScreen = () => {
  const [setselectedPhoto, setSelectedPhoto] = useState<Asset | null>(null);
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm<IEditableUser>({
    defaultValues: {
      name: user.name,
      username: user.username,
      website: user.website,
      bio: user.bio,
    },
  });

  const onSubmit = (data: IEditableUser) => {};

  const onChangePhoto = () => {
    launchImageLibrary(
      {mediaType: 'photo'},
      ({didCancel, assets, errorMessage, errorCode}) => {
        if (!didCancel && !errorCode && assets && assets.length > 0) {
          setSelectedPhoto(assets[0]);
        }
      },
    );
  };

  return (
    <View style={styles.page}>
      <Image
        source={{uri: setselectedPhoto?.uri || user.image}}
        style={styles.avatar}
      />
      <Text onPress={onChangePhoto} style={styles.textButton}>
        Change Profile Photo
      </Text>
      <CustomInput
        rules={{required: 'Name is Required'}}
        label="Name"
        name="name"
        control={control}
      />
      <CustomInput
        rules={{
          required: 'UserName is Required',
          minLength: {
            value: 3,
            message: 'Username should be more than 3 Characters',
          },
        }}
        label="UserName"
        name="username"
        control={control}
      />
      <CustomInput
        rules={{
          required: 'Website is Required',
          pattern: {value: URL_REGX, message: 'Enter a Valid Url'},
        }}
        label="Website"
        name="website"
        control={control}
      />
      <CustomInput
        rules={{
          maxLength: {
            value: 200,
            message: 'Bio should be Less than 200 Characters',
          },
        }}
        label="Bio"
        multiline
        name="bio"
        control={control}
      />

      <Text onPress={handleSubmit(onSubmit)} style={styles.textButton}>
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
    borderColor: colors.border,
    borderBottomWidth: 1,
    color: colors.black,
  },
});
