module.exports = arrangement => arrangement.reduce(
  (acc, cur, index) => index === arrangement.length - 1 ? acc : acc + cur.calcTransitionScore(arrangement[index + 1]).total, 0);
