import React, { useState } from 'react';
import { View, Image, StyleSheet, Text, Dimensions, useWindowDimensions, ScrollView, SafeAreaView } from 'react-native';

const listaCarros = ({ route }: { route: any }) => {

  const { email } = route.params
  const { styles } = useStyle();

  return (

    <View>
      <Text> Olá {email} </Text>
      <ScrollView style={styles.container}>

        <View style={styles.carro}>
          <Image
            style={styles.carroImage}
            source={{
              uri: 'https://bringatrailer.com/wp-content/uploads/2023/01/1994_mazda_mx-5-miata_1994_mazda_mx-5-miata_90cc76f7-5f1d-4322-a9d3-805178998e04-f2BbKn-23643-23644-scaled.jpg'
            }}
          />
          <Text>
            Modelo: Mazda Miata <br/>
            Ano: 1995 <br/>
            Potência: 90 cv <br/>
            Preço: 10.000 $ <br/>
          </Text>
        </View>

        <View style={styles.carro}>
          <Image
            style={styles.carroImage}
            source={{
              uri: 'https://th.bing.com/th/id/R.db0bb71dc038e2574fa3dd70656ab82a?rik=RJcNB3mz1gUfzw&pid=ImgRaw&r=0'
            }}
          />
          <Text>
            Modelo: Mazda RX7 <br/>
            Ano: 2020 <br/>
            Potência: 400 cv <br/>
            Preço: 200.000 $ <br/>
          </Text>
        </View>

        <View style={styles.carro}>
          <Image
            style={styles.carroImage}
            source={{
              uri: 'https://th.bing.com/th/id/R.18d991f8ef93c2f2189f542fb4fc58bc?rik=0yw6j6mn7sPKTg&pid=ImgRaw&r=0'
            }}
          />
          <Text>
            Modelo: McLaren Senna <br/>
            Ano: 2023 <br/>
            Potência: 800 cv <br/>
            Preço: 2.000.000 $ <br/>
          </Text>
        </View>
      </ScrollView>
    </View>
  );
};

const useStyle = () => {
  const dimensions = useWindowDimensions();

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column',
      alignContent: 'center',
    },
    carro: {
      flex: 1,
      flexDirection: 'row',
      alignContent: 'center',
    },
    carroImage: {
      resizeMode: 'cover',
      width: dimensions.width * 0.3,
      height: dimensions.height * 0.3,
      minWidth: 50,
      minHeight: 50,
    }
  })

  return { styles }
}


export default listaCarros;