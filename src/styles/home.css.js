import { style } from '@vanilla-extract/css';

export const container = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '20px',
});

export const list = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '10px',
  marginTop: '10px',
});
