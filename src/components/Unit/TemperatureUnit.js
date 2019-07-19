import React from 'react';
import TemperatureConversion from '../../lib/conversion/TemperatureConversion.js';
import MathInline from '../MathInline.js';
import Tooltip from 'rc-tooltip';


export default class TemperatureUnit extends React.Component {

  constructor(props){
    super(props);
  }

  valueToKatexString(value){
    var number = '';
    if(value.value.match(/e/i)){
      // number is written in scientific notation
      number = value.value.substr(0, value.value.indexOf('e')).trim();
      number += ' \\cdot 10^{' + value.value.substr(value.value.indexOf('e') + 1).replace('+', '').trim() + '}';
    } else {
      // normal number
      number = value.value;
    }
    return (number + ' \\space ' + value.katexSymbols[0]);
  }

  generateTooltip(values){
    var lines = [];
    for(var key in values){
      if(key == 'original'){
        continue;
      }
      lines.push(
        <div className="row layout-equal-spaced" key={values[key].name}>
          <p>{values[key].name + ':'}</p>
          <p className="ml-3"><MathInline content={this.valueToKatexString(values[key])} /></p>
        </div>
      );
    }
    return (
      <div className="unit-hover">
        {lines}
      </div>
    );
  }

  render(){
    var tc = new TemperatureConversion();
    var converted = tc.convertToAll(this.props.value);
    var primary = converted[tc.primary];
    var original = converted['original'];
    var tooltip = this.generateTooltip(converted);
    return (
      <Tooltip placement="bottom" overlay={tooltip}>
        <span className="unit unit-temperature">
          <span className="unit-converted">
            <MathInline content={this.valueToKatexString(primary)} />
          </span>
          {' '}
          <span className="unit-original">
            <MathInline content={'\\left(' + this.valueToKatexString(original) + '\\right)'} />
          </span>
        </span>
      </Tooltip>
    );
  }
}

TemperatureUnit.defaultProps = {
  value: '10 °C'
};