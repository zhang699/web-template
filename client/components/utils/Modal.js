import React from 'react';
import { yellowLock, money } from '../../assets/images/';
import Button from './Button.js';
import isEmpty from 'lodash/isEmpty';
// <Modal modal={} context={} blackContainer={styles.blackContainer} whiteBox={styles.whiteBox} />
// 於每個頁面調整
const switchModal = (stage, context, func) => {
  switch (stage) {

    case 'PersonalInfo': return PersonalInfo(context);
    case 'PersonalInfoError': return PersonalInfoError(context);
    case 'BankAccount': return BankAccount(context);
    case 'BankAccountError': return BankAccountError(context);
    case 'EmailChange': return EmailChange(context);
    case 'EmailChange2': return EmailChange2(context);
    case 'RecChange': return RecChange(context);
    case 'RecChangeError': return RecChangeError(context);

    case 'FeedbackFansPage': return FeedbackFansPage(context, func);
    case 'FeedbackFansPageConfirm': return FeedbackFansPageConfirm(context, func);
    case 'FeedbackExchangePage': return FeedbackExchangePage(context);
    case 'FeedbackExchangePageConfirm': return FeedbackExchangePageConfirm(context);
    case 'FeedbackRegistConvert': return FeedbackRegistConvert(context, func);
    case 'FeedbackRegistConvertConfirm': return FeedbackRegistConvertConfirm(context, func);
    case 'FeedbackMPBonusPage': return FeedbackMPBonusPage(context);
    case 'FeedbackMPBonusPageConfirm': return FeedbackMPBonusPageConfirm(context);

    case 'TransactionAccountUpgradePage': return TransactionAccountUpgradePage(context);
    case 'TransactionAccountUpgradePageConfirm': return TransactionAccountUpgradePageConfirm(context);
    case 'TransactionBuyPointPage': return TransactionBuyPointPage(context);
    case 'TransactionBuyPointPageConfirm': return TransactionBuyPointPageConfirm(context);
    case 'TransactionSalePointPage': return TransactionSalePointPage(context);
    case 'TransactionSalePointPageConfirm': return TransactionSalePointPageConfirm(context);

    case 'SalesPointFeedbackPage': return SalesPointFeedbackPage(context);
    case 'SalesPointFeedbackSalesPage': return SalesPointFeedbackSalesPage(context);
    case 'SalesPointFeedbackSalesPageConfirm': return SalesPointFeedbackSalesPageConfirm(context);
    case 'SalesPointFeedbackConfirmPage': return SalesPointFeedbackConfirmPage(context);
    case 'SalesPointFeedbackConfirmPageConfirm': return SalesPointFeedbackConfirmPageConfirm(context);


    case 'TransactionTwoBuyPointPage': return TransactionTwoBuyPointPage(context);
    case 'TransactionTwoBuyPointPageConfirm': return TransactionTwoBuyPointPageConfirm(context);

    case 'FansRegister': return FansRegister(context);
    case 'FansRegisterError': return FansRegisterError(context);

    default: break;
  }
}


