function printDiamond(letter: string): void {
  letter = letter.toUpperCase()

  const numRows: number = letter.charCodeAt(0) - "A".charCodeAt(0) + 1

  for (let i = 0; i < numRows; i++) {
    const spaces: string = " ".repeat(numRows - i - 1)
    if (i === 0) {
      console.log(spaces + "A")
    } else {
      const rowContent: string =
        String.fromCharCode("A".charCodeAt(0) + i) +
        " ".repeat(2 * i - 1) +
        String.fromCharCode("A".charCodeAt(0) + i)
      console.log(spaces + rowContent)
    }
  }

  for (let i = numRows - 2; i >= 0; i--) {
    const spaces: string = " ".repeat(numRows - i - 1)
    if (i === 0) {
      console.log(spaces + "A")
    } else {
      const rowContent: string =
        String.fromCharCode("A".charCodeAt(0) + i) +
        " ".repeat(2 * i - 1) +
        String.fromCharCode("A".charCodeAt(0) + i)
      console.log(spaces + rowContent)
    }
  }
}

printDiamond("C")
console.log()
printDiamond("E")
