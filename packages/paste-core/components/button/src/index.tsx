import * as React from 'react';
import * as PropTypes from 'prop-types';
// import {variant} from '@twilio-paste/styling-library';
import {Box} from '@twilio-paste/box';
import {Spinner} from '@twilio-paste/spinner';
import {getButtonState, handlePropValidation} from './utils';

import {ButtonProps, ButtonStates, ButtonVariants, ButtonSizes, ButtonTabIndexes} from './types';
import {PrimaryButton} from './PrimaryButton';

export const SecondaryButton: React.FC<{buttonState: ButtonStates}> = ({cursor, children, size, __moz_focus_inner}) => {
  /*
   * defensively resetting interaction color from over zealous legacy
   * global styles "a {...}" when button is set as an anchor
   */
  const interactionColor = {color: 'colorTextLinkDarker'};
  const baseStyles = {
    color: 'colorTextLink',
    _hover: interactionColor,
    _focus: interactionColor,
    _active: interactionColor,
  };
  const enabled = {
    ...resetStyles,
    ...baseStyles,
    backgroundColor: 'colorBackgroundBody',
    borderColor: 'colorBorderPrimary',

    _hover: {
      // NOTE: manual deep merge, maybe use lodash?
      // eslint-disable-next-line no-underscore-dangle
      ...baseStyles._hover,
      backgroundColor: 'colorBackgroundPrimaryLightest',
      borderColor: 'colorBorderPrimaryDarker',
    },
    _focus: {
      // eslint-disable-next-line no-underscore-dangle
      ...baseStyles._focus,
      backgroundColor: 'colorBackgroundPrimaryLightest',
      borderColor: 'colorBorderPrimaryDarker',
      boxShadow: 'shadowFocus',
    },
    _active: {
      // eslint-disable-next-line no-underscore-dangle
      ...baseStyles._active,
      backgroundColor: 'colorBackgroundPrimaryLightest',
      borderColor: 'colorBorderPrimaryDarker',
    },
  };
  const loadingStyles = {
    color: 'colorTextLinkDarker',
    backgroundColor: 'colorBackgroundPrimaryLighter',
    borderColor: 'colorBorderPrimaryLighter',
  };
  const loading = {
    ...resetStyles,
    ...loadingStyles,
    _hover: loadingStyles,
    _active: loadingStyles,
    _focus: loadingStyles,
  };

  const disabledStyles = {
    color: 'colorTextLinkLight',
    backgroundColor: 'colorBackgroundBody',
    borderColor: 'colorBorderPrimaryLight',
  };
  const disabled = {
    ...resetStyles,
    ...disabledStyles,
    _hover: disabledStyles,
    _active: disabledStyles,
  };

  // NOTE: hover styles get overriden so we can't do "baseStyles"
  // we have to pass base styles to each variant instead
  // NOTE: how common is this pattern? variant + states (loading/disabled) + optional 3rd level alternator (size)

  // variant as prop
  // const as styles
  // based on variant destructure loading/disabled

  return (
    <Box as="button" cursor={cursor} __moz_focus_inner={__moz_focus_inner} {...enabled} {...SizeStyles[size]}>
      {children}
    </Box>
  );
};

export const LinkButton: React.FC<{buttonState: ButtonStates}> = ({cursor, children, size, __moz_focus_inner}) => {
  /*
   * defensively resetting interaction color from over zealous legacy
   * global styles "a {...}" when button is set as an anchor
   */
  const interactionColor = {color: 'colorTextLinkDark'};
  const baseStyles = {
    color: 'colorTextLink',
    backgroundColor: 'transparent',
    _hover: {interactionColor, textDecoration: 'underline'},
    _focus: {interactionColor, textDecoration: 'underline'},
    _active: {color: 'colorTextLinkDarker', textDecoration: 'underline'},
  };
  const enabled = {
    ...resetStyles,
    ...baseStyles,

    _hover: {
      // NOTE: manual deep merge, maybe use lodash?
      // eslint-disable-next-line no-underscore-dangle
      ...baseStyles._hover,
    },
    _focus: {
      // eslint-disable-next-line no-underscore-dangle
      ...baseStyles._focus,
    },
    _active: {
      // eslint-disable-next-line no-underscore-dangle
      ...baseStyles._active,
    },
  };
  const loadingStyles = {
    color: 'colorTextLinkDarker',
    backgroundColor: 'transparent',
  };
  const loading = {
    ...resetStyles,
    ...loadingStyles,
    _hover: loadingStyles,
    _active: loadingStyles,
    _focus: loadingStyles,
  };

  const disabledStyles = {
    color: 'colorTextLinkLight',
    backgroundColor: 'transparent',
  };
  const disabled = {
    ...resetStyles,
    ...disabledStyles,
    _hover: disabledStyles,
    _active: disabledStyles,
  };

  // NOTE: hover styles get overriden so we can't do "baseStyles"
  // we have to pass base styles to each variant instead
  // NOTE: how common is this pattern? variant + states (loading/disabled) + optional 3rd level alternator (size)

  // variant as prop
  // const as styles
  // based on variant destructure loading/disabled

  return (
    <Box as="button" cursor={cursor} __moz_focus_inner={__moz_focus_inner} {...disabled} {...SizeStyles[size]}>
      {children}
    </Box>
  );
};

