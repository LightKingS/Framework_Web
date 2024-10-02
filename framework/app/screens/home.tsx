import { openURL } from 'expo-linking';
import { Link } from 'expo-router';
import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function HomeScreen({navigation}: {navigation: any}) {

  const onPressLogin = () => {
    navigation.navigate('login');
  }

  return (
    <View style={styles.container}>
      <Text style={styles.baseText}>
        <Text style={styles.titleText} onPress={onPressLogin}>
          Click to login
        </Text>
      </Text>
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  baseText: {
    fontFamily: 'Cochin',
  },
  titleText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
