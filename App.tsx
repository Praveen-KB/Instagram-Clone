import React from 'react';

import {
  Dimensions,
  SafeAreaView,

  StyleSheet,
  Text,

  View,
} from 'react-native';

function App(): JSX.Element {
  return (
    <SafeAreaView>


      <View style={styles.sectionContainer}>
        <Text>
          Hi Lets Start the App Here Testing multiBranch
        </Text>
      </View>


    </SafeAreaView>
  );
}

const { width, height } = Dimensions.get("window")

const styles = StyleSheet.create({
  sectionContainer: {
    height,
    width,
    justifyContent: "center",
    alignItems: "center"
  }
});

export default App;
