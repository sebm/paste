import * as React from 'react';
import {useMenuPrimitiveState, MenuPrimitiveStateReturn} from '@twilio-paste/menu-primitive';
import {MenuContext} from './MenuContext';

type Context = MenuPrimitiveStateReturn & {subMenu?: boolean};
/**
 * The wrapper component that provides context. No DOM rendering.
 */

const childrenWithProps = (children, props) =>
  React.Children.map(children, child => {
    // Checking isValidElement is the safe way and avoids a TS error too.
    if (React.isValidElement(child)) {
      return React.cloneElement(child, {props});
    }

    return child;
  });
const MenuWrapper = React.forwardRef<HTMLButtonElement>((props, ref) => {
  const menu: Context = {...useMenuPrimitiveState(), subMenu: false};
  if (Object.keys(MenuContext.Consumer._currentValue).length !== 0) {
    console.log(111, MenuContext.Consumer._currentValue);
    menu.subMenu = true;
  }
  const value = React.useMemo(() => menu, Object.values(menu));

  console.log(33, ref);
  return (
    <MenuContext.Provider value={value}>
      {typeof props.children === 'function' ? props.children(value, ref) : childrenWithProps(props.children, {ref})}
    </MenuContext.Provider>
  );
});

MenuWrapper.displayName = 'MenuWrapper';
export {MenuWrapper};
