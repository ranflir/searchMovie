import { globalStyle } from '@vanilla-extract/css';

// 기본 여백 초기화
globalStyle('h1, h2, h3, h4, h5, h6, p, ul, ol, li, figure, blockquote', {
  margin: 0,
  padding: 0,
});

// 리스트 스타일 초기화
globalStyle('ul, ol', {
  listStyle: 'none',
});

// 버튼 초기화
globalStyle('button', {
  background: 'none',
  border: 'none',
  padding: 0,
  cursor: 'pointer',
  font: 'inherit',
  color: 'inherit',
});

// 입력 필드 초기화
globalStyle('input, textarea', {
  font: 'inherit',
});

// 이미지 초기화
globalStyle('img', {
  maxWidth: '100%',
  display: 'block',
});
