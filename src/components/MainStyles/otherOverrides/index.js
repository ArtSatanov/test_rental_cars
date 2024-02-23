import { CssBaseline } from './cssBaseLine/cssBaseLine';
import { customButton } from './customButton/customButton';

export const otherOverrides = theme => {
  return Object.assign(CssBaseline(theme), customButton(theme));
};