const PersonalInfo = (context) => {
  return (
    <div style={{textAlign:'center'}}>
      <div style={{color: '#1f4b54',fontSize:'20px',marginTop:'20px'}}>個人資料設定成功</div>
      <div style={style.money}></div>
      <Button onClick={() => context.setState({ showModal: false })} style={{width:'385px',marginTop:'155px',marginLeft:'0px',height:'35px'}} name="確認" />
    </div>
  )
};
const PersonalInfoError = (context) => {
  return (
    <div style={{textAlign:'center'}}>
      <div style={{color: '#1f4b54',fontSize:'20px',marginTop:'20px'}}>個人資料設定錯誤</div>

      <Button onClick={() => context.setState({ showModal1: false })} style={{width:'385px',marginTop:'355px',marginLeft:'0px',height:'35px'}} name="確認" />
    </div>
  )
};
const BankAccount = (context) => {
  return (
    <div style={{textAlign:'center'}}>
      <div style={{color: '#1f4b54',fontSize:'20px',marginTop:'20px'}}>更改銀行帳戶成功</div>
      <div style={style.money}></div>
      <Button onClick={() => context.setState({ showModal: false })} style={{width:'385px',marginTop:'155px',marginLeft:'0px',height:'35px'}} name="確認" />
    </div>
  )
};
const BankAccountError = (context) => {
  return (
    <div style={{textAlign:'center'}}>
      <div style={{color: '#1f4b54',fontSize:'20px',marginTop:'20px'}}>更改銀行帳戶錯誤</div>

      <Button onClick={() => context.setState({ showModal1: false })} style={{width:'385px',marginTop:'355px',marginLeft:'0px',height:'35px'}} name="確認" />
    </div>
  )
};
const EmailChange = (context) => {
  return (
    <div style={{textAlign:'center'}}>
      <div style={{color: '#1f4b54',fontSize:'20px',marginTop:'20px'}}>回應錯誤，請重新操作</div>
      <div style={style.money}></div>
      <Button onClick={() => context.setState({ showModal: false })} style={{width:'385px',marginTop:'155px',marginLeft:'0px',height:'35px'}} name="確認" />
    </div>
  )
};
const EmailChange2 = (context) => {
  return (
    <div style={{textAlign:'center'}}>
      <div style={{color: '#1f4b54',fontSize:'20px',marginTop:'20px'}}>驗證信已寄出，請至信箱檢視</div>
      <div style={style.money}></div>
      <Button onClick={() => context.setState({ showModal2: false })} style={{width:'385px',marginTop:'155px',marginLeft:'0px',height:'35px'}} name="確認" />
    </div>
  )
};
const RecChange = (context) => {
  return (
    <div style={{textAlign:'center'}}>
      <div style={{color: '#1f4b54',fontSize:'20px',marginTop:'20px'}}>推薦人和安置人新增成功</div>
      <div style={style.money}></div>
      <Button onClick={() => context.setState({ showModal: false })} style={{width:'385px',marginTop:'155px',marginLeft:'0px',height:'35px'}} name="確認" />
    </div>
  )
};
const RecChangeError = (context) => {
  return (
    <div style={{textAlign:'center'}}>
      <div style={{color: '#1f4b54',fontSize:'20px',marginTop:'20px'}}>回應錯誤，請重新點擊確認</div>
      <div style={style.money}></div>
      <Button onClick={() => context.setState({ showModal1: false })} style={{width:'385px',marginTop:'155px',marginLeft:'0px',height:'35px'}} name="確認" />
    </div>
  )
};

const FeedbackFansPage = (context, func) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <div style={{ color: '#1f4b54', fontSize: '20px', marginTop: '20px', textAlign: 'center', flex: '1' }}>{context.state.select}</div>
      <div style={{ fontSize: '16px', marginTop: '40px', display: 'flex' }}>
        <span style={{ color: '#1f4b54', textAlign: 'right', flex: '1', marginRight: '5px' }}>轉入帳號</span>
        <span style={{ color: 'rgb(194, 78, 48)', textAlign: 'left', flex: '1', marginLeft: '5px' }}>{context.state.transAccount}</span>
      </div>
      <div style={{ fontSize: '16px', marginTop: '40px', flex: '1', display: 'flex' }}>
        <span style={{ color: '#1f4b54', textAlign: 'right', flex: '1', marginRight: '5px' }}>轉入點數</span>
        <span style={{ color: 'rgb(194, 78, 48 )', textAlign: 'left', flex: '1', marginLeft: '5px' }}>{context.state.transAmount}</span>
      </div>
      <div style={{ fontSize: '16px', marginTop: '40px', flex: '1', display: 'flex' }}>
        <span style={{ color: '#1f4b54', textAlign: 'right', flex: '1', marginRight: '5px' }}>備註</span>
        <span style={{ color: 'rgb(194, 78, 48 )', textAlign: 'left', flex: '1', marginLeft: '5px' }}>{context.state.remark || '無'}</span>
      </div>
      <input
        style={{
          width: '115px',
          height: '32px',
          border: 'solid 1px #1f4b54',
          textAlign: 'center',
          margin: 'auto',
          marginTop: '50px' }}
          placeholder='請輸入二級密碼'
          type="password"
          onChange={(e) => context.setState({ secondPwd: e.target.value })} />
        <Button
          onClick={() => {
            if (context.state.secondPwd) {
              func(context.state.secondPwd, context.setState({ showModal1: false, showModal2: true, secondPwd: null }));
            } else {
              alert('please type second level password')
            }
          }
          }
          style={{ width: '385px', marginTop: '108px', marginLeft: '0px', height: '35px' }} name="確認" />
    </div>
  )
}
const FeedbackFansPageConfirm = (context, func) => {
  return (
    <div style={{textAlign:'center'}}>
      <div style={{color: '#1f4b54',fontSize:'20px',marginTop:'20px'}}>粉絲註冊 / AP 點轉換成功</div>
      <div style={style.money}></div>
      <Button onClick={() => func({}, context.setState({ showModal2: false }))} style={{width:'385px',marginTop:'155px',marginLeft:'0px',height:'35px'}} name="確認" />
    </div>
  )
};

