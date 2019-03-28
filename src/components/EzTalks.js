import React from 'react';
import { Image, View, Text } from 'react-native';

import logo from '../../assets/images/logo.jpg';

export default ({ title }) => {
  alert('Renderizando o componente EzTalks');
  return (
    <View style={{ borderColor: 'red', borderWidth: 5 }}>
      <Image source={logo} />
      <Text>{title}</Text>
    </View>
  );
};
