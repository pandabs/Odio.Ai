import React from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { Link } from 'expo-router';

const LoginPage = () => {
  return (
    <View className="flex-1 justify-center items-center bg-gradient-to-b from-blue-300 to-white p-6">
      {/* Title */}
      <Text className="text-4xl font-bold text-center text-gray-900 mb-4">
        Welcome Back!
      </Text>

      {/* Subtitle */}
      <Text className="text-lg text-gray-600 text-center mb-8">
        Log in to continue to Odio Ai.
      </Text>

      {/* Email Input */}
      <TextInput
        placeholder="Email"
        className="w-full bg-white p-4 rounded-lg shadow-lg mb-4"
        placeholderTextColor="#9CA3AF"
      />

      {/* Password Input */}
      <TextInput
        placeholder="Password"
        className="w-full bg-white p-4 rounded-lg shadow-lg mb-6"
        placeholderTextColor="#9CA3AF"
        secureTextEntry
      />

      {/* Login Button */}
      <TouchableOpacity className="bg-blue-600 w-full py-4 rounded-full shadow-lg mb-6">
        <Text className="text-white text-xl font-bold text-center">Log In</Text>
      </TouchableOpacity>

      {/* Skip Login Option */}
      <Text className="text-sm text-gray-500 text-center mt-4">
        Don't want to log in?{' '}
        <Link href="/Dashboard" className="text-blue-600 font-semibold">
          Skip Login
        </Link>
      </Text>
    </View>
  );
};

export default LoginPage;