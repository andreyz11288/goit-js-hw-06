// Write code under this line
class StringBuilder {
  constructor(value) {
    this._value = value;
  }
  get value() {
    return String(this._value);
  }
  append(newValue) {
    // this._value = this._value + newValue;
    return (this._value = this._value + newValue);
  }
  prepend(newValue) {
    // this._value = newValue + this._value;
    return (this._value = newValue + this._value);
  }
  pad(newValue) {
    // this._value = this.prepend(newValue) + this.append(newValue);
    return this.prepend(newValue) + this.append(newValue);
  }
}
console.log(typeof StringBuilder);
// 'function'

const builder = new StringBuilder('.');

builder.append('^');
console.log(builder.value); // '.^'

builder.prepend('^');
console.log(builder.value); // '^.^'

builder.pad('=');
console.log(builder.value); // '=^.^='
// Напиши класс StringBuilder.На вход он получает один параметр - строку, которую записывает в свойство _value.

// Добавь классу следующий функционал:

// Геттер value - возвращает текущее значение поля _value
// Метод append(str) - получает параметр str(строку) и добавляет ее в конец _value
// Метод prepend(str) - получает параметр str(строку) и добавляет ее в начало value
// Метод pad(str) - получает параметр str(строку) и добавляет ее в начало и в конец _value
// Метод pad должен использовать методы append и prepend
