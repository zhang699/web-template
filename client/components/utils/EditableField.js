import React from 'react';


/* 使用說明： ＰＡＲＥＮＴ須使用如下的state tree */
// //
// this.state = {
//   LastName: {
//     value: '',     //顯示之值
//     show: true
//     inputValue: ''  //輸入之值
//   }
// }
//
// //         <EditableField
//             content="address"
//             context={this}
//             placeholder="詳細地址"
//             container={{width: '480px'}}           //整體大小及邊距
//             input={{width: '700px'}}               //內部input之寬度
//             inlineStyle={{lineHeight:'32px'}}     //調整顯示之文字
//             noPen='true'                          //是否顯示pen
//             validate={this.validate('LastName')} //ture顯示錯誤訊息在下方
//             validateText="姓氏格式錯誤"            //下方錯誤之validate文字
//             type="password"   //input框的格式
//           />

const style = {
  container: {
    width: '190px',
    height: '44px',
    border: '1px solid #1f4b53'
  },
  leftContainer: {
    background: '#1f4b53',
    width: '100px',
    height: '46px',
    textAlign: 'center',
    color: 'white',
    lineHeight: '46px',
    fontSize: '13px'
  },
  pen: {
    marginTop: '12px',
    float: 'right',
    marginRight: '5px',
    height: '25px',
    border: 'none',
    background: 'white'
  },
  input: {
    height: '37px',
    textAlign: 'center'
  },
  right: {
    marginLeft: '8px'
  },
  text: {
    fontSize: '8px',
    height: '20px'
  },
  ii: {
    fontSize: '2.5em'
  },
  validate: {
    position: 'absolute',
    fontSize: '10px',
    top: '50px',
    left: '160px',
    color: 'red'
  }
}

const EditableField = (props) => {

  const penClick = (element) => {
    props.context.setState(
      {
        [element]: {
          show: false,
          value: props.context.state[props.content].value,
        }
      }
    );
  };

  const confirm = (element) => {
    props.context.setState(
      {
        [element]: {
          show: true,
          value: props.context.state[props.content].inputValue,
        }
      });
  };

  const cancel = (element) => {
    props.context.setState(
      {
        [element]: {
          show: true,
          value: props.context.state[props.content].value
        }
      }
    );
  };

  const userInput = (e, element) => {
    props.context.setState(
      {
        [element]: {
          show: false,
          value: props.context.state[props.content].value,
          inputValue: e.target.value
        }
      }
    );
  }

  return (
    <div style={Object.assign({ display: 'flex', position: 'relative' }, props.wrapper)}>
    <div style={style.leftContainer}>{props.placeholder}</div>
    <div style={Object.assign({},style.container,props.container)} >
      {
        props.context.state[props.content].show
        ?
          <div style={props.inlineStyle || { lineHeight: '42px', textAlign: 'center', fontSize: '12px', width: '100%', height: '100%' }}>
            <div style={style.left}></div>
            {props.type === 'password' ? '' : props.context.state[props.content].value || props.initValue}
            {props.noPen
              ?
              ''
              :
              <button onClick={() => penClick(props.content)} style={style.pen}>
                <i style={style.ii} className="fa fa-pencil-square-o" aria-hidden="true"></i>
              </button>
            }
          </div>
        :
          <div style={{ display: 'flex' }}>
            <input type={props.type} onChange={(e) => userInput(e,props.content)} placeholder={props.placeholder} style={Object.assign({},style.input,props.input)}></input>
            <div style={style.right}>
              <button onClick={() => confirm(props.content)} style={style.text}>確定</button>
              <button onClick={() => cancel(props.content)} style={style.text}>取消</button>
            </div>
          </div>
      }
    </div>
    {
      props.validate
      ?
        <div style={style.validate}>{props.validateText}</div>
      :
        ''
    }
  </div>
  );
};

export default EditableField;
