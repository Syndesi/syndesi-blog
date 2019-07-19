import {Decimal} from 'decimal.js';

export default class LengthConversion {

  units = {
    meter: {
      name: 'Meter',
      symbols: ['m'],
      katexSymbols: ['\\text{m}'],
      convertIntoPrimary: (meter) => {return meter;},
      convertFromPrimary: (meter) => {return meter;}
    },
    parsec: {
      name: 'Parsec',
      symbols: ['pc'],
      katexSymbols: ['\\text{pc}'],
      convertIntoPrimary: (parsec) => {return parsec.mul(3.0856776e16);},
      convertFromPrimary: (meter) => {return meter.div(3.0856776e16);}
    },
    lightyear: {
      name: 'Lightyear',
      symbols: ['ly', 'lyr'],
      katexSymbols: ['\\text{ly}'],
      convertIntoPrimary: (lightyear) => {return lightyear.mul(9.454254955488e15);},
      convertFromPrimary: (meter) => {return meter.div(9.454254955488e15);}
    },
    astronomicalUnit: {
      name: 'Astronomical Unit',
      symbols: ['AU', 'au'],
      katexSymbols: ['\\text{AU}'],
      convertIntoPrimary: (astronomicalUnit) => {return astronomicalUnit.mul(1.49597870700e14);},
      convertFromPrimary: (meter) => {return meter.div(1.49597870700e14);}
    },
    mile: {
      name: 'Mile',
      symbols: ['mi'],
      katexSymbols: ['\\text{mi}'],
      convertIntoPrimary: (mile) => {return mile.mul(1.609344e3);},
      convertFromPrimary: (meter) => {return meter.div(1.609344e3);}
    },
    kilometer: {
      name: 'Kilometer',
      symbols: ['km'],
      katexSymbols: ['\\text{km}'],
      convertIntoPrimary: (kilometer) => {return kilometer.mul(1e3);},
      convertFromPrimary: (meter) => {return meter.div(1e3);}
    },
    li: {
      name: 'Li (市里)',
      symbols: ['Li'],
      katexSymbols: ['\\text{Li}'],
      convertIntoPrimary: (li) => {return li.mul(5e2);},
      convertFromPrimary: (meter) => {return meter.div(5e2);}
    },
    hektometer: {
      name: 'Hektometer',
      symbols: ['hm'],
      katexSymbols: ['\\text{hm}'],
      convertIntoPrimary: (hektometer) => {return hektometer.mul(1e2);},
      convertFromPrimary: (meter) => {return meter.div(1e2);}
    },
    yin: {
      name: 'Yin (引)',
      symbols: ['yin'],
      katexSymbols: ['\\text{yin}'],
      convertIntoPrimary: (yin) => {return yin.mul(3).div(100);},
      convertFromPrimary: (meter) => {return meter.mul(100).div(3);}
    },
    bu: {
      name: 'Bu (步)',
      symbols: ['bu'],
      katexSymbols: ['\\text{bu}'],
      convertIntoPrimary: (bu) => {return bu.div(6).mul(10);},
      convertFromPrimary: (meter) => {return meter.mul(10).div(6);}
    },
    // meter
    yard: {
      name: 'Yard',
      symbols: ['yd'],
      katexSymbols: ['\\text{yd}'],
      convertIntoPrimary: (yard) => {return yard.mul(0.9144);},
      convertFromPrimary: (meter) => {return meter.div(0.9144);}
    }
  };

  primary = 'kilometer';

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