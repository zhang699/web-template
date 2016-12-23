

import React, {Component} from 'react';
import Button from '../../utils/Button';
import Select from '../../utils/Select';
import radium from 'radium';
import AirbnbDatePicker, {
  DAY_SELECTION_ALL,
  DAY_SELECTION_AFTER_NOW, DAY_SELECTION_DISABLED
} from '../../utils/AirbnbDatePicker';

import moment from 'moment';

const styles = {
  button:{
    marginTop:'10px'
  }
}
const DISABLE_PAST = 'disablePAST';
class DatePickerDemoPage extends Component {
  componentWillMount(){
    this.state = {
      focused:false,
      selectedDate:null,
      daySelectionMode:DAY_SELECTION_ALL,
    }
  }
  onControlCalendarClick(){
    this.setState({
      focused:!this.state.focused
    })
  }

  onDateChange(selectedDate){
    console.warn('onDateChange', selectedDate);
    this.setState({
      focused:false,
      selectedDate
    })
  }
  onFocusChange(focusEvent){

    this.setState({
      focused : focusEvent.focused
    })
  }
  setupToCurrentTime(){
    this.setState({
      selectedDate:moment()
    })
  }

  onSelectOptionChange(event){
    //console.log('onSelectOptionChange', event.target.value);
    this.setState({
      daySelectionMode:event.target.value
    })
  }

  render(){
    const {focused, selectedDate} = this.state;
    const isOpenDialog = focused;
    return (
      <div className="row">
        <div className="col-md-4">
          <AirbnbDatePicker
            date={selectedDate}
            onFocusChange={this.onFocusChange.bind(this)}
            onDateChange={this.onDateChange.bind(this)}
            daySelectionMode={this.state.daySelectionMode}
            focused={ isOpenDialog } />
            <h5>{'selectedDate:'}{selectedDate && selectedDate.format('YYYY/MM/DD')}</h5>
            <div style={styles.button}>
              <Button  name={focused ? 'close calendar' : 'open calendar'} onClick={this.onControlCalendarClick.bind(this)}></Button>
            </div>
            <div style={styles.button}>
              <Button name={'set to now'}
                onClick={this.setupToCurrentTime.bind(this)}></Button>
            </div>
          <div>
            <h6>{'Day Selection Mode'}</h6>
            <Select name={[DAY_SELECTION_ALL, DAY_SELECTION_DISABLED, DAY_SELECTION_AFTER_NOW]}
              onChange={this.onSelectOptionChange.bind(this)}/>
          </div>
        </div>
        <div className="col-md-4">
            <h4>TODO:  DayRangePicker</h4>
        </div>
        <div className="col-md-4">
            <h4>TODO:  Theming</h4>
        </div>
      </div>
    )
  }
}

export default radium(DatePickerDemoPage);
