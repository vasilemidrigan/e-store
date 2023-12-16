export function createImageURLs(mainURL, category, productName) {
  const urls = [];
  for (let i = 0; i < 4; i++) {
    urls.push(`${mainURL}/${category}/${productName}/${productName}-${i}.jpg`);
  }
  return urls;
}

export function generateSequenceFrom0ToN(n) {
  let sequence = [];
  for (let i = 1; i <= n; i++) sequence.push(i);

  return sequence;
}
