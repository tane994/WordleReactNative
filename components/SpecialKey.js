import { allwords } from '../assets/allwords';
import { View, Text, StyleSheet, Pressable, Share, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useContext } from 'react';
import { AppContext } from '../App';
import { boardDefault } from '../assets/BoardDefault';
import * as Haptics from 'expo-haptics';

const SpecialKey = ({ keyVal, bigKey, isLetterPresent }) => {
  const {
    board,
    setBoard,
    userAttempt,
    setUserAttempt,
    wordGame,
    gameStats,
    setGameStats,
    colorArr,
  } = useContext(AppContext);

  const getBoardToShare = () => {
    let stringColors = colorArr.join('');

    let newStringColors =
      stringColors.slice(0, 10) +
      '\n' +
      stringColors.slice(10, 20) +
      '\n' +
      stringColors.slice(20, 30) +
      '\n' +
      stringColors.slice(30, 40) +
      '\n' +
      stringColors.slice(40, 50);

    return newStringColors;
  };

  const storeStats = async (gameStats) => {
    try {
      await AsyncStorage.setItem('@gameStats', JSON.stringify(gameStats));
    } catch (error) {
      console.log(error);
    }
  };

  const loadStats = async () => {
    try {
      const gameStats = JSON.parse(await AsyncStorage.getItem('@gameStats'));
      if (gameStats !== null) setGameStats(gameStats);
    } catch (error) {
      console.log(error);
    }
  };

  const handleClick = (keyVal) => {
    if (keyVal == 'enter') {
      onEnter();
    } else {
      onDelete();
    }
  };

  const onShare = async (message) => {
    try {
      const result = await Share.share({
        message: message,
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      alert(error.message);
    }
  };

  const onEnter = () => {
    if (userAttempt.letterPos !== 5) return;

    let userGuess = '';

    for (let i = 0; i < 5; i++) {
      userGuess += board[userAttempt.attemptRow][i];
    }

    if (allwords.includes(userGuess))
      setUserAttempt({ attemptRow: userAttempt.attemptRow + 1, letterPos: 0 });
    else {
      Haptics.notificationAsync(Haptics.NotificationFeedbackType.Error);
      alert('Word not valid.');
    }

    if (wordGame == userGuess) {
      Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
      alert('Congratulations you won. Thank you for playing!');

      setGameStats({
        ...gameStats,
        wins: gameStats.wins + 1,
        gamesPlayed: gameStats.gamesPlayed + 1,
      });

      storeStats({
        ...gameStats,
        wins: gameStats.wins + 1,
        gamesPlayed: gameStats.gamesPlayed + 1,
      });

      const colorBoardToShare = getBoardToShare();

      Alert.alert(
        'Victory',
        'Congratulations you won. Thank you for playing!',
        [
          {
            text: 'Share',
            onPress: () => onShare(colorBoardToShare + "\nThis is the board of my game"),
            style: 'cancel',
          },
          { text: 'OK', onPress: () => console.log('OK Pressed') },
        ]
      );

      return;
    }

    if (userAttempt.attemptRow === 5) {
      Haptics.notificationAsync(Haptics.NotificationFeedbackType.Warning);
      const colorBoardToShare = getBoardToShare();

      Alert.alert(
        'Victory',
        "Im sorry you lost. Try again!",
        [
          {
            text: 'Share',
            onPress: () => onShare(colorBoardToShare + "\nThis is the board of my game"),
            style: 'cancel',
          },
          { text: 'OK', onPress: () => console.log('OK Pressed') },
        ]
      );

      setGameStats({
        ...gameStats,
        losses: gameStats.losses + 1,
        gamesPlayed: gameStats.gamesPlayed + 1,
      });

      storeStats({
        ...gameStats,
        losses: gameStats.losses + 1,
        gamesPlayed: gameStats.gamesPlayed + 1,
      });
      return;

      
    }
  };

  const onDelete = () => {
    if (userAttempt.letterPos === 0) return;
    const newBoard = [...board];
    newBoard[userAttempt.attemptRow][userAttempt.letterPos - 1] = '';
    setBoard(newBoard);
    setUserAttempt({ ...userAttempt, letterPos: userAttempt.letterPos - 1 });
  };

  return (
    <View>
      <Pressable
        color="#dcdcdc"
        style={styles.specialKey}
        onPress={() => handleClick(keyVal)}>
        <Text style={styles.text}>{keyVal}</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  specialKey: {
    width: 55,
    height: 30,
    marginTop: 5,
    borderRadius: 4,
    flexDirection: 'row',
    backgroundColor: '#dcdcdc',
    cursor: 'pointer',
    paddingVertical: 5,
    paddingHorizontal: 6,
  },
});

export default SpecialKey;
