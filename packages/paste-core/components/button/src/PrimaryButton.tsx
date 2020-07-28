import * as React from 'react';
// import * as PropTypes from 'prop-types';
import {Box} from '@twilio-paste/box';
import {
  BackgroundColorOptions,
  BorderColorOptions,
  TextColorOptions,
  BoxShadowOptions,
} from '@twilio-paste/style-props';
import {SizeStyles, ResetStyles, CursorStyles} from './styles';
import {DirectButtonProps} from './types';

/*
 * defensively resetting interaction color from over zealous legacy
 * global styles "a {...}" when button is set as an anchor
 */
const buttonTextColor = {color: 'colorTextInverse' as TextColorOptions};

const basePrimaryStyles = {
  ...ResetStyles,
  ...buttonTextColor,
  _hover: buttonTextColor,
  _focus: buttonTextColor,
  _active: buttonTextColor,
};

const defaultStyles = {
  // NOTE: hover styles get overriden so we can't just do "...baseStyles" here,
  // we have to pass base styles to each variant instead (see _hover)
  ...basePrimaryStyles,
  ...CursorStyles.enabled,
  backgroundColor: 'colorBackgroundPrimary' as BackgroundColorOptions,
  borderColor: 'colorBorderPrimary' as BorderColorOptions,

  _hover: {
    // NOTE: manual deep merge, maybe use lodash?
    // eslint-disable-next-line no-underscore-dangle
    ...basePrimaryStyles._hover,
    backgroundColor: 'colorBackgroundPrimaryDarker' as BackgroundColorOptions,
    borderColor: 'colorBorderPrimaryDarker' as BorderColorOptions,
  },
  _focus: {
    // eslint-disable-next-line no-underscore-dangle
    ...basePrimaryStyles._focus,
    borderColor: 'colorBorderPrimaryDarker' as BorderColorOptions,
    boxShadow: 'shadowFocus' as BoxShadowOptions,
  },
  _active: {
    // eslint-disable-next-line no-underscore-dangle
    ...basePrimaryStyles._active,
    backgroundColor: 'colorBackgroundPrimaryDark' as BackgroundColorOptions,
    borderColor: 'colorBorderPrimaryDarker' as BorderColorOptions,
  },
};
const baseLoadingStyles = {
  backgroundColor: 'colorBackgroundPrimaryDarker' as BackgroundColorOptions,
  borderColor: 'colorBorderPrimaryDarker' as BorderColorOptions,
};
/* eslint-disable no-underscore-dangle */
const loadingStyles = {
  ...basePrimaryStyles,
  ...CursorStyles.loading,
  ...baseLoadingStyles,
  _hover: {
    ...basePrimaryStyles._hover,
    ...baseLoadingStyles,
  },
  _active: {
    ...basePrimaryStyles._active,
    ...baseLoadingStyles,
  },
  _focus: {
    ...basePrimaryStyles._focus,
    ...baseLoadingStyles,
  },
};

const baseDisabledStyles = {
  backgroundColor: 'colorBackgroundPrimaryLight' as BackgroundColorOptions,
  borderColor: 'colorBorderPrimaryLight' as BorderColorOptions,
};
const disabledStyles = {
  ...basePrimaryStyles,
  ...CursorStyles.disabled,
  ...baseDisabledStyles,
  _hover: {
    ...basePrimaryStyles._hover,
    ...baseDisabledStyles,
  },
  _active: {
    ...basePrimaryStyles._active,
    ...baseDisabledStyles,
  },
};
/* eslint-enable */

const ButtonStyles = {
  default: defaultStyles,
  loading: loadingStyles,
  disabled: disabledStyles,
};

export const PrimaryButton: React.FC<DirectButtonProps> = ({
  as = 'button',
  loading,
  disabled,
  size,
  children,
  buttonState,
  ...props
}) => {
  return (
    <Box as={as} {...props} {...SizeStyles[size]} {...ButtonStyles[buttonState]}>
      {children}
    </Box>
  );
};
