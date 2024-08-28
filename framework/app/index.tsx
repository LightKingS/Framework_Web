import { Link } from 'expo-router';
import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function HomeScreen() {

  const [titleText, setTitleText] = useState("Bird's Nest");
  const bodyText = "Please don't press it, it's a work in progress";

  const onPressTitle = () => {
    console.log(titleText)
    if (titleText == "Bird's Nest") {
      setTitleText("Bird'd Nest [pressed]")
    } else if (titleText == "Bird'd Nest [pressed]") {
      setTitleText("Stop pressing!!!")
    } else if (titleText == "Stop pressing!!!") {
      setTitleText("Ok you broke it");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.baseText}>
        <Text style={styles.titleText} onPress={onPressTitle}>
          {titleText}
        </Text>
        <Text numberOfLines={5}>{bodyText}</Text>
      </Text>

      <View style={styles.miata}>
        <Link href="/details">Click to see Miata</Link>
      </View>
    </View>

  );
}

const styles = StyleSheet.create({
  miata: {
    marginTop: 50
  },
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
