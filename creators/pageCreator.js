
const fs = require('fs');
const path = require('path');
const current = __dirname;
const root = path.join(__dirname, './client/components/pages/');

[
  'login/LoginPage.js',
  'login/RegisterPage.js',
  'login/PerfectPage.js',

  'member/MemberInfoPage.js',
  'member/BankAccountPage.js',
  'member/MemberListPage.js',
  'member/MemberPerfomanceListPage.js',
  'member/ContributionPage.js',

  'account/PasswordChangePage.js',
  'account/SecondLevelPasswordSetPage.js',
  'account/SecondLevelPasswordChangePage.js',
  'account/SecondLevelPasswordResetPage.js',
  'account/LoginLogPage.js',

  'order/OrderRecordPage.js',
  'order/OrderConfirmationListPage.js',
  'order/OrderPurchasePage.js',
  'order/BTCRecchargePage.js',
  'order/BTCRechargeRecordPage.js',
  'order/WDDTransactionPage.js',
  'order/WDDTransactionRecordePage.js',

  'treasure/PointsRecordPage.js',
  'treasure/RechargePointTransferPage.js',
  'treasure/RechargePointTransferRecordPage.js',
  'treasure/MerchadiseCardSendPage.js',
  'treasure/MerchadiseCardSendRecordPage.js',
  'treasure/RPPointSendPage.js',
  'treasure/RPPointSendRecordPage.js',
  'treasure/BonusTransferPage.js',
  'treasure/BonusTransferRecordPage.js',
  'treasure/BTCPointExchangePage.js',
  'treasure/BTCPointExchangeRecordPage.js',

  'security/SecurecyPage.js',
  'security/SecurecySetPage.js',
  'security/SecrecyProvingPage.js',
  'security/SafeKernelSetPage.js'
].forEach(file => {
  const componentName = file.split('/')[1].replace('.js', "");
  fs.writeFile(path.join(root, file),
`
import React from 'react';
import radium from 'radium';
const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    boxSizing: 'border-box',
  }
};

const ${componentName} = (props) => (
  <div style={styles.container}>
    ${componentName}
  </div>
);

export default radium(${componentName});
`  , err => {
    err && console.log(err);
    console.log(`The file in ${path.join(root, file)} was saved!`);
  });
});
