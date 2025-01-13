/* Реализуйте и экспортируйте по умолчанию функцию, которая находит все анаграммы слова. Функция принимает исходное слово и список для проверки (массив), а возвращает массив всех анаграмм. Если в списке слов отсутствуют анаграммы, то возвращается пустой массив. */

const filterAnagrams = (word, wordsList) => {
    const sortedWord = word.split('').sort().join('');
    const anagrams = wordsList.filter(result => {
        return result.split('').sort().join('') === sortedWord;
    });

    return anagrams;
}

/* При работе с цветами часто нужно получить отдельные значения красного, зеленого и синего (RGB) компонентов цвета в десятичной системе исчисления и наоборот. Реализуйте и экспортируйте функции rgbToHex() и hexToRgb(), которые возвращают соответствующие представление цвета. */
// Функция, которая преобразует RGB в HEX
const rgbToHex = (r, g, b) => {
    // Ограничиваем значения от 0 до 255
    r = Math.max(0, Math.min(255, r));
    g = Math.max(0, Math.min(255, g));
    b = Math.max(0, Math.min(255, b));

    // Преобразуем значения в шестнадцатеричный формат и возвращаем строку
    const hex = ((r << 16) + (g << 8) + b)
        .toString(16)
     //   .slice(1)
        .toUpperCase();
    // const hex = r.toString(16) + g.toString(16) + b.toString(16);

    return `#${hex}`;
}

// Функция, которая преобразует HEX в RGB
const hexToRgb = (hex) => {
    // Удаляем символ '#' в начале, если он есть
    hex = hex.replace(/^#/, '');

    // Проверяем длину строки для обработки 3- или 6-значного HEX
    if (hex.length === 3) {
        hex = hex.split('').map((x) => x + x).join('');
    }

    // Преобразуем шестнадцатеричные значения в десятичные RGB
    const bigint = parseInt(hex, 16);
    const r = (bigint >> 16) & 255;
    const g = (bigint >> 8) & 255;
    const b = bigint & 255;

    return { r, g, b };
}

// Экспортируем функции
export { rgbToHex, hexToRgb, filterAnagrams };
