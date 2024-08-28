import React from 'react';
import { View, Image, StyleSheet, Text } from 'react-native';

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    paddingLeft: 50,
    alignContent: 'center',
    display: 'flex',
    justifyContent: 'center',
  },
  tinyLogo: {
    width: 500,
    height: 500,
  }
});

const DisplayAnImage = () => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.tinyLogo}
        source={{
          uri: 'https://bringatrailer.com/wp-content/uploads/2023/01/1994_mazda_mx-5-miata_1994_mazda_mx-5-miata_90cc76f7-5f1d-4322-a9d3-805178998e04-f2BbKn-23643-23644-scaled.jpg'
        }}
      />
      <Text>Miata</Text>
    </View>
  );
};

export default DisplayAnImage;