import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet, Image, TouchableOpacity, ActivityIndicator} from 'react-native';
import api from '../services/api.js';

export default function pages({ navigation }) {
  const [ data, setData ] = useState([]);
  const [ load, setLoad ] = useState(true)

  useEffect(() => {
    (async function loadBooks() {
      try {
        const response = await api.get(`volumes?q=${navigation.state.params.book}`)
        const { items } = response.data
        setData(items)
        setLoad(false)
      }catch(e) {
        navigation.navigate('Home')
      }
    })()
  }, [])

  function handleClick(item) {
    navigation.navigate('Description', { item })
  }

  return (
    <View style={styles.container}>
      { load ? (
        <ActivityIndicator size="large" color="#6200EE" />
      ) : (
        
        <FlatList
          data={data}
          renderItem={({ item }) => (
            <View style={styles.containerBook}>
              <Text style={styles.title}>{item.volumeInfo.title}</Text>
              <TouchableOpacity onPress={() => handleClick(item)}>
              { item.volumeInfo != undefined && item.volumeInfo.imageLinks != undefined ? 
                (
                  <Image source={{ uri: item.volumeInfo.imageLinks.smallThumbnail != undefined 
                    ? item.volumeInfo.imageLinks.smallThumbnail
                    :null }} style={styles.img}/>
                ) 
                : <Text>Não existe imagem</Text>
              }
              </TouchableOpacity>
            </View>
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
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "#ddd",
  },
  containerBook: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    marginHorizontal: 20,
    padding: 20,
    borderRadius: 10,
    backgroundColor: "#fff"
  },
  title: {
    textAlign: 'center',
    fontSize: 21,
    color: '#6200EE',
  },
  img: {
    width: 150,
    height: 150,
    resizeMode: 'contain',
    aspectRatio: 1,
    marginTop: 12,
  }
})