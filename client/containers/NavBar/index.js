import React, { Component, PropTypes as T } from 'react';
import { connect } from 'react-redux';
import radium from 'radium';
import navTreeList from './NavTreeList';
import NavItem from './navItem';
import R from 'ramda';


class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeLinkList: R.tail(R.split('/', props.path)),
      memberStatus: props.member.memberStatus,
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
      memberStatus: nextProps.member.memberStatus,
    });
  }

  render() {
    const {
      activeLinkList,
      memberStatus,
    } = this.state;
    return (
      <div style={{ minHeight: '80vh', width: '160px' }}>
        {navTreeList.map((item, idx) =>
          (
            (activeLinkList[1] === item.link) ?
              <NavItem isDisplay key={`nav-item-${idx}`} item={item} disabled={(memberStatus === 'INACTIVE')} />
            : <NavItem isDisplay={false} key={`nav-item-${idx}`} item={item} disabled={(memberStatus === 'INACTIVE')} />
          )
        )}
      </div>
      );
  }
}
//
NavBar.propTypes = {
  path: T.string,
  toPersonalPageAction: T.func,
};

//
const mapStateToProps = (state) => ({
  path: state.routing.locationBeforeTransitions.pathname,
  member: state.Member.Data,
});


export default connect(mapStateToProps, {
  toPersonalPageAction: toPersonalPage,
})(radium(NavBar));
