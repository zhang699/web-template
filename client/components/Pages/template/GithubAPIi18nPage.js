
import React, {Component} from 'react';
import radium from 'radium';
import Header from '../../../components/utils/Header';
import { translate } from 'react-i18next';
import GithubList from '../../../containers/github/GithubList';
import ButtonLangSwicher from '../../../containers/lang/ButtonLangSwitcher';

const styles = {
  container:{
  },
  switchLangButton:{
    width:'300px',
    marginLeft:'60px'
  },

}
class GithubAPIi18nPage extends Component {

  render(){
    const {t, language, list} = this.props;

    return (
      <div style={styles.container}>
        <Header>
          <h2 className="col-md-6">{t('thisMyGithub')}</h2>

          <ButtonLangSwicher/>

        </Header>

        <GithubList userName={'zhang699'}></GithubList>
      </div>
    )
  }
}


export default translate()(radium(GithubAPIi18nPage));
