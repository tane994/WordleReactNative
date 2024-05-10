# Wordly Clone React Native App

This is a React Native app that is a clone of the popular word guessing game Wordle.

## Features

* Guess a 5-letter word in 6 tries.
* Letters change color to indicate how close they are to the correct word.
* Green: Letter is in the correct spot.
* Yellow: Letter is in the word, but not in the correct spot.
* Gray: Letter is not in the word.
* Keep track of your stats, including wins, losses, and games played.
* Share your results with friends.

## Getting Started

1. Clone the repository:

```bash
git clone https://github.com/your-username/wordly-clone.git
```

2. Install dependencies:

```bash
cd wordly-clone
npm install
```

3. Run the app on an Android emulator or device:

```bash
npx react-native run-android
```

4. Run the app on iOS simulator or device:

```bash
npx react-native run-ios
```

## Usage

The app is straightforward to use. Here's a quick guide:

1. Open the app.
2. Start typing letters on the keyboard.
3. Press "Enter" to submit your guess.
4. The letters will change color to indicate how close they are to the correct word.
5. You have 6 tries to guess the word.
6. If you guess the word correctly, you will see a congratulations message.
7. If you don't guess the word correctly in 6 tries, you will see the correct word revealed.
8. You can view your stats by tapping the "Stats" button.
9. You can share your results with friends by tapping the "Share" button after a game.

## Tech Stack

* React Native
* Expo (optional)
* AsyncStorage (for storing stats)

## Contributing

Pull requests are welcome. Please make sure to follow the coding style guide and write unit tests for your changes.

## License

This project is licensed under the MIT License. See the LICENSE file for more details.


