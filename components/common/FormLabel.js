import React from "react";
import { Text } from "react-native-elements";
import defaultTextStyle from "../../data/defaultTextStyle";

/**
 * Form label with some styles on it already.
 *
 * @class
 **/
function FormLabel({ labelStyle, ...restProps }) {
  return <Text style={[defaultTextStyle, labelStyle]} {...restProps} />;
}

export default FormLabel;
