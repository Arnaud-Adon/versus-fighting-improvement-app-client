import React from "react";
import { Image, StyleSheet, TouchableOpacity } from "react-native";
import { connect } from "react-redux";
import logoutImage from "../../assets/images/functions/logout.png";
import { logout } from "../../lib/state/actions";
import { Colors } from "../../lib/utils/colors";

const Logout = ({ logout }) => {
  const handleOnLogout = () => logout();

  return (
    <TouchableOpacity
      testID="logout"
      style={styles.container}
      onPress={handleOnLogout}
    >
      <Image testID="logout-image" style={styles.image} source={logoutImage} />
    </TouchableOpacity>
  );
};

export default connect(undefined, {
  logout,
})(Logout);

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    flex: 1,
    justifyContent: "center",
    alignItems: "flex-end",
  },
  image: {
    width: 30,
    height: 30,
  },
});
