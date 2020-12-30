var lyrics = [
  "the exhibits that are shown, are exclusively my own",
  "follow me, follow me. I have something to show you",
  "sometimes it be like that",
];

function getRandomLyric() {
  var randomNumber = Math.floor(Math.random() * lyrics.length);
  document.getElementById("songlyric").innerHTML = lyrics[randomNumber];
}
