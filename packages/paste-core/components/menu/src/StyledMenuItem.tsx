import * as React from 'react';
import {Box, BoxProps, safelySpreadBoxProps} from '@twilio-paste/box';
import {Text} from '@twilio-paste/text';
import {secureExternalLink} from '@twilio-paste/anchor';

export interface StyledMenuItemProps extends BoxProps {
  href?: string;
}

export const StyledMenuItem = React.forwardRef<HTMLDivElement | HTMLAnchorElement, StyledMenuItemProps>(
  ({children, ...props}, ref) => {
    return (
      <Box
        {...safelySpreadBoxProps(props)}
        as={props.href ? 'a' : 'div'}
        {...(props.href && secureExternalLink(props.href))}
        display="block"
        padding="space30"
        paddingLeft="space50"
        paddingRight="space50"
        textDecoration="none"
        _hover={{
          cursor: 'pointer',
        }}
        _focus={{
          outline: 'none',
          backgroundColor: 'colorBackgroundPrimaryLightest',
        }}
        _disabled={{cursor: 'not-allowed'}}
        ref={ref}
      >
        <Text
          as="div"
          color={props['aria-disabled'] ? 'colorTextWeaker' : 'colorTextLink'}
          textDecoration={props.tabIndex === 0 ? 'underline' : null}
        >
          {children}
        </Text>
      </Box>
    );
  }
);
