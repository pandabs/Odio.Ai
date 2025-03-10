import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import Footer from './Footer';

const Library = () => {
  return (
    <View style={styles.container}>
      <Text className='color-red-800'>Library</Text>
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

export default Library;