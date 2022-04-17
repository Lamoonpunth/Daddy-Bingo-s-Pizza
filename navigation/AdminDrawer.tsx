import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import {createAppContainer} from 'react-navigation';

import HomeAdmin from '../screen/admin/HomeAdmin';
import EditService from '../screen/admin/EditService';

const { Navigator, Screen } = createDrawerNavigator();

export const RootDrawerNavigator = () => (
  <Navigator initialRouteName='Home'>
    <Screen
      name='Home'
      component={HomeAdmin}
    />
    <Screen
      name='EditService'
      component={EditService}
    />
  </Navigator>
);

export default RootDrawerNavigator;