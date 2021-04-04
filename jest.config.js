module.exports = {
  preset: "jest-expo",
  setupFilesAfterEnv: ["<rootDir>setupTests.js"],
  transformIgnorePatterns: [
    "node_modules/(?!(jest-)?react-native|react-clone-referenced-element|@react-native-community|expo(nent)?|@expo(nent)?/.*|react-navigation|@react-navigation/.*|@unimodules/.*|unimodules|sentry-expo|native-base|@sentry/.*)",
  ],
  automock: false,
  moduleDirectories: ["node_modules", "test-utils", __dirname],
};
