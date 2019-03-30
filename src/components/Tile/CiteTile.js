import React from 'react';

export default class CiteTile extends React.Component {

  constructor(props){
    super(props);
    this.type = 'cite';
  }

  render(){
    return (
      <div class={'tile tile-' + this.type}>
        <div class="row px-1 cite-title">
          <h4>Sources</h4>
        </div>
        <div class="row px-1 pt-1 cite-list">
          <div class="cite pb-1">
            <p class="cite-number unselectable">1.</p>
            <p class="cite-text">"titanium - definition of titanium in English | Oxford Dictionaries". Oxford University Press. 2017. Retrieved 2017-03-28.</p>
          </div>
          <div class="cite pb-1">
            <p class="cite-number unselectable">2.</p>
            <p class="cite-text">Meija, J.; et al. (2016). "Atomic weights of the elements 2013 (IUPAC Technical Report)". Pure and Applied Chemistry. 88 (3): 265–91. doi:10.1515/pac-2015-0305.</p>
          </div>
          <div class="cite pb-1">
            <p class="cite-number unselectable">3.</p>
            <p class="cite-text">Andersson, N.; et al. (2003). "Emission spectra of TiH and TiD near 938 nm" (PDF). J. Chem. Phys. 118: 10543.</p>
          </div>
          <div class="cite pb-1">
            <p class="cite-number unselectable">4.</p>
            <p class="cite-text">Weast, Robert (1984). CRC, Handbook of Chemistry and Physics. Boca Raton, Florida: Chemical Rubber Company Publishing. pp. E110. ISBN 0-8493-0464-4.</p>
          </div>
          <div class="cite pb-1">
            <p class="cite-number unselectable">5.</p>
            <p class="cite-text">Andersson, N.; et al. (2003). "Emission spectra of TiH and TiD near 938 nm" (PDF). J. Chem. Phys. 118: 10543. Bibcode:2003JChPh.118.3543A. doi:10.1063/1.1539848.</p>
          </div>
          <div class="cite pb-1">
            <p class="cite-number unselectable">...</p>
            <p class="cite-text">"Titanium". Encyclopædia Britannica. 2006. Retrieved 29 December 2006.</p>
          </div>
          <div class="cite pb-1">
            <p class="cite-number unselectable">999.</p>
            <p class="cite-text">Lide, D. R., ed. (2005). CRC Handbook of Chemistry and Physics (86th ed.). Boca Raton (FL): CRC Press. ISBN 0-8493-0486-5.</p>
          </div>
        </div>
      </div>
    );
  }
}

CiteTile.defaultProps = {
  content: ''
};