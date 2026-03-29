import React from "react";
import { KeyboardAvoidingView, StyleSheet, View } from "react-native";
import { resultText } from "../data/defaultStyles";
import { calculateChInGrams } from "../services/calculators";
import FormInput from "./common/FormInput";
import Text from "./common/Text";
import FormattedNumber from "./FormattedNumber";

/** @class */
class ChToGrams extends React.Component {
  render() {
    const { chPer100G, grams, onChPer100GramChange, onGramsChange } = this.props;
    const chPerMeal = calculateChInGrams(chPer100G, grams);

    const textCenter = { textAlign: "center" };
    return (
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
        <Text style={[resultText, textCenter]}>Hány gramm CH van ebben?</Text>

        <View style={{ height: 30 }} />

        <FormInput
          label="CH/100g"
          keyboardType="numeric"
          selectTextOnFocus
          value={chPer100G ? String(chPer100G) : ""}
          onChangeText={onChPer100GramChange}
          placeholder="CH/100g"
        />

        <FormInput
          label="Súly"
          keyboardType="numeric"
          selectTextOnFocus
          value={grams ? String(grams) : ""}
          onChangeText={onGramsChange}
          placeholder="Súly (g)"
        />

        <Text style={[textCenter, { opacity: grams > 0 ? 1 : 0 }]}>
          <FormattedNumber value={chPerMeal} style={resultText} maximumFractionDigits={1} />
          <Text style={resultText}> </Text>
          <Text style={resultText}>g CH van a lemért összetevőben</Text>
        </Text>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingLeft: "5%",
    paddingRight: "5%",
  },
});

export default ChToGrams;
