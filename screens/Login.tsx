import React, {FC, useState} from 'react';
import {
  View,
  StyleSheet,
  TextInput,
  TouchableHighlight,
  Text,
} from 'react-native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import LoadingScreen from '../components/LoadingScreen';

type RootStackParamList = {
  Root: undefined;
};

interface Props {
  navigation: NativeStackNavigationProp<RootStackParamList>;
}

const LogIn: FC<Props> = ({navigation}) => {
  const [isLoading, setIsLoading] = useState(false);

  const login = () => {
    setIsLoading(true);
    setTimeout(() => {
      navigation.navigate('Root');
      setIsLoading(false);
    }, 5);
  };

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <View style={style.loginContainer_wrapper}>
      <View style={style.loginContainer_form}>
        <View style={style.loginContainer_input}>
          <TextInput placeholder="Email" />
        </View>

        <View style={style.loginContainer_input}>
          <TextInput placeholder="Password" secureTextEntry />
        </View>

        <View style={style.loginContainer_button_wrapper}>
          <TouchableHighlight
            style={style.loginontainer_button}
            underlayColor="#1AAEEE"
            onPress={login}>
            <Text style={style.loginontainer_button_text}>Login</Text>
          </TouchableHighlight>
        </View>
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  loginContainer_wrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginContainer_form: {
    width: '80%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginContainer_input: {
    backgroundColor: 'lightgray',
    color: 'blue',
    fontSize: 18,
    padding: 10,
    borderRadius: 5,
    height: 60,
    marginBottom: 20,
    width: '100%',
  },
  loginContainer_button_wrapper: {
    width: '100%',
  },
  loginontainer_button: {
    backgroundColor: '#0AAEEE',
    height: 60,
    padding: 10,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginontainer_button_text: {
    color: '#fff',
    fontSize: 18,
  },
});

export default LogIn;
