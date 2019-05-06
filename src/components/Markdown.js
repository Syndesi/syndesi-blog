import React, {createElement} from 'react';
import marksy from 'marksy';

import CiteLink from './Cite/CiteLink.js';
import TemperatureUnit from './Unit/TemperatureUnit.js';
import Unit from './Unit/Unit.js';
import LengthConversion from "../lib/conversion/LengthConversion.js";
import TemperatureConversion from "../lib/conversion/TemperatureConversion.js";

export default class Markdown extends React.Component {

  constructor(props){
    super(props);
    this.state = {};
    this.marksy = marksy({
      createElement,
      elements: {
        h1: ({id, children}) => {
          return <h1>{children}</h1>
        },
        h2: ({id, children}) => {
          return <h2>{children}</h2>
        },
        h3: ({id, children}) => {
          return <h3>{children}</h3>
        },
        h4: ({id, children}) => {
          return <h4>{children}</h4>
        },
        h5: ({id, children}) => {
          return <h5>{children}</h5>
        },
        h6: ({id, children}) => {
          return <h6>{children}</h6>
        },
        p: ({children}) => {
          return <p>{children}</p>
        },
        a: ({href, title, target, children}) => {
          switch(children.join('')){
            case 'cite':
              return <CiteLink citeNumber={href} />;
            case 'unit|temperature':
              //return <TemperatureUnit value={href} />;
              return <Unit value={href} conversion={new TemperatureConversion()} />;
            case 'unit|length':
              //return <LengthUnit value={href} />;
              return <Unit value={href} conversion={new LengthConversion()} />;
            default:
              return <a href={href} target="_blank" title={title}>{children}</a>
          }
        },
        blockquote ({children}) {},
        hr () {},
        ol ({children}) {},
        ul ({children}) {},
        table ({children}) {},
        thead ({children}) {},
        tbody ({children}) {},
        tr ({children}) {},
        th ({children}) {},
        td ({children}) {},
        strong ({children}) {},
        em ({children}) {},
        br () {},
        del ({children}) {},
        img ({src, alt}) {},
        code ({language, code}) {},
        codespan ({children}) {}
      }
    });
  }

  render(){
    var compiled = this.marksy(this.props.markdown, {});

    compiled.tree
    return (
      <div class="markdown">{compiled.tree}</div>
    );
  }
}

Markdown.defaultProps = {
  markdown: ''
};