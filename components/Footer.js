import { View, Text, StyleSheet } from 'react-native';
import React from 'react';

const Footer = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>@ 2022 Tane94</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 300,
    height: 80,
    alignContent: 'center',
    justifyContent: 'center',
    backgroundColor: '#696969',
  },
  title: {
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#d3d3d3',
    fontFamily: 'sans-serif',
  },
});

export default Footer;
