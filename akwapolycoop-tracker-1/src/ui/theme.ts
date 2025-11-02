export const theme = {
  colors: {
    primary: '#4A90E2',
    secondary: '#50E3C2',
    accent: '#D0021B',
    background: '#F5F7FA',
    text: '#333333',
    textLight: '#FFFFFF',
    border: '#E0E0E0',
  },
  typography: {
    fontFamily: "'Roboto', sans-serif",
    fontSize: '16px',
    fontWeightRegular: 400,
    fontWeightBold: 700,
  },
  spacing: (factor) => `${0.25 * factor}rem`,
  breakpoints: {
    mobile: '480px',
    tablet: '768px',
    desktop: '1024px',
  },
  animations: {
    fadeIn: 'fade-in 0.3s ease-in-out',
    slideIn: 'slide-in 0.5s ease-in-out',
  },
};