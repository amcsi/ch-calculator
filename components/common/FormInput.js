import React from "react";
import { Input } from "react-native-elements";
import defaultTextStyle from "../../data/defaultTextStyle";
import { formInputBorderBottom, placeholderText } from "../../data/colors";

/** @class */
function FormInput({
  containerStyle,
  inputStyle,
  inputContainerStyle,
  placeholderTextColor,
  ...restProps
}) {
  const borderBottomColor = formInputBorderBottom;

  return (
    <Input
      {...restProps}
      containerStyle={containerStyle}
      inputContainerStyle={[{ borderColor: borderBottomColor }, inputContainerStyle]}
      inputStyle={[defaultTextStyle, inputStyle]}
      placeholderTextColor={placeholderTextColor || placeholderText}
      underlineColorAndroid={borderBottomColor}
    />
  );
}

export default FormInput;
