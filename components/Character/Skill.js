import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Star from "./Star";

const Skill = ({ skills }) => {
  const renderSkillsCharacter = ({
    health,
    mobility,
    power,
    scope,
    technical,
  }) => {
    return (
      <View>
        <Star title={"Puissance"} number={power} />
        <Star title={"Santé"} number={health} />
        <Star title={"Mobilité"} number={mobility} />
        <Star title={"Technique"} number={technical} />
        <Star title={"Portée"} number={scope} />
      </View>
    );
  };

  return <View>{renderSkillsCharacter(skills)}</View>;
};

export default Skill;
