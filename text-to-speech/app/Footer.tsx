import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { Link } from 'expo-router';

const Footer = () => {
  return (
    <View className="flex-row py-3 bg-white border-t border-gray-300 justify-around items-center">
      {/* My Library */}
      <Link href="/Library" className="items-center">
        <MaterialIcons name="library-books" size={24} color="#3b82f6" />
        <Text className="text-xs text-blue-500 mt-1">My Library</Text>
      </Link>

      {/* Add Content */}
      <TouchableOpacity className="items-center">
        <MaterialIcons name="add-circle-outline" size={24} color="#3b82f6" />
        <Text className="text-xs text-blue-500 mt-1">Add Content</Text>
      </TouchableOpacity>

      {/* Settings */}
      <Link href="/Setting" className="items-center">
        <MaterialIcons name="settings" size={24} color="#3b82f6" />
        <Text className="text-xs text-blue-500 mt-1">Settings</Text>
      </Link>
    </View>
  );
};

export default Footer;