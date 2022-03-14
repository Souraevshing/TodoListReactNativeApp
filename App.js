import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View } from 'react-native'

import Header from './components/Header'
import Index from './components'

export default function App() {
  return (
    <View>
      <Header />

      <Index />

      <StatusBar style='auto' />
    </View>
  )
}
