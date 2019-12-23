import React from 'react';
import { ScrollView, Text, Image, StyleSheet } from 'react-native';
import noImage from '../assets/no-image.png';


export default function Description({ navigation }) {
  const item = navigation.state.params.item

  return (
    <ScrollView style={styles.container}>
      { item.volumeInfo != undefined && item.volumeInfo.imageLinks != undefined ? 
          (
          <Image source={{ uri: item.volumeInfo.imageLinks.smallThumbnail != undefined 
            ? item.volumeInfo.imageLinks.smallThumbnail
            :null }} style={styles.img} />
          ) 
          : <Image source={noImage} style={styles.img} />
      }
      <Text style={styles.title}>{item.volumeInfo.title ? item.volumeInfo.title : 'Sem título'}</Text>
      <Text style={styles.subtitle}>Autores: 
        <Text style={styles.regular}>
          {
            item.volumeInfo.authors 
            ? item.volumeInfo.authors.map((author, index) => index === item.volumeInfo.authors.length - 1 
            ? ` ${author}` : ` ${author}, `) 
            : "Sem informação"
          }
        </Text>
      </Text>
      <Text style={styles.subtitle}>Número de páginas: 
        <Text style={styles.regular}>
          {
            item.volumeInfo.pageCount
            ? ` ${item.volumeInfo.pageCount}`
            : ' Sem informação'
          }
        </Text>
      </Text>
      <Text style={[styles.subtitle, styles.description]}>Descrição:
         <Text style={styles.regular}>
           {
            item.volumeInfo.description
            ? ` ${item.volumeInfo.description }`
            : ' Sem descrição'
           }
         </Text>
      </Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#DCDCDC',
    paddingTop: 20,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 21,
    textAlign: 'center',
    margin: 20,
    fontWeight: 'bold'
  },
  description: {
    marginBottom: 50,
  },
  regular: {
    fontWeight: 'normal',
    fontSize: 14
  },
  subtitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 10,
  },
  img: {
    width: 300,
    height: 300,
    borderRadius: 300,
    overflow: "hidden",
    borderWidth: 3,
    borderColor: "#6200EE",
    alignSelf: 'center'
  }
})