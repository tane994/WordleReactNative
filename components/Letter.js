import { View, Text, StyleSheet } from 'react-native';
import React, { useState, useContext, useEffect } from 'react';
import { AppContext } from '../App';

const Letter = ({ letterPos, attemptVal }) => {
  const {
    board,
    userAttempt,
    wordGame,
    lettersNotPresent,
    setLettersNotPresent,
    colorArr,
  } = useContext(AppContext);

  // current letter
  const letter = board[attemptVal][letterPos];
  const correctLetter = wordGame.toUpperCase()[letterPos] === letter;
  const almostCorrect =
    !correctLetter && letter !== '' && wordGame.toUpperCase().includes(letter);

  const isAttemptSubmitted = () => {
    return userAttempt.attemptRow > attemptVal;
  };

  const isLetterColorSelected = () => {
    return correctLetter
      ? styles.correctLetter
      : almostCorrect
      ? styles.almostCorrect
      : styles.incorrectLetter;
  };

  const pickColorGrid = () => {
    if (correctLetter) colorArr.push('🟩');
    else if (almostCorrect) colorArr.push('🟨');
    else colorArr.push('🟥');
  };

  const letterState = isAttemptSubmitted() && isLetterColorSelected();

  useEffect(() => {
    if (letter !== '' && !correctLetter && !almostCorrect) {
      setLettersNotPresent((previousLetter) => [...previousLetter, letter]);
    }
  }, [userAttempt.attemptRow]);

  pickColorGrid();

  return (
    <View style={styles.letterPos}>
      <View style={letterState}>
        <Text style={styles.letterFormat}>{letter}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  letterPos: {
    flex: 1,
    borderWidth: 1,
    margin: 2,
    display: 'row',
    height: 50,
  },
  letterFormat: {
    paddingVertical: 7,
    paddingHorizontal: 10,
    fontSize: 25,
    fontWeight: 'bold',
    color: 'black',
    fontFamily: 'Arial',
  },
  incorrectLetter: {
    flex: 1,
    borderWidth: 1,
    margin: 2,
    display: 'row',
    height: 50,
    backgroundColor: 'red',
  },
  correctLetter: {
    flex: 1,
    borderWidth: 1,
    margin: 2,
    display: 'row',
    height: 50,
    backgroundColor: '#32cd32',
  },
  almostCorrect: {
    flex: 1,
    borderWidth: 1,
    margin: 2,
    display: 'row',
    height: 50,
    backgroundColor: '#ffd700',
  },
});

export default Letter;
