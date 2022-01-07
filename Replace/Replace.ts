import * as fs from 'fs';

function getReplace(n: number) {
  fs.open('replace.txt', 'w',  (err) => {
    if(err) throw err;
    console.log('Файл создан');
  });

  let i, j, k, res: number;
  let word = "0";
  let words = [], words_list = [];
  
  for (i = 1; i < n; i++) {
    word += String(0);
  }
  for (i=1; i<=n; i++) {
    word += String(i);
  }
  words_list.push(word);
  fs.appendFile('replace.txt', word, (err) => {
    if(err) throw err;
  });
  words = word.split("");
  k = 0;
  while (k <= 2 * n) {
    for (i = 0; i < words.length; i++) {
      for (j = 0; j < words.length; j++) {
        if (words[i] == words[j]) {
          j += 1;
        }
        else {
          [words[i], words[j]] = [words[j], words[i]]
        }
        word = words.join(''); 
        if (!(words_list.includes(word))) {
          words_list.push(word);
          fs.appendFile('replace.txt', "\n" + word, (err) => {
            if(err) throw err;
          });
        } 
      }
    }
    k += 1
  }

  res = words_list.length;
  fs.readFile('replace.txt', 'utf8',  (err, data) => {
    if(err) throw err;
      const arr = data.toString().split('\n');
      for(let i of arr) {
        continue
      }
  });
  return res;
}


console.log('Количество строк в файле(перестановок) = ', getReplace(5))