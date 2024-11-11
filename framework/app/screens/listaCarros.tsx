import React, { useEffect, useState } from 'react';
import { View, Image, StyleSheet, Text, ScrollView, SafeAreaView, ImageSourcePropType, Button, Pressable } from 'react-native';

type Carro = {
  id: string;
  modelo: string;
  preco: number;
  ano: number;
  potencia: number;
  imagem: ImageSourcePropType;
}

const ListaCarros = ({ route, navigation }: { route: any, navigation: any }) => {
  const { email } = route.params;
  const [carros, setCarros] = useState<Carro[]>([])

  const getCarros = async () => {
    try {
      const response = await fetch('http://localhost:3000/carros')
      const json = await response.json()
      setCarros(json)
      console.log(carros[0].modelo)
    } catch (error) {
      console.log(error)
    }
  }

  const goToNovoCarro = () => {
    navigation.navigate('novoCarro', {email});
  }

  useEffect(() => {
    getCarros()
  }, [])

  return (
    <SafeAreaView style={styles.safeArea}>
      <Text style={styles.greeting}>Olá {email}</Text>

      <Pressable style={styles.button} onPress={goToNovoCarro}>
        <Text style={styles.textButton}>Criar novo Carro</Text>
      </Pressable>

      <ScrollView contentContainerStyle={styles.container}>

        {carros.map((carro) =>
          <View key={carro.id} style={styles.carro}>
            <Image
              style={styles.carroImage}
              source={carro.imagem}
            />
            <Text style={styles.carroText}>
              Modelo: {carro.modelo} {"\n"}
              Ano: {carro.ano} {"\n"}
              Potência: {carro.potencia} cv {"\n"}
              Preço: {carro.preco} $
            </Text>
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  button: {
    fontSize: 24,
    marginBottom: 16,
    textAlign: 'center',
  },
  textButton: {
    fontSize: 24,
    marginBottom: 16,
    textAlign: 'center',
    color: 'blue',
    backgroundColor: 'lightgrey'
  },
  safeArea: {
    flex: 1,
    backgroundColor: '#fff',
  },
  greeting: {
    fontSize: 18,
    textAlign: 'center',
    margin: 10,
  },
  container: {
    flexGrow: 1,
    paddingHorizontal: 16,
    paddingBottom: 20,
  },
  carro: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  carroImage: {
    width: 150,  // Tamanho fixo da largura
    height: 100, // Tamanho fixo da altura
    marginRight: 10,
    objectFit: 'fill'
  },
  carroText: {
    flex: 1,
    fontSize: 16,
  },
});

export default ListaCarros;
