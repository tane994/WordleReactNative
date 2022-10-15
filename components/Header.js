import { View, Text, StyleSheet } from 'react-native';
import React from 'react';

const Header = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        <Text style={styles.oddLetter}>W</Text>
        <Text style={styles.evenLetter}>o</Text>
        <Text style={styles.oddLetter}>r</Text>
        <Text style={styles.evenLetter}>d</Text>
        <Text style={styles.oddLetter}>l</Text>
        <Text style={styles.evenLetter}>e</Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 100,
    height: 50,
    alignContent: 'center',
    justifyContent: 'center',
    backgroundColor: '#696969',
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  oddLetter: {
    color: '#ffd700',
  },
  evenLetter: {
    color: '#32cd32',
  },
});

export default Header;
