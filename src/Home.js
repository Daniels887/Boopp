import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Image } from 'react-native';
import logo from './assets/book.png'
export default function Home() {
  const [ book, setBook ] = useState('');

  return (
    <View style={styles.container}>
      <Image source={logo} style={styles.logo} />
      <TextInput 
        placeholder="Digite o nome do livro"
        style={styles.input}
      />
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Encontrar Livro</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'stretch',
    marginHorizontal: 40,
  },
  logo: {
    aspectRatio: 1,
    height: 100,
    alignSelf: 'center',
    marginBottom: 20,
  },
  input: {
    borderRadius: 4,
    borderBottomWidth: 0.5,
    borderColor: '#ddd',
    paddingHorizontal: 20,
    textAlign: 'center',
    fontSize: 16,
    marginBottom: 20,
  },
  button: {
    height: 42,
    backgroundColor: '#f05a5b',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 2,
  },
  buttonText: {
    color: '#FFF',
    fontWeight: 'bold',
  }
})