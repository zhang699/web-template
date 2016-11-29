
///////Radium bug 為在不同元件引用同一個ＣＯＭＰＯＮＥＮＴ後改變引用的樣式之後會記憶上一個改變的ＳＴＹＬＥ
///導致跑版

import React from 'react';
import { yellowLock } from '../../assets/images/'
import { money } from '../../assets/images/'
import Button from './ButtonforPerson.js'

// <Modal modal={} context={} blackContainer={styles.blackContainer} whiteBox={styles.whiteBox} />
// 於每個頁面調整
const switchModal = (stage, context) => {
  switch (stage) {
    case 'loginpassword': return loginPasswordModal(context);
    case 'loginpasswordError': return loginPasswordErrorModal(context);
    case 'secondpassword': return secondPasswordModal(context);
    case 'secondpasswordError': return secondPasswordErrorModal(context);
    case 'paymentpassword': return paymentPasswordModal(context);
    case 'paymentpasswordError': return paymentPasswordErrorModal(context);

    default: break;
  }
}

const loginPasswordModal = (context) => {
  return (
    <div style={style.container}>
      <div style={{textAlign:'center'}}><p style={style.title}>登入密碼更改成功</p></div>
      <div style={style.yellowLock}></div>
      <Button onClick={() => context.setState({ showModal: false, modalType: '' })} style={style.btn} name="確認" />
    </div>
  )
}
const loginPasswordErrorModal = (context) => {
  return (
    <div style={style.container}>
      <div style={{textAlign:'center'}}><p style={style.title}>登入密碼錯誤</p></div>

      <Button onClick={() => context.setState({ showModal: false, modalType: '' })} style={{...style.btn,marginTop: '230px'}} name="確認" />
    </div>
  )
}

const secondPasswordModal = (context) => {
  return (
    <div style={style.container}>
      <div style={{textAlign:'center'}}><p style={style.title}>第二登入密碼設定成功</p></div>
      <div style={style.yellowLock}></div>
      <Button onClick={() => context.setState({ showModal: false, modalType: '' })} style={style.btn} name="確認" />
    </div>
  )
}
const secondPasswordErrorModal = (context) => {
  return (
    <div style={style.container}>
      <div style={{textAlign:'center'}}><p style={style.title}>第二登入密碼錯誤</p></div>

      <Button onClick={() => context.setState({ showModal: false, modalType: '' })} style={{...style.btn,marginTop: '230px'}} name="確認" />
    </div>
  )
}

const paymentPasswordModal = (context) => {
  return (
    <div style={style.container}>
      <div style={{textAlign:'center'}}><p style={style.title}>二級密碼設定成功</p></div>
      <div style={style.yellowLock}></div>
      <Button onClick={() => context.setState({ showModal: false, modalType: '' })} style={style.btn} name="確認" />
    </div>
  )
}

const paymentPasswordErrorModal = (context) => {
  return (
    <div style={style.container}>
      <div style={{textAlign:'center'}}><p style={style.title}>二級登入密碼錯誤</p></div>

      <Button onClick={() => context.setState({ showModal: false, modalType: '' })} style={{...style.btn,marginTop: '230px'}} name="確認" />
    </div>
  )
}
const Modal = (props) => {
  return (
    <div>
      <div style={Object.assign(style.blackContainer,props.blackContainer)}>
      </div>
      <div style={Object.assign(style.container1,props.whiteBox)}>
        {switchModal(props.modal,props.context)}
      </div>
    </div>
  );
};

const style = {
  container: {
  },
  blackContainer: {
    position: 'absolute',
    top: '-80px',
    left: '0px',
    width: '1400px',
    height: '1400px',
    opacity: '0.5',
    background: 'black',
    zIndex: '1000'
  },
  container1: {
    background: 'white',
    width: '30vw',
    height: '350px',
    position: 'absolute',
    top: '20vh',
    left: '38vw',
    zIndex: '2000'
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
    marginLeft: '35%',
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
    height: '50px',
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
