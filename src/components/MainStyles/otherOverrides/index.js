import { CssBaseline } from './cssBaseLine/cssBaseLine';
import { customButton } from './customButton/customButton';
import { customTypography } from './customTypography/customTypographt';

export const otherOverrides = theme => {
  return Object.assign(
    CssBaseline(theme),
    customButton(theme),
    customTypography(theme)
  );
};
