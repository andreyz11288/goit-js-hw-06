function formatString(string, maxLength = 40) {
  // Write code under this line
  let str = '';
  str = string.split('');
  let word = '';
  if (str.length < maxLength) {
    word = str.join('');
  } else {
    let str1 = str.slice(0, maxLength);
    word = `${str1.join('')}...`;
  }
  return word;
}

console.log(formatString('Curabitur ligula sapien, tincidunt non.'));
// 'Curabitur ligula sapien, tincidunt non.'

console.log(formatString('Vestibulum facilisis, purus nec pulvinar iaculis.'));
// 'Vestibulum facilisis, purus nec pulvinar...'

console.log(
  formatString('Vestibulum facilisis, purus nec pulvinar iaculis.', 30),
);
// 'Vestibulum facilisis, purus ne...'
