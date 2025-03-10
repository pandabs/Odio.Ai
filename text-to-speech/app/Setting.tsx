import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import Footer from './Footer';

const Setting = () => {
  return (
    <View style={styles.container}>
      <Text className="text-center align-middle justify-center color-slate-900">you are on Setting</Text>
      <Footer />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between', 
  },
});

export default Setting;