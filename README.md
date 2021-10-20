# memory-card-game
A memory card game where the player must select a card that has not been chosen yet.
### [👉LIVE DEMO](https://box-hill.github.io/memory-card-game/)

### 👍 Hooks and lifecycle features
This project makes use of Hooks and lifecycle features.  
When the component (cards) are mounted:  
 * Event listeners (click) are added to each card.
 * Card order is randomised.  
When cards are updated (from player selecting a card):  
 * Before cards are unmounted, event listeners are removed from each card (to prevent duplicate event listeners).
 * Card order is randomised again.
 * Event listeners are added back in.

### 🛠️ Made with
 * React.js
 * Vanilla CSS
 * npm