/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TouchableHighlight,
  StyleSheet,
} from 'react-native';
import LoadingScreen from './components/LoadingScreen';
import ModalDialog from './components/Modal';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LogIn from './screens/Login';
import Root from './screens/AuthScreens/Root';

function App(): JSX.Element {
  // Touchable Components and Modal
  // const topic = 'touchableComponentAndModal';
  const [isLoading, setIsLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);

  // Stack Navigation
  let topic = 'stackNavigation';

  if (topic === 'touchableComponentAndModal') {
    const handlePress = () => {
      setIsLoading(true);
      setTimeout(() => {
        setIsLoading(false);
        setShowModal(true);
      }, 5000);
    };

    const onModalClose = () => {
      setShowModal(false);
    };
    return (
      <View style={styles.container}>
        {isLoading && <LoadingScreen />}

        {!isLoading && !showModal && (
          <View>
            <TouchableOpacity
              onPress={handlePress}
              style={styles.touchableOpacity}>
              <Text style={styles.text}>TouchableOpacity</Text>
            </TouchableOpacity>
            <TouchableHighlight
              onPress={handlePress}
              underlayColor="lightblue"
              style={styles.touchableHighlight}>
              <Text style={styles.text}>TouchableHighlight</Text>
            </TouchableHighlight>
          </View>
        )}

        <ModalDialog visibility={showModal} handleModalClose={onModalClose}>
          <Text style={styles.modalText}>This is a modal</Text>
        </ModalDialog>
      </View>
    );
  }

  if (topic === 'stackNavigation') {
    const StackNavigator = createNativeStackNavigator();
    return (
      <NavigationContainer>
        <StackNavigator.Navigator
          initialRouteName="Login"
          screenOptions={{
            headerStyle: {
              backgroundColor: '#8FBAF7',
            },
            headerTintColor: '#fff',
          }}>
          <StackNavigator.Screen name="Login" component={LogIn} />
          <StackNavigator.Screen name="Root" component={Root} />
        </StackNavigator.Navigator>
      </NavigationContainer>
    );
  }

  return (
    <View>
      <Text>No any topic selected</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  touchableOpacity: {
    padding: 20,
  },
  touchableHighlight: {
    padding: 20,
  },
  text: {
    fontSize: 18,
  },
  modalText: {
    fontSize: 25,
    marginBottom: 10,
    color: 'maroon',
  },
});

export default App;
