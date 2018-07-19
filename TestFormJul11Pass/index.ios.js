/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
'use strict';
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  NavigatorIOS,
  Button,
  Text,
  View
} from 'react-native';
import t from 'tcomb-form-native'; // 0.6.9
import CustomerInput from './CustomerInput';

export default class TestForm extends Component<{}> {
  render() {
    return (
     <NavigatorIOS 
      style={styles.container}
        initialRoute={{
          title: 'CustomerListForm',
          component: CustomerInput,
	}}/>
    );
  }
}

const styles = StyleSheet.create({
  container: {
   flex: 1, 
 },
});

AppRegistry.registerComponent('TestForm', () => TestForm);
