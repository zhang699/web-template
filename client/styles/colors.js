import Color from 'color';

export const darken = (color, num) => {
  return Color(color).darken(num).rgbString();
}
export const lighten = (color, num) => {
  return Color(color).lighten(num).rgbString();
}
export const colors =  {
    red: '#f44336',
    pink: '#e91e63',
    purple: '#9c27b0',
    blue: '#2196f3',
    indigo: '#3f51b5',
    cyan: '#00bcd4',
    teal: '#009688',
    green: '#4caf50',
    lime: '#cddc39',
    yellow: '#ffeb3b',
    amber: '#ffc107',
    orange: '#ff9800',
    brown: '#795548',
    grey: '#9e9e9e',
}