const FeedbackExchangePage = (context) => {
  return (
    <div style={{textAlign:'center'}}>
      <div style={{color: '#1f4b54',fontSize:'20px',marginTop:'20px'}}>兌換回饋積分</div>
      <div style={{display:'flex',flexDirection:'column'}}>
        <div style={{color: '#1f4b54',fontSize:'16px',marginTop:'40px'}}>銀行戶名</div>
        <div style={{color: '#e56949',marginTop:'10px'}}>張恩智</div>
      </div>
      <div style={{display:'flex',flexDirection:'column'}}>
        <div style={{color: '#1f4b54',fontSize:'16px',marginTop:'40px'}}>銀行帳號</div>
        <div style={{color: '#e56949',marginTop:'10px'}}>kk4555</div>
      </div>
      <input style={{width:'115px',height:'32px',border:'solid 1px #1f4b54',textAlign: 'center', marginTop: '50px'}} placeholder='請輸入二級密碼' />
      <Button onClick={() => context.setState({ showModal: false, showModal1: true })} style={{width:'385px',marginTop:'108px',marginLeft:'0px',height:'35px'}} name="確認" />
    </div>
  )
}
const FeedbackExchangePageConfirm = (context) => {
  return (
    <div style={{textAlign:'center'}}>
      <div style={{color: '#1f4b54',fontSize:'20px',marginTop:'20px'}}>兌換回饋積分成功</div>
      <div style={style.money}></div>
      <Button onClick={() => context.setState({ showModal1: false })} style={{width:'385px',marginTop:'155px',marginLeft:'0px',height:'35px'}} name="確認" />
    </div>
  )
};
const FeedbackRegistConvert = (context, func) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <div style={{ color: '#1f4b54', fontSize: '20px', marginTop: '20px', textAlign: 'center', flex: '1' }}>回饋積分註冊轉換</div>
      <div style={{ fontSize: '16px', marginTop: '40px', flex: '1', display: 'flex' }}>
        <span style={{ color: '#1f4b54', textAlign: 'right', flex: '1', marginRight: '5px' }}>回饋積分帳戶</span>
        <span style={{ color: 'rgb(194, 78, 48 )', textAlign: 'left', flex: '1', marginLeft: '5px' }}>{context.state.refundPoint}</span>
      </div>
      <div style={{ fontSize: '16px', marginTop: '40px', flex: '1', display: 'flex' }}>
        <span style={{ color: '#1f4b54', textAlign: 'right', flex: '1', marginRight: '5px' }}>轉換金額</span>
        <span style={{ color: 'rgb(194, 78, 48 )', textAlign: 'left', flex: '1', marginLeft: '5px' }}>{context.state.transAmount || '無'}</span>
      </div>
      <input
        style={{
          width: '115px',
          height: '32px',
          border: 'solid 1px #1f4b54',
          textAlign: 'center',
          margin: 'auto',
          marginTop: '50px' }}
        placeholder='請輸入二級密碼'
        type="password"
        onChange={(e) => context.setState({ secondPwd: e.target.value },() => console.log(context.state))} />
      <Button
        onClick={() => {
          if (context.state.secondPwd) {
            func(context.state.secondPwd, context.setState({ showModal: false, showModal1: true, secondPwd: null }));
          } else {
            alert('please type second level password')
          }
        }
        }
        style={{ width: '385px', marginTop: '156px', marginLeft: '0px', height: '35px' }} name="確認" />
    </div>
  )
}
const FeedbackRegistConvertConfirm = (context, func) => {
  return (
    <div style={{textAlign:'center'}}>
      <div style={{color: '#1f4b54',fontSize:'20px',marginTop:'20px'}}>回饋積分帳戶轉換成功</div>
      <div style={style.money}></div>
      <Button onClick={() => func({}, context.setState({ showModal1: false }))} style={{width:'385px',marginTop:'155px',marginLeft:'0px',height:'35px'}} name="確定轉換" />
    </div>
  )
};
const FeedbackMPBonusPage = (context) => {
  return (
    <div style={{textAlign:'center'}}>
      <div style={{color: '#1f4b54',fontSize:'20px',marginTop:'20px'}}>易物點轉換 MP 積分</div>
      <div style={{display:'flex',flexDirection:'column'}}>
        <div style={{color: '#1f4b54',fontSize:'16px',marginTop:'40px'}}>數量</div>
        <div style={{color: '#e56949',marginTop:'10px'}}>0.00</div>
      </div>
      <div style={{display:'flex',flexDirection:'column'}}>
        <div style={{color: '#1f4b54',fontSize:'16px',marginTop:'40px'}}>金額</div>
        <div style={{color: '#e56949',marginTop:'10px'}}>4555</div>
      </div>
      <input style={{width:'115px',height:'32px',border:'solid 1px #1f4b54',textAlign: 'center', marginTop: '50px'}} placeholder='請輸入二級密碼' />
      <Button onClick={() => context.setState({ showModal: false, showModal1: true })} style={{width:'385px',marginTop:'108px',marginLeft:'0px',height:'35px'}} name="確定轉換" />
    </div>
  )
}
const FeedbackMPBonusPageConfirm = (context) => {
  return (
    <div style={{textAlign:'center'}}>
      <div style={{color: '#1f4b54',fontSize:'20px',marginTop:'20px'}}>易物點轉換 MP 積分成功</div>
      <div style={style.money}></div>
      <Button onClick={() => context.setState({ showModal1: false })} style={{width:'385px',marginTop:'155px',marginLeft:'0px',height:'35px'}} name="確認" />
    </div>
  )
};

