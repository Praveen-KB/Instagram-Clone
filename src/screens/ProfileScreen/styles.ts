import {StyleSheet} from 'react-native';
import fonts from '../../theme/fonts';
import colors from '../../theme/colors';
export const styles = StyleSheet.create({
  root: {
    padding: 10,
  },
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 10,
  },
  avatar: {
    width: 100,
    aspectRatio: 1,
    borderRadius: 100,
  },
  lableText: {},
  numbertext: {
    fontSize: fonts.size.md,
    fontWeight: fonts.weight.full,
    color: colors.black,
  },
  numberContainer: {
    alignItems: 'center',
  },
  userName: {
    fontWeight: fonts.weight.semi,
    color: colors.black,
  },
  userBio: {},
});
