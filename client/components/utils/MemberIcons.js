import React from 'react'
import { translate } from 'react-i18next';
import { icon_piggy, icon_coins, icon_banknote, icon_cup, icon_noman1, icon_medals, icon_diamond } from '../../assets/images/'

const style = {
  container: {
    display: 'flex',
    padding: '10px',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  wrapper: {
    display: 'flex',
    margin: '10px 5px',
    justifyContent: 'center',
    alignItems: 'center',
  },
  wrapperRight: {
    display: 'flex',
    margin: '10px 5px',
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
  },
  p: {
    color: '#6db9c7',
    fontSize: '12px',
    marginLeft: '10px',
    marginTop: '2px'
  },
  p1: {
    color: '#b5babb',
    fontSize: '12px',
    // lineHeight: '17px',
    marginLeft: '10px',
    marginTop: '2px'
  },
  icon: {
    overflow: 'hidden',
    width: '23px',
    height: '20px',
    boxSizing: 'border-box',
    // backgroundImage: `url(${icon_piggy})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center center',
  },
  square1: {
    width: '20px',
    height: '20px',
    background: '#6db9c7',
  },
  square2: {
    width: '20px',
    height: '20px',
    background: '#b5babb',
  },
  square3: {
    width: '18px',
    height: '18px',
    border: '2px solid #b5babb',
  }
};

const MemberIcons = (props) => (
  <div style={style.container}>
    <div style={{ width: '70%', display: 'flex', flexWrap: 'wrap' }}>
      {
        (props.iconList && props.iconList.length) && props.iconList.map( (item, idx) => <div key={`icon-${idx}`} style={style.wrapper}>
          <img style={style.icon} src={item.iconUrl} alt="" />
          <div style={style.p}>{item.specName}</div>
        </div>)
      }
    </div>
    <div style={{ width: '30%', display: 'flex', flexWrap: 'wrap' }} >
      <div style={style.wrapperRight}>
        <div style={style.square1}></div>
        <div style={style.p}>{props.t('活躍')}</div>
      </div>
      <div style={style.wrapperRight}>
        <div style={style.square2}></div>
        <div style={style.p1}>{props.t('不活躍')}</div>
      </div>
      <div style={style.wrapperRight}>
        <div style={style.square3}></div>
        <div style={style.p1}>{props.t('沒有人')}</div>
      </div>
    </div>
  </div>
);

export default translate()(MemberIcons);
