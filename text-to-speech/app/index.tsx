import { HomePage } from './HomePage';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from "react-native-safe-area-context";
import React, { useLayoutEffect } from 'react';
import { useNavigation } from 'expo-router';

import '../global.css';



export default function Index() {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false, // Hide header for this screen
    });
  }, [navigation]);

  return (
    <SafeAreaProvider>
      <HomePage />
      <StatusBar style="auto" />
    </SafeAreaProvider>
  );
}