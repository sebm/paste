import * as React from 'react';
import * as PropTypes from 'prop-types';
// import {variant} from '@twilio-paste/styling-library';
import {Box} from '@twilio-paste/box';
// import {Spinner} from '@twilio-paste/spinner';
import {SizeStyles, resetStyles} from './styles';
import {ButtonStates /* ButtonProps, ButtonVariants, ButtonSizes, ButtonTabIndexes*/} from './types';
import {getButtonState} from './utils';

/*
 * defensively resetting interaction color from over zealous legacy
 * global styles "a {...}" when button is set as an anchor
 */
const interactionColor = {color: 'colorTextInverse'};

const baseStyles = {
  color: 'colorTextInverse',
  _hover: interactionColor,
  _focus: interactionColor,
  _active: interactionColor,
};

const enabled = {
  ...resetStyles,
  // NOTE: hover styles get overriden so we can't just do "...baseStyles" here,
  // we have to pass base styles to each variant instead (see _hover)
  ...baseStyles,
  backgroundColor: 'colorBackgroundPrimary',
  borderColor: 'colorBorderPrimary',

  _hover: {
    // NOTE: manual deep merge, maybe use lodash?
    // eslint-disable-next-line no-underscore-dangle
    ...baseStyles._hover,
    backgroundColor: 'colorBackgroundPrimaryDarker',
    borderColor: 'colorBorderPrimaryDarker',
  },
  _focus: {
    // eslint-disable-next-line no-underscore-dangle
    ...baseStyles._focus,
    borderColor: 'colorBorderPrimaryDarker',
    boxShadow: 'shadowFocus',
  },
  _active: {
    // eslint-disable-next-line no-underscore-dangle
    ...baseStyles._active,
    backgroundColor: 'colorBackgroundPrimaryDark',
    borderColor: 'colorBorderPrimaryDarker',
  },
};
const loadingStyles = {
  color: 'colorTextInverse',
  backgroundColor: 'colorBackgroundPrimaryDarker',
  borderColor: 'colorBorderPrimaryDarker',
};
const loading = {
  ...resetStyles,
  ...loadingStyles,
  _hover: loadingStyles,
  _active: loadingStyles,
  _focus: loadingStyles,
};

const disabledStyles = {
  color: 'colorTextInverse',
  backgroundColor: 'colorBackgroundPrimaryLight',
  borderColor: 'colorBorderPrimaryLight',
};
const disabled = {
  ...resetStyles,
  ...disabledStyles,
  _hover: disabledStyles,
  _active: disabledStyles,
};

const ButtonStyles = {
  default: enabled,
  loading,
  disabled,
};

const composeStyles = (...args) => {};

export const PrimaryButton: React.FC<{buttonState: ButtonStates}> = ({loading, disabled, size, children, ...props}) => {
  const buttonState = getButtonState(disabled, loading);
  console.log(props, loading, disabled, size, ButtonStyles[buttonState]);

  return (
    <Box as="button" {...SizeStyles[size]} {...ButtonStyles[buttonState]}>
      {children}
    </Box>
  );
};
