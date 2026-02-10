import { style } from '@vanilla-extract/css';

export const container = style({
  display: 'flex',
  gap: '15px',
  padding: '20px 15px',
  borderBottom: '1px solid #eee',
  textDecoration: 'none',
  color: 'black',
  transition: 'background-color 0.2s',
  ':hover': {
    backgroundColor: '#f9f9f9',
  },
});

export const coverImg = style({
  width: '80px',
  borderRadius: '5px',
});

export const coverPlaceholder = style({
  width: '80px',
  height: '120px',
  borderRadius: '5px',
  backgroundColor: '#eee',
  color: '#999',
  fontSize: '12px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

export const info = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '5px',
});

export const title = style({
  fontSize: '18px',
  fontWeight: 'bold',
});

export const subTitle = style({
  fontSize: '14px',
  color: '#555',
});

export const author = style({
  fontSize: '13px',
  color: '#888',
});
