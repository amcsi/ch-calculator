import React from "react";
import { StyleProp } from "react-native/Libraries/StyleSheet/StyleSheet";
import { TextStyle } from "react-native/Libraries/StyleSheet/StyleSheetTypes";
import { Text } from "react-native";

export default function FormattedNumber({ style, maximumFractionDigits, value }: Props) {
  const formatter = new Intl.NumberFormat("hu-HU", { maximumFractionDigits });

  return <Text style={style}>{formatter.format(value)}</Text>;
}

type Props = {
  value: number | bigint | `${number}`;
  style: StyleProp<TextStyle>;
  maximumFractionDigits?: number;
};
