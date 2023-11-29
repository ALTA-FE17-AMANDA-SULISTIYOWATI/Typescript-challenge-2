function cetakTabelPerkalian(tabel: number): void {
  if (tabel <= 0) {
    console.log("Invalid input")
    return
  }

  for (let i = 1; i <= tabel; i++) {
    let row = ""
    for (let j = 1; j <= tabel; j++) {
      const hasil = i * j
      row += `${hasil}\t`
    }
    console.log(row)
  }
}

cetakTabelPerkalian(9)
cetakTabelPerkalian(10)