export const DestructiveLinkButton: React.FC<{buttonState: ButtonStates}> = ({
  cursor,
  children,
  size,
  __moz_focus_inner,
}) => {
  /*
   * defensively resetting interaction color from over zealous legacy
   * global styles "a {...}" when button is set as an anchor
   */
  const interactionColor = {color: 'colorTextLinkDestructiveDark'};
  const baseStyles = {
    color: 'colorTextLinkDestructive',
    backgroundColor: 'transparent',
    _hover: {interactionColor, textDecoration: 'underline'},
    _focus: {interactionColor, textDecoration: 'underline'},
    _active: {color: 'colorTextLinkDestructiveDarker', textDecoration: 'underline'},
  };
  const enabled = {
    ...resetStyles,
    ...baseStyles,

    _hover: {
      // NOTE: manual deep merge, maybe use lodash?
      // eslint-disable-next-line no-underscore-dangle
      ...baseStyles._hover,
    },
    _focus: {
      // eslint-disable-next-line no-underscore-dangle
      ...baseStyles._focus,
    },
    _active: {
      // eslint-disable-next-line no-underscore-dangle
      ...baseStyles._active,
    },
  };
  const loadingStyles = {
    color: 'colorTextLinkDestructiveDarker',
    backgroundColor: 'transparent',
  };
  const loading = {
    ...resetStyles,
    ...loadingStyles,
    _hover: loadingStyles,
    _active: loadingStyles,
    _focus: loadingStyles,
  };

  const disabledStyles = {
    color: 'colorTextLinkDestructiveLight',
    backgroundColor: 'transparent',
  };
  const disabled = {
    ...resetStyles,
    ...disabledStyles,
    _hover: disabledStyles,
    _active: disabledStyles,
  };

  // NOTE: hover styles get overriden so we can't do "baseStyles"
  // we have to pass base styles to each variant instead
  // NOTE: how common is this pattern? variant + states (loading/disabled) + optional 3rd level alternator (size)

  // variant as prop
  // const as styles
  // based on variant destructure loading/disabled

  return (
    <Box as="button" cursor={cursor} __moz_focus_inner={__moz_focus_inner} {...enabled} {...SizeStyles[size]}>
      {children}
    </Box>
  );
};

// memo
// forwardref
export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
  const {size, variant, children, ...rest} = props;
  const buttonState = getButtonState(rest.disabled, rest.loading);
  // wrap in cache hook
  // eslint-disable-next-line no-nested-ternary
  // const cursor = loading ? 'wait' : disabled ? 'not-allowed' : 'pointer';
  /*
    defensively resetting from over zealous legacy global
    styles "a {...}" when button is set as an anchor
  
  const hoverStyles = {
    textDecoration: 'none',
  };
  const focusStyles = {
    boxShadow: 'shadowFocus',
  };
*/

  handlePropValidation(props);

  // If size isn't passed, come up with a smart default:
  // - 'reset' for variant 'link'
  // - 'icon' if there's 1 child that's an icon
  // - 'default' otherwise
  let smartDefaultSize = size;
  if (size == null) {
    if (variant === 'link' || variant === 'destructive_link') {
      smartDefaultSize = 'reset';
    } else if (React.Children.count(children) === 1) {
      React.Children.forEach(children, child => {
        if (React.isValidElement(child)) {
          // @ts-ignore
          if (typeof child.type.displayName === 'string' && child.type.displayName.includes('Icon')) {
            smartDefaultSize = 'icon';
          }
        }
      });
    } else {
      smartDefaultSize = 'default';
    }
  }

  const extraProps = {
    'aria-busy': buttonState === 'loading' ? 'true' : 'false',
    className: undefined,
    style: undefined,
    ref
  }


  switch (variant) {
    case 'primary':
      return (
        <PrimaryButton buttonState={buttonState} size={smartDefaultSize as ButtonSizes} {...rest} {...extraProps}>
          {children}
        </PrimaryButton>
      );
    default:
      return null;
  }
};

/*
const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({as, children, disabled, fullWidth, href, loading, size ='default', tabIndex, variant, ...props}, ref) => {
    const buttonState = getButtonState(disabled, loading);
    const showLoading = buttonState === 'loading';
    const showDisabled = buttonState !== 'default';


    return (
      <ButtonWrapper
        aria-busy={buttonState === 'loading' ? 'true' : 'false'}
        as={as}
        buttonState={buttonState}
        disabled={showDisabled}
        fullWidth={fullWidth}
        href={href}
        size={defaultSize}
        tabIndex={tabIndex}
        variant={variant}
        {...props}
        className={undefined}
        style={undefined}
        ref={ref}
      >
        <ButtonChildren buttonState={buttonState}>{children}</ButtonChildren>
        {showLoading ? (
          <SpinnerWrapper as="span">
            <Spinner decorative={false} title="Loading, please wait." delay={0} />
          </SpinnerWrapper>
        ) : null}
      </ButtonWrapper>
    );
  }
);

Button.defaultProps = {
  as: 'button',
  fullWidth: false,
  loading: false,
  type: 'button',
  variant: 'primary',
};

if (process.env.NODE_ENV === 'development') {
  Button.propTypes = {
    as: PropTypes.string,
    fullWidth: PropTypes.bool,
    href: PropTypes.string,
    loading: PropTypes.bool,
    size: PropTypes.oneOf(['small', 'default', 'icon', 'reset']),
    tabIndex: PropTypes.oneOf([0, -1]),
    type: PropTypes.oneOf(['submit', 'button', 'reset']),
    variant: PropTypes.oneOf(['primary', 'secondary', 'destructive', 'destructive_link', 'link', 'reset']) as any,
  };
}

Button.displayName = 'Button';

export {ButtonProps};
export {Button};
export {NewButton};
*/
