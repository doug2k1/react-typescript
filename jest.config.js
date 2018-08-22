module.exports = {
  transform: {
    "^.+\\.(j|t)sx?$": "babel-jest"
  },
  testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$",
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
  setupTestFrameworkScriptFile: "./test/setup-test-env.js"
};
