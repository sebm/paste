import * as PropTypes from 'prop-types';
import {ValueOf} from '@twilio-paste/types';
import {ToastVariantObject} from './constants';

export type ToastVariants = ValueOf<typeof ToastVariantObject>;

export interface ToastProps {
  children: NonNullable<React.ReactNode>;
  onDismiss?: () => void;
  role?: string;
  variant: ToastVariants;
}

export const ToastPropTypes = {
  children: PropTypes.node.isRequired,
  onDismiss: PropTypes.func,
  role: PropTypes.string,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  variant: PropTypes.oneOf(['error', 'neutral', 'success', 'warning']) as any,
};
