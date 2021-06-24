import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import PropTypes from "prop-types";

const UserImage = ({ isVisible, user }) => {
  return isVisible ? (
    <Image
      testID="user-image"
      source={{ uri: user?.path }}
      style={styles.image}
    />
  ) : (
    <View testID="no-image" style={styles.noImage}>
      <Text style={styles.noImageLetter}>
        {user?.username.charAt(0).toUpperCase()}
      </Text>
    </View>
  );
};

const UserInfo = ({ user }) => {
  return (
    <View testID="user-info" style={styles.container}>
      <View style={styles.imageContainer}>
        <UserImage isVisible={!!user.path} user={user} />
      </View>
      <Text testID="user-username">{user.username}</Text>
    </View>
  );
};

export default UserInfo;

UserInfo.propTypes = {
  user: PropTypes.object.isRequired,
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
    paddingRight: 20,
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    borderBottomWidth: 1,
  },
  image: {
    width: 50,
    height: 50,
  },
  noImage: {
    alignSelf: "center",
  },
  noImageLetter: {
    fontSize: 40,
    fontWeight: "bold",
  },
  imageContainer: {
    marginHorizontal: 10,
    height: 50,
    width: 50,
    borderWidth: 1,
    borderRadius: 30,
  },
});
