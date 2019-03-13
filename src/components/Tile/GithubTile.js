import React from 'react';
import axios from "axios";
import moment from 'moment';

export default class GithubTile extends React.Component {

  constructor(props){
    super(props);
    this.type = 'github';
    this.state = {
      project: '',
      projectUrl: '',
      description: '',
      owner: '',
      ownerUrl: '',
      license: '',
      issues: '',
      stars: '',
      languages: [],
      latestRelease: {
        date: '',
        version: '',
        author: '',
        authorUrl: ''
      }
    };
    this.loadData();
  }

  loadData(){
    if(!(/^\w+\/\w+$/.test(this.props.src))){
      console.log(this.props.src + ' is not a github repository');
      return;
    }
    axios.get('https://api.github.com/repos/' + this.props.src)
        .then((res) => {
          var d = res.data;
          this.setState({
            project: d.name,
            projectUrl: d.html_url,
            description: d.description,
            owner: d.owner.login,
            ownerUrl: d.owner.html_url,
            license: d.license.spdx_id,
            issues: d.open_issues,
            stars: d.stargazers_count,
            created_at: d.created_at
          });
        });
    axios.get('https://api.github.com/repos/' + this.props.src + '/releases')
        .then((res) => {
          var d = res.data;
          this.setState({
            latestRelease: {
              date: d[0].published_at,
              version: d[0].name,
              author: d[0].author.login,
              authorUrl: d[0].author.html_url
            }
          });
        });
  }

  render(){
    var s = this.state;
    var created = (moment(s.created_at)).format('DD.MM.YYYY');
    var latestReleaseDate = (moment(s.latestRelease.date)).format('DD.MM.YYYY');
    return (
      <div class={'tile mb-1 tile-' + this.type}>
        <div class="row p-1 pb-0">
          <h4>{s.project}</h4>
        </div>
        <div class="row px-1 layout-equal-spaced">
          <p class="detail">by <a class="detail" href={s.ownerUrl} target="_blank">{s.owner}</a>, forked from <a class="detail" href="#" target="_blank">directus/api</a></p>
          <p class="detail">{'created on ' + created}</p>
        </div>
        <div class="row px-1 pt-1">
          <p>{s.description}</p>
        </div>
        <div class="row px-1 pb-1">
          <p class="small">{s.license + ', ' + s.issues + ' ⚠️, ' + s.stars + ' ⭐, '}</p>
        </div>
        <div class="row px-1 pt-1 bg-level-1">
          <p>Latest release: v7.0.18</p>
        </div>
        <div class="row px-1 pb-1 layout-equal-spaced bg-level-1">
          <p class="small text-secondary">by <a class="text-secondary" href={s.latestRelease.authorUrl} target="_blank">{s.latestRelease.author}</a></p>
          <p class="small text-secondary">{'on ' + latestReleaseDate}</p>
        </div>
      </div>
    );
  }
}

GithubTile.defaultProps = {
  src: "directus/api"
};