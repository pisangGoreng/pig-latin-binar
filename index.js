const vowels = ["a", "i", "o", "u", "e"];
const ending = "ay";
function pigLatin(input) {
  const output = input.toLowerCase().split(" ").map((word) => {
      if (vowels.includes(word[0])) { //Jika huruf pertama vowels, maka do nothing
        return input;
      }
      let consonantsPrefix = ""; //iterasi setiap element dalam array
      for (let i = 0; i < word.length; i++) {
        const char = word[i];
        if (vowels.includes(char)) {
          break;
        }
        consonantsPrefix += char;
      }
      // return (word.substring(consonantsPrefix.length) + consonantsPrefix + ending);
         return `${word.substring(consonantsPrefix.length)}${consonantsPrefix}${ending}`
    })
    .join(" "); //gabungkan lagi array menjadi satu kalimat
  return output;
};

console.log(pigLatin("food")) //oodfay
console.log(pigLatin("Snap")) //apsnay
console.log(pigLatin("guide")) //uidegay
console.log(pigLatin("beli makanan")) //elibay akananmay
console.log(pigLatin("apel")) //apel