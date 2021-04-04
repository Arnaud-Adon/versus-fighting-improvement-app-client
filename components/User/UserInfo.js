import React, { useState, useEffect } from "react";
import { Image, StyleSheet, Text, View, Dimensions } from "react-native";
import PropTypes from "prop-types";

const { width } = Dimensions.get("window");

const UserInfo = ({ username, imageId }) => {
  const { container, imageContainer, imageStyle, usernameStyle } = styles;

  return (
    <View style={container}>
      <View style={imageContainer}>
        <Image style={imageStyle} />
      </View>
      <View>
        {username ? (
          <Text style={usernameStyle}>{username}</Text>
        ) : (
          <Text style={usernameStyle}>Pas de pseudo</Text>
        )}
      </View>
    </View>
  );
};

UserInfo.propTypes = {
  username: PropTypes.string.isRequired,
  //   imageId: PropTypes.string.isRequired,
};

export default UserInfo;

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
    paddingHorizontal: 10,
    width,
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  imageContainer: {
    marginHorizontal: 10,
    width: 50,
    height: 50,
    borderWidth: 1,
    borderRadius: 50,
    borderColor: "#979797",
  },
  usernameStyle: {
    fontSize: 15,
    fontWeight: "500",
    lineHeight: 20,
  },
  imageStyle: {},
});
