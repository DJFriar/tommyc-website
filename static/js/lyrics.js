var lyrics = [
  "The exhibits that are shown, are exclusively my own",
  "Follow me, follow me. I have something to show you",
  "Sometimes it be like that",
  "They say good things come to those who wait, so imma be at least an hour late",
  "We ain’t picture perfect but we worth the picture still",
  "There's a fine line between living a lie and feeling alive",
  "Give me the beat boys and free my soul",
];

function getRandomLyric() {
  var randomNumber = Math.floor(Math.random() * lyrics.length);
  document.getElementById("songlyric").innerHTML = lyrics[randomNumber];
}

// Songs & Artists for the above lyrics
// Karn Evil 9 1st Impression Part 2 by Emerson, Lake & Palmer
// Devil's Train by Lab Rats
// Be Like That by Kane Brown
// Start It Up by Lloyd Banks
// Crooked Smile by J. Cole
// Soundtrack of my Life by Less Than Jake
// Drift Away by Uncle Cracker
//
