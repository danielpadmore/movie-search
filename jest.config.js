module.exports = {
  clearMocks: true,
  verbose: true,
  roots: ["<rootDir>/test"],
  transform: {
    "^.+\\.ts$": "ts-jest",
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
      "<rootDir>/test/utils/fileTransformer.js"
  },
  moduleNameMapper: {
    "\\.(css|scss)$": "identity-obj-proxy"
  },
  testRegex: ".test.ts(x)$",
  moduleFileExtensions: ["js", "ts", "tsx"],
  collectCoverage: true,
  coverageReporters: ["text", "html", "lcov"],
  preset: "ts-jest"
};
