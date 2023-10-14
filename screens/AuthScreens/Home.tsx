import React, {FC} from 'react';
import {Text, View, StyleSheet} from 'react-native';

const Home: FC = () => {
  return (
    <View style={style.homeContainer}>
      <Text style={style.homeContainer_text}>Home Screen</Text>
    </View>
  );
};

const style = StyleSheet.create({
  homeContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  homeContainer_text: {
    fontSize: 25,
    color: '#222',
  },
});

export default Home;
