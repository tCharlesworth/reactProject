/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  Text,
  View
} from 'react-native';

// Views
import MainView from './app/views/main';

export default class familyRecipes extends Component {
  render() {
    return (
      <View>
        <MainView />
      </View>
    );
  }
}

AppRegistry.registerComponent('familyRecipes', () => familyRecipes);
