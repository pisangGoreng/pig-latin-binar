function pigLatin(words) {
  const vocalWord = ['a', 'i', 'u', 'e', ' o'];
  // code here
  let newStr = "";

    if (vocalWord.indexOf(words[0]) > -1) {
        return words;
    } else {
        const arr = words.split(' ');
    return arr.map((word) => {
        return word.match(/[aiueo]/i) ?
            `${word.substr(1)}${word.substr(0,1)}ay` : word
    }).join(' ');
}
}

console.log(pigLatin('food')) // ---> oodfay
console.log(pigLatin('snap')) // ---> apsnay
console.log(pigLatin('guide')) // ---> uidegay
console.log(pigLatin('beli makanan')) // ---> elibay akananmay
console.log(pigLatin('apel')) // ---> apel
