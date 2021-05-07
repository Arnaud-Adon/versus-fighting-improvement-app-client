import "react-native-gesture-handler/jestSetup";
import "@testing-library/jest-native/extend-expect";
import mockAsyncStorage from "@react-native-async-storage/async-storage/jest/async-storage-mock";
jest.mock("@react-native-async-storage/async-storage", () => mockAsyncStorage);
jest.mock("react-native/Libraries/Animated/src/NativeAnimatedHelper");

jest.mock("react-native-reanimated", () => {
  const Reanimated = require("react-native-reanimated");
  Reanimated.default.call = () => {};
  return Reanimated;
});
