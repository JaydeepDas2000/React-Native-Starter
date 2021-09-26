import React from 'react';

import Icon from 'react-native-vector-icons/Ionicons';

import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

import HomeScreen from './HomeScreen';
import DetailScreen from './DetailScreen';
import ExploreScreen from './ExploreScreen';
import ProfileScreen from './ProfileScreen';

const HomeStack = createStackNavigator();
const DetailsStack = createStackNavigator();

const Tab = createMaterialBottomTabNavigator();

const MainTabScreen = ({navigation}) => (
    <Tab.Navigator
      initialRouteName="Feed"
      activeColor="#fff"
      barStyle={{ backgroundColor: '#006491' }}
    >
      <Tab.Screen
        name="Home"
        component={HomeStackScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color }) => (
            <Icon name="ios-home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Detail"
        component={DetailsStackScreen}
        options={{
          tabBarLabel: 'Updates',
          tabBarIcon: ({ color }) => (
            <Icon name="desktop-sharp" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color }) => (
            <Icon name="person-sharp" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Explore"
        component={ExploreScreen}
        options={{
          tabBarLabel: 'Explore',
          tabBarIcon: ({ color }) => (
            <Icon name="earth-sharp" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
    
);

export default MainTabScreen;

const HomeStackScreen = ({navigation}) => (
    <HomeStack.Navigator
      screenOptions = {{
        headerStyle: {
          backgroundColor: '#006491'
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight : 'bold',
        }
      }}
    >
      <HomeStack.Screen name="Home" component={HomeScreen} options={{
        title:'Overview',
        headerLeft: () => (
          <Icon.Button name="ios-menu" size={25} backgroundColor="#006491" color="#fff" onPress={() => navigation.openDrawer()}/>
        )
      }}/>
    </HomeStack.Navigator>
);

const DetailsStackScreen = ({navigation}) => (
<DetailsStack.Navigator
  screenOptions = {{
    headerStyle: {
      backgroundColor: '#006491'
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight : 'bold',
    }
  }}
>
  <DetailsStack.Screen name="Details" component={DetailScreen} options={{
    headerLeft: () => (
      <Icon.Button name="ios-menu" size={25} backgroundColor="#006491" color="#fff" onPress={() => navigation.openDrawer()}/>
    )
  }}/>
</DetailsStack.Navigator>
);