require('react-datepicker/dist/react-datepicker.css');
import '../../assets/css/datepicker-custom.css' ;
import React, { PropTypes as T, Component } from 'react';
import radium from 'radium';
import { search } from '../../assets/images/';
import DatePicker from 'react-datepicker';
import moment from 'moment';

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
  },
  btnFieldNone: {
    border: '1px solid #368e9f',
    width: '4px',
    borderLeft: 'none',
    borderRadius: '0 4px 4px 0',
  }
};


class DatePickerWiget extends Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: moment()
    };
  }

  handleChange = (date) => {
    this.props.onChange(date.format());
    this.setState({
      startDate: date,
    });
  }

  render() {
    return (
      <div style={styles.searchFieldWrapper}>
        <div style={styles.inputField}>
          <DatePicker
            style={styles.inputStyle}
            placeholderText="Click to select a date"
            dateFormat="YYYY/MM/DD"
            selected={this.state.startDate}
            onChange={this.handleChange} />
        </div>
        {
          (this.props.showBtn) ? (
            <div key="searchBtnField" style={styles.btnField}>
              <button
                key="searchBtn"
                style={{...styles.btnStyle, ...this.props.btnStyle }}
                onClick={(e) => { e.preventDefault(); this.props.onSearchClick(); }} />
            </div>
          ) : (
            <div key="searchBtnField" style={styles.btnFieldNone} />
          )
        }
      </div>
    );
  }
}

DatePickerWiget.propTypes = {
  placeholderWord: T.string,
  onSearchClick: T.func,
  showBtn: T.bool,
};

export default radium(DatePickerWiget);
