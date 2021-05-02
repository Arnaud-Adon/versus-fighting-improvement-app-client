import React from "react";
import { TextInput } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import { Picker, PickerIOS } from "@react-native-community/picker";
import moment from "moment";

export const Input = ({ onChangeText, style, ...others }) => {
  return <TextInput {...others} style={style} onChangeText={onChangeText()} />;
};

export const DateInput = ({ onChange, style, value, ...others }) => {
  return (
    <DateTimePicker
      {...others}
      style={style}
      mode={"date"}
      is24Hour={true}
      display="default"
      focusable={true}
      locale="fr"
      onChange={(event, value) => onChange()(value)}
      value={value}
    />
  );
};

export const PickerInput = ({
  device,
  onChange,
  countries,
  style,
  selectedValue,
  ...others
}) => {
  return device === "ios" ? (
    <PickerIOS
      {...others}
      selectedValue={selectedValue}
      style={style}
      onValueChange={(itemValue, itemIndex) => onChange()(itemValue)}
      mode={"dialog"}
    >
      {countries.length > 0 &&
        countries.map((country, index) => {
          const { name } = country;
          return <PickerIOS.Item key={index} label={name} value={name} />;
        })}
    </PickerIOS>
  ) : (
    <Picker
      {...others}
      selectedValue={selectedValue}
      style={style}
      onValueChange={onChange()}
      mode={"dialog"}
    >
      {countries.length > 0 &&
        countries.map((country, index) => {
          const { name } = country;
          return <PickerIOS.Item key={index} label={name} value={name} />;
        })}
    </Picker>
  );
};
