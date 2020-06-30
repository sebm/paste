import * as React from 'react';
import {Button, ButtonProps} from '@twilio-paste/button';
import {MenuPrimitiveButton, MenuPrimitiveButtonProps} from '@twilio-paste/menu-primitive';
import {Box} from '@twilio-paste/box';
import {MediaObject, MediaFigure, MediaBody} from '@twilio-paste/media-object';
import {ChevronDownIcon} from '@twilio-paste/icons/esm/ChevronDownIcon';
import {StyledMenuItem} from './StyledMenuItem';
import {MenuContext} from './MenuContext';

export type MenuButtonProps = MenuPrimitiveButtonProps & ButtonProps;

const MenuButton = React.forwardRef<HTMLButtonElement, MenuButtonProps>((props, ref) => {
  const menu = React.useContext(MenuContext);

  if (menu.subMenu) {
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
  }
  return (
    <MenuPrimitiveButton {...menu} {...props} as={Button} ref={ref}>
      {props.children}
    </MenuPrimitiveButton>
  );
});

MenuButton.displayName = 'MenuButton';
export {MenuButton};
