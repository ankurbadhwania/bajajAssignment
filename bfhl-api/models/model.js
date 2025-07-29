const userData = {
  user_id: "john_doe_17091999",
  email: "john@xyz.com",
  roll_number: "ABCD123",
};

function checkAlphabet(ch) {
    return (ch >= 'A' && ch <= 'Z') || (ch >= 'a' && ch <= 'z');
}

function isNum(x) {
    return Number(x) == x;
}

function result(arr) {
    let even = [];
    let odd = [];
    let alpha = [];
    let special = [];
    let sum = 0;
    let letters = "";

    for (let i = 0; i < arr.length; i++) {
        let item = arr[i];

        if (isNum(item)) {
            let num = parseInt(item);
            sum += num;
            if (num % 2 === 0) {
                even.push(item);
            } else {
                odd.push(item);
            }
        } else if (checkAlphabet(item)) {
            alpha.push(item.toUpperCase());
            letters += item;
        } else {
            special.push(item);
        }
    }

    let reversed = letters.split("").reverse();
    let finalStr = "";
    for (let i = 0; i < reversed.length; i++) {
        if (i % 2 === 0) {
            finalStr += reversed[i].toUpperCase();
        } else {
            finalStr += reversed[i].toLowerCase();
        }
    }

    return {
        user_id: "john_doe_17091999",
        email: "john@xyz.com",
        roll_number: "ABCD123",
        odd_numbers: odd,
        even_numbers: even,
        alphabets: alpha,
        special_characters: special,
        sum: sum.toString(),
        concat_string: finalStr
    };
}

module.exports = result;
