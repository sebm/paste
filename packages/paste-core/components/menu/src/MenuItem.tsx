import * as React from 'react';
import {MenuPrimitiveItem, MenuPrimitiveItemProps} from '@twilio-paste/menu-primitive';
import {MenuContext} from './MenuContext';
import {StyledMenuItem} from './StyledMenuItem';

export interface MenuItemProps extends MenuPrimitiveItemProps {
  as?: React.ReactNode;
  href?: string;
  onClick?: () => void;
  disabled?: boolean;
  children: NonNullable<React.ReactNode>;
}

const MenuItem = React.forwardRef<HTMLDivElement, MenuItemProps>(({as = StyledMenuItem, ...props}, ref) => {
  const menu = React.useContext(MenuContext);
  console.log(44, ref);
  return <MenuPrimitiveItem {...menu} {...props} as={as} ref={ref} />;
});

MenuItem.displayName = 'MenuItem';
export {MenuItem};
