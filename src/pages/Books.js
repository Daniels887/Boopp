import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet, Image } from 'react-native';
import api from '../services/api.js';

export default function pages({ navigation }) {
  const [ data, setData ] = useState([]);
  const [ load, setLoad ] = useState(true)

  useEffect(() => {
    (async function loadBooks() {
      try {
        const response = await api.get(`volumes?q=${navigation.state.params.book}&maxResults=1`)
        const { items } = response.data
        setData(items)
        setLoad(false)
      }catch(e) {
        navigation.navigate('Home')
      }
            
    })()

  }, [])

  return (
    <View style={styles.container}>
      { load ? (
        <Text>Carregando...</Text>
      ) : (
        <FlatList
          data={data}
          renderItem={({ item }) => (
            <>
              <Image style={styles.img} source-={{ uri: item.volumeInfo.imageLinks.thumbnail }} />
              <Text>{item.volumeInfo.title}</Text>
              { console.log(item.volumeInfo.imageLinks.smallThumbnail)}
            </>
          )}
          keyExtractor={item => item.id}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  img: {
    width: 200,
    height: 120,
    resizeMode: 'contain',
    borderRadius: 2,
  }
})