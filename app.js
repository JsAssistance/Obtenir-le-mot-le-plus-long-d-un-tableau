function longestWord(str) {

    let splitStr = str.split(' ');

    let array = [];

    for (let i = 0; i < splitStr.length; i++) {
        array.push(splitStr[i].length)
    }
    console.log(Math.max(...array))
}


let string = 'LE MOT LE PLUS LONG EST LONNNNNNNNNNNGGGGGGGGG';

longestWord(string);



































// function longestWord(srt) {

//     let splitSrt = srt.split(' ');

//     let array = [];

//     for (let i = 0; i < splitSrt.length; i++) {
//         array.push(splitSrt[i].length)

//     }
//     console.log(Math.max(...array));

// }

// let string = 'chaineleoneoneoneon';

// longestWord(string);






























