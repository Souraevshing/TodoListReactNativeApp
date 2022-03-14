import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Header = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>TODO APP</Text>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
  header: {
    height: 80,
    paddingTop: 30,
    backgroundColor: 'purple',
  },
  title: {
    textAlign: 'center',
    alignItems:'center',
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
})
