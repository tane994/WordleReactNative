import { View, Text, Pressable, StyleSheet } from 'react-native';
import Footer from './Footer';
import React from 'react';
import * as Haptics from 'expo-haptics';

function HomeScreen({ navigation }) {
  
  const handlePress = () => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Heavy)
    navigation.navigate('Game');
  };

  return (
    <View>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>
          <Text>Welcome To My{`\n`} </Text>
          <Text style={styles.oddLetter}>W</Text>
          <Text style={styles.evenLetter}>o</Text>
          <Text style={styles.oddLetter}>r</Text>
          <Text style={styles.evenLetter}>d</Text>
          <Text style={styles.oddLetter}>l</Text>
          <Text style={styles.evenLetter}>e</Text>
        </Text>
      </View>
      <View style={styles.buttonContainer}>
        <Pressable
          title="Start Game"
          style={styles.startButton}
          onPress={() => handlePress()}>
          <Text style={styles.textPressable}>START GAME</Text>
        </Pressable>
      </View>
      <Footer />
    </View>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 25,
    marginTop: 70,
  },
  titleContainer: {
    marginTop: 170,
  },
  startButton: {
    width: 250,
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'black',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 10,
    elevation: 3,
    flexDirection: 'row',
    cursor: 'pointer',
  },
  textPressable: {
    fontFamily: 'Arial',
    fontWeight: 'bold',
    color: 'white',
    fontSize: 18,
  },
  title: {
    fontSize: 44,
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

export default HomeScreen;
