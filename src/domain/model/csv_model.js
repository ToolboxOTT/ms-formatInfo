'use strict'

class CsvData {
  constructor(file, lines) {
    this.file = file;
    this.lines = lines;
  }
}

class Line {
  constructor(text, number, hex) {
    this.text = text;
    this.number = number;
    this.hex = hex;
  }
}

module.exports = { CsvData, Line };
