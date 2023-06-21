function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
// Генерация случайного цвета
function generateRandomColor() {
  const randomColor = getRandomColor();
  const brightnessThreshold = 128; // Порог яркости, после которого цвет считается светлым

  // Получаем значения RGB компонент цвета
  const red = parseInt(randomColor.substr(1, 2), 16);
  const green = parseInt(randomColor.substr(3, 2), 16);
  const blue = parseInt(randomColor.substr(5, 2), 16);

  // Вычисляем яркость цвета
  const brightness = (red * 299 + green * 587 + blue * 114) / 1000;

  // Если яркость превышает порог, возвращаем черный цвет, иначе возвращаем случайный цвет
  if (brightness > brightnessThreshold) {
    return '#000000'; // Черный цвет
  } else {
    return randomColor;
  }

}


    // Логика игры
    const words = ['солнце', 'район', 'новость', 'факт', 'экзамен', 'прокурор', 'теория', 'хоккей', 'телевизор', 'память', 'восприятие', 'любовь', 'спектакль', 'радость', 'народ', 'гиена', 'репортаж', 'конкурс', 'личность', 'плавание', 'комедия', 'отчаяние', 'лаборатория', 'основание', 'психиатрия']; // Загаданные слова
    const gameBoard = document.querySelector('.game-board');
    const scoreElement = document.getElementById('score');
    const messageElement = document.getElementById('message');
    const clearButton = document.getElementById('clear-button');
    let score = 0;
    let selectedCells = [];
    let guessedWords = [];

    // Генерация игрового поля
    function generateGameBoard() {
      const puzzle = [
        ['б', 'с', 'о', 'л', 'н', 'ц', 'е', 'в', 'т', 'р', 'г', 'щ', 'о', 'ц', 'р', 'а', 'й', 'о', 'н', 'з', 'г', 'у', 'ч', 'н', 'о', 'в', 'о', 'с', 'т', 'ь', 'х', 'э', 'ь', 'г', 'ч', 'я', 'ф', 'а', 'к', 'т', 'у', 'е', 'к', 'э', 'к', 'з', 'а', 'м', 'е', 'н', 'т', 'р', 'о', 'ч'],
        ['в', 'н', 'я', 'г', 'ш', 'г', 'ц', 'к', 'п', 'р', 'о', 'к', 'у', 'р', 'о', 'р', 'г', 'у', 'р', 'с', 'т', 'а', 'б', 'ю', 'е', 'т', 'е', 'о', 'р', 'и', 'я', 'е', 'н', 'т', 'с', 'д', 'ж', 'э', 'б', 'ь', 'а', 'м', 'х', 'о', 'к', 'к', 'е', 'й', 'т', 'р', 'с', 'и', 'ц', 'ы'],
        ['ф', 'ц', 'у', 'й', 'г', 'з', 'х', 'т', 'е', 'л', 'е', 'в', 'и', 'з', 'о', 'р', 'с', 'о', 'л', 'д', 'ж', 'щ', 'з', 'х', 'ю', 'э', 'л', 'г', 'щ', 'ь', 'б', 'а', 'п', 'а', 'м', 'я', 'т', 'ь', 'ш', 'о', 'г', 'х', 'е', 'ю', 'ж', 'п', 'ж', 'д', 'р', 'я', 'г', 'и', 'щ', 'ц'],
        ['х', 'е', 'э', 'н', 'з', 'г', 'д', 'в', 'о', 'с', 'п', 'р', 'и', 'я', 'т', 'и', 'е', 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'щ', 'ш', 'з', 'х', 'ъ', 'в', 'а', 'ф', 'ы', 'а', 'с', 'п', 'р', 'о', 'л', 'д', 'б', 'л', 'ю', 'б', 'о', 'в', 'ь', 'а', 'в', 'ф', 'ы', 'р', 'п', 'л'],
        ['о', 'с', 'ъ', 'н', 'л', 'д', 'с', 'п', 'е', 'к', 'т', 'а', 'к', 'л', 'ь', 'я', 'ч', 'с', 'м', 'в', 'и', 'т', 'ь', 'б', 'ю', 'ж', 'ю', 'е', 'р', 'а', 'д', 'о', 'с', 'т', 'ь', 'в', 'у', 'ф', 'п', 'ц', 'э', 'ж', 'д', 'л', 'о', 'р', 'п', 'к', 'н', 'а', 'р', 'о', 'д', 'ш'],
        ['л', 'д', 'ж', 'ь', 'л', 'х', 'д', 'ш', 'щ', 'г', 'и', 'е', 'н', 'а', 'к', 'у', 'ы', 'ф', 'й', 'ъ', 'ш', 'р', 'е', 'п', 'о', 'р', 'т', 'а', 'ж', 'э', 'ж', 'д', 'о', 'р', 'л', 'а', 'ф', 'ы', 'в', 'ю', 'ф', 'б', 'ь', 'к', 'о', 'н', 'к', 'у', 'р', 'с', 'д', 'о', 'г', 'х'],
        ['о', 'с', 'в', 'ж', 'й', 'ф', 'я', 'ч', 'ы', 'ц', 'у', 'в', 'с', 'к', 'а', 'п', 'р', 'л', 'и', 'ч', 'н', 'о', 'с', 'т', 'ь', 'з', 'х', 'ж', 'э', 'ь', 'е', 'ю', 'д', 'ш', 'щ', 'г', 'л', 'о', 'д', 'ж', 'э', 'п', 'р', 'п', 'л', 'а', 'в', 'а', 'н', 'и', 'е', 'д', 'т', 'л'],
        ['д', 'ы', 'в', 'х', 'э', 'з', 'б', 'ь', 'т', 'р', 'д', 'щ', 'ш', 'ж', 'н', 'п', 'р', 'к', 'ы', 'в', 'к', 'о', 'м', 'е', 'д', 'и', 'я', 'ш', 'л', 'д', 'к', 'ц', 'у', 'й', 'ф', 'ф', 'о', 'т', 'ч', 'а', 'я', 'н', 'и', 'е', 'й', 'ф', 'о', 'я', 'ч', 'в', 'т', 'л', 'д', 'ж'],
        ['ш', 'в', 'ъ', 'х', 'ь', 'а', 'ф', 'т', 'а', 'с', 'е', 'л', 'а', 'б', 'о', 'р', 'а', 'т', 'о', 'р', 'и', 'я', 'г', 'щ', 'д', 'щ', 'н', 'р', 'г', 'ш', 'щ', 'т', 'л', 'р', 'о', 'с', 'н', 'о', 'в', 'а', 'н', 'и', 'е', 'з', 'щ', 'д', 'э', 'в', 'а', 'р', 'з', 'щ', 'д', 'э'],
        ['ф', 'ш', 'н', 'п', 'ж', 'й', 'о', 'п', 'р', 'н', 'ь', 'а', 'к', 'н', 'т', 'а', 'о', 'п', 'р', 'у', 'к', 'г', 'в', 'с', 'м', 'т', 'р', 'п', 'с', 'и', 'х', 'и', 'а', 'т', 'р', 'и', 'я', 'б', 'п', 'л', 'м', 'с', 'т', 'ч', 'ь', 'й', 'с', 'м', 'т', 'з', 'а', 'ц', 'э', 'а']
      ];

      for (let row = 0; row < puzzle.length; row++) {
        for (let col = 0; col < puzzle[row].length; col++) {
          const cell = document.createElement('div');
          cell.classList.add('game-cell');
          cell.innerText = puzzle[row][col];
          cell.addEventListener('click', selectCell);
          gameBoard.appendChild(cell);
        }
      }
    }

    // Обработчик клика по клетке
    function selectCell(event) {
      const cell = event.target;

      if (cell.classList.contains('guessed')) {
        // Клетка уже угадана, ничего не делаем
        return;
      }

      if (cell.classList.contains('selected')) {
        // Убираем выделение с выбранной клетки
        cell.classList.remove('selected');
        selectedCells = selectedCells.filter(selectedCell => selectedCell !== cell);
      } else {
        // Выделяем выбранную клетку
        cell.classList.add('selected');
        selectedCells.push(cell);
      }

      checkSelectedWord();
    }

    // Проверка выбранного слова
    function checkSelectedWord() {
  const selectedWord = selectedCells.map(cell => cell.innerText).join('');
  if (words.includes(selectedWord)) {
    // Слово угадано

    // Сгенерировать случайный цвет
    const randomColor = getRandomColor();

    score += 1;
    scoreElement.innerText = `Очки: ${score}`;
    fetch('filvord?' +  new URLSearchParams({
    url: score}))
    selectedCells.forEach(cell => {
      cell.classList.add('guessed');
      cell.style.backgroundColor = randomColor;
    });
    results[scale] = score;

    guessedWords.push(selectedWord);
    clearSelection();
  } else if (selectedCells.length === 12) {
    // Слово не угадано, но выбраны все клетки
    messageElement.innerText = 'Выбранное слово не совпадает с загаданными словами';
    messageElement.style.color = '#ff0000';
    clearSelection();
  } else {
    // Продолжение выбора слова
    messageElement.innerText = '';
  }
  console.log("Результаты шкал:");
  console.log(results);
}


    // Очистка выделения клеток
    function clearSelection() {
      selectedCells.forEach(cell => cell.classList.remove('selected'));
      selectedCells = [];
    }

    // Очистка игры
    function clearGame() {
      gameBoard.innerHTML = '';
      score = 0;
      scoreElement.innerText = 'Очки: 0';
      messageElement.innerText = '';
      selectedCells = [];
      guessedWords = [];
      wordList.innerHTML = '';
    }

    // Обработчик клика по кнопке очистки выделения
    clearButton.addEventListener('click', clearSelection);

    // Генерация игрового поля
    generateGameBoard();
