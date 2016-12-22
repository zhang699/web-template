import { translate } from 'react-i18next';
import React, {Component} from 'react';
import radium from 'radium';
import {connect} from 'react-redux';
import Button from '../../components/utils/Button';
import {changeLanguage} from '../../actions/i18n';
const styles = {
  container:{
  },
  switchLangButton:{
    width:'300px',
    marginLeft:'60px'
  },
}

class ButtonLangSwitcher extends Component{
  componentWillMount(){
    if (!this.props.language) {
      this.props.changeLanguage('en');
    }
  }
  onLangButtonClick(){
    this.props.changeLanguage(this.props.language === 'en' ? 'zh-TW' : 'en');
  }
  render(){
    const {t, language} = this.props;
    return (
      <div>
        <Button
          style={styles.switchLangButton}
          name={t('currentLang') + language}
          onClick={this.onLangButtonClick.bind(this)}>
        </Button>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps)=>{
  const {language} = state.i18n;
  return {
    language,
  }
}

export default translate()(connect(mapStateToProps, {
  changeLanguage
})(radium(ButtonLangSwitcher)));
