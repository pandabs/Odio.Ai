// app/Register.tsx
import React, { useState } from 'react';
import { Text, View, TextInput, TouchableOpacity, Alert } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { Link } from 'expo-router';

const RegisterPage: React.FC = () => {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleSignUp = (): void => {
    if (!name || !email || !password) {
      Alert.alert('Error', 'Please fill in all fields.');
      return;
    }
    Alert.alert('Success', 'Registration successful!');
  };

  return (
    <View className="flex-1 justify-center items-center bg-white p-6">
      <Text className="text-3xl font-bold text-center text-gray-900 mb-8">
        Create an Account
      </Text>

      <View className="w-full mb-6">
        <Text className="text-sm text-gray-600 mb-2">Name</Text>
        <View className="flex-row items-center border border-gray-300 rounded-lg p-3">
          <MaterialIcons name="person" size={20} color="#6b7280" />
          <TextInput
            className="flex-1 ml-2 text-gray-900"
            placeholder="Enter your name"
            value={name}
            onChangeText={setName}
          />
        </View>
      </View>

      <View className="w-full mb-6">
        <Text className="text-sm text-gray-600 mb-2">Email</Text>
        <View className="flex-row items-center border border-gray-300 rounded-lg p-3">
          <MaterialIcons name="email" size={20} color="#6b7280" />
          <TextInput
            className="flex-1 ml-2 text-gray-900"
            placeholder="Enter your email"
            keyboardType="email-address"
            value={email}
            onChangeText={setEmail}
          />
        </View>
      </View>

      <View className="w-full mb-8">
        <Text className="text-sm text-gray-600 mb-2">Password</Text>
        <View className="flex-row items-center border border-gray-300 rounded-lg p-3">
          <MaterialIcons name="lock" size={20} color="#6b7280" />
          <TextInput
            className="flex-1 ml-2 text-gray-900"
            placeholder="Enter your password"
            secureTextEntry
            value={password}
            onChangeText={setPassword}
          />
        </View>
      </View>

      <TouchableOpacity
        className="bg-blue-600 w-full py-4 rounded-lg shadow-md"
        onPress={handleSignUp}
      >
        <Text className="text-white text-lg font-bold text-center">Sign Up</Text>
      </TouchableOpacity>

      <Text className="text-sm text-gray-500 text-center mt-8">
        Already have an account?{' '}
        <Link href="/LoginPage" className="text-blue-600 font-semibold">
          Login
        </Link>
      </Text>
      <Text className="text-sm text-gray-500 text-center mt-8">
        <Link href="/Dashboard" className="text-blue-600 font-semibold">
        Skip Register
        </Link>
      </Text>
    </View>
  );
};

export default RegisterPage;
