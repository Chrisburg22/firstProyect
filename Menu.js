import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import TAB1 from './Tab1';
import Icon from 'react-native-vector-icons/Ionicons';

export default class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const Tab = createBottomTabNavigator();

    return (
      <Tab.Navigator
        screenOptions={{
          activeTintColor: '#e91e63',
        }}>
        <Tab.Screen
          name="Inicio"
          component={TAB1}
          initialParams={{nombre: this.props.route.params.nombre}}
          options={{
            tabBarIcon: ({color, size}) => (
              <Icon name="body-outline" color={'red'} size={30} />
            ),
          }}
        />
        <Tab.Screen
          name="Tab1"
          component={TAB1}
          initialParams={{nombre: this.props.route.params.nombre}}
          options={{
            tabBarIcon: ({color, size}) => (
              <Icon name="skull-outline" color={'red'} size={30} />
            ),
          }}
        />
      </Tab.Navigator>
    );
  }
}
