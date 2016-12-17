import React, { Component, PropTypes as T } from 'react';
import { connect } from 'react-redux';
import radium from 'radium';
import { Routes } from '../../routes';
import NavItem from './navItem';
import R from 'ramda';
import { blueGrey200, blueGrey50, fullWhite, brown300, lighten } from '../../styles/colors';
import * as buttons from '../../styles/button';
import * as shadows from '../../styles/shadow';


const styles = {
  navWrapper: {
    zIndex: 100,
    height: '100vh',
    position: 'fixed',
    overflowY: 'auto',
    overflowX: 'hidden',
    width: '260px',
    backgroundColor: brown300,
    top: 0,
    left: 0,
    '@media all and (max-width: 750px)': {
      display: 'fixed',
      position: 'fixed',
      backgroundColor: brown300,
      height: 'auto',
      width: '100vw',
      top: 0,
      left: 0,
    }
  },
  displayBtn: {
    display: 'none',
    '@media all and (max-width: 750px)': {
      ...buttons.flatBtn,
      color: fullWhite,
      display: 'block',
      position: 'absolute',
      right: '0px',
    }
  },
  leftBar: {
    display: 'block',
    '@media all and (max-width: 750px)': {
      display: 'none',
    }
  },
  aboveBar: {
    display: 'none',
    '@media all and (max-width: 750px)': {
      display: 'block',
    }
  },
  navBarHeader: {
    padding: '18px',
    display: 'flex',
    height: '60px',
    alignItems: 'center',
    justifyContent: 'center',
  },
  navTitle: {
    position: 'relative',
    padding: '0 10px 0 10px',
    color: blueGrey50,
    fontWeight: 300,
    letterSpacing: '3px',
    fontSize: '18px',
  },
  divideLine: {
    height: '1px',
    backgroundColor: lighten(brown300, 1),
    margin: '5px 20px',
  }
};

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeLinkList: R.tail(R.split('/', props.path)),
      display: false,
    };
  }
  componentDidMount() {
    const activeLinkList = R.tail(R.split('/', this.props.path))
  }

  componentWillReceiveProps(nextProps) {
    const activeLinkList = R.tail(R.split('/', nextProps.path))
    // if (nextProps.member.memberStatus === 'INACTIVE' && activeLinkList[0] !== 'personal') {
    //   this.props.toPersonalPageAction();
    // }
    this.setState({ activeLinkList });
  }

  toggle = () => {
    this.setState({
      display: !this.state.display,
    });
  }

  render() {
    const { activeLinkList } = this.state;
    const navTreeList = Routes.filter(item => item.navItem);
    return (
      <div style={styles.navWrapper}>
        <div style={styles.navBarHeader}>
          <h3 style={styles.navTitle}>Web Template</h3>
          <button style={styles.displayBtn} onClick={ this.toggle }>
            <i className="fa fa-fw fa-bars fa-lg"></i>
          </button>
        </div>
        <div style={styles.divideLine} />
        <div style={styles.aboveBar}>
          {
            (this.state.display) ? navTreeList.map((item, idx) =>
              (
                (activeLinkList[0] === item.link) ?
                  <NavItem isDisplay key={`nav-item-${idx}`} item={item} disabled={false} />
                : <NavItem isDisplay={false} key={`nav-item-${idx}`} item={item} disabled={false} />
              )
            ) : <div></div>
          }
        </div>
        <div style={styles.leftBar}>
          {
            navTreeList.map((item, idx) =>
              (
                (activeLinkList[0] === item.link) ?
                  <NavItem isDisplay key={`nav-item-${idx}`} item={item} disabled={(idx === 20)} />
                : <NavItem isDisplay={false} key={`nav-item-${idx}`} item={item} disabled={(idx === 20)} />
              )
            )
          }
        </div>
      </div>
      );
  }
}
//
NavBar.propTypes = {
  path: T.string,
};

//
const mapStateToProps = (state) => ({
  path: state.routing.locationBeforeTransitions.pathname,
});


export default connect(mapStateToProps, {
})(radium(NavBar));
