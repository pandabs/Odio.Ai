import { View, Text, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import React, { useLayoutEffect } from 'react';
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import Footer from './Footer';
import { Link } from 'expo-router';

const Dashboard: React.FC = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, [navigation]);

  return (
    <View className="flex-1 bg-white">
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View className="p-5">
          <View className="flex-row items-center mb-2">
            <MaterialIcons name="waving-hand" size={24} color="#3b82f6" className="mr-2" />
            <Text className="text-2xl font-bold text-gray-500">Hello today,</Text>
          </View>
          <View className="w-full mb-5">
            <Text className="text-xl">What do you want to listen?</Text>
          </View>

          <View className="flex-row flex-wrap justify-between">
            <TouchableOpacity className="w-[48%] bg-gray-100 p-4 rounded-lg mb-2 items-center aspect-square">
              <MaterialIcons name="description" size={32} color="#3b82f6" className="mb-2" />
              <Text className="text-base font-semibold mb-1">Document</Text>
              <Text className="text-center text-xs">Transform PDF, ePUB, DOCX, TXT & others</Text>
            </TouchableOpacity>

            <TouchableOpacity className="w-[48%] bg-gray-100 p-4 rounded-lg mb-2 items-center aspect-square">
              <MaterialIcons name="camera-alt" size={32} color="#3b82f6" className="mb-2" />
              <Text className="text-base font-semibold mb-1">Scan Text</Text>
              <Text className="text-center text-xs">Scanned documents or images</Text>
            </TouchableOpacity>
          </View>
          <View className="flex-row flex-wrap justify-between">
            <TouchableOpacity className="w-[48%] bg-gray-100 p-4 rounded-lg mb-2 items-center aspect-square">
              <MaterialIcons name="link" size={32} color="#3b82f6" className="mb-2" />
              <Text className="text-base font-semibold mb-1">Web Link</Text>
              <Text className="text-center text-xs">Convert URLs to audio</Text>
            </TouchableOpacity>

            {/* Updated Type or Paste Text Button */}
            <Link href="/Listen" asChild>
              <TouchableOpacity className="w-[48%] bg-gray-100 p-4 rounded-lg mb-2 items-center aspect-square">
                <MaterialIcons name="keyboard" size={32} color="#3b82f6" className="mb-2" />
                <Text className="text-base font-semibold mb-1">Type or Paste Text</Text>
                <Text className="text-center text-xs">Input or paste text to listen</Text>
              </TouchableOpacity>
            </Link>
          </View>
        </View>
      </ScrollView>
      <Footer />
    </View>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'space-between',
  },
});

export default Dashboard;