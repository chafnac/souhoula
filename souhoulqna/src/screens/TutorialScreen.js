import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const TutorialScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to the Tutorial!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
  },
});

export default TutorialScreen;
