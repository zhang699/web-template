import React, { Component, PropTypes as T } from 'react';
import { connect } from 'react-redux';
import { replace } from 'react-router-redux';
import radium from 'radium';
import R from 'ramda';
import * as fonts from '../../styles/fonts';
import * as shadows from '../../styles/shadow';
import { lightBlue50, lightBlue300, lightBlue400, lightBlue600, blueGrey100, blueGrey300, blueGrey400 } from '../../styles/colors';

const styles = {
  itemWrapper: {
    ...fonts.p,
    boxSizing: 'border-box',
    position: 'relative',
    width: '100%',
    minHeight: '30px',
    padding: '10px 40px',
    lineHeight: '30px',
    color: blueGrey400,
    fontWeight: 320,
    cursor: 'pointer',
    WebkitUserSelect: 'none',
    MozUserSelect: 'none',
    MsUserSelect: 'none',
    userSelect: 'none',
    ':hover': {
      backgroundColor: lightBlue400,
      color: '#fff',
      ...shadows.shadowC
    },
    ':active': {
      backgroundColor: lightBlue300,
      color: '#fff',
      ...shadows.shadowA
    }
  },
  activeItemWrapper: {
    backgroundColor: lightBlue300,
    color: '#fff',
    ...shadows.shadowC,
  },
  disabledItemWrapper: {
    color: blueGrey100,
    cursor: 'not-allowed',
  },
  subItemWrapper: {
    ...fonts.p,
    fontSize: '14px',
    position: 'relative',
    height: '18px',
    cursor: 'pointer',
    color: blueGrey300,
    padding: '5px 40px',
    lineHeight: '18px',
    WebkitUserSelect: 'none',
    MozUserSelect: 'none',
    MsUserSelect: 'none',
    userSelect: 'none',
    ':hover': {
      color: lightBlue600,
      borderLeft: `4px solid ${lightBlue600}`,
    },
    ':active': {
      color: lightBlue300,
      borderLeft: `4px solid ${lightBlue300}`,
    }
  },
  activeSubItemWrapper: {
    color: lightBlue300,
    backgroundColor: lightBlue50,
    borderLeft: `4px solid ${lightBlue300}`,
  },
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

  show = (item, isDisplay, activeLinkList) => (
    <div>
      <div
        style={
          (
            item.link === activeLinkList[0] ||
            (item.link === activeLinkList[0] && activeLinkList[1] === '')
          ) ?
          { ...styles.itemWrapper, ...styles.activeItemWrapper } : styles.itemWrapper}
        onClick={this.handleMainItemClick(item)}>
        {item.title}
      </div>
      <div>
        {
          (item.childrenNodes && isDisplay) ?
            item.childrenNodes.map((subItem, idx) =>
              <div
                style={
                  (item.link === activeLinkList[0] && subItem.link === activeLinkList[1]) ?
                  { ...styles.subItemWrapper, ...styles.activeSubItemWrapper } : styles.subItemWrapper
                }
                key={`nav-sub-item-${idx}`}
                onClick={this.handleSubItemClick(item, subItem)}>
                {subItem.title}
              </div>)
            : null
        }
      </div>
    </div>
  )

  showDisabled = (item) => (
    <div
      style={{ ...styles.itemWrapper, ...styles.disabledItemWrapper }}>
      {item.title}
    </div>
  )

  render() {
    const {
      item,
      disabled,
    } = this.props;

    const {
      activeLinkList,
      isDisplay,
    } = this.state;

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
