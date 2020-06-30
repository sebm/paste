import * as React from 'react';
import {Separator, SeparatorProps} from '@twilio-paste/separator';
import {MenuPrimitiveSeparator, MenuPrimitiveSeparatorProps} from '@twilio-paste/menu-primitive';
import {MenuContext} from './MenuContext';

const StyledMenuSeparator: React.FC<SeparatorProps> = props => {
  return <Separator {...props} orientation="horizontal" />;
};

export type MenuSeparatorProps = MenuPrimitiveSeparatorProps;

const MenuSeparator: React.FC<MenuSeparatorProps> = props => {
  const menu = React.useContext(MenuContext);
  return <MenuPrimitiveSeparator {...menu} {...props} as={StyledMenuSeparator} />;
};

MenuSeparator.displayName = 'MenuSeparator';
export {MenuSeparator};
