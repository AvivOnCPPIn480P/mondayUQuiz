export const stringParser = (unparsedString) => {
    const corruptedQuotes = [
      /&quot;/g,
      /&#039;/g,
      /&ldquo;/g,
      /&rdquo;/g,
      /&lrquo/g,
    ];
    const fixedQuote = "'";
    let res = unparsedString;
    corruptedQuotes.forEach((quote) => {
      res = res.replace(quote, fixedQuote);
    });
    return res;
  };
  
  export const shuffle = (array) => {
    let currentIndex = array.length,
      randomIndex;
    while (currentIndex !== 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ];
    }
    return array;
  };