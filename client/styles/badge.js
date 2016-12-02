import { colors, darken, lighten } from './colors';

export const badge = {
  fontSize: '14px',
  height: '18px',
  padding: '4px',
  lineHeight: '10px',
  borderRadius: '3px',
  backgroundColor: darken(colors.blue, 0.4),
  color: colors.white,
};
