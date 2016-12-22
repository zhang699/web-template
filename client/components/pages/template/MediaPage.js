import React from 'react';
import radium from 'radium';
import { translate } from 'react-i18next';
import * as colorsSet from '../../../styles/colors';
import Card from '../../utils/Cards/';
import Header from '../../utils/Header/';
import Footer from '../../utils/Footer/';
import * as media from '../../../styles/media';
import { teal400, fullWhite } from '../../../styles/colors';
import * as shadows from '../../../styles/shadow';
const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    boxSizing: 'border-box',
  },
  block: {
    display: 'flex',
    flex: 1,
    minHeight: '50vh',
    margin: '10px',
    border: '2px #ddd',
    padding: '20px',
  },
  demoBox: {
    width: '100px',
    height: '100px',
    margin: '15px',
    color: fullWhite,
    backgroundColor: teal400,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }
};

const ShadowPage = (props) => (
  <div style={styles.container}>
    <Header title={props.t("media")} content={"Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum."} />
    <div style={styles.block}>
      <Card style={{
          flexDirection: 'row',
          flexWrap: 'wrap',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <img style={{
            ...media.image,
            width: '300px',
            margin: '10px',
          }} src="http://assets.nydailynews.com/polopoly_fs/1.2678374.1466228128!/img/httpImage/image.jpg_gen/derivatives/article_750/gi-0504003.jpg" alt=""/>
        <img style={{
            ...media.rectImg,
            width: '300px',
            margin: '10px',
          }} src="http://assets.nydailynews.com/polopoly_fs/1.2678374.1466228128!/img/httpImage/image.jpg_gen/derivatives/article_750/gi-0504003.jpg" alt=""/>
        <img style={{
            ...media.circularImg,
            width: '300px',
            margin: '10px',
          }} src="http://assets.nydailynews.com/polopoly_fs/1.2678374.1466228128!/img/httpImage/image.jpg_gen/derivatives/article_750/gi-0504003.jpg" alt=""/>

          <img style={{
              ...media.image,
              width: '300px',
              margin: '10px',
            }} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0orCkmtXfn86h7VLCvx14t7Cem-HNrkWGuTKJpzoOgL276a5T" alt=""/>
          <img style={{
              ...media.rectImg,
              width: '300px',
              margin: '10px',
            }} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0orCkmtXfn86h7VLCvx14t7Cem-HNrkWGuTKJpzoOgL276a5T" alt=""/>
          <img style={{
              ...media.circularImg,
              width: '300px',
              margin: '10px',
            }} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0orCkmtXfn86h7VLCvx14t7Cem-HNrkWGuTKJpzoOgL276a5T" alt=""/>
        </Card>
    </div>
    <Footer />
  </div>
);

export default translate()(radium(ShadowPage));
