import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Dimensions,
  Animated,
  ImageBackground,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import cover from "../assets/images/screen/sf5ce_cover.png";
import Button from "../components/Button/Button";
import { Colors } from "../lib/utils/colors";

const { width } = Dimensions.get("window");

const LoginScreen = () => {
  const navigation = useNavigation();
  const [header] = useState(new Animated.Value(1.5));

  const goTo = (view) => {
    navigation.navigate(view);
  };

  const resizeHeader = () => {
    Animated.timing(header, {
      toValue: 1,
      duration: 2000,
      useNativeDriver: true,
    }).start();
  };

  useEffect(() => {
    resizeHeader();
  }, []);

  return (
    <View style={styles.container} testID="login-screen">
      <Animated.View
        style={{
          width: width,
          backgroundColor: "red",
          borderBottomLeftRadius: 200,
          borderBottomRightRadius: 200,
          height: "55%",
          transform: [
            {
              scaleY: header,
            },
          ],
        }}
      >
        <ImageBackground
          testID="login-screen-image"
          source={cover}
          style={styles.backgroundImage}
          imageStyle={{
            borderBottomLeftRadius: 200,
            borderBottomRightRadius: 200,
          }}
        ></ImageBackground>
      </Animated.View>
      <View>
        <View style={styles.title}>
          <Text testID="login-screen-title" style={styles.textTitle}>
            Improve Versus Fighting
          </Text>
        </View>
        <Button
          testID="signup-button"
          label="S'incrire"
          firstColor={Colors.LIGHTER_RED}
          secondColor={Colors.DARKER_RED}
          onPress={() => goTo("Signup")}
          style={styles.customButton}
        />
        <Button
          testID="signin-button"
          label="Se connecter"
          firstColor={Colors.LIGHTER_BLUE}
          secondColor={Colors.DARKER_BLUE}
          onPress={() => goTo("Signin")}
          style={styles.customButton}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
  },
  backgroundImage: {
    width: width,
    height: "100%",
    opacity: 0.8,
  },
  title: {
    width: width - 80,
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  textTitle: {
    fontFamily: "Poppins",
    textAlign: "center",
    fontSize: 23,
    fontWeight: "bold",
    lineHeight: 50,
  },
  customButton: {
    borderRadius: 20,
  },
});

export default LoginScreen;
