import {Decimal} from 'decimal.js';

export default class TemperatureConversion {

  units = {
    kelvin: {
      name: 'Kelvin',
      symbols: ['K', 'k'],
      katexSymbols: ['\\text{K}'],
      convertIntoPrimary: (kelvin) => {return kelvin;},
      convertFromPrimary: (kelvin) => {return kelvin;}
    },
    celcius: {
      name: 'Celcius',
      symbols: ['°C', '°c'],
      katexSymbols: ['\\text{°C}'],
      convertIntoPrimary: (celcius) => {return celcius.add(273.15);},
      convertFromPrimary: (kelvin) => {return kelvin.sub(273.15);}
    },
    fahrenheit: {
      name: 'Fahrenheit',
      symbols: ['°F', '°f'],
      katexSymbols: ['\\text{°F}'],
      convertIntoPrimary: (fahrenheit) => {return fahrenheit.add(459.67).mul(5).div(9);},
      convertFromPrimary: (kelvin) => {return kelvin.mul(1.8).sub(459.67);}
    },
    rankine: {
      name: 'Rankine',
      symbols: ['°Ra', '°ra'],
      katexSymbols: ['\\text{°Ra}'],
      convertIntoPrimary: (rankine) => {return rankine.mul(5).div(9);},
      convertFromPrimary: (kelvin) => {return kelvin.mul(1.8);}
    },
    delisle: {
      name: 'Delisle',
      symbols: ['°De', '°de', '°D', '°d'],
      katexSymbols: ['\\text{°De}'],
      convertIntoPrimary: (delisle) => {return delisle.mul(-2).div(3).add(373.15);},
      convertFromPrimary: (kelvin) => {return kelvin.mul(-1).add(373.15).mul(1.5);}
    },
    reaumur: {
      name: 'Réaumur',
      symbols: ['°Ré', '°ré', '°Re', '°re'],
      katexSymbols: ['\\text{°Ré}'],
      convertIntoPrimary: (reaumur) => {return reaumur.mul(1.25).add(273.15);},
      convertFromPrimary: (kelvin) => {return kelvin.sub(273.15).mul(0.8);}
    },
    newton: {
      name: 'Newton',
      symbols: ['°N', '°n'],
      katexSymbols: ['\\text{°N}'],
      convertIntoPrimary: (newton) => {return newton.mul(100).div(33).add(273.15);},
      convertFromPrimary: (kelvin) => {return kelvin.sub(273.15).mul(0.33);}
    },
    romer: {
      name: 'Rømer',
      symbols: ['°Rø', '°rø', '°Ro', '°ro'],
      katexSymbols: ['\\text{°Rø}'],
      convertIntoPrimary: (romer) => {return romer.sub(7.5).mul(40).div(21).add(273.15);},
      convertFromPrimary: (kelvin) => {return kelvin.sub(273.15).mul(21).div(40).add(7.5);}
    },
  };

  primary = 'celcius';

  getUnitFromSymbol(symbol){
    for(var unitKey in this.units){
      if(this.units[unitKey].symbols.includes(symbol)){
        return this.units[unitKey];
      }
    }
    return false;
  }

  getUnitKeyFromSymbol(symbol){
    for(var unitKey in this.units){
      if(this.units[unitKey].symbols.includes(symbol)){
        return unitKey;
      }
    }
    return false;
  }

  convertToAll(inputString, minPrecision = 3){
    var inputNumber = new Decimal(inputString.substr(0, inputString.indexOf(' ')).trim());
    var inputUnit = this.getUnitFromSymbol(inputString.substr(inputString.indexOf(' ') + 1).trim());
    if(!inputUnit){
      throw new Exception('unit not found exception');
    }
    var inputPrecision = inputNumber.precision(true);
    if(minPrecision === null || minPrecision === false || minPrecision < inputPrecision){
      minPrecision = inputPrecision;
    }
    var primaryNumber = inputUnit.convertIntoPrimary(inputNumber);
    var result = {};
    for(var unitKey in this.units){
      if(this.units[unitKey].name == inputUnit.name){
        result['original'] = {
          ...this.units[unitKey],
          value: this.units[unitKey].convertFromPrimary(primaryNumber).toPrecision(minPrecision)
        };
      }
      result[unitKey] = {
        ...this.units[unitKey],
        value: this.units[unitKey].convertFromPrimary(primaryNumber).toPrecision(minPrecision)
      };
    }
    return result;
  }

  convert(inputString, outputFormat, minPrecision = 3){
    var inputNumber = new Decimal(inputString.substr(0, inputString.indexOf(' ')).trim());
    var inputUnit = this.getUnitFromSymbol(inputString.substr(inputString.indexOf(' ') + 1).trim());
    var outputUnit = this.getUnitFromSymbol(outputFormat);
    if(!inputUnit || !outputUnit){
      throw new Exception('unit not found exception');
    }
    var inputPrecision = inputNumber.precision(true);
    if(minPrecision === null || minPrecision === false || minPrecision < inputPrecision){
      minPrecision = inputPrecision;
    }
    var primaryNumber = inputUnit.convertIntoPrimary(inputNumber);
    var output = outputUnit.convertFromPrimary(primaryNumber);
    return output.toPrecision(minPrecision) + ' ' + outputUnit.symbols[0];
  }

}