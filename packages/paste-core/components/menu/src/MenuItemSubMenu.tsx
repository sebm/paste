import * as React from 'react';
import {Box} from '@twilio-paste/box';
import {MediaObject, MediaFigure, MediaBody} from '@twilio-paste/media-object';
import {ChevronDownIcon} from '@twilio-paste/icons/esm/ChevronDownIcon';
import {MenuPrimitiveButton, MenuPrimitiveButtonProps} from '@twilio-paste/menu-primitive';
import {StyledMenuItem} from './StyledMenuItem';
import {MenuContext} from './MenuContext';

export interface MenuItemSubMenuProps {
  children: NonNullable<React.ReactNode>;
}

const MenuItemSubMenu = React.forwardRef<HTMLButtonElement, MenuItemSubMenuProps>((props, ref) => {
  const menu = React.useContext(MenuContext);
  console.log(22, ref);
  return (
    <MenuPrimitiveButton {...menu} {...props} as={StyledMenuItem} ref={ref}>
      <MediaObject as="div" verticalAlign="center">
        <MediaBody as="div">{props.children}</MediaBody>
        <MediaFigure as="div" align="end" spacing="space20">
          <Box display="flex" transform="rotate(-90deg)">
            <ChevronDownIcon decorative size="sizeIcon20" />
          </Box>
        </MediaFigure>
      </MediaObject>
    </MenuPrimitiveButton>
  );
});

MenuItemSubMenu.displayName = 'MenuItemSubMenu';
export {MenuItemSubMenu};
