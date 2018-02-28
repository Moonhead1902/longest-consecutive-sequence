module.exports = function longestConsecutiveLength(array) {
  var presentScore = 1;
  var theLongestScore = 0;

  array.sort(function(a, b) {
    return a - b;
  });
  for (var i = 0; i < array.length; i++) {
    if (i !== 0 && array[i] === array[i - 1] + 1) {
      presentScore++;
    } else if (array[i] !== array[i - 1] + 1) {
      if (array[i] === array[i - 1]) {
//nothing here ^_^
      } else if (presentScore > theLongestScore) {
        theLongestScore = presentScore;
        presentScore = 1;
      } else {
        presentScore = 1;
      }
    }
  }
  return theLongestScore;
}
