import React, { useState } from 'react'
import { StyleSheet, View, Text, TextInput, Button } from 'react-native'

export default function Additem({ handleSubmit }) {
  const [text, setText] = useState('')

  const handleText = (newText) => {
    setText(newText)
  }

  return (
    <View>
      <TextInput
        style={styles.input}
        placeholder='Add to todo list...'
        onChangeText={handleText}
      />
      <Button
        style={styles.btn}
        title='Add'
        color='green'
        onPress={() => handleSubmit(text)}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  input: {
    margin: 10,
    marginBottom: 10,
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    outlineStyle: 'none',
  },
  btn: {
    width: 10,
    marginTop: 20,
  },
})
