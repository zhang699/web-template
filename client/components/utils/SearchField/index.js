import React, { PropTypes as T, Component } from 'react';
import radium from 'radium';
import { search } from '../../assets/images/';
const styles = {
  searchFieldWrapper: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    height: '100%',
  },
  inputField: {
    flex: 4,
  },
  btnField: {
    flex: 1,
  },
  inputStyle: {
    boxSizing: 'border-box',
    margin: '0',
    width: '100%',
    height: '100%',
    backgroundColor: 'transparent',
    border: '1px solid #368e9f',
    borderRadius: '4px 0 0 4px',
    borderRight: 'none',
    color: '#368e9f',
    lineHeight: '20px',
    fontSize: '14px',
    paddingLeft: '10px',
    ':focus': {
      outline: 'none'
    }
  },
  btnStyle: {
    color: '#368e9f',
    borderRadius: '0 4px 4px 0',
    boxSizing: 'border-box',
    border: '1px solid #368e9f',
    backgroundColor: 'transparent',
    height: '100%',
    width: '100%',
    cursor: 'pointer',
    backgroundImage: `url(${search})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    ':active': {
      color: '#FFF',
      backgroundColor: 'rgba(109, 185, 199, 0.3)',
      filter: 'hue-rotate(180deg)',
    },
    ':focus': {
      outline: 'none'
    }
  }

};


class SearchField extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div style={styles.searchFieldWrapper}>
        <div style={styles.inputField}>
          <input
            key="searchInput"
            style={styles.inputStyle}
            type="text"
            placeholder={this.props.placeholderWord || '輸入會員帳號'}
            onChange={(e) => {
              e.preventDefault();
              if (this.props.onSearchWordChange) this.props.onSearchWordChange(e.target.value);
            }} />
        </div>
        <div key="searchBtnField" style={styles.btnField}>
          <button
            key="searchBtn"
            style={styles.btnStyle}
            onClick={(e) => { e.preventDefault(); this.props.onSearchClick(); }} />
        </div>
      </div>
    );
  }
}

SearchField.propTypes = {
  placeholderWord: T.string,
  onSearchClick: T.func,
  // onSearchWordChange: T.fun,
};

export default radium(SearchField);
