import React, { useState, useEffect } from "react";
import { Alert, StyleSheet, Text, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { parseError } from "../../lib/state/actions";

const Error = () => {
  const dispatch = useDispatch();
  const [error, setError] = useState(errorMessage);
  const errorMessage = useSelector((state) => state.error.message);

  useEffect(() => {
    if (errorMessage != "") {
      setError(errorMessage);
    }
  }, [errorMessage]);

  const refreshErrorMessage = () => {
    if (errorMessage != "") {
      setError("");
      dispatch(parseError(""));
    }
  };

  const renderAlert = () => {
    return Alert.alert(
      "",
      error,
      [
        {
          text: "Ok",
          onPress: () => refreshErrorMessage(),
          style: "cancel",
        },
      ],
      { cancelable: false }
    );
  };

  return (
    <View>
      <Text>{error && renderAlert()}</Text>
    </View>
  );
};

export default Error;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-around",
    alignItems: "center",
  },
});
