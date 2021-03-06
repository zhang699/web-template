import { darkBlack, lighten, brown700 } from './colors';

export const fontFamily = {
  fontSmoothing: 'antialiased',
  fontFamily: "微軟正黑體, Muli, Helvetica Neue, Helvetica, Arial, sans-serif",
  color: brown700,
};

export const fontWeight = {

};

export const h1 = {
  ...fontFamily,
  fontSize: '4.2rem',
  lineHeight: '110%',
  margin: '2.1rem 0 1.68rem 0',
  fontWeight: '400'
};

export const h2 = {
  ...fontFamily,
  fontSize: '3.56rem',
  lineHeight: '110%',
  margin: '1.78rem 0 1.424rem 0',
  fontWeight: '400'
};

export const h3 = {
  ...fontFamily,
  fontSize: '2.92rem',
  lineHeight: '110%',
  margin: '1.46rem 0 1.168rem 0',
  fontWeight: '400'
};

export const h4 = {
  ...fontFamily,
  fontSize: '2.28rem',
  lineHeight: '110%',
  margin: '1.14rem 0 0.912rem 0',
  fontWeight: '400'
};

export const h5 = {
  ...fontFamily,
  fontSize: '1.64rem',
  lineHeight: '110%',
  margin: '0.82rem 0 0.656rem 0',
  fontWeight: '400'
};

export const h6 = {
  ...fontFamily,
  fontSize: '1rem',
  lineHeight: '110%',
  margin: '0.5rem 0 0.4rem 0',
  fontWeight: '400'
};

export const p = {
  ...fontFamily,
  fontSize: '1rem',
  fontWeight: '300',
  lineHeight: '1.35rem',
  textAlign: 'justify',
  padding: '1rem 0',
};

export const blockquote = {
  ...fontFamily,
  fontWeight: 400,
  padding: '10px 0 10px 25px',
  borderLeft: `${brown700} solid 4px`,
  textAlign: 'justify',
};
