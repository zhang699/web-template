
import React, {Component} from 'react';
import {SingleDatePicker} from 'react-dates'

export const DAY_SELECTION_ALL= 'DAY_SELECTION_ALL';
export const DAY_SELECTION_DISABLED = 'DAY_SELECTION_DISABLED';
export const DAY_SELECTION_AFTER_NOW = 'DAY_SELECTION_AFTER_NOW';

import 'react-dates/lib/css/_datepicker.css';
class AirbnbDatePickerWidget extends Component {

  componentWillMount(){
    this.state = {
      outsideRangeProps :{}
    }
  }
  componentWillReceiveProps(){
    const outsideRangeProps = this.checkIsOutsideRange(this.props.daySelectionMode)
    this.setState({
      outsideRangeProps
    })
  }

  checkIsOutsideRange(daySelectionMode){
    if (daySelectionMode === DAY_SELECTION_AFTER_NOW){
      return {};
    }else{
      return {
        isOutsideRange: ()=>(daySelectionMode === DAY_SELECTION_DISABLED)
      }
    }
  }
  render(){
    const {id='SingleDatePicker', isRangePicker, daySelectionMode} = this.props;

    return (
      <div>
        {!isRangePicker &&
          <SingleDatePicker
            id={id}
            {...this.state.outsideRangeProps}
            {...this.props}
          />}
        {isRangePicker &&
          <DayRangePicker
            id={id}
            {...this.props}/>
        }
      </div>
    )
  }
}



export default AirbnbDatePickerWidget;
