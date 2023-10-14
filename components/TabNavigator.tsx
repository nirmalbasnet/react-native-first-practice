import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React, {FC} from 'react';
import Settings from '../screens/AuthScreens/Settings';
import Profile from '../screens/AuthScreens/Profile';
import Home from '../screens/AuthScreens/Home';
import Icons from 'react-native-vector-icons/Ionicons';

const TabNavigaor = createBottomTabNavigator();
const TabNavigator: FC = () => {
  return (
    <TabNavigaor.Navigator initialRouteName="Home">
      <TabNavigaor.Screen
        name="Home"
        component={Home}
        options={{
          // eslint-disable-next-line react/no-unstable-nested-components
          tabBarIcon: () => <Icons name="home" size={24} color="blue" />,
        }}
      />
      <TabNavigaor.Screen
        name="Settings"
        component={Settings}
        options={{
          // eslint-disable-next-line react/no-unstable-nested-components
          tabBarIcon: () => <Icons name="settings" size={24} color="blue" />,
        }}
      />
      <TabNavigaor.Screen
        name="Profile"
        component={Profile}
        options={{
          // eslint-disable-next-line react/no-unstable-nested-components
          tabBarIcon: () => <Icons name="person" size={24} color="blue" />,
        }}
      />
    </TabNavigaor.Navigator>
  );
};

export default TabNavigator;
