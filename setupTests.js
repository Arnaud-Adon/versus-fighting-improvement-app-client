import "react-native";
import "react-native-gesture-handler/jestSetup";
import MockAsyncStorage from "mock-async-storage";
const mockImpl = new MockAsyncStorage();
jest.mock("@react-native-async-storage/async-storage", () => mockImpl);

jest.mock("react-native/Libraries/Animated/src/NativeAnimatedHelper");

// jest.mock("react-native-reanimated", () => {
//   const Reanimated = require("react-native-reanimated");
//   Reanimated.default.call = () => {};
//   return Reanimated;
// });
