// sometimes typescript fails to process these two modules, but they work fine in javascript
import React, { useState, createContext, useEffect } from 'react';
import GameScreen from './components/GameScreen';
import HomeScreen from './components/HomeScreen';
import Stats from './components/Stats';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { answers } from './assets/answers';
import { boardDefault } from './assets/BoardDefault';

const Stack = createNativeStackNavigator();

export const AppContext = createContext();

const randomWord = (answers: string[]): string => {
  const rand = Math.floor(Math.random() * answers.length);
  return answers[rand];
};

const generateWordForGame = () => {
  return randomWord(answers);
};

function App() {
  //Various states
  const [board, setBoard] = useState(boardDefault);
  const [userAttempt, setUserAttempt] = useState({
    letterPos: 0,
    attemptRow: 0,
  });
  const [wordGame, setWordGame] = useState(generateWordForGame());
  const [gameStats, setGameStats] = useState({
    wins: 0,
    losses: 0,
    gamesPlayed: 0,
    winningRate: '',
  });
  const [lettersNotPresent, setLettersNotPresent] = useState([]);
  const [definition, setDefinition] = useState(null);
  const [grammar, setGrammar] = useState(null);
  const [phrase, setPhrase] = useState(null);

  const colorArr = [];

  const lowerCaseWord = wordGame.toLowerCase();

  const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${lowerCaseWord}`;

  async function getData() {
    try {
      let res = await fetch(url);
      return await res.json();
    } catch (error) {
      console.log(error);
    }
  }

  async function renderData() {
    let data = await getData();
    console.log(data);

    data.forEach((data) =>
      setDefinition(data.meanings[0].definitions[0].definition)
    );
    data.forEach((data) => setGrammar(data.meanings[0].partOfSpeech));
    data.forEach((data) =>
      data.meanings[0].definitions[0].example === undefined
        ? setPhrase('Not defined for this word')
        : setPhrase(data.meanings[0].definitions[0].example)
    );
    data.forEach((data) =>
      console.log(data.meanings[0].definitions[0].example)
    );
  }

  renderData();

  return (
    <AppContext.Provider
      value={{
        board,
        setBoard,
        userAttempt,
        setUserAttempt,
        lettersNotPresent,
        setLettersNotPresent,
        wordGame,
        gameStats,
        setGameStats,
        definition,
        grammar,
        phrase,
        colorArr,
      }}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Game" component={GameScreen} />
          <Stack.Screen name="Stats" component={Stats} />
        </Stack.Navigator>
      </NavigationContainer>
    </AppContext.Provider>
  );
}

export default App;
