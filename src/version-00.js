// Version 00 uses lodash https://lodash.com and older JS syntax.

/**
 * Count the number of non-whitespace characters in a line of text
 * 
 * @param {string} line the line of text to be counted
 * @returns {number} the number of non-whitespace characters in the line 
 */
function countChars(line) {
  return _.replace(line, /\s*/g, '').length;
}

/**
 * Convert an Array of lines (strings) to an Array of statistic Objects
 * with both the line itself and a character count.
 * 
 * @param {Array<string>} lines the lines of text to be processed 
 * @returns {Array<Object>} the statistics for each line of text 
 */
function getStatsForLines(lines) {
  function processLine(line) {
    return {
      count: countChars(line),
      line: line,
    };
  }

  return _.map(lines, processLine);
}

/**
 * Gets the total number of words for all line statistics in the Array.
 * 
 * @param {Array<Object>} stats the Array of line statistics Objects to be counted 
 * @returns {number} the total of all words across all lines of text 
 */
function getTotalCountForLines(stats) {
  var initialValue = 0;

  function updateTotal(total, curr) {
    return total + curr.count;
  }

  return _.reduce(stats, updateTotal, initialValue);
}

/**
 * Get character counts for each line, and the total for the whole string of text.
 * 
 * @param {string} text a piece of text to analyze
 * @returns {Object} 
 */
function charCount(text) {
  // Split the text string on newline characters (Windows or Unix both supported)
  text = _.split(text, /\r?\n/);
  // Convert the lines of text into an Array of statistics, with 
  var stats = getStatsForLines(text);

  return {
    lines: stats,
    total: getTotalCountForLines(stats),
  };
}
