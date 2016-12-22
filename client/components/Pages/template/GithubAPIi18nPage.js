
import React, {Component} from 'react';
import radium from 'radium';
import {connect} from 'react-redux';
import {fetchGithub} from '../../../actions/api/exampleAction';
import {changeLanguage} from '../../../actions/i18n';
import Button from '../../../components/utils/Button';
import Header from '../../../components/utils/Header';
import { translate } from 'react-i18next';

const styles = {
  container:{
  },
  switchLangButton:{
    width:'300px',
    marginLeft:'60px'
  },
  titleRow:{
    display:'flex',
    flexDirection:'row',
    fontSize:'18px',
    alignItems:'flex-end',

  },
  repositoryContainer:{
    border:'2px solid #ABC',
    padding:'5px',
    margin:'5px 0px'
  },
  metaInfo:{
    fontSize:'12px',
    display:'flex',
    flexDirection:'row',
    marginBottom:'10px',
    flexWrap:'wrap'
  },
  metaInfoItem:{
    border:'2px solid #CBA',
    fontColor:'white',
    backgroundColor:'#CBA',
    margin:'0px 5px',
    maxHeight:'40px',
    borderRadius:'7px'
  },
  updatedDate:{
    backgroundColor:'#CAC',
    borderColor:'#CAC'
  },
  contentContainer:{
    padding:'5px',
    margin:'5px 5px'
  }
}
class GithubAPIi18nPage extends Component {

  componentWillMount(){
    this.props.fetchGithub({userName:'zhang699'});
    if (!this.props.language) {
      this.props.changeLanguage('en');
    }
  }

  onLangButtonClick(){
    this.props.changeLanguage(this.props.language === 'en' ? 'zh-TW' : 'en');
  }
  render(){
    const {t, language, list} = this.props;

    return (
      <div style={styles.container}>
        <Header>
          <h2 className="col-md-6">{t('thisMyGithub')}</h2>

            <Button
              style={styles.switchLangButton}
              name={t('currentLang') + language}
              onClick={this.onLangButtonClick.bind(this)}>

            </Button>

        </Header>

          <div style={styles.contentContainer}>
            {list && list.map((item)=>{
              const watcherTitle = item.watchersCount;
              const forkTitle = item.forks;
              return (
                <div className="col-md-6" style={styles.repositoryContainer}>
                  <div style={styles.titleRow}>
                    <h2>{item.name}</h2>
                    <div style={styles.metaInfo}>
                      <h4 style={styles.metaInfoItem}>{item.language}</h4>
                      <h4 style={styles.metaInfoItem}>{watcherTitle}</h4>
                      <h4 style={styles.metaInfoItem}>{forkTitle}</h4>
                      <h4 style={[styles.metaInfoItem, styles.updatedDate]}>{item.updatedAt}</h4>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

      </div>
    )
  }
}


const mapStateToProps = (state, ownProps)=>{
  const {language} = state.i18n;
  const {list} = state.exampleReducer;
  return {
    language,
    list
  }
}

export default translate()(connect(mapStateToProps, {
  fetchGithub,
  changeLanguage
})(radium(GithubAPIi18nPage)));
