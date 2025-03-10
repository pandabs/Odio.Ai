import { HomePage } from 'app/HomePage';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from "react-native-safe-area-context";

import './global.css';

export default function App() {
  return (
    <>
      <SafeAreaProvider>
        <HomePage />
        <StatusBar style="auto" />
      </SafeAreaProvider>

    </>
  );
}