const TransactionAccountUpgradePage = (context) => {
  return (
    <div style={{textAlign:'center'}}>
      <div style={{color: '#1f4b54',fontSize:'20px',marginTop:'20px'}}>帳戶升級</div>
        <div style={{display:'flex',flexDirection:'column'}}>
          <div style={{color: '#1f4b54',fontSize:'16px',marginTop:'40px'}}>交易帳戶</div>
          <div style={{color: '#e56949',marginTop:'10px'}}>0.00</div>
        </div>
      <div style={{display:'flex',flexDirection:'column'}}>
        <div style={{color: '#1f4b54',fontSize:'16px',marginTop:'40px'}}>交易價格</div>
        <div style={{color: '#e56949',marginTop:'10px'}}>0.00</div>
      </div>
      <div style={{display:'flex',flexDirection:'column'}}>
        <div style={{color: '#1f4b54',fontSize:'16px',marginTop:'40px'}}>扣款總額</div>
        <div style={{color: '#e56949',marginTop:'10px'}}>4555</div>
      </div>
      <input style={{width:'115px',height:'32px',border:'solid 1px #1f4b54',textAlign: 'center', marginTop: '20px'}} placeholder='請輸入二級密碼' />
      <Button onClick={() => context.setState({ showModal:false,showModal1:true })} style={{width:'395px',marginTop:'20px',marginLeft:'0px',height:'35px'}} name="確定轉換" />
    </div>
  )
}
const TransactionAccountUpgradePageConfirm = (context) => {
  return (
    <div style={{textAlign:'center'}}>
      <div style={{color: '#1f4b54',fontSize:'20px',marginTop:'20px'}}>帳戶升級成功</div>
      <div style={style.money}></div>
      <Button onClick={() => context.setState({ showModal1: false })} style={{width:'395px',marginTop:'155px',marginLeft:'0px',height:'35px'}} name="確認" />
    </div>
  )
};

