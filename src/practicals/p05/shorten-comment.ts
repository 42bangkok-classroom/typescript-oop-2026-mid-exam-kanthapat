let comment = "TypeScript is a strongly typed programming language"

function shortenComment(comment: string): string {
  // Write your code below
  let result = "";
  const text = comment.split(' ');
  for (const item of text) {
    if (item.length >= 5 && item.length <= 10) {
      if (result) {
        result = result + ' ' + item;
      } else {
        result = result + item;
      }
      
    }
  }

  return result;
  // console.log(text[0])
}

// console.log(shortenComment(comment));