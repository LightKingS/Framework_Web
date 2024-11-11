import React, { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet } from 'react-native';
import ListaCarros from './listaCarros';

export default function LoginScreen({ route, navigation }: { route: any, navigation: any }) {
    const { email } = route.params;
    const [modelo, setModelo] = useState('');
    const [preco, setPreco] = useState('');
    const [ano, setAno] = useState('');
    const [potencia, setPotencia] = useState('');
    const [imagem, setImagem] = useState('')

    const carroConcreto = {
        modelo: modelo ,
        preco: preco,
        ano: ano,
        potencia: potencia,
        imagem: imagem
    }

    const novoCarro = async () => {
        try {
            const response = await fetch('http://localhost:3000/carros', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(carroConcreto)
            })
            if (!response.ok) {
                throw new Error('Erro na solicitação');
            }
            const data = await response.json();
            console.log('Success:', data)
            navigation.navigate('listaCarros', { email })
        } catch (error) {
            console.log('Error', error)
        }
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Novo carro</Text>
            <TextInput
                style={styles.input}
                placeholder="Modelo"
                value={modelo}
                onChangeText={setModelo}
                autoCapitalize="none"
            />
            <TextInput
                style={styles.input}
                keyboardType='numeric'
                placeholder="Preco"
                value={preco}
                onChangeText={setPreco}
            />
            <TextInput
                style={styles.input}
                keyboardType='numeric'
                placeholder="Ano"
                value={ano}
                onChangeText={setAno}
            />
            <TextInput
                style={styles.input}
                keyboardType='numeric'
                placeholder="Potencia"
                value={potencia}
                onChangeText={setPotencia}
            />
            <TextInput
                style={styles.input}
                keyboardType='url'
                placeholder="Imagem"
                value={imagem}
                onChangeText={setImagem}
            />
            <Button title="Adicionar" onPress={novoCarro} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 16,
    },
    title: {
        fontSize: 24,
        marginBottom: 16,
        textAlign: 'center',
    },
    input: {
        height: 40,
        borderColor: '#ccc',
        borderWidth: 1,
        marginBottom: 12,
        paddingHorizontal: 8,
    },
    alertText: {
        color: 'red',
        marginHorizontal: 'auto',
        marginBottom: 12
    }
});
