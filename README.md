# Guess the horse

🎮 **[Play the game here!](https://avoidery.github.io/aiexp/)**

## Overview
This is a simple interactive game built with HTML, CSS, and JavaScript. The game is designed to teach basic programming concepts in a fun and engaging way.

## How to Play
1. The game starts with five squares, each displaying a standing horse image.
2. The player clicks on a square to make their guess.
3. If the guess is correct, the square displays a jumping horse image.
4. If the guess is incorrect, the square displays a resting horse image.
5. After 2 seconds, the game resets, and the player can try again.

## Features
- **Interactive Feedback**: The game provides visual feedback based on the player's guess:
  - Correct guess: The square shows a jumping horse.
  - Incorrect guess: The square shows a resting horse.
- **Cooldown Mechanism**: During the 2-second reset phase, clicking is disabled to prevent multiple guesses.
- **Customizable**: The game can be easily modified by changing the images, styles, or logic.

## File Summary
- **index.html**: Contains the structure of the game, including the squares and instructions.
- **style.css**: Defines the layout and appearance of the game, ensuring squares are displayed in a horizontal row and images are scaled to fit.
- **script.js**: Implements the game logic, including random square selection, click handling, and reset functionality.
- **Images**:
  - `stand.jpg`: The default image for inactive squares.
  - `jump.jpg`: The image displayed for a correct guess.
  - `rest.jpg`: The image displayed for an incorrect guess.

## Educational Value
This game introduces the following programming concepts:
- DOM manipulation: Dynamically updating the content and appearance of elements.
- Event handling: Responding to user interactions like clicks.
- CSS styling: Controlling the layout and appearance of elements.
- Logic and state management: Implementing game rules and managing game states.

Feel free to modify the code to experiment and learn more about how the game works!

## Publishing
This app is automatically published to GitHub Pages via GitHub Actions. Any changes pushed to the `main` branch will be automatically deployed.

### How to enable GitHub Pages (for repository owners):
1. Go to your repository Settings → Pages
2. Under "Build and deployment", set Source to "GitHub Actions"
3. The workflow will automatically deploy the site on the next push to main

The live app will be available at: `https://avoidery.github.io/aiexp/`