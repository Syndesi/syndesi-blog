import React from 'react';
import Tooltip from 'rc-tooltip';


export default class Error extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      details:  ''
    };
  }

  update(){
    let p = this.props;
    console.log('I am updating myself...');
    if(p.reload && typeof p.reload == 'function'){
      p.reload();
    }
    console.log('internal reload complete');
  }

  render(){
    let p = this.props;
    let actions = [];
    let actionsRow = null;
    if(p.additionalInformation){
      let tooltip = (
        <p>{p.additionalInformation}</p>
      );
      actions.push(
        <Tooltip placement="bottom" overlay={tooltip}>
          <span className="btn-round btn-transparent icon">help_outline</span>
        </Tooltip>
      );
    }
    if(p.reload){
      actions.push(
        <span className="btn-round btn-transparent icon" onClick={() => {this.update();}}>refresh</span>
      );
    }
    if(actions.length > 0){
      actionsRow = (
        <ul className="error-actions py-1 unselectable bg-level-1">
          {actions}
        </ul>
      );
    }

    return (
      <div className="error">
        <h3 className="error-code pt-1">{p.code}</h3>
        <p className="error-description pb-1">{p.description}</p>
        {actionsRow}
      </div>
    );
  }
}

Error.defaultProps = {
  code:                 '500',
  description:          'unknown error',
  additionalInformation: null,
  reload:                null
};