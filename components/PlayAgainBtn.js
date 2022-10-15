import { View, Text, Pressable, StyleSheet } from 'react-native';
import React from 'react';

const PlayAgainBtn = ({ onReload }) => {
  return (
    <View style={styles.reloadBtn}>
      <Pressable title="Play Again" onPress={() => onReload()}>
        <Text style={styles.textReloadBtn}>Play Again</Text>
      </Pressable>
    </View>
  );
};

export default PlayAgainBtn;

const styles = StyleSheet.create({
  reloadBtn: {
    width: 365,
    height: 30,
    justifyContent: 'center',
    marginLeft: 6,
    marginTop: 10,
    borderRadius: 4,
    flexDirection: 'row',
    backgroundColor: '#dcdcdc',
    cursor: 'pointer',
    paddingVertical: 5,
    paddingHorizontal: 8,
    marginBottom: 10
  },
  textReloadBtn: {
    fontFamily: 'Arial',
    fontSize: 18,
  },
});