const TransactionBuyPointPage = (context) => {
  return (
    <div style={{textAlign:'center'}}>
      <span style={{ position: 'absolute', right: '5px', top: '5px', cursor: 'pointer' }} onClick={() => context.setState({ showModal: false })}><i className="fa fa-times fa-lg"></i></span>
      <div style={{color: '#1f4b54',fontSize:'20px',marginTop:'20px'}}>購買易物點</div>
      <div style={{display:'flex',flexDirection:'column'}}>
        <div style={{color: '#1f4b54',fontSize:'16px',marginTop:'40px'}}>數量</div>
        <div style={{color: '#e56949',marginTop:'10px'}}>{context.state.buyUnit}</div>
      </div>
      <div style={{display:'flex',flexDirection:'column'}}>
        <div style={{color: '#1f4b54',fontSize:'16px',marginTop:'40px'}}>金額</div>
        <div style={{color: '#e56949',marginTop:'10px'}}>{context.state.buyUnit * context.state.price}</div>
      </div>
      <input
        onChange={ e => {
          context.setState({ secLevPwdInput: e.target.value }, () => console.log(context.state))
        }}
        // onBlur={context.validate(context.secLevPwdInput, 'secLevPwdInput')}
        style={{width:'115px',height:'32px',border:'solid 1px #1f4b54',textAlign: 'center', marginTop: '50px'}}
        placeholder='請輸入二級密碼' />
      {
        (!!context.secLevPwdInput) ?
          <Button
            onClick={() => context.setState({ showModal: false, showModal1: true })}
            style={{width:'385px',marginTop:'108px',marginLeft:'0px',height:'35px'}} name="確定轉換" />
          :
          <Button disabled onClick={() => context.setState({ showModal: false, showModal1: true })} style={{width:'385px',marginTop:'108px',marginLeft:'0px',height:'35px'}} name="確定轉換" />
      }
    </div>
  );
};
const TransactionBuyPointPageConfirm = (context) => {
  return (
    <div style={{textAlign:'center'}}>
      <div style={{color: '#1f4b54',fontSize:'20px',marginTop:'20px'}}>易物點購買成功</div>
      <div style={style.money}></div>
      <Button onClick={() => context.setState({ showModal1: false })} style={{width:'385px',marginTop:'155px',marginLeft:'0px',height:'35px'}} name="確認" />
    </div>
  )
};

const TransactionSalePointPage = (context) => {
  return (
    <div style={{textAlign:'center'}}>
      <div style={{color: '#1f4b54',fontSize:'20px',marginTop:'20px'}}>出售易物點</div>
      <div style={{display:'flex',flexDirection:'column'}}>
        <div style={{color: '#1f4b54',fontSize:'16px',marginTop:'40px'}}>數量</div>
        <div style={{color: '#e56949',marginTop:'10px'}}>0.00</div>
      </div>
      <div style={{display:'flex',flexDirection:'column'}}>
        <div style={{color: '#1f4b54',fontSize:'16px',marginTop:'40px'}}>單位</div>
        <div style={{color: '#e56949',marginTop:'10px'}}>4555</div>
      </div>
      <div style={{display:'flex',flexDirection:'column'}}>
        <div style={{color: '#1f4b54',fontSize:'16px',marginTop:'40px'}}>總額</div>
        <div style={{color: '#e56949',marginTop:'10px'}}>4555</div>
      </div>
      <input style={{width:'115px',height:'32px',border:'solid 1px #1f4b54',textAlign: 'center', marginTop: '50px'}} placeholder='請輸入二級密碼' />
      <Button onClick={() => context.setState({ showModal: false, showModal1: true })} style={{width:'385px',marginTop:'10px',marginLeft:'0px',height:'35px'}} name="確定轉換" />
    </div>
  )
}
const TransactionSalePointPageConfirm = (context) => {
  return (
    <div style={{textAlign:'center'}}>
      <div style={{color: '#1f4b54',fontSize:'20px',marginTop:'20px'}}>易物點出售成功</div>
      <div style={style.money}></div>
      <Button onClick={() => context.setState({ showModal1: false })} style={{width:'385px',marginTop:'155px',marginLeft:'0px',height:'35px'}} name="確認" />
    </div>
  )
};



