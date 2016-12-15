import React, { Component, PropTypes as T } from 'react';
import { Provider, connect } from 'react-redux';
import routesProvider from '../routes';
import { Router } from 'react-router';
import * as Pages from '../components/pages/';
import * as Layouts from '../components/layouts/';

// i18n
import { I18nextProvider } from 'react-i18next';
import i18n from '../libs/i18n/';

class Root extends Component {
  componentWillMount() {

    const accessToken = localStorage.getItem('accessToken');
    // /varify/
    // if (!accessToken) {
    //   if (location.pathname !== '/verify') toRootPageAction();
    // } else {
      // 1. TODO VARIFY Token or extends
      // 2. GetMemberStatus

    // }
  }

  render() {
    const { store, history } = this.props;

    return (
      <Provider store={store}>
        <I18nextProvider i18n={i18n}>
          <div
            style={{ display: 'flex', justifyContent: 'center' }}>
            <Router history={history} routes={routesProvider({ acl: "ACL TEST"})} />
          </div>
        </I18nextProvider>
      </Provider>
    );
  }
}

Root.propTypes = {
  store: T.object.isRequired,
  history: T.object.isRequired,
};

const mapStateToProps = (state) => ({
});

export default connect(mapStateToProps, {

})(Root);
