import React, { Component, PropTypes as T } from 'react';
import { connect } from 'react-redux';
import { replace } from 'react-router-redux';
import radium from 'radium';
import R from 'ramda';

const styles = {
  itemWrapper: {
    boxSizing: 'border-box',
    position: 'relative',
    width: '100%',
    minHeight: '30px',
    padding: '10px 40px',
    fontSize: '15px',
    lineHeight: '30px',
    color: '#1f4b54',
    cursor: 'pointer',
    WebkitUserSelect: 'none',
    MozUserSelect: 'none',
    MsUserSelect: 'none',
    userSelect: 'none',
    ':hover': {
      backgroundColor: 'rgba(229, 105, 73, 0.5)',
      color: '#fff',
    },
    ':active': {
      backgroundColor: 'rgba(229, 105, 73, 1)',
      color: '#fff',
    }
  },
  activeItemWrapper: {
    backgroundColor: 'rgba(229, 105, 73, 1)',
    color: '#fff',
  },
  disabledItemWrapper: {
    color: 'rgba(150, 150, 150, 0.6)',
    cursor: 'not-allowed',
  },
  subItemWrapper: {
    position: 'relative',
    height: '18px',
    cursor: 'pointer',
    color: 'rgb(109, 185, 199)',
    padding: '5px 40px',
    lineHeight: '18px',
    fontSize: '10px',
    WebkitUserSelect: 'none',
    MozUserSelect: 'none',
    MsUserSelect: 'none',
    userSelect: 'none',
    ':hover': {
      color: 'rgba(229, 105, 73, 0.5)',
      borderLeft: '4px solid rgba(229, 105, 73, 0.5)',
    },
    ':active': {
      color: 'rgba(229, 105, 73, 1)',
      borderLeft: '4px solid rgba(229, 105, 73, 1)',
    }
  },
  activeSubItemWrapper: {
    color: 'rgba(229, 105, 73, 1)',
    borderLeft: '4px solid rgba(229, 105, 73, 1)',
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
