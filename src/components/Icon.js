import React from 'react';
import i18next from 'i18next';


export default class Icon extends React.Component {

  render(){
    let {icon, i18nText, family, ...r} = this.props;
    let containerClass = ["icon-container", "icon-"+family].join(" ");
    return (
      <span class={containerClass} {...r}>
        <span class="icon unselectable" aria-hidden="true">{icon}</span>
        <span class="text">{i18next.t(i18nText)}</span>
      </span>
    );
  }
}

Icon.defaultProps = {
  icon: '',
  i18nText: '',
  family: 'default'
};