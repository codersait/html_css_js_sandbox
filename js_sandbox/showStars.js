function showStars(rows) {
  for (let i = 0; i < rows; i++) {
    let result = '';
    for (let j = 0; j <= i; j++) {
      result += '*';
    }
    console.log(result);
  }
}
showStars(5);
