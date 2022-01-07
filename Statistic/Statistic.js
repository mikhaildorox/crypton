function getStatistics(marks) {
    var i, k, name, mark, result;
    var highest, lowest, middle;
    var name_low = [], name_high = [];
    middle = 0;
    lowest = marks[0].avgMark;
    highest = marks[1].avgMark;
    k = 0;
    for (i in marks) {
        mark = marks[i].avgMark;
        if (mark > highest) {
            highest = mark;
        }
        else if (mark < lowest) {
            lowest = mark;
        }
    }
    for (i in marks) {
        mark = marks[i].avgMark;
        middle = middle + mark;
        name = marks[i].name;
        if (mark > highest) {
            highest = mark;
            name_high.push(name);
        }
        else if (mark < lowest) {
            lowest = mark;
            name_low.push(name);
        }
        else {
            if (mark == highest) {
                name_high.push(name);
            }
            else if (mark == lowest) {
                name_low.push(name);
            }
        }
    }
    middle = middle / marks.length;
    result = { avgMark: middle.toFixed(2), highestMark: name_high + ' have mark: ' + highest, lowestMark: name_low + ' have mark: ' + lowest };
    return result;
}
var testMarks = [{
        name: 'Vasya',
        avgMark: 3.75
    }, {
        name: 'Lena',
        avgMark: 4.89
    }];
console.log(getStatistics(testMarks));
