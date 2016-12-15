const fs = require('fs');
const path = require('path');
const current = __dirname;
const root = path.join(__dirname, './client/components/pages/');

[
  "member/memberInfo",
  "member/bankAccount",
  "member/memberList",
  "member/memberPerfomanceList",
  "member/contribution",
  "account/changePassword",
  "account/setSecondLevelPassword",
  "account/changeSecondLevelPassword",
  "account/resetSecondLevelPassword",
  "account/loginLog",
  "order/orderRecord",
  "order/orderConfirmationList",
  "order/orderPurchase",
  "order/BTCReccharge",
  "order/BTCRechargeRecord",
  "order/WDDTransaction",
  "order/WDDTransactionRecord",
  "treasure/pointsRecord",
  "treasure/transferRechargePoint",
  "treasure/transferRechargePointRecord",
  "treasure/sendMerchadiseCard",
  "treasure/merchadiseCardRecord",
  "treasure/sendRPPoint",
  "treasure/RPPointRecord",
  "treasure/transferBonus",
  "treasure/transferBonusRecord",
  "treasure/exchangeBTCPoint",
  "treasure/exchangeBTCPointRecord",
  "security/securecy",
  "security/setSecurecy",
  "security/provingSecrecy",
  "security/setSafeKernel",
]
.map(item => { firstLev: item.split('/')[0], secLev: item.split('/')[1] })
.reduce((pre, cur) => {
  // TODO
}, {
  title: null,
  link: null,
  chidlrenNodes: []
});
