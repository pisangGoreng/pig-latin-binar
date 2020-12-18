function pigLatin(words) {
  const vocalWord = ["a","i","u","e","o"];
  // code here
  let splitWords = words.split(" ");

  let newWords = splitWords.map((word) => {
    //jika huruf pertama adalah kata vokal
    if (vocalWord.includes(word.charAt(0))) {
      // lanjut ke word selanjutnya
      return word;
    } else {
      // jika konsonan di taruh ke belakang
      let chars = word.split("");   // hai | apa | kabar => h|a|i
      let newChars = word.split("");

      for (const char of chars) {
        if (!vocalWord.includes(char)) {
          let firstChar = newChars.shift();
          newChars.push(firstChar);
        } else {
          break;
        }
      }
      
      // nambahkan kata ay  pada akhir kata 
      return newChars.join("") + "ay";
    }
  });
  return newWords.join(" ");
}

console.log(pigLatin("food")); // ---> oodfay
console.log(pigLatin("snap")); // ---> apsnay
console.log(pigLatin("guide")); // ---> uidegay
console.log(pigLatin("beli makanan")); // ---> elibay akananmay
console.log(pigLatin("apel")); // ---> apel
