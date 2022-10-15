import { View, Text, StyleSheet } from 'react-native';
import React, { useContext, useState } from 'react';
import { AppContext } from '../App';
import Letter from './Letter';
import Key from './Key';
import SpecialKey from './SpecialKey';

const Keyboard = () => {
  const { lettersNotPresent } = useContext(AppContext);

  const keys1 = ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'];
  const keys2 = ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'];
  const keys3 = ['Z', 'X', 'C', 'V', 'B', 'N', 'M'];

  return (
    <View style={styles.keyboard}>
      <View style={styles.row}>
        {keys1.map((key) => {
          return (
            <Key
              keyVal={key}
              isLetterDisabled={lettersNotPresent.includes(key)}
            />
          );
        })}
      </View>
      <View style={styles.row}>
        {keys2.map((key) => {
          return (
            <Key
              keyVal={key}
              isLetterDisabled={lettersNotPresent.includes(key)}
            />
          );
        })}
      </View>
      <View style={styles.row}>
        <SpecialKey keyVal={'enter'} bigKey />
        {keys3.map((key) => {
          return (
            <Key
              keyVal={key}
              isLetterDisabled={lettersNotPresent.includes(key)}
            />
          );
        })}
        <SpecialKey keyVal={'delete'} bigKey />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  keyboard: {
    marginTop: 190,
    width: 400,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  row: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 10,
  },
});

export default Keyboard;
