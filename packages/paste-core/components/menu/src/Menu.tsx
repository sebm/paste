import * as React from 'react';
import {Box, BoxProps, safelySpreadBoxProps} from '@twilio-paste/box';
import {MenuPrimitive, MenuPrimitiveProps} from '@twilio-paste/menu-primitive';
import {MenuContext} from './MenuContext';

const StyledMenu = React.forwardRef<HTMLDivElement, BoxProps>(({style, ...props}, ref) => {
  return (
    <Box
      {...safelySpreadBoxProps(props)}
      backgroundColor="colorBackgroundBody"
      borderStyle="solid"
      borderWidth="borderWidth10"
      borderColor="colorBorderLight"
      borderRadius="borderRadius20"
      boxShadow="shadowCard"
      maxWidth="size30"
      minWidth="size30"
      zIndex="zIndex10"
      _focus={{outline: 'none'}}
      style={style}
      ref={ref}
    />
  );
});

export interface MenuProps {
  'aria-label': string;
  children: React.ReactNode;
}

const Menu = React.forwardRef<HTMLDivElement, MenuProps>((props, ref) => {
  const menu = React.useContext(MenuContext);
  return <MenuPrimitive {...menu} as={StyledMenu} {...props} ref={ref} />;
});

Menu.displayName = 'Menu';
export {Menu};
