import * as React from 'react';
import * as PropTypes from 'prop-types';
// import {variant} from '@twilio-paste/styling-library';
import {Box} from '@twilio-paste/box';
import {Spinner} from '@twilio-paste/spinner';
import {ButtonWrapper, ButtonChildren, SpinnerWrapper} from './styles';
import {ButtonProps, ButtonStates, ButtonVariants, ButtonSizes, ButtonTabIndexes} from './types';

const handlePropValidation = (
  children: React.ReactNode,
  variant: ButtonVariants,
  as?: string,
  fullWidth?: boolean,
  href?: string,
  size?: ButtonSizes,
  tabIndex?: ButtonTabIndexes
): void => {
  const hasHref = href != null && href !== '';
  const hasTabIndex = tabIndex != null;

  if (as !== 'a' && hasHref) {
    throw new Error(`[Paste: Button] You cannot pass href into a button without the 'a' tag.  Use 'as="a"'.`);
  }
  if (as === 'a' && !hasHref) {
    throw new Error(`[Paste: Button] Missing href prop for link button.`);
  }
  if (as === 'a' && variant === 'link') {
    throw new Error(`[Paste: Button] This should be a link. Use the [Paste: Anchor] component.`);
  }
  if (variant === 'reset' && size !== 'reset') {
    throw new Error('[Paste: Button] The "RESET" variant can only be used with the "RESET" size.');
  }
  if (size === 'icon' && fullWidth) {
    throw new Error('[Paste: Button] Icon buttons should not be fullWidth.');
  }
  if (children == null) {
    throw new Error(`[Paste: Button] Must have non-null children.`);
  }
  if (hasTabIndex && !(tabIndex === 0 || tabIndex === -1)) {
    throw new Error(`[Paste: Button] tabIndex must be 0 or -1.`);
  }
};

const getButtonState = (disabled?: boolean, loading?: boolean): ButtonStates => {
  if (disabled) {
    return 'disabled';
  }
  if (loading) {
    return 'loading';
  }
  return 'default';
};

const SizeStyles = {
  default: {
    padding: 'space30',
    borderRadius: 'borderRadius20',
    fontSize: 'fontSize30',
    lineHeight: 'lineHeight30',
  },
  small: {
    padding: 'space10',
    borderRadius: 'borderRadius10',
    fontSize: 'fontSize30',
    lineHeight: 'lineHeight30',
  },
  icon: {
    padding: 'space30',
    borderRadius: 'borderRadius20',
    fontSize: '100%',
    /* To fix abnormal button padding-bottom */
    lineHeight: 'unset',
  },
  reset: {
    padding: 'space0',
    fontSize: '100%',
  },
};

const PrimaryButton: React.FC<{buttonState: ButtonStates}> = ({buttonState, children}) => {
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
    ...baseStyles,
    backgroundColor: 'colorBackgroundPrimary',
    boxShadow: 'inset 0 0 0 space.space10 colorBackgroundPrimary',

    _hover: {
      //NOTE: manual deep merge, maybe use lodash?
      ...baseStyles._hover,
      backgroundColor: 'colorBackgroundPrimaryDarker',
      boxShadow: 'inset 0 0 0 space10 colorBackgroundPrimaryDarker',
    },
    _focus: {
      ...baseStyles._focus,
      backgroundColor: 'colorBackgroundPrimary',
      //NOTE: how do we handle these? We surely shouldnt make a token for each of these...
      //so how will Box accept them?
      boxShadow: 'inset 0 0 0 space10 colorBackgroundPrimaryDarker, shadowFocus',
    },
    _active: {
      ...baseStyles._active,
      backgroundColor: 'colorBackgroundPrimaryDark',
      boxShadow: 'inset 0 0 0 space10 colorBackgroundPrimaryDarker, shadowFocus',
    },
  };
  const loadingStyles = {
    backgroundColor: 'colorBackgroundPrimaryDarker',
    boxShadow: 'inset 0 0 0 space10 colorBackgroundPrimaryDarker',
  };
  const loading = {
    ...loadingStyles,
    _hover: loadingStyles,
    _active: loadingStyles,
    _focus: loadingStyles,
  };

  const disabledStyles = {
    backgroundColor: 'colorBackgroundPrimaryLight',
    boxShadow: 'inset 0 0 0 space10 colorBackgroundPrimaryLight',
  };
  const disabled = {
    ...disabledStyles,
    _hover: disabledStyles,
    _active: disabledStyles,
  };

  //NOTE: hover styles get overriden so we can't do "baseStyles"
  //we have to pass base styles to each variant instead
  //NOTE: how common is this pattern? variant + states (loading/disabled) + optional 3rd level alternator (size)
  return <Box {...enabled}>{children}</Box>;
};

// memo
const X: React.FC<any> = ({size, disabled}) => {
  // wrap in cache hook
  const cursor = loading ? 'wait' : disabled ? 'not-allowed' : 'pointer';
  /*
    defensively resetting from over zealous legacy global
    styles "a {...}" when button is set as an anchor
  */
  const hoverStyles = {
    textDecoration: 'none',
  };
  const focusStyles = {
    boxShadow: 'shadowFocus',
  };

  return (
    <Box
      as={PrimaryButton}
      appearance="none"
      borderWidth="borderWidth0"
      borderStyle="none"
      borderColor="transparent"
      display="inline-block"
      outline="none"
      backgroundColor="none"
      transition="background-color 100ms ease-in, box-shadow 100ms ease-in"
      fontFamily="fontFamilyText"
      fontWeight="fontWeightSemibold"
      textDecoration="none"
      {...SizeStyles[size]}
      cursor={cursor}
      _hover={hoverStyles}
      _focus={{...hoverStyles, ...focusStyles}}
      _active={{...hoverStyles, ...focusStyles}}
      __moz_focus_inner={{
        border: 'none',
      }}
    >
      {children}
    </Box>
  );
};

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({as, children, disabled, fullWidth, href, loading, size, tabIndex, variant, ...props}, ref) => {
    const buttonState = getButtonState(disabled, loading);
    const showLoading = buttonState === 'loading';
    const showDisabled = buttonState !== 'default';

    // If size isn't passed, come up with a smart default:
    // - 'reset' for variant 'link'
    // - 'icon' if there's 1 child that's an icon
    // - 'default' otherwise
    let defaultSize = size;
    if (defaultSize == null) {
      defaultSize = 'default';

      if (variant === 'link' || variant === 'destructive_link') {
        defaultSize = 'reset';
      } else if (React.Children.count(children) === 1) {
        React.Children.forEach(children, child => {
          if (React.isValidElement(child)) {
            // @ts-ignore
            if (typeof child.type.displayName === 'string' && child.type.displayName.includes('Icon')) {
              defaultSize = 'icon';
            }
          }
        });
      }
    }

    handlePropValidation(children, variant, as, fullWidth, href, size, tabIndex);

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
