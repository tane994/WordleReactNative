import { answers } from '../assets/answers';
import {
  Text,
  View,
  StyleSheet,
  NativeModules,
  Button,
  Pressable,
} from 'react-native';
import Constants from 'expo-constants';
import { Card } from 'react-native-paper';
import Keyboard from './Keyboard';
import Board from './Board';
import Header from './Header';
import Footer from './Footer';
import Stats from './Stats';
import UlititiesButtons from './UtilitiesButtons'
import { AppContext } from '../App';
import PlayAgainBtn from './PlayAgainBtn';
import React, { useState, useEffect, useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const playAgain = () => {
  NativeModules.DevSettings.reload();
};

function GameScreen({ navigation }) {
  
  const {
        lettersNotPresent,
        setLettersNotPresent,
        wordGame,
        gameStats,
        setGameStats, } =  useContext(AppContext);
  //Various states

    const handleStatsButton = () => {
    navigation.navigate('Stats');
  };

  return (
    <View>
      <Header />
      <View style={styles.container}>
          <Board />
          <Keyboard notPresent={lettersNotPresent} />
          <PlayAgainBtn onReload={playAgain} />
          <Text>{wordGame}</Text>
          <UlititiesButtons handleStatsButton = { handleStatsButton }/>
      </View>
      <Footer />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 220,
  },
});

export default GameScreen;
