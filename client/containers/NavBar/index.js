import React, { Component, PropTypes as T } from 'react';
import { connect } from 'react-redux';
import radium from 'radium';
import navTreeList from './NavTreeList';
import NavItem from './navItem';
import { colors, lightBlue700 } from '../../styles/colors';
import { logo } from '../../assets/images/';
import R from 'ramda';
const styles = {
  navWrapper: {
    zIndex: 100,
    height: '100vh',
    position: 'fixed',
    overflow: 'auto',
    width: '15%',
    top: 0,
    left: 0,
    '@media all and (max-width: 750px)': {
      display: 'fixed',
      position: 'fixed',
      backgroundColor: 'rgba(244, 244, 244, 0.8)',
      height: 'auto',
      width: '100vw',
      top: 0,
      left: 0,
    }
  },
  displayBtn: {
    display: 'none',
    '@media all and (max-width: 750px)': {
      display: 'block',
      position: 'absolute',
      right: '20px',
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
    this.setState({
      activeLinkList,
    });
  }

  toggle = () => {
    this.setState({
      display: !this.state.display,
    });
  }

  render() {
    const {
      activeLinkList,
    } = this.state;
    return (
      <div style={styles.navWrapper}>
        <div style={{ padding: '10px', display: 'flex', height: '60px', alignItems: 'center', backgroundColor: lightBlue700, }}>
          <img style={{
              position: 'relative',
              width: '40px',
            }} src={logo} alt=""/>
          <h3 style={{ position: 'relative', padding: '0 10px 0 10px', color: colors.white }}>Web Template</h3>
          <button style={styles.displayBtn} onClick={ this.toggle }><i className="fa fa-fw fa-bars fa-lg"></i></button>
        </div>
        <div style={styles.aboveBar}>
          {
            (this.state.display) ? navTreeList.map((item, idx) =>
              (
                (activeLinkList[1] === item.link) ?
                  <NavItem isDisplay key={`nav-item-${idx}`} item={item} disabled={(idx === 20)} />
                : <NavItem isDisplay={false} key={`nav-item-${idx}`} item={item} disabled={(idx === 20)} />
              )
            ) : <div></div>
          }
        </div>
        <div style={styles.leftBar}>
          {
            navTreeList.map((item, idx) =>
              (
                (activeLinkList[1] === item.link) ?
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
