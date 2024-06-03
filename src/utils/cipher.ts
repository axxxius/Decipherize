const russianLetters = 'абвгдежзийклмнопрстуфхцчшщъыьэюя'.split('');
const englishLetters = 'abcdefghijklmnopqrstuvwxyz'.split('');

const lettersFrequency: Record<string, number> = {
  а: 0.062,
  б: 0.014,
  в: 0.036,
  г: 0.013,
  д: 0.025,
  е: 0.072,
  ж: 0.007,
  з: 0.016,
  и: 0.062,
  й: 0.01,
  к: 0.028,
  л: 0.035,
  м: 0.026,
  н: 0.053,
  о: 0.09,
  п: 0.023,
  р: 0.04,
  с: 0.045,
  т: 0.053,
  у: 0.021,
  ф: 0.002,
  х: 0.009,
  ц: 0.003,
  ч: 0.012,
  ш: 0.006,
  щ: 0.003,
  ъ: 0.014,
  ы: 0.016,
  ь: 0.014,
  э: 0.003,
  ю: 0.006,
  я: 0.018
};

export const caesarCipher = (message: string, offset: number, encrypt: boolean): string => {
  let result = '';
  let dictionary = russianLetters;
  let dictionaryLength = dictionary.length;

  message = message.replace(/[ёЁ]/g, 'е').toLowerCase();

  for (let i = 0; i < message.length; i++) {
    const symbol = message[i];

    if (russianLetters.includes(symbol)) {
      dictionary = russianLetters;
      dictionaryLength = dictionary.length;
    } else if (englishLetters.includes(symbol)) {
      dictionary = englishLetters;
      dictionaryLength = dictionary.length;
    }

    const index = dictionary.indexOf(symbol);
    if (index !== -1) {
      const newIndex = encrypt
        ? (index + offset + dictionaryLength) % dictionaryLength
        : (index - offset + dictionaryLength) % dictionaryLength;
      result += dictionary[newIndex].toUpperCase();
    } else {
      result += symbol.toUpperCase();
    }

    if (i % 5 === 0) {
      result += ' ';
    }
  }

  return result.trim();
};

export const hackCaesarCipher = (
  message: string
): { decryptedMessage: string; foundKey: number } => {
  const inputLettersAmount = russianLetters.reduce(
    (acc, letter) => {
      acc[letter] = 0;
      return acc;
    },
    {} as Record<string, number>
  );

  message = message.replace(/[ёЁ]/g, 'е').toLowerCase();

  for (const letter of message) {
    if (Object.prototype.hasOwnProperty.call(inputLettersAmount, letter)) {
      inputLettersAmount[letter]++;
    }
  }

  const messageLength = message.length;
  const frequency = russianLetters.map((letter) => inputLettersAmount[letter] / messageLength);

  let minValue = Number.MAX_VALUE;
  let offset = 0;

  for (let i = 0; i < frequency.length; i++) {
    let sum = 0;
    for (let j = 0; j < frequency.length; j++) {
      const actualFreq = lettersFrequency[russianLetters[j]] || 0;
      const shiftedFreq = frequency[(j + i) % frequency.length];
      sum += Math.pow(actualFreq - shiftedFreq, 2);
    }

    if (sum < minValue) {
      minValue = sum;
      offset = i;
    }
  }

  const decryptedMessage = caesarCipher(message, offset, false);
  return { decryptedMessage, foundKey: offset };
};
