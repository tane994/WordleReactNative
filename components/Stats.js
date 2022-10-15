import {
  Text,
  View,
  StyleSheet,
  NativeModules,
  Pressable,
  Button,
} from 'react-native';
import React, { useEffect, useState, useContext } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Footer from './Footer'
import { AppContext } from '../App';

const Stats = () => {
  const { gameStats, setGameStats } = useContext(AppContext);

  const calculateWinningRate = () => {
    return (gameStats.wins / gameStats.gamesPlayed) * 100;
  };

  const winningRate = calculateWinningRate();

  const resetStats = async () => {
    await AsyncStorage.removeItem('@gameStats');
    setGameStats({ wins: 0, losses: 0, gamesPlayed: 0, winningRate: '' });
  };

  useEffect(() => {
    const loadStats = async () => {
      try {
        const gameStats = JSON.parse(await AsyncStorage.getItem('@gameStats'));
        if (gameStats !== null) setGameStats(gameStats);
      } catch (error) {
        console.log(error);
      }
    };

    loadStats();
  }, [setGameStats]);

  return (
    <View>
      <View style={styles.statsView}>
        <Text style={styles.textStats}> Wins: {gameStats.wins} </Text>
        <Text style={styles.textStats}> Losses: {gameStats.losses} </Text>
        <Text style={styles.textStats}>
          {' '}
          Games Played: {gameStats.gamesPlayed}{' '}
        </Text>
        <Text style={styles.textStats}>
          {' '}
          Winning Rate: {`${winningRate}%`}{' '}
        </Text>
        <Pressable style={styles.resetButton} onPress={() => resetStats()}>
          <Text style={styles.textPressable}>Reset Stats</Text>
        </Pressable>
      </View>
      <Footer/>
    </View>
  );
};

const styles = StyleSheet.create({
  statsView: {
    marginTop: 150,
    marginBottom: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  resetButton: {
    width: 200,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'black',
    marginTop: 10,
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 10,
    elevation: 3,
    flexDirection: 'row',
    cursor: 'pointer',
  },
  textStats: {
    fontFamily: 'Arial',
    marginBottom: 10,
    fontSize: 16,
    textAlign: "left"
  },
  textPressable: {
    fontFamily: 'Arial',
    fontWeight: 'bold',
    color: 'white',
    fontSize: 16,
  },
});

export default Stats;
