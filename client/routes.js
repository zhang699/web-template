import React from 'react';
import { Route, IndexRoute } from 'react-router';
import * as Pages from './components/Pages/';
import * as Backgrounds from './components/utils/Background/';

// TEST USED

import ChangePassword from './containers/ChangePassword';


// END TEST USED

export default (
  <Route>
    <Route path="/" component={Backgrounds.AuthBackground}>
      <Route path="/" component={Pages.LoginPage} />
      <IndexRoute component={Pages.LoginPage} />
    </Route>
    {/* Register and Login */}
    <Route path="auth" component={Backgrounds.AuthBackground}>
      <Route path="/" component={Pages.LoginPage} />
      <Route path="login" component={Pages.LoginPage} />
      <Route path="register" component={Pages.RegisterPage} />
      <Route path="register/:registerWay" component={Pages.RegisterPage} />
      <Route path="register/verify/:verifyWay" component={Pages.VerifyPage} />
      <IndexRoute component={Pages.LoginPage} />
    </Route>
    {/* Email unverified */}
    <Route path="personal" component={Backgrounds.PersonalBackground}>
      <Route path="/" component={Pages.PersonalInfoPage} />
      <Route path="changePassword/:stage" component={ChangePassword} />
      <Route path="bankaccount/change" component={Pages.PersonalBankAccountChangePage} />
      <Route path="emailchange" component={Pages.PersonalEmailChangePage} />
      <Route path="recommendationchange" component={Pages.PersonalRecommendationChangePage} />
      <IndexRoute component={Pages.PersonalInfoPage} />
    </Route>

    {/* Logined and Verified Members */}
    <Route path="main" component={Backgrounds.MainBackground}>

      <Route path="/" component={Pages.MainPage} />
      <IndexRoute component={Pages.MainPage} />
      <Route path="member" component={Pages.MemberOrganizationPage} />
      <Route path="member/organization" component={Pages.MemberOrganizationPage} />
      <Route path="member/recommendation" component={Pages.MemberRecommendationPage} />
      <Route path="member/bonussearch" component={Pages.MemberBonusSearchPage} />
      {/* <Route path="member/spbonus" component={Pages.MemberSPBonusPage} /> */}

      <Route path="feedback" component={Pages.FeedbackBonusSearchPage} />
      <Route path="feedback/bonussearch" component={Pages.FeedbackBonusSearchPage} />
      <Route path="feedback/fans" component={Pages.FeedbackFansPage} />
      {/* <Route path="feedback/exchange" component={Pages.FeedbackExchangePage} /> */}
      <Route path="feedback/registconvert" component={Pages.FeedbackRegistConvert} />
      <Route path="feedback/mpbonus" component={Pages.FeedbackMPBonusPage} />

      <Route path="transaction" component={Pages.TransactionFansRegisterPage} />
      <Route path="transaction/ratelist" component={Pages.TransactionRateListPage} />
      <Route path="transaction/pointmanage" component={Pages.TransactionPointManagePage} />
      <Route path="transaction/buypoint" component={Pages.TransactionBuyPointPage} />
      <Route path="transaction/salepoint" component={Pages.TransactionSalePointPage} />

      <Route path="service" component={Pages.ServicePostPage} />
      <Route path="service/post" component={Pages.ServicePostPage} />
      <Route path="service/history" component={Pages.ServiceHistoryPage} />

      <Route path="salespoint" component={Pages.SalesPointFeedbackPage} />
      <Route path="salespoint/purchase" component={Pages.SalesPointFeedbackPage} />
      <Route path="salespoint/items" component={Pages.SalesPointFeedbackItemsPage} />
      <Route path="salespoint/sales" component={Pages.SalesPointFeedbackSalesPage} />
      <Route path="salespoint/confirm" component={Pages.SalesPointFeedbackConfirmPage} />


      <Route path="fans/fansregister" component={Pages.TransactionFansRegisterPage} />
      <Route path="fans/accountupgrade" component={Pages.TransactionAccountUpgradePage} />
      <Route path="fans/acccountupgradelist" component={Pages.TransactionAccountUpgradeListPage} />
      <Route path="fans/purchasesearch" component={Pages.TransactionPurchaseSearchPage} />
      {/* <Route path="transaction2" component={Pages.TransactionTwoMangePage} /> */}
      {/* <Route path="transaction2/manage" component={Pages.TransactionTwoManagePage} /> */}
      {/* <Route path="transaction2/buy" component={Pages.TransactionTwoBuyPage} /> */}

    </Route>

    <Route path="verify" component={Backgrounds.AuthBackground} >
      <Route path="/" component={Pages.EmailVerifyPage} />
      <IndexRoute component={Pages.EmailVerifyPage} />
    </Route>

  </Route>
);
