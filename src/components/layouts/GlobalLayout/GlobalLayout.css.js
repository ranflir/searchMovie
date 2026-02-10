import { style } from '@vanilla-extract/css';

export const container = style({
  maxWidth: '600px',
  minHeight: '100vh',
  backgroundColor: 'white',
  margin: '0 auto',
  boxShadow: '0 0 20px rgba(0, 0, 0, 0.05)',
  padding: '0 20px',
});

export const header = style({
  height: '60px',
  fontWeight: 'bold',
  fontSize: '18px',
  lineHeight: '60px',
  display: 'flex',
  alignItems: 'center',
  backgroundColor: 'white',
  color: '#333',
  padding: '0 15px',
  borderBottom: '1px solid #eee',
  borderTopLeftRadius: '10px',
  borderTopRightRadius: '10px',
});

export const headerLink = style({
  color: '#e50914',
  textDecoration: 'none',
  ':hover': {
    color: '#b20710',
  },
});

export const main = style({
  paddingTop: '10px',
});

export const footer = style({
  padding: '30px 0',
  marginTop: '50px',
  color: '#666',
  textAlign: 'center',
  fontSize: '14px',
  borderTop: '1px solid #eee',
  backgroundColor: '#fafafa',
  borderBottomLeftRadius: '10px',
  borderBottomRightRadius: '10px',
});
