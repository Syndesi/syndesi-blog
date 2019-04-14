import React from 'react';
import TemperatureConversion from "../../lib/conversion/TemperatureConversion.js";
import MathInline from '../MathInline.js';


export default class TemperatureUnit extends React.Component {

  constructor(props){
    super(props);
  }

  valueToKatexString(value){
    var number = "";
    if(value.value.match(/e/i)){
      // number is written in scientific notation
      number = value.value.substr(0, value.value.indexOf('e')).trim();
      number += " \\cdot 10^{" + value.value.substr(value.value.indexOf('e') + 1).replace("+", "").trim() + "}";
    } else {
      // normal number
      number = value.value;
    }
    return (number + " \\space " + value.katexSymbols[0]);
  }

  render(){
    var tc = new TemperatureConversion();
    var converted = tc.convertToAll(this.props.value);
    var primary = converted[tc.primary];
    var original = converted["original"];
    return (
      <span class="unit unit-temperature">
        <span class="unit-converted">
          <MathInline content={this.valueToKatexString(primary)} />
        </span>
        {' '}
        <span class="unit-original">
          <MathInline content={"\\left(" + this.valueToKatexString(original) + "\\right)"} />
        </span>
      </span>
    );
  }
}

TemperatureUnit.defaultProps = {
  value: "10 °C"
};