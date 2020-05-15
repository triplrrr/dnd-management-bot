function shuffle(array) {
  array.sort(() => Math.random() > 0.5);
}

exports.shuffle = shuffle;
