"use strict";
exports.__esModule = true;
var fs = require("fs");
function getReplace(n) {
    var _a;
    fs.open('replace.txt', 'w', function (err) {
        if (err)
            throw err;
        console.log('Файл создан');
    });
    var i, j, k, res;
    var word = "0";
    var words = [], words_list = [];
    for (i = 1; i < n; i++) {
        word += String(0);
    }
    for (i = 1; i <= n; i++) {
        word += String(i);
    }
    words_list.push(word);
    fs.appendFile('replace.txt', word, function (err) {
        if (err)
            throw err;
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
                    _a = [words[j], words[i]], words[i] = _a[0], words[j] = _a[1];
                }
                word = words.join('');
                if (!(words_list.includes(word))) {
                    words_list.push(word);
                    fs.appendFile('replace.txt', "\n" + word, function (err) {
                        if (err)
                            throw err;
                    });
                }
            }
        }
        k += 1;
    }
    res = words_list.length;
    fs.readFile('replace.txt', 'utf8', function (err, data) {
        if (err)
            throw err;
        var arr = data.toString().split('\n');
        for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
            var i_1 = arr_1[_i];
            continue;
        }
    });
    return res;
}
console.log('Количество строк в файле(перестановок) = ', getReplace(5));
