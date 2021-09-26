import { StatusBar } from 'expo-status-bar';
import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { DrawerContent } from './screens/DrawerContent';

import { color } from 'react-native-reanimated';
import MainTabScreen from './screens/MainTabScreen';


const Drawer = createDrawerNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator drawerContent={props => <DrawerContent {...props}/>}>
        <Drawer.Screen name="Home" component={MainTabScreen} />
        {/**<Drawer.Screen name="Details" component={DetailsStackScreen} />*/}
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default App;