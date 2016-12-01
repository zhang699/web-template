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

  render() {
    const {
      activeLinkList,
      // memberStatus,
    } = this.state;
    return (
      <div style={{ minHeight: '80vh' }}>
        {navTreeList.map((item, idx) =>
          (
            (activeLinkList[1] === item.link) ?
              <NavItem isDisplay key={`nav-item-${idx}`} item={item} disabled={(idx % 2 === 0)} />
            : <NavItem isDisplay={false} key={`nav-item-${idx}`} item={item} disabled={(idx % 2 === 0)} />
          )
        )}
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
