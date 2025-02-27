
#### index.js

```javascript
#!/usr/bin/env node

const quotes = [
  "Do not dwell in the past, do not dream of the future, concentrate the mind on the present moment.",
  "A journey of a thousand miles begins with a single step.",
  "Let go of that which does not serve you.",
  "Nature does not hurry, yet everything is accomplished.",
  "Tension is who you think you should be. Relaxation is who you are."
];

function getRandomQuote() {
  return quotes[Math.floor(Math.random() * quotes.length)];
}

console.log("Welcome to Serenity Zen Quotes!");
console.log("Here's a Zen quote for you:");
console.log(getRandomQuote());
