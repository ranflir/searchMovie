import { style } from '@vanilla-extract/css';

export const container = style({
  display: 'flex',
  gap: '10px',
  marginBottom: '20px',
  padding: '10px 20px',
  backgroundColor: '#fff',
  borderRadius: '10px',
  boxShadow: '0 2px 5px rgba(0,0,0,0.05)',
  justifyContent: 'center',
  alignItems: 'center',
  maxWidth: '600px',
  margin: '0 auto 30px auto',
});

export const input = style({
  flex: 1,
  padding: '12px 15px',
  fontSize: '16px',
  border: '1px solid #ddd',
  borderRadius: '5px',
  outline: 'none',
  transition: 'border-color 0.2s',
  ':focus': {
    borderColor: '#e50914',
  },
});

export const button = style({
  padding: '12px 20px',
  fontSize: '16px',
  fontWeight: 'bold',
  backgroundColor: '#e50914',
  color: 'white',
  border: 'none',
  borderRadius: '5px',
  cursor: 'pointer',
  transition: 'background-color 0.2s',
  ':hover': {
    backgroundColor: '#b20710',
  },
});
