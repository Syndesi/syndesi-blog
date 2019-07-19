import React from 'react';
import LengthConversion from '../../lib/conversion/LengthConversion.js';
import MathInline from '../MathInline.js';


export default class LengthUnit extends React.Component {

  constructor(props){
    super(props);
  }

  valueToMathInline(value){
    var number = '';
    if(value.value.match(/e/i)){
      // number is written in scientific notation
      number = value.value.substr(0, value.value.indexOf('e')).trim();
      number += ' \\cdot 10^{' + value.value.substr(value.value.indexOf('e') + 1).replace('+', '').trim() + '}';
    } else {
      // normal number
      number = value.value;
    }
    return(
      <MathInline content={number + ' \\space ' + value.katexSymbols[0]} />
    );
  }

  render(){
    var outputUnit = 'm';
    var lc = new LengthConversion();
    var converted = lc.convertToAll(this.props.value);
    var primary = converted[lc.primary];
    var original = converted['original'];
    return (
      <span className="unit unit-temperature">
        <span className="unit-converted">{this.valueToMathInline(primary)}</span>{' '}
        (<span className="unit-original">{this.valueToMathInline(original)}</span>)
      </span>
    );
  }
}

LengthUnit.defaultProps = {
  value: '10 m'
};