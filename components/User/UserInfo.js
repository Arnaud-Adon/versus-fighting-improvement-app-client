import React, { useState, useEffect } from "react";
import { Image, StyleSheet, Text, View, Dimensions } from "react-native";
import PropTypes from "prop-types";

const UserInfo = ({ user }) => {
  return (
    <View testID="user-info" style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          testID="user-image"
          source={{ uri: user?.path }}
          style={styles.image}
        />
      </View>
      <Text>{user?.username}</Text>
    </View>
  );
};

export default UserInfo;

// UserInfo.propTypes = {
//   user: PropTypes.object.isRequired
// }

const styles = StyleSheet.create({
  container: {},
  image: {},
  imageContainer: {},
});
