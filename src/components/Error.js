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
        <span class="btn-round btn-transparent icon" onClick={() => {this.update();}}>refresh</span>
      );
    }
    return (
      <div class="error py-1">
        <h3 class="error-code pt-1">{p.code}</h3>
        <p class="error-description">{p.description}</p>
        <ul class="error-actions py-1 unselectable">
          {actions}
        </ul>
      </div>
    );
  }
}

Error.defaultProps = {
  code: '403',
  description: 'content cannot be loaded',
  additionalInformation: 'additional informations to the error code',
  reload: () => {console.log('tile reloading...');}
};