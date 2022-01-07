"use strict";
function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //Максимум и минимум включаются
}
function insert_sort(arr) {
    let i, cursor, pos;
    for (i = 0; i < arr.length; i++) {
        cursor = arr[i];
        pos = i;
        while (pos > 0 && arr[pos - 1] > cursor) {
            arr[pos] = arr[pos - 1];
            pos = pos - 1;
        }
        arr[pos] = cursor;
    }
    return arr;
}
let n = Number(prompt("Введите длину массива:  "));
let mass = [], mass0 = [], mass1 = [], mass2 = [];
for (let i = 0; i < n; i++) {
    mass.push(getRandomIntInclusive(0, 9));
}
for (let el of mass) {
    if ((el % 2 != 0) && (el != 9) || (el == 2)) {
        mass0.push(el);
    }
    else if (el == 8) {
        mass2.push(el);
    }
    else {
        mass1.push(el);
    }
}
insert_sort(mass0);
insert_sort(mass1);
insert_sort(mass2);
console.log(mass0.concat(mass1, mass2));
