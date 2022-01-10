# Project 1: The Batgame

## Brief

Design a simple grid-based game using the JavaScript, HTML, and CSS knowledge learned in the first three weeks of the course. The project should be working and playable, involving basic game logic such as winning, losing, and scoring points.

Choices included: space invaders, battleships, frogger, and snake.

## Deployment

Please follow this link to play The Batgame: https://ideens.github.io/platform-game/

The link to the game repository: https://github.com/ideens/platform-game

## Introduction

The Batgame was my first big solo project coding in JavaScript, but given that I have had some experience in the past, I decided to push the boundaries of the brief and create a platform game.

Platform games are a subgenre of action games that involve the player navigating to an end-goal through multiple levels and environments.. Although it would be possible to create such a game using grid-based logic, I instead endeavoured to use HTML5 Canvas to render my game.

Given that Canvas had not been taught in the first three weeks of the course, this project required a great deal of research and extracurricular learning.

## Technologies

- JavaScript, HTML5 Canvas, HTML, CSS
- VSCode
- Git, GitHub
- Firefox Developer Edition
- Adobe Illustrator, Photoshop

## Process

### Movement and Collision Detection

The first step was to implement the player's movement through key presses. To start, I just used a simple rectangle for the player and later moved onto using a sprite sheet. I implemented movement in the right, left, and upwards direction using event listeners on the arrow keys and space bar. I then created several canvas rectangles to act as platforms in order to calculate and test the detection of collisions between them and the player.
