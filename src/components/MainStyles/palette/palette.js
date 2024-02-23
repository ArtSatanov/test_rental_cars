const PRIMARY = {
  //
  lighter: '#F7D2FF', //'#D1E9FC',
  light: '#ffa23b', //'#76B0F1',
  main: '#ff8a00', //'#2065D1',b5a3ff
  dark: '#cb6e01', //'#103996',
  darker: '#8d4d00', //'#061B64',
  contrastText: '#fff',
};

const SECONDARY = {
  lighter: '#D6E4FF',
  light: '#84A9FF',
  main: '#3366FF',
  dark: '#1939B7',
  darker: '#091A7A',
  contrastText: '#fff',
};

const SUCCESS = {
  lighter: '#E9FCD4',
  light: '#AAF27F',
  main: '#54D62C',
  dark: '#229A16',
  darker: '#08660D',
  contrastText: '#08660D',
};

const WARNING = {
  lighter: '#FFF7CD',
  light: '#FFE16A',
  main: '#FFC107',
  dark: '#B78103',
  darker: '#7A4F01',
  contrastText: '#08660D',
};

const palette = {
  primary: { ...PRIMARY },
  secondary: { ...SECONDARY },
  success: { ...SUCCESS },
  warning: { ...WARNING },
};

export default palette;