const SalesPointFeedbackSalesPage = (context) => {
  return (
    <div style={{textAlign:'center'}}>
      <div style={{color: '#1f4b54',fontSize:'20px',marginTop:'20px'}}>賣出銷售回饋積分</div>
      <div style={{display:'flex',flexDirection:'column'}}>
        <div style={{color: '#1f4b54',fontSize:'16px',marginTop:'40px'}}>銀行戶名</div>
        <div style={{color: '#e56949',marginTop:'10px'}}>張恩智</div>
      </div>
      <div style={{display:'flex',flexDirection:'column'}}>
        <div style={{color: '#1f4b54',fontSize:'16px',marginTop:'40px'}}>銀行帳號</div>
        <div style={{color: '#e56949',marginTop:'10px'}}>kk4555</div>
      </div>
      <input style={{width:'115px',height:'32px',border:'solid 1px #1f4b54',textAlign: 'center', marginTop: '50px'}} placeholder='請輸入二級密碼' />
      <Button onClick={() => context.setState({ showModal: false, showModal1: true })} style={{width:'385px',marginTop:'108px',marginLeft:'0px',height:'35px'}} name="確認賣出" />
    </div>
  )
}
const SalesPointFeedbackSalesPageConfirm = (context) => {
  return (
    <div style={{textAlign:'center'}}>
      <div style={{color: '#1f4b54',fontSize:'20px',marginTop:'20px'}}>賣出銷售回饋積分成功</div>
      <div style={style.money}></div>
      <Button onClick={() => context.setState({ showModal1: false })} style={{width:'385px',marginTop:'155px',marginLeft:'0px',height:'35px'}} name="確認" />
    </div>
  )
};


const SalesPointFeedbackPage = (context) => {
  return (
    <div style={{textAlign:'center'}}>
      <div style={{color: '#1f4b54',fontSize:'20px',marginTop:'20px'}}>出售回饋積分</div>
      <input style={{width:'115px',height:'32px',border:'solid 1px #1f4b54',textAlign: 'center', marginTop: '50px'}} placeholder='請輸入二級密碼' />
      <Button onClick={() => context.setState({ showModal: false, ok:true })} style={{width:'385px',marginTop:'268px',marginLeft:'0px',height:'35px'}} name="確定出售" />
    </div>
  )
}


const SalesPointFeedbackConfirmPage = (context) => {
  return (
    <div style={{textAlign:'center'}}>
      <div style={{color: '#1f4b54',fontSize:'20px',marginTop:'20px'}}>核可回饋積分銷售</div>
      <input style={{width:'115px',height:'32px',border:'solid 1px #1f4b54',textAlign: 'center', marginTop: '50px'}} placeholder='請輸入二級密碼' />
      <Button onClick={() => context.setState({ showModal: false, showModal1: true })} style={{width:'385px',marginTop:'268px',marginLeft:'0px',height:'35px'}} name="確定核可" />
    </div>
  )
}
const SalesPointFeedbackConfirmPageConfirm = (context) => {
  return (
    <div style={{textAlign:'center'}}>
      <div style={{color: '#1f4b54',fontSize:'20px',marginTop:'20px'}}>核可回饋積分銷售成功</div>
      <div style={style.money}></div>
      <Button onClick={() => context.setState({ showModal1: false })} style={{width:'385px',marginTop:'155px',marginLeft:'0px',height:'35px'}} name="確認" />
    </div>
  )
};

