import React, { Component } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons'; // For icons
import { Link } from 'expo-router';

export class HomePage extends Component {
  render() {
    return (
      <View className="flex-1 justify-center items-center bg-gradient-to-b from-blue-300 to-white p-6">
        {/* Title */}
        <Text className="text-4xl font-bold text-center text-gray-900 mb-4">
          Welcome to Odio Ai!
        </Text>

        {/* Subtitle */}
        <Text className="text-lg text-gray-600 text-center mb-8">
          Read anything aloud in the highest quality voices.
        </Text>

        {/* Circular Icons Grid */}
        <View className="flex-row flex-wrap justify-center mb-8">
          {['PDF', 'DOC', 'ePUB', 'URL', 'TXT', 'Scan Text', 'Type or Paste Text', 'PDF, ePUB & more'].map((item, index) => (
            <TouchableOpacity
              key={index}
              className="bg-white rounded-full p-6 m-2 shadow-lg flex items-center justify-center"
              style={{ width: 100, height: 100 }}
            >
              <MaterialIcons
                name={
                  item === 'Scan Text'
                    ? 'camera'
                    : item === 'Type or Paste Text'
                    ? 'text-fields'
                    : item === 'URL'
                    ? 'link'
                    : 'picture-as-pdf'
                }
                size={32}
                color="#3b82f6"
              />
              <Text className="text-center text-gray-800 mt-2 text-xs">{item}</Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Rating */}
        <View className="flex-row items-center mb-6">
          <Text className="font-bold text-lg text-gray-700">Top Text to Speech App</Text>
          <MaterialIcons name="star" size={28} color="#FFD700" />
          <Text className="text-2xl text-yellow-500 font-bold ml-2">4.8 Rating</Text>
        </View>

        {/* Get Started Button */}
        <Link href="/RegisterPage" className="text-white text-xl font-bold">
        <TouchableOpacity className="bg-blue-600 px-16 py-4 rounded-full shadow-lg mb-6">
          
           <Text>Get Started</Text> 
          
        </TouchableOpacity>
        </Link>

        {/* Footer Text */}
        <Text className="text-sm text-gray-500 text-center">
          By continuing you agree to our Privacy Policy and Terms of Use.
        </Text>
      </View>
    );
  }
}

export default HomePage;