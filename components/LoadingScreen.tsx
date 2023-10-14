import React, {FC} from 'react';
import {ActivityIndicator, StyleSheet, Text, View} from 'react-native';

const LoadingScreen: FC = () => {
  return (
    <View style={style.main}>
      <ActivityIndicator />
      <Text>Loading..</Text>
    </View>
  );
};

const style = StyleSheet.create({
  main: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default LoadingScreen;
