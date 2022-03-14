import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'

export default function Items({ item, handleDelete }) {
  return (
    <TouchableOpacity onPress={() => handleDelete(item.key)}>
      <Text style={styles.items}>{item.text}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  items: {
    padding: 16,
    marginTop: 16,
    borderColor: 'purple',
    borderWidth: 1,
    borderStyle: 'dashed',
    borderRadius: 6,
    fontWeight: 700,
    color: 'white',
    backgroundColor: 'orange',
  },
})
