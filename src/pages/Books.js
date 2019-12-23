import React, { useEffect, useState } from 'react';
import { View, StyleSheet, ActivityIndicator} from 'react-native';
import api from '../services/api.js';
import BooksList from '../components/BooksList';

export default function pages({ navigation }) {
  const [ data, setData ] = useState([]);
  const [ load, setLoad ] = useState(true)

  useEffect(() => {
    (async function loadBooks() {
      try {
        const response = await api.get(`volumes?q=${navigation.state.params.book}`)
        const { items } = response.data
        if(items) {
          setData(items)
        }else {
          navigation.navigate('Home')
        }
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
        <BooksList data={data} handleClick={handleClick} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "#DCDCDC",
  }
})