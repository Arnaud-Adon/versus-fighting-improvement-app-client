import React from "react";
import { Image, StyleSheet, TouchableOpacity } from "react-native";
import logoutImage from "../../assets/images/functions/logout.png";
import { useDispatch } from "react-redux";
import { logout } from "../../lib/state/actions";

const Logout = () => {
  const dispatch = useDispatch();
  const { container, imageStyle } = styles;

  const onLogout = () => {
    dispatch(logout());
  };

  return (
    <TouchableOpacity style={container} onPress={onLogout}>
      <Image style={imageStyle} source={logoutImage} />
    </TouchableOpacity>
  );
};

export default Logout;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    flex: 1,
    justifyContent: "center",
    alignItems: "flex-end",
  },
  imageStyle: {
    width: 30,
    height: 30,
  },
});
