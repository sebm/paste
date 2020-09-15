import * as React from 'react';
import * as PropTypes from 'prop-types';
import {Box, safelySpreadBoxProps} from '@twilio-paste/box';
import {Portal} from '@twilio-paste/reakit-library';
import {Stack} from '@twilio-paste/stack';
import {StyledBase} from '@twilio-paste/theme';

export interface ToastContainerProps {
  children: NonNullable<React.ReactNode>;
}

const ToastContainer: React.FC<ToastContainerProps> = ({children, ...props}) => {
  return (
    <Portal>
      {/* import Paste Theme Based Styles due to portal positioning. */}
      <StyledBase>
        <Box position="fixed" right="space40" top="space40" zIndex="zIndex90" {...safelySpreadBoxProps(props)}>
          <Stack orientation="vertical" spacing="space40">
            {children}
          </Stack>
        </Box>
      </StyledBase>
    </Portal>
  );
};

ToastContainer.displayName = 'ToastContainer';

if (process.env.NODE_ENV === 'development') {
  ToastContainer.propTypes = {
    children: PropTypes.node.isRequired,
  };
}

export {ToastContainer};
