import React from 'react';
import {Decimal} from 'decimal.js';


export default class TemperatureUnit extends React.Component {

  constructor(props){
    super(props);
    this.units = {
      kelvin: {
        name: "Kelvin",
        symbols: ["K", "k"],
        convertIntoKelvin: (kelvin) => {return kelvin;},
        convertFromKelvin: (kelvin) => {return kelvin;}
      },
      celcius: {
        name: "Celcius",
        symbols: ["°C", "°c"],
        convertIntoKelvin: (celcius) => {return celcius.add(273.15);},
        convertFromKelvin: (kelvin) => {return kelvin.sub(273.15);}
      },
      fahrenheit: {
        name: "Fahrenheit",
        symbols: ["°F", "°f"],
        convertIntoKelvin: (fahrenheit) => {return fahrenheit.add(459.67).mul(5).div(9);},
        convertFromKelvin: (kelvin) => {return kelvin.mul(1.8).sub(459.67);}
      },
      rankine: {
        name: "Rankine",
        symbols: ["°Ra", "°ra"],
        convertIntoKelvin: (rankine) => {return rankine * (5 / 9);},
        convertFromKelvin: (kelvin) => {return kelvin * 1.8;}
      },
      delisle: {
        name: "Delisle",
        symbols: ["°De", "°de", "°D", "°d"],
        convertIntoKelvin: (delisle) => {return 373.15 - (delisle * (2 / 3));},
        convertFromKelvin: (kelvin) => {return (373.15 - kelvin) * 1.5;}
      },
      reaumur: {
        name: "Réaumur",
        symbols: ["°Re", "°re", "°Ré", "°ré"],
        convertIntoKelvin: (reaumur) => {return (reaumur * 1.25) + 273.15;},
        convertFromKelvin: (kelvin) => {return (kelvin - 273.15) * 0.8;}
      },
      newton: {
        name: "Newton",
        symbols: ["°N", "°n"],
        convertIntoKelvin: (newton) => {return (newton * (100 / 33)) + 273.15;},
        convertFromKelvin: (kelvin) => {return (kelvin - 273.15) * 0.33;}
      },
      romer: {
        name: "Rømer",
        symbols: ["°Rø", "°rø", "°Ro", "°ro"],
        convertIntoKelvin: (romer) => {return (romer - 7.5) * (40 / 21) + 273.15;},
        convertFromKelvin: (kelvin) => {return (kelvin - 273.15) * (21 / 40) + 7.5;}
      },
    };
    this.state = {
      kelvin: 0
    };
  }

  parseInput(inputString, outputUnit, precise = 0){
    var temperatureString = inputString.substr(0, inputString.indexOf(' '));
    var unitString = inputString.substr(inputString.indexOf(' ') + 1);
    var unitInput = null;
    for(var unitKey in this.units){
      if(this.units[unitKey].symbols.includes(unitString)){
        unitInput = this.units[unitKey];
        break;
      }
    }
    if(!unitInput){
      return false;
    }
    var kelvin = unitInput.convertIntoKelvin(parseFloat(temperatureString));
    var outputTemperature = outputUnit.convertFromKelvin(kelvin);
    if(precise === false){
      outputTemperature = outputTemperature.toString();
    } else {
      outputTemperature = outputTemperature.toPrecise(precise);
    }
    var converted = outputTemperature + " " + outputUnit.symbols[0];
    var original = unitInput.convertFromKelvin(kelvin) + " " + unitInput.symbols[0];
    return (
      <span class="unit unit-temperature">
        <span className="unit-converted">{converted}</span>{' '}
        (<span className="unit-original">{original}</span>)
      </span>
    );
  }

  render(){
    var inputString = "18 °C";
    var outputUnit = this.units.fahrenheit;
    var precision = 1;
    var temperatureString = inputString.substr(0, inputString.indexOf(' ')).trim();
    var unitString = inputString.substr(inputString.indexOf(' ') + 1).trim();
    var unitInput = null;
    //for(var unitKey in this.units){
    //  console.log(unitKey);
    //  if(this.units[unitKey].symbols.includes(unitString)){
    //    unitInput = this.units[unitKey];
    //    break;
    //  }
    //}
    //if(!unitInput){
    //  return false;
    //}
    //var kelvin = unitInput.convertIntoKelvin(parseFloat(temperatureString));
    //var outputTemperature = outputUnit.convertFromKelvin(kelvin);
    //if(precision === false){
    //  outputTemperature = outputTemperature.toString();
    //} else {
    //  console.log(outputTemperature);
    //  outputTemperature = outputTemperature.toPrecision(precision);
    //}
    //var converted = outputTemperature + " " + outputUnit.symbols[0];
    //var original = unitInput.convertFromKelvin(kelvin) + " " + unitInput.symbols[0];
    var converted = "converted";
    var original = "original";
    return (
      <span class="unit unit-temperature">
        <span className="unit-converted">{converted}</span>{' '}
        (<span className="unit-original">{original}</span>)
      </span>
    );
  }
}

TemperatureUnit.defaultProps = {
  value: "10°C"
};