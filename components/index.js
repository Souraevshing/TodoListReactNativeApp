import React, { useState } from 'react'
import { StyleSheet, Alert, View, FlatList } from 'react-native'

import Items from '../components/Items'
import Additem from './AddItems'

export default function indexPage() {
  const [todo, setTodo] = useState([
    // { text: 'Code', key: '1' },
    // { text: 'Debug', key: '2' },
    // { text: 'Development', key: '3' },
    // { text: 'Production', key: '4' },
  ])

  const handleDelete = (key) => {
    setTodo((todos) => {
      return todos.filter((todo) => todo.key != key)
    })
  }

  const handleSubmit = (text) => {
    if (text.length > 0) {
      setTodo((todos) => {
        return [{ text: text, key: Math.random().toString() }, ...todos]
      })
    } else {
      console.log('error')
      Alert.alert('Error', 'Must not be left blank', [
        {
          text: 'OK',
          onPress: () => console.log('Closed'),
          style: 'cancel',
        },
      ])
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.conent}>
        <Additem handleSubmit={handleSubmit} />
        <View style={styles.list}>
          <FlatList
            data={todo}
            renderItem={({ item }) => (
              <Items item={item} handleDelete={handleDelete} />
            )}
          />
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    paddingTop: 40,
  },
  content: {
    padding: 40,
  },
  list: {
    marginTop: 30,
    fontWeight: '200',
  },
})
