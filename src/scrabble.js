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

class Scrabble {
  // Write your implementation here
  constructor(wordEntry) {
    this.wordEntry = wordEntry
  }

  getWordMultiplier() {
    /* I had to change the Brackets for a different symbol because I ran into the problem where if the first and last letters are double or triple, the whole word counts as double/triple. */
    const doubleWordCheck =
      this.wordEntry[0] === '+' &&
      this.wordEntry[this.wordEntry.length - 1] === '+'
    const tripleWordCheck =
      this.wordEntry[0] === '*' &&
      this.wordEntry[this.wordEntry.length - 1] === '*'

    if (doubleWordCheck) {
      return 2
    } else if (tripleWordCheck) {
      return 3
    }
    return 1
  }

  score() {
    let wordScore = 0

    if (this.wordEntry === null) {
      return wordScore
    }

    const wordCheck = this.wordEntry.toLowerCase()

    for (let i = 0; i < wordCheck.length; i++) {
      const doubleLetterCheck = wordCheck[i] === '{' && wordCheck[i + 2] === '}'
      const tripleLetterCheck = wordCheck[i] === '[' && wordCheck[i + 2] === ']'

      if (doubleLetterCheck) {
        wordScore += letterValue[wordCheck[i + 1]] || 0
      } else if (tripleLetterCheck) {
        wordScore += letterValue[wordCheck[i + 1]] * 2 || 0
      }
      wordScore += letterValue[wordCheck[i]] || 0
    }

    return wordScore * this.getWordMultiplier()
  }
}
const scrabble = new Scrabble('+{Q}ui{z}+')

console.log(scrabble.score())
console.log('The Word Multiplier is:', scrabble.getWordMultiplier())

module.exports = Scrabble
