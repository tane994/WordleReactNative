import { Text, View, StyleSheet, Pressable, Alert } from 'react-native';
import React, { useContext } from 'react';
import { AppContext } from '../App';

const UtilitiesButtons = ({ navigation, handleStatsButton }) => {
  const { definition, grammar, phrase, userAttempt} = useContext(AppContext);


  const definitionAlert = () => {
    alert(definition)
  };

  const grammarAlert = () => {
    alert(grammar)
  };

  const phraseAlert = () => {
    alert(phrase)
  };

  return (
    <View style={styles.principalView}>
      <View style={styles.buttonView}>
        <Pressable
          style={styles.buttonStyle}
          onPress={() => handleStatsButton()}>
          <Text style={styles.textPressable}>STATS</Text>
        </Pressable>
        <Pressable style={styles.buttonStyle} onPress={() => definitionAlert()}>
          <Text style={styles.textPressable}>DEFINITION</Text>
        </Pressable>
      </View>
      <View style={styles.buttonView2}>
        <Pressable style={styles.buttonStyle} onPress={() => grammarAlert()}>
          <Text style={styles.textPressable}>CLUE</Text>
        </Pressable>
        <Pressable style={styles.buttonStyle} disable = {true} onPress={() => phraseAlert()}>
          <Text style={styles.textPressable}>DESPERATE CLUE</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonView: {
    flexDirection: 'row',
  },
  buttonView2: {
    flexDirection: 'row',
    marginTop: 40,
  },
  buttonStyle: {
    width: 170,
    height: 35,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#dcdcdc',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 10,
    marginHorizontal: 3,
    elevation: 3,
    flexDirection: 'row',
    cursor: 'pointer',
  },
  textPressable: {
    fontSize: 12,
    color: 'black',
    fontFamily: 'Arial',
    textAlign: 'left',
  },
});

export default UtilitiesButtons;
