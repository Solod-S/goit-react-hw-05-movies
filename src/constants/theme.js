export const theme = {
  colors: {
    backGroundColor: '#000000',
    secondaryBackGroundColor: '#1A1A1A',
    thrdBackGroundColor: '#ECF1F3',
    primaryText: '#E2B616',
    secondaryText: '#E2B616',
    thrdText: '#5799EF',
    hoverBtnColor: '#252525',
    errorMsgColor: 'red',
    // pixaBayColor: '#444444',
  },
  spacing: value => `${4 * value}px`,
  space: [0, 2, 4, 8, 16, 32, 64, 128, 256],
  fonts: {
    btn: 'system-ui, sans-serif',
  },
  fontSizes: {
    xs: '12px',
    s: '14px',
    m: '16px',
    l: '32px',
    xl: '64px',
  },
  fontWeight: {
    normal: 400,
    bolt: 700,
  },
  radii: {
    none: '0',
    normal: '4px',
    round: '50%',
  },
  fontFamily: { roboto: "'Roboto', sans-serif" },
};
