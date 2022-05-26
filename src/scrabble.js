class Scrabble {
  // Write your implementation here
  constructor(wordEntry) {
    this.wordEntry = wordEntry
  }

  score() {
    let wordScore = 0
    // const doubleLetterCheck = /\{([^}]+)\}/;
    // let doubleLetterMatch;
    // let tripleLetter = /\[([^]]+)\]/;

    if (this.wordEntry === null) {
      return wordScore
    }

    const letterValue = {
      a: 1,
      b: 3,
      c: 3,
      d: 2,
      e: 1,
      f: 4,
      g: 2,
      h: 4,
      i: 1,
      j: 8,
      k: 5,
      l: 1,
      m: 3,
      n: 1,
      o: 1,
      p: 3,
      q: 10,
      r: 1,
      s: 1,
      t: 1,
      u: 1,
      v: 4,
      w: 4,
      x: 8,
      y: 4,
      z: 10
    }
    // console.log(doubleLetterMatch)

    for (let i = 0; i < this.wordEntry.length; i++) {
      /* TODO add double word and tripple word feature while also not running into the problem where if the first and last letters are double, it does't count the whole word as double... */
      if (this.wordEntry[i] === '{' && this.wordEntry[i + 2] === '}') {
        wordScore += letterValue[this.wordEntry.toLowerCase()[i + 1]] || 0
      } else if (this.wordEntry[i] === '[' && this.wordEntry[i + 2] === ']') {
        wordScore += letterValue[this.wordEntry.toLowerCase()[i + 1]] * 2 || 0
      }
      wordScore += letterValue[this.wordEntry.toLowerCase()[i]] || 0
    }

    return wordScore
  }
}
const scrabble = new Scrabble('Q{U}[i]z')

console.log(scrabble.score())

module.exports = Scrabble
