import { View, Text, StyleSheet } from 'react-native';
import React, { useState } from 'react';
import Letter from './Letter';

const Board = () => {
  return (
    <View style={styles.boardSize}>
      <View style={styles.row}>
        <Letter letterPos={0} attemptVal={0} />
        <Letter letterPos={1} attemptVal={0} />
        <Letter letterPos={2} attemptVal={0} />
        <Letter letterPos={3} attemptVal={0} />
        <Letter letterPos={4} attemptVal={0} />
      </View>
      <View style={styles.row}>
        <Letter letterPos={0} attemptVal={1} />
        <Letter letterPos={1} attemptVal={1} />
        <Letter letterPos={2} attemptVal={1} />
        <Letter letterPos={3} attemptVal={1} />
        <Letter letterPos={4} attemptVal={1} />
      </View>
      <View style={styles.row}>
        <Letter letterPos={0} attemptVal={2} />
        <Letter letterPos={1} attemptVal={2} />
        <Letter letterPos={2} attemptVal={2} />
        <Letter letterPos={3} attemptVal={2} />
        <Letter letterPos={4} attemptVal={2} />
      </View>
      <View style={styles.row}>
        <Letter letterPos={0} attemptVal={3} />
        <Letter letterPos={1} attemptVal={3} />
        <Letter letterPos={2} attemptVal={3} />
        <Letter letterPos={3} attemptVal={3} />
        <Letter letterPos={4} attemptVal={3} />
      </View>
      <View style={styles.row}>
        <Letter letterPos={0} attemptVal={4} />
        <Letter letterPos={1} attemptVal={4} />
        <Letter letterPos={2} attemptVal={4} />
        <Letter letterPos={3} attemptVal={4} />
        <Letter letterPos={4} attemptVal={4} />
      </View>
      <View style={styles.row}>
        <Letter letterPos={0} attemptVal={5} />
        <Letter letterPos={1} attemptVal={5} />
        <Letter letterPos={2} attemptVal={5} />
        <Letter letterPos={3} attemptVal={5} />
        <Letter letterPos={4} attemptVal={5} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  boardSize: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 400,
    flex: 1,
    flexDirection: 'column',
    marginTop: 60,
  },
  row: {
    flex: 1,
    flexDirection: 'row',
    padding: 5,
    marginBottom: 50,
    width: 250,
  },
});

export default Board;
