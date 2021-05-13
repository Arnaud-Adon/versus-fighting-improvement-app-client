import React from "react";
import { StyleSheet, Text, View, Dimensions } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { PREFIX } from "../../lib/utils/helper/contants";
import { Colors } from "../../lib/utils/colors";
import PropTypes from "prop-types";

const Stars = ({ label, level }) => {
  let starNumber = [];
  for (let i = 0; i < 5; i++) {
    i < level
      ? starNumber.push(
          <Ionicons
            testID="star"
            style={styles.star}
            name={`${PREFIX}-star`}
            key={`${label}-${i}`}
          />
        )
      : starNumber.push(
          <Ionicons
            testID="star"
            style={styles.star}
            name={`${PREFIX}-star-outline`}
            key={`${label}-${i}`}
          />
        );
  }
  return starNumber;
};

const SkillBlock = ({ ...props }) => {
  const { label } = props;
  return (
    <View style={styles.starBlock}>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.starContainer}>
        <Stars {...props} />
      </View>
    </View>
  );
};

const Skills = ({ character }) => {
  const { skills } = character;
  return (
    <View testID="skills" style={styles.container}>
      <SkillBlock label="Technique" level={skills?.technical} />
      <SkillBlock label="Portée" level={skills?.scope} />
      <SkillBlock label="Mobilité" level={skills?.mobility} />
      <SkillBlock label="Santé" level={skills?.health} />
      <SkillBlock label="Puissance" level={skills?.power} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
  label: {
    fontSize: 20,
    color: Colors.WHITE,
  },
  starContainer: {
    flexDirection: "row",
  },
  starBlock: {
    justifyContent: "center",
    alignItems: "center",
  },
  star: {
    margin: 8,
    fontSize: 30,
    color: Colors.DARKER_RED,
  },
});

// Skills.propTypes = {
//   character: PropTypes.object.isRequired,
// };

export default Skills;
