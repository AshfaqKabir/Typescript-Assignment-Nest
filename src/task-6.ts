export const specialCost = (books: number[]): number => {
  let totalCost: number = 0;

  // Count the number of each book in the basket
  const bookCounts: number[] = [];
  for (const book of books) {
    bookCounts[book] = (bookCounts[book] || 0) + 1;
  }

  // Make sets of unique books from all the books in the basket
  const bookSets: number[][] = [];
  while (Object.keys(bookCounts).length > 0) {
    const bookSet: number[] = [];
    for (const book in bookCounts) {
      if (!(bookSet.length === 4 && bookCounts[book] === 1)) {
        bookSet.push(parseInt(book));
        bookCounts[book]--;

        if (bookCounts[book] === 0) {
          delete bookCounts[book];
        }
      }
    }
    bookSets.push(bookSet);
  }

  // Calculate the cost of sets of books

  for (const bookSet of bookSets) {
    const setLength = bookSet.length;
    switch (setLength) {
      case 2:
        totalCost += 2 * (8 - 0.4);
        break;
      case 3:
        totalCost += 3 * (8 - 0.8);
        break;
      case 4:
        totalCost += 4 * (8 - 1.6);
        break;
      case 5:
        totalCost += 5 * (8 - 2);
        break;
      default:
        totalCost += 1 * 8;
        break;
    }
  }

  // returning cost in cent
  return Math.round(totalCost * 100);
};

console.log(`Your total cost is ${specialCost([1, 1, 2, 2, 3, 3, 4, 5])} cent`);