//
// const TransactionTwoBuyPointPage = (context) => {
//   return (
//     <div style={{textAlign:'center'}}>
//       <div style={{color: '#1f4b54',fontSize:'20px',marginTop:'20px'}}>購買易物點2</div>
//       <div style={{display:'flex',flexDirection:'column'}}>
//         <div style={{color: '#1f4b54',fontSize:'16px',marginTop:'40px'}}>數量</div>
//         <div style={{color: '#e56949',marginTop:'10px'}}>0.00</div>
//       </div>
//       <div style={{display:'flex',flexDirection:'column'}}>
//         <div style={{color: '#1f4b54',fontSize:'16px',marginTop:'40px'}}>金額</div>
//         <div style={{color: '#e56949',marginTop:'10px'}}>4555</div>
//       </div>
//       <input style={{width:'115px',height:'32px',border:'solid 1px #1f4b54',textAlign: 'center', marginTop: '50px'}} placeholder='請輸入二級密碼' />
//       <Button onClick={() => context.setState({ showModal: false, showModal1: true })} style={{width:'385px',marginTop:'108px',marginLeft:'0px',height:'35px'}} name="確定轉換" />
//     </div>
//   )
// }
// const TransactionTwoBuyPointPageConfirm = (context) => {
//   return (
//     <div style={{textAlign:'center'}}>
//       <div style={{color: '#1f4b54',fontSize:'20px',marginTop:'20px'}}>易物點購買成功</div>
//       <div style={style.money}></div>
//       <Button onClick={() => context.setState({ showModal1: false })} style={{width:'385px',marginTop:'155px',marginLeft:'0px',height:'35px'}} name="確認" />
//     </div>
//   )
// };

const FansRegister = (context) => {
  return (
    <div style={{textAlign:'center'}}>
      <div style={{color: '#1f4b54',fontSize:'20px',marginTop:'20px'}}>新增粉絲帳戶成功</div>
      <div style={style.money}></div>
      <Button onClick={() => context.closeModal()} style={{width:'385px',marginTop:'155px',marginLeft:'0px',height:'35px'}} name="確認" />
    </div>
  )
};
const FansRegisterError = (context) => {
  return (
    <div style={{textAlign:'center'}}>
      <div style={{color: '#1f4b54',fontSize:'20px',marginTop:'20px'}}>新增粉絲帳戶錯誤</div>

      <Button onClick={() => context.closeModal()} style={{width:'385px',marginTop:'355px',marginLeft:'0px',height:'35px'}} name="確認" />
    </div>
  )
};


const Modal = (props) => {
  return (
    <div>
      <div style={Object.assign(style.blackContainer,props.blackContainer)}>
      </div>
      <div style={Object.assign(style.container1,props.whiteBox)}>
        {switchModal(props.modal, props.context, props.func)}
      </div>
    </div>
  );
};

const style = {
  container: {
  },
  blackContainer: {
    position: 'absolute',
    top: '-180px',
    left: '-300px',
    width: '1400px',
    height: '1000px',
    opacity: '0.5',
    background: 'black',
    zIndex: '1000'
  },
  container1: {
    background: 'white',
    width: '30vw',
    height: '350px',
    position: 'absolute',
    top: '5vh',
    left: '18vw',
    zIndex : '2000'
  },
  yellowLock: {
    overflow: 'hidden',
    width: '107px',
    height: '121px',
    border: 'solid #FFF 5px',
    boxSizing: 'border-box',
    backgroundImage: `url(${yellowLock})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center center',
    marginLeft:'35%',
    marginTop: '50px'
  },
  money: {
    overflow: 'hidden',
    width: '165px',
    height: '151px',
    border: 'solid #FFF 5px',
    boxSizing: 'border-box',
    backgroundImage: `url(${money})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center center',
    marginLeft: '30%',
    marginTop: '50px'
  },
  btn: {
    height:'50px',
    width: '100%',
    marginTop: '65px'
  },
  title:{
    color: '#1f4b54',
    marginTop: '50px'
  }
}

Modal.propTypes = {
};

export default Modal;
