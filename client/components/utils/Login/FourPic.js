import React from 'react';
import { fourpic1, fourpic2, fourpic3, fourpic4 } from '../../../assets/images/';

const styles = {
  container: {
    width: '400px',
    minWidth: '400px',
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    position: 'relative',
    padding: '0 5px',
    height: '500px',
    minHeight: '500px',
  },
  leftWrapper: {
    width: '50%',
    display: 'flex',
    flexDirection: 'column',
    padding: '0 2.5px 0 0px',
    boxSizing: 'border-box',
  },
  rightWrapper: {
    width: '50%',
    display: 'flex',
    flexDirection: 'column',
    padding: '0 0 0 2.5px',
    boxSizing: 'border-box',
  },
  leftTop: {
    felx: 3,
    width: '100%',
    height: '60%',
    marginBottom: '2.5px',
    backgroundImage: `url(${fourpic1})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center center',
  },
  rightTop: {
    felx: 2,
    width: '100%',
    height: '40%',
    marginBottom: '2.5px',
    backgroundImage: `url(${fourpic2})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center center',
  },
  leftDown: {
    felx: 2,
    width: '100%',
    height: '60%',
    backgroundImage: `url(${fourpic3})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center center',
  },
  rightDown: {
    felx: 3,
    width: '100%',
    height: '60%',
    backgroundImage: `url(${fourpic4})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center center',
  }
};

const FourPic = (props) => {
  return (
    <div style={styles.container} >
      <div style={styles.leftWrapper}>
        <div style={styles.leftTop} />
        <div style={styles.leftDown} />
      </div>
      <div style={styles.rightWrapper}>
        <div style={styles.rightTop} />
        <div style={styles.rightDown} />
      </div>
    </div>
  );
};

FourPic.propTypes = {
};

export default FourPic;
