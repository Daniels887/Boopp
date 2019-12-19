import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import api from '../services/api.js';

export default function pages({ navigation }) {
  useEffect(() => {
    (async function loadBooks() {
      const response = await api.get(`volumes?q=${navigation.state.params.book}`)
      console.log(response)
    })()

  }, [])

  return (
    <View>
        <Text>Books</Text>
    </View>
  );
}
