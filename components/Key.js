import { allwords } from '../assets/allwords';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import React, { useContext } from 'react';
import { AppContext } from '../App';
import { boardDefault } from '../assets/BoardDefault';
import * as Haptics from 'expo-haptics';

const Key = ({ keyVal, bigKey, isLetterDisabled }) => {
  const { board, setBoard, userAttempt, setUserAttempt} =
    useContext(AppContext);

  const handleClick = (keyVal) => {
      onAddLetter(keyVal);
  };

  const onAddLetter = (keyVal) => {
    if (userAttempt.letterPos > 4) return;

    const updatedBoard = [...board];
    updatedBoard[userAttempt.attemptRow][userAttempt.letterPos] = keyVal;
    setBoard(updatedBoard);
    setUserAttempt({
      attemptRow: userAttempt.attemptRow,
      letterPos: userAttempt.letterPos + 1,
    });
  };

  const keyState = () => {
    return isLetterDisabled ? styles.redKey : styles.keyFormat;
  };

  return (
    <View>
      <Pressable
        color="#dcdcdc"
        style={keyState}
        onPress={() => handleClick(keyVal)}>
        <Text style={styles.text}>{keyVal}</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  keyFormat: {
    width: 30,
    height: 30,
    margin: 3,
    marginTop: 3,
    borderRadius: 4,
    flexDirection: 'row',
    backgroundColor: '#dcdcdc',
    cursor: 'pointer',
    paddingVertical: 5,
    paddingHorizontal: 8,
  },
  text: {
    fontSize: 16,
    color: 'black',
    fontFamily: 'Arial',
    textAlign: 'left',
  },

  redKey: {
    width: 30,
    height: 30,
    margin: 3,
    marginTop: 3,
    borderRadius: 4,
    flexDirection: 'row',
    cursor: 'pointer',
    paddingVertical: 5,
    paddingHorizontal: 8,
    backgroundColor: 'red',
  },
});

export default Key;
