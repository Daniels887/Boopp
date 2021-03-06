import React, { useState } from 'react';
import { View, FlatList, TouchableOpacity, Image, Text, StyleSheet, Animated} from 'react-native';

import noImage from '../assets/no-image.png';

export default function BooksList({ data, handleClick }) {
  const [fadeAnim] = useState(new Animated.Value(0))

  function onLoad(event) {
    Animated.timing(
      fadeAnim,
      {
        toValue: 1,
        duration: 2000,
      }
    ).start();
  }
  return (
    <FlatList
        data={data}
        renderItem={({ item , index }) => (
            <View 
              style={[styles.containerBook, index === data.length - 1 ? styles.marginLastItem : null]}
            >
              <Text style={styles.title}>{item.volumeInfo.title}</Text>
              <TouchableOpacity onPress={() => handleClick(item)}>
              { item.volumeInfo != undefined && item.volumeInfo.imageLinks != undefined ? 
                (
                  <Animated.Image source={{ uri: item.volumeInfo.imageLinks.smallThumbnail != undefined 
                    ? item.volumeInfo.imageLinks.smallThumbnail
                    :null }} style={[styles.img, {opacity: fadeAnim}]}  onLoad={onLoad} />
                ) 
                : <Animated.Image source={noImage} style={[styles.img, {opacity: fadeAnim}]} onLoad={onLoad} />
              }
              </TouchableOpacity>
            </View>
        )}
        keyExtractor={item => item.id}
    />
  );
}

const styles = StyleSheet.create({
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
    marginLastItem: {
      marginBottom: 20,
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