import { globalStyle } from '@vanilla-extract/css';

globalStyle('html, body', {
  margin: 0,
  padding: 0,
});

globalStyle('body', {
  backgroundColor: 'rgb(250, 250, 250)',
});

globalStyle('a', {
  textDecoration: 'none',
  color: 'inherit',
});

globalStyle('*', {
  boxSizing: 'border-box',
});
