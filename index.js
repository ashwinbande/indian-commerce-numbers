'use strict';
const inWords = function (number, obj) {
  if (obj){
    obj.major_currency = obj.major_currency || 'Rupees';
    obj.minor_currency = obj.minor_currency || 'Paise';
    obj.suffix = obj.suffix || 'Only';
    obj.prefix = obj.prefix || '';
    obj.separator = obj.separator || ',';
    obj.textin = obj.textin || '';
    if (obj.initial === undefined) obj.initial = true;
  }
  else obj = {
    major_currency: 'Rupees',
    minor_currency: 'Paise',
    suffix: 'Only',
    prefix: '',
    separator: ',',
    textin: '',
    initial: true,
  };

  function two_num(number) {
    if (number < 20) {
      switch (number) {
        case 0 :
          return '';
        case 1:
          return 'One';
        case 2:
          return 'Two';
        case 3:
          return 'Three';
        case 4:
          return 'Four';
        case 5:
          return 'Five';
        case 6:
          return 'Six';
        case 7:
          return 'Seven';
        case 8:
          return 'Eight';
        case 9:
          return 'Nine';
        case 10:
          return 'Ten';
        case 11:
          return 'Eleven';
        case 12:
          return 'Twelve';
        case 13:
          return 'Thirteen';
        case 14:
          return 'Fourteen';
        case 15:
          return 'Fifteen';
        case 16:
          return 'Sixteen';
        case 17:
          return 'Seventeen';
        case 18:
          return 'Eighteen';
        case 19:
          return 'Nineteen';
      }
    }
    else {
      let digit_1st = number % 10;
      let text = two_num(digit_1st);
      let digit_10st = (number - (number % 10)) / 10;
      switch (digit_10st) {
        case 2:
          return `Twenty${text !== '' ? ' ' + text : '' }`;
        case 3:
          return `Thirty${text !== '' ? ' ' + text : '' }`;
        case 4:
          return `Fourty${text !== '' ? ' ' + text : '' }`;
        case 5:
          return `Fifty${text !== '' ? ' ' + text : '' }`;
        case 6:
          return `Sixty${text !== '' ? ' ' + text : '' }`;
        case 7:
          return `Seventy${text !== '' ? ' ' + text : '' }`;
        case 8:
          return `Eighty${text !== '' ? ' ' + text : '' }`;
        case 9:
          return `Ninty${text !== '' ? ' ' + text : '' }`;
      }
    }
  }

  number = number.toFixed(2);
  let decimal = (number % 1).toFixed(2);
  number = (number - decimal).toFixed(0);
  let p21 = number % 100;
  let p3 = ((number - (number % 100)) / 100) % 10;
  let p54 = ((number - (number % 1000)) / 1000) % 100;
  let p76 = ((number - (number % 100000)) / 100000) % 100;
  let remaining = (number - (number % 10000000)) / 10000000;
  let text = '';

  if (remaining) text = `${inWords(remaining, {...obj, initial : false})} Crore${obj.separator}`;
  if (p76) text = `${text} ${two_num(p76)} Lakh${obj.separator}`;
  if (p54) text = `${text} ${two_num(p54)} Thousand${obj.separator}`;
  if (p3) text = `${text} ${two_num(p3)} Hundred${obj.separator}`;
  if (p21) text = `${text} ${two_num(p21)}${obj.initial ? '' : obj.separator}`;
  if (obj.initial) text = `${text} ${number > 0 ? obj.major_currency : ''}`;
  if (number > 0 && decimal > 0) text = `${text} And`;
  if (decimal > 0) text = `${text} ${two_num(decimal * 100)} ${obj.minor_currency ? obj.minor_currency : ''}`;
  if (text !== '' && obj.initial === true) text = `${text} ${obj.suffix}`;
  if (obj.initial) text = `${obj.prefix}${text}`;
  if (obj.textin === 'upper') return text.toUpperCase();
  else if (obj.textin === 'lower') return text.toLowerCase();
  else return text;
};
const separate = function (number, obj) {
  if (obj){
    obj.suffix = obj.suffix || '';
    obj.prefix = obj.prefix || '';
    obj.separator = obj.separator || ',';
    obj.format = obj.format || [2, 3];
    obj.decimalSymbol = obj.decimalSymbol || '.';
  }
  else obj = {
    suffix: '',
    prefix: '',
    separator: ',',
    format: [2, 3],
    decimalSymbol: '.',
  };
  number = number.toFixed(2);
  let decimal = (number % 1).toFixed(2);
  number = (number - decimal).toFixed(0).toString().split('').reverse();
  decimal = (decimal * 100) > 9 ?(decimal * 100).toFixed(0).toString() : '0'+ (decimal * 100).toFixed(0).toString();
  let index = obj.format[1];/*?*/
  while (index < number.length) {
    number.splice(index, 0, obj.separator);
    index = index + obj.format[0] + 1;
  }
  return `${obj.prefix}${number.reverse().join('')}${decimal > 0 ? obj.decimalSymbol + decimal : ''}${obj.suffix}`;
};

module.export = { inWords, separate};
