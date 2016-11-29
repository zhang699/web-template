import React, { PropTypes as T } from 'react';
import radium from 'radium';
import { translate } from 'react-i18next';
import EmailVerifyBlock from '../../containers/EmailVerifyBlock';
const styles = {
  container: {
    backgroundColor: '#fff',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    boxSizing: 'borderBox',
    width: '100%',
  },
  row: {
    height: '40vh',
  }
};


const VerifyPage = (props) => {
  const { t } = props;
  return (
    <div style={styles.container}>
      <div style={styles.row}>
        <EmailVerifyBlock />
      </div>
    </div>
  );
};

VerifyPage.propTypes = {
  t: T.func.isRequired
};

export default translate()(radium(VerifyPage));
