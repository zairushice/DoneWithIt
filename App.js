import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, TouchableHighlight, View, Image } from 'react-native';
import AppButton from './app/component/AppButton';
import ViewImageScreen from './app/screens/ViewImageScreen';
import WelcomeScreen from './app/screens/WelcomeScreens';

export default function App() {
  return (
    <WelcomeScreen></WelcomeScreen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
