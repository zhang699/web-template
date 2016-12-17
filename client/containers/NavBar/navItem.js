import React, { Component, PropTypes as T } from 'react';
import { connect } from 'react-redux';
import { replace } from 'react-router-redux';
import radium from 'radium';
import R from 'ramda';
import * as fonts from '../../styles/fonts';
import * as shadows from '../../styles/shadow';
import { fullWhite, blueGrey100, blueGrey50 } from '../../styles/colors';

const styles = {
  itemWrapper: {
    ...fonts.p,
    fontSize: '14px',
    fontWeight: 350,
    textTransform: 'uppercase',
    whiteSpace: 'nowrap',
    letterSpacing: '1px',
    boxSizing: 'border-box',
    position: 'relative',
    width: '100%',
    minHeight: '30px',
    padding: '5px 25px',
    lineHeight: '30px',
    color: blueGrey50,
    cursor: 'pointer',
    WebkitUserSelect: 'none',
    MozUserSelect: 'none',
    MsUserSelect: 'none',
    userSelect: 'none',
    ':hover': {
      color: blueGrey100,
      transition: 'all 150ms ease-in'
    },
    ':active': {
      color: blueGrey50,
    }
  },
  activeItemWrapper: {
    color: fullWhite,
  },
  disabledItemWrapper: {
    color: blueGrey100,
    cursor: 'not-allowed',
  },
  subItemWrapper: {
    ...fonts.p,
    fontSize: '12px',
    letterSpacing: '1.4px',
    position: 'relative',
    height: '25px',
    cursor: 'pointer',
    color: blueGrey100,
    padding: '8px 35px',
    lineHeight: '12px',
    WebkitUserSelect: 'none',
    MozUserSelect: 'none',
    MsUserSelect: 'none',
    userSelect: 'none',
    ':hover': {
      color: fullWhite,
      borderLeft: `4px solid ${fullWhite}`,
      transition: 'all 100ms ease-in',
    },
    ':active': {
      color: fullWhite,
      borderLeft: `4px solid ${fullWhite}`,
    }
  },
  activeSubItemWrapper: {
    position: 'relative',
    color: fullWhite,
    borderLeft: `4px solid ${fullWhite}`,
  },
  triangle: {
    height: '20px',
    width: '20px',
    transform: 'rotate(45deg)',
    backgroundColor: blueGrey50,

    display: 'inline-block',
    position: 'absolute',
    right: '-12px',
    top: '5px',
    ...shadows.shadowG
  },
  smallDownTriangle: color => ({
    position: 'absolute',
    right: '20px',
    top: '20px',
    width: 0,
    height: 0,
    borderStyle: 'solid',
    borderWidth: '5px 4px 0px',
    borderColor: `${color} transparent transparent transparent`,
  }),
  smallUpTriangle: color => ({
    position: 'absolute',
    right: '20px',
    top: '20px',
    width: 0,
    height: 0,
    borderStyle: 'solid',
    borderWidth: '0px 4px 5px',
    borderColor: `transparent transparent ${color} transparent`,
  })
};

class NavItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isDisplay: props.isDisplay || false,
      activeLinkList: R.tail(R.split('/', props.path)),
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      activeLinkList: R.tail(R.split('/', nextProps.path)),
    });
  }

  handleMainItemClick = (item) => (e) => {
    e.preventDefault();
    if (!item.childrenNodes) {
      this.props.replace(`/${item.link}/`);
      return true;
    }
    this.setState({
      isDisplay: !this.state.isDisplay
    });

    return true;
  }

  handleSubItemClick = (item, subItem) => (e) => {
    e.preventDefault();
    this.props.replace(`/${item.link}/${subItem.link}`);
  }

  show = (item, isDisplay, activeLinkList) => {
    const isActive = (item.link === activeLinkList[0]) || (item.link === activeLinkList[0] && activeLinkList[1] === '');
    return (
      <div>
        <div
          style={ isActive ? { ...styles.itemWrapper, ...styles.activeItemWrapper } : styles.itemWrapper}
          onClick={this.handleMainItemClick(item)}>
          {item.title}
          <div style={
              (isActive) ?
                (!!item.childrenNodes) ? (isDisplay) ? styles.smallUpTriangle(fullWhite) : styles.smallDownTriangle(fullWhite) : styles.triangle
              : (!!item.childrenNodes) ? (isDisplay) ? styles.smallUpTriangle(blueGrey50): styles.smallDownTriangle(blueGrey50) : {}
            }></div>
        </div>
        <div>
          {
            (item.childrenNodes && isDisplay) ?
              item.childrenNodes.map((subItem, idx) => {
                const isSubItemActive = (item.link === activeLinkList[0]) && (subItem.link === activeLinkList[1]);
                // active
                if (isSubItemActive) {
                  return (
                    <div
                      style={{ ...styles.subItemWrapper, ...styles.activeSubItemWrapper }}
                      key={`nav-sub-item-${idx}`}
                      onClick={this.handleSubItemClick(item, subItem)}>
                      {subItem.title}
                      <div style={styles.triangle}></div>
                    </div>
                  )
                }
                // inActive
                return (
                  <div
                    style={styles.subItemWrapper}
                    key={`nav-sub-item-${idx}`}
                    onClick={this.handleSubItemClick(item, subItem)}>
                    {subItem.title}
                  </div>
                );
              })
              : null
          }
        </div>
      </div>
    );
  }

  showDisabled = (item) => (
    <div
      style={{ ...styles.itemWrapper, ...styles.disabledItemWrapper }}>
      {item.title}
    </div>
  )

  render() {
    const { item, disabled } = this.props;
    const { activeLinkList, isDisplay } = this.state;
    return (disabled)? this.showDisabled(item): this.show(item, isDisplay, activeLinkList);
  }
}
//
NavItem.propTypes = {
  isDisplay: T.bool,
  item: T.object.isRequired,
  path: T.string,
  replace: T.func,
  disabled: T.bool,
};

//
const mapStateToProps = (state) => ({
  path: state.routing.locationBeforeTransitions.pathname
});

export default connect(mapStateToProps, {
  replace,
})(radium(NavItem));
