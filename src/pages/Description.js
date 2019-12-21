import React, { useEffect } from 'react';
import { View } from 'react-native';

export default function Description({ navigation }) {
  useEffect(() => {
    console.log(navigation.state.params.item)
  }, [])
  return (
    <View />
  );
}
