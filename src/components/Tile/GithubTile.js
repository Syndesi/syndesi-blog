import React from 'react';
import axios from 'axios';
import moment from 'moment';
import Error from '../Error.js';
import Loader from '../Loader.js';
import {Trans, withTranslation} from 'react-i18next';
import i18next from 'i18next';

import Icon from '../Icon.js';


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
        let d = res.data;
        if(d){
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
        }
      })
      .catch((e) => {
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
        let d = res.data;
        if(d.length > 0){
          this.setState({
            latestRelease: {
              date: d[0].published_at,
              version: d[0].tag_name,
              versionUrl: d[0].html_url,
              author: d[0].author.login,
              authorUrl: d[0].author.html_url
            }
          });
        }
      });
  }

  render(){
    let s             = this.state;
    let created       = (moment(s.created_at)).format(i18next.t('l10n:dateTime.dateFormat'));
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
      content = [
        <div className="row px-1 layout-equal-spaced">
          <h4><a className="unstyled" href={s.projectUrl} target="_blank">{s.project}</a></h4>
          <Icon icon="github" i18nText="tile:githubTile.iconGithub" />
        </div>,
        <div className="row px-1 layout-equal-spaced">
          <p className="detail"><Trans i18nKey="githubTile.createdBy">
            by <a className="detail" href={s.ownerUrl} target="_blank">{{createdBy: s.owner}}</a>
          </Trans></p>
          <p className="detail"><Trans i18nKey="githubTile.createdOn">
            created on {{date: created}}
          </Trans></p>
        </div>,
        <div className="row px-1 pt-1">
          <p>{s.description}</p>
        </div>,
        <div className="row px-1 pb-1">
          <p className="small">
            <a className="unstyled" href={'https://choosealicense.com/licenses/'+s.license.toLowerCase()+'/'} target="_blank">{s.license}</a>,{' '}
            <a className="unstyled" href={s.projectUrl+'/issues'} target="_blank">{s.issues} <Icon icon="error_outline" i18nText="tile:githubTile.iconIssue" /></a>,{' '}
            <a className="unstyled" href={s.projectUrl+'/stargazers'} target="_blank">{s.stars} <Icon icon="star_border" i18nText="tile:githubTile.iconStar" /></a>
          </p>
        </div>,
      ];
      // append release-data if loaded
      if(s.latestRelease){
        let latestReleaseDate = (moment(s.latestRelease.date)).format('DD.MM.YYYY');
        content.push(
          <div className="row px-1 pt-1 bg-level-1">
            <p><Trans i18nKey="githubTile.latestVersion">
              Latest release: <a className="text-primary" href={s.latestRelease.versionUrl} target="_blank">{{version: s.latestRelease.version}}</a>
            </Trans></p>
          </div>);
        content.push(
          <div className="row px-1 pb-1 layout-equal-spaced bg-level-1">
            <p className="small text-secondary"><Trans i18nKey="githubTile.versionReleasedBy">
              by <a className="text-secondary" href={s.latestRelease.authorUrl} target="_blank">{{author: s.latestRelease.author}}</a>
            </Trans></p>
            <p className="small text-secondary"><Trans i18nKey="githubTile.versionReleasedOn">
              by {{date: latestReleaseDate}}
            </Trans></p>
          </div>
        );
      }
    }
    return (
      <div className={'tile tile-' + this.type}>
        {content}
      </div>
    );
  }
}

GithubTile.defaultProps = {
  src: ''
};