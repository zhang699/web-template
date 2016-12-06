import React, { Component, PropTypes as T } from 'react';
import { connect } from 'react-redux';
import { replace } from 'react-router-redux';
import radium from 'radium';
import R from 'ramda';
import * as fonts from '../../styles/fonts';
import { lightBlue400, lightBlue600, blueGrey100, blueGrey300, blueGrey600, blue500, blue300 } from '../../styles/colors';

const styles = {
  itemWrapper: {
    ...fonts.p,
    boxSizing: 'border-box',
    position: 'relative',
    width: '100%',
    minHeight: '30px',
    padding: '10px 40px',
    lineHeight: '30px',
    color: blueGrey600,
    cursor: 'pointer',
    WebkitUserSelect: 'none',
    MozUserSelect: 'none',
    MsUserSelect: 'none',
    userSelect: 'none',
    ':hover': {
      backgroundColor: lightBlue400,
      color: '#fff',
    },
    ':active': {
      backgroundColor: lightBlue600,
      color: '#fff',
    }
  },
  activeItemWrapper: {
    backgroundColor: lightBlue600,
    color: '#fff',
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
      color: blue500,
      borderLeft: `4px solid ${blue500}`,
    },
    ':active': {
      color: blue300,
      borderLeft: `4px solid ${blue300}`,
    }
  },
  activeSubItemWrapper: {
    color: blue300,
    borderLeft: `4px solid ${blue300}`,
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
            item.link === activeLinkList[1] ||
            (item.link === 'main' && item.link === activeLinkList[0] && activeLinkList[1] === '')
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
                  (item.link === activeLinkList[1] && subItem.link === activeLinkList[2]) ?
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
