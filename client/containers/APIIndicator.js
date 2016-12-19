import React, { Component, PropTypes as T } from 'react';
import radium, { StyleRoot } from 'radium';
import { connect } from 'react-redux';
import { brown700 } from '../styles/colors';
import {
  fetchInitial as fetchInitialAction,
  fetching,
  fetched,
  INDICATOR_INITIAL, INDICATOR_FETCHING, INDICATOR_FETCHED_SUCCESS, INDICATOR_FETCHED_FAILED
} from '../actions/indicator';

const slowSlide = radium.keyframes({
  '0%': {width: '0%'},
  '50%': {width: '50%'},
  '100%': {width: '100%'},
}, 'pulse');

const quickSlide = (offset) => (radium.keyframes({
  '0%': { paddingLeft: offset + 'px', width: '0%'},
  '50%': { paddingLeft: offset + 'px', width: '50%'},
  '100%': { paddingLeft: offset + 'px', width: '100%'},
}, 'pulse'));

const styles =  {
  indicator: (duration, animation) => ({
   animation: 'linear 0s',
   animationDuration: duration + 's',
   animationName: animation,
   background: brown700,
   height: '4px',
   margin: '0 auto',
   position: 'fixed',
   zIndex: 999,
   top: 0,
   left: 0,
 }),

};

class APIIndicator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: props.status,
    };
  }

  componentDidMount() {
    // setTimeout(() => {
    //   console.log("API REQUEST");
    //   this.props.fetching();
    //   // this.setState({
    //   //   status: INDICATOR_FETCHING,
    //   // }, () => {
    //   //   setTimeout(() => {
    //   //     console.log("API REQUEST fetched");
    //   //     this.setState({ status: INDICATOR_FETCHED_FAILED });
    //   //   }, 3000);
    //   // });
    // }, 1000);
    //
    // setTimeout(() => {
    //   console.log("API REQUEST SUCCESS");
    //   this.props.fetched('success');
    // }, 3000);
  }

  componentWillReceiveProps(nextProps) {
    const { fetchInitial } = this.props;
    const { status } = this.state;
    // current fetched set to null state
    // if (nextProps.status === INDICATOR_FETCHED_FAILED || nextProps.status === INDICATOR_FETCHED_SUCCESS) {
    //   fetchInitial();
    // }
    this.setState({ status: nextProps.status });

  }

  render() {
    const { status } = this.state;
    return (
      <div>
        <div
          ref={ val => this.indicator = val }
          style={
            (status === INDICATOR_FETCHED_SUCCESS || status === INDICATOR_FETCHED_FAILED) ?
              styles.indicator(0.2, quickSlide(this.indicator.offsetWidth)) :
              (status === INDICATOR_FETCHING) ? styles.indicator(15, slowSlide) : {}} />
      </div>
    );
  }
}

APIIndicator.propTypes = {


};

const mapStateToProps = (state) => ({
  status: state.indicator.status,
});

export default connect(mapStateToProps, {
  fetchInitial: fetchInitialAction,
  fetching,
  fetched,
})(radium(APIIndicator));
