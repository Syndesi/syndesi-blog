import React from 'react';
import axios from "axios";
import moment from 'moment';
import Error from '../Error.js';
import Loader from '../Loader.js';
import {Trans, withTranslation} from 'react-i18next';


@withTranslation('tile')
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
      latestRelease: null,
      error: false,
      isLoading: true
    };
  }

  componentDidMount(){
    this.loadData();
  }

  loadData(){
    // check if the given repository-name is valid
    if(!(/^[\w-_]+\/[\w-_]+$/.test(this.props.src))){
      this.setState({
        error: {
          code: 403,
          description: this.props.src + ' is not a github repository'
        }
      });
      return;
    }
    // try to load the repository data
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
            created_at: d.created_at,
            isLoading: false,
            error: false
          });
        })
        .catch((e) => {
          console.log(e.response);
          this.setState({
            error: {
              code: e.response.status,
              description: e.response.statusText,
              reload: () => {this.loadData();}
            }
          });
        });
    // try to load data to the latest release
    axios.get('https://api.github.com/repos/' + this.props.src + '/releases')
        .then((res) => {
          var d = res.data;
          this.setState({
            latestRelease: {
              date: d[0].published_at,
              version: d[0].tag_name,
              versionUrl: d[0].html_url,
              author: d[0].author.login,
              authorUrl: d[0].author.html_url
            }
          });
        });
  }

  render(){
    let s             = this.state;
    let created       = (moment(s.created_at)).format('DD.MM.YYYY');
    let content       = null;
    let latestRelease = null;
    if(s.error){
      content = (
        <Error {...s.error} />
      );
    } else if(s.isLoading){
      content = (
        <Loader />
      );
    } else {
      // <p className="detail">by <a className="detail" href={s.ownerUrl} target="_blank">{s.owner}</a></p>
      //<Trans i18nKey='githubTile.author'>
      //             by <a class="detail" href={s.ownerUrl} target="_blank">{s.owner}</a>
      //           </Trans>

      content = [
        <div class="row px-1 layout-equal-spaced">
          <h4>{s.project}</h4>
          <p class="icon">github</p>
        </div>,
        <div class="row px-1 layout-equal-spaced">
          <p class="detail"><Trans i18nKey="githubTile.createdBy">
            by <a class="detail" href={s.ownerUrl} target="_blank">{{createdBy: s.owner}}</a>
          </Trans></p>
          <p class="detail"><Trans i18nKey="githubTile.createdOn">
            created on {{date: created}}
          </Trans></p>
        </div>,
        <div class="row px-1 pt-1">
          <p>{s.description}</p>
        </div>,
        <div class="row px-1 pb-1">
          <p class="small">{s.license + ', ' + s.issues}<i class="icon">error_outline</i>, {s.stars} <i class="icon">star_border</i></p>
        </div>,
      ];
      // append release-data if loaded
      if(s.latestRelease){
        let latestReleaseDate = (moment(s.latestRelease.date)).format('DD.MM.YYYY');
        content.push(
          <div class="row px-1 pt-1 bg-level-1">
            <p><Trans i18nKey="githubTile.latestVersion">
              Latest release: <a class="text-primary" href={s.latestRelease.versionUrl} target="_blank">{{version: s.latestRelease.version}}</a>
            </Trans></p>
          </div>);
        content.push(
          <div class="row px-1 pb-1 layout-equal-spaced bg-level-1">
            <p class="small text-secondary">by <a class="text-secondary" href={s.latestRelease.authorUrl} target="_blank">{s.latestRelease.author}</a></p>
            <p class="small text-secondary">{'on ' + latestReleaseDate}</p>
          </div>
        );
      }
    }
    return (
      <div class={'tile tile-' + this.type}>
        {content}
      </div>
    );
  }
}

GithubTile.defaultProps = {
  src: ""
};