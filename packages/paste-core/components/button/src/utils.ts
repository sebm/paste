import {ButtonStates /* ButtonProps, ButtonVariants, ButtonSizes, ButtonTabIndexes*/} from './types';

export const getButtonState = (disabled?: boolean, loading?: boolean): ButtonStates => {
  if (disabled) {
    return 'disabled';
  }
  if (loading) {
    return 'loading';
  }
  return 'default';
};
