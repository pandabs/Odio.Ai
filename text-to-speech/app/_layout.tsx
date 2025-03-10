// app/_layout.tsx
import { Stack } from 'expo-router';
import React from 'react';

export default function RootLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index" /> {/* Home page */}
      <Stack.Screen name="Dashboard" /> {/* Dashboard page */}
      {/* Add other screens here */}
    </Stack>
  );
}