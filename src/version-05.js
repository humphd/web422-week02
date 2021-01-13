// Version 05 uses native ES6 Modules (aka ES Modules or esm), see:
// https://flaviocopes.com/es-modules/
// https://hacks.mozilla.org/2018/03/es-modules-a-cartoon-deep-dive/
// https://blog.sindresorhus.com/get-ready-for-esm-aa53530b3f77

/**
 * Count the number of non-whitespace characters in a line of text
 * 
 * @param {string} line the line of text to be counted
 * @returns {number} the number of non-whitespace characters in the line 
 */
const countChars = (line) => line.replace(/\s*/g, '').length;

/**
 * Convert an Array of lines (strings) to an Array of statistic Objects
 * with both the line itself and a character count.
 * 
 * @param {Array<string>} lines the lines of text to be processed 
 * @returns {Array<Object>} the statistics for each line of text 
 */
const getStatsForLines = (lines) =>
  lines.map((line) =>
    ({
      count: countChars(line),
      line
    })
  );


/**
 * Gets the total number of words for all line statistics in the Array.
 * 
 * @param {Array<Object>} stats the Array of line statistics Objects to be counted 
 * @returns {number} the total of all words across all lines of text 
 */
const getTotalCountForLines = (stats) =>
  stats.reduce((total, curr) => total + curr.count, 0);


/**
 * Get character counts for each line, and the total for the whole string of text.
 * 
 * @param {string} text a piece of text to analyze
 * @returns {Object} 
 */
function charCount(text) {
  // Split the text string on newline characters (Windows or Unix both supported)
  text = text.split(/\r?\n/);
  // Convert the lines of text into an Array of statistics, with 
  const stats = getStatsForLines(text);

  return {
    lines: stats,
    total: getTotalCountForLines(stats),
  };
}

// Export the charCount function as our "default" export on this module
export default charCount;

// Here we can use `import charCount from './version-04.js';` and call call charCount()
// A browser can load this module natively using <script type="module" src="version-05.js"></script>
// In node.js, you either need to add `"type": "module"` to the package.json file or
// name your file with the `.mjs` vs. `.js` filename extension, to indicate it's an
// ES Module vs. a CommonJS Module.  NOTE: this is still a somewhat new workflow..
// 
// Parcel will write code that does what you expect in various module styles:
//
// npm run build-version-05-umd
//
// if (entry.length) {
//   // Expose entry point to Node, AMD or browser globals
//   // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
//   var mainExports = newRequire(entry[entry.length - 1]);

//   // CommonJS
//   if (typeof exports === "object" && typeof module !== "undefined") {
//     module.exports = mainExports;

//   // RequireJS
//   } else if (typeof define === "function" && define.amd) {
//    define(function () {
//      return mainExports;
//    });

//   // <script>
//   } else if (globalName) {
//     this[globalName] = mainExports;
//   }
// }
