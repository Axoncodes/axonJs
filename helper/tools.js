function exploit(data, regExp) {
  const indexes = [0];
  const ans = [];
  let match;
  // Remove the ',' symbols
  data = data.replace(/,/g, ' ');
  while ((match = regExp.exec(data)) != null) indexes.push(match.index);
  // Add the end of the data if not included
  for (let i = 0; i <= indexes.length; i++) {
    const prev = indexes[i-1<0 ? 0 : i-1];
    const current = indexes[i];
    const result = data.slice(prev, current);
    if (result.trim().length>0) ans.push(result.trim());
  }
  return ans;
}

function removeNulls(mainArr) {
  const validArr = [];
  mainArr.forEach((item) => {
    if (item && typeof item !== 'boolean') validArr.push(item);
  });
  return validArr;
}

module.exports = {
  exploit,
  removeNulls
}