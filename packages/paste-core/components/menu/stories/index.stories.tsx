import * as React from 'react';
import {storiesOf} from '@storybook/react';
import {withKnobs} from '@storybook/addon-knobs';
import {Button} from '@twilio-paste/button';

import {Stack} from '@twilio-paste/stack';
import {Text} from '@twilio-paste/text';
import {MediaObject, MediaBody, MediaFigure} from '@twilio-paste/media-object';
import {InformationIcon} from '@twilio-paste/icons/esm/InformationIcon';
import {ChevronDownIcon} from '@twilio-paste/icons/esm/ChevronDownIcon';
import {MoreIcon} from '@twilio-paste/icons/esm/MoreIcon';

import {MenuWrapper, MenuButton, Menu, MenuItem, MenuItemSubMenu, MenuSeparator} from '../src';

const PreferencesMenu: React.FC = () => {
  return (
    <MenuWrapper>
      <MenuButton>Preferences</MenuButton>
      <Menu aria-label="Preferences">
        <MenuItem>Settings</MenuItem>
        <MenuItem disabled>Extensions</MenuItem>
        <MenuSeparator />
        <MenuItem>Keyboard shortcuts</MenuItem>
      </Menu>
    </MenuWrapper>
  );
};

const PlainMenu: React.FC<{}> = () => {
  return (
    <MenuWrapper>
      <MenuButton variant="secondary">Aaaachoo!</MenuButton>
      <Menu aria-label="Options">
        <MenuItem onClick={() => alert(1)}>Open an alert</MenuItem>
        <MenuItem href="https://google.com">Go to Google</MenuItem>
        <MenuItem as={PreferencesMenu} />
      </Menu>
    </MenuWrapper>
  );
};

const SubMenu: React.FC = () => {
  return (
    <MenuWrapper>
      <MenuButton variant="secondary">
        Code <ChevronDownIcon decorative />
      </MenuButton>
      <Menu aria-label="Code">
        <MenuItem>About Visual Studio Code</MenuItem>
        <MenuItem>Check for Updates...</MenuItem>
        <MenuSeparator />
        <MenuWrapper>
          <MenuItemSubMenu>Preferences</MenuItemSubMenu>
          <Menu aria-label="Preferences">
            <MenuItem>Settings</MenuItem>
            <MenuItem disabled>Extensions</MenuItem>
            <MenuSeparator />
            <MenuItem>Keyboard shortcuts</MenuItem>
          </Menu>
        </MenuWrapper>
      </Menu>
    </MenuWrapper>
  );
};
/*
const Example3: React.FC<{}> = () => {
  const SettingsItem = () => (
    <MediaObject verticalAlign="center">
            <MediaFigure spacing="space20">
              <InformationIcon decorative={false} title="information" />
            </MediaFigure>
            <MediaBody>Settings</MediaBody>
          </MediaObject>
  )
  return (
    <>
      <MenuButton {...menu} variant="secondary" size="icon">
        <InformationIcon decorative={false} title="show information" />
      </MenuButton>
      <Menu {...menu} aria-label="Preferences">
        <MenuItem as={SettingsItem} />
        <MenuItem {...menu} disabled>
          Extensions
        </MenuItem>
        <MenuSeparator {...menu} />
        <MenuItem {...menu}>Keyboard shortcuts</MenuItem>
      </Menu>
    </>
  );
};

const Example4: React.FC<{}> = () => {
  const menu = useMenuState();
  return (
    <>
      <MenuButton {...menu} variant="reset" size="reset">
        <MoreIcon decorative={false} title="show more" />
      </MenuButton>
      <Menu {...menu} aria-label="Preferences">
        <MenuItem {...menu}>
          <MediaObject verticalAlign="center">
            <MediaFigure spacing="space20">
              <InformationIcon decorative={false} title="information" />
            </MediaFigure>
            <MediaBody>Settings</MediaBody>
          </MediaObject>
        </MenuItem>
        <MenuItem {...menu} disabled>
          Extensions
        </MenuItem>
        <MenuSeparator {...menu} />
        <MenuItem {...menu}>Keyboard shortcuts</MenuItem>
      </Menu>
    </>
  );
};

const WithActionsMenu: React.FC<{}> = () => {
  const menu = useMenuState();
  return (
    <>
      <MenuButton {...menu} variant="primary">
        Click actions <ChevronDownIcon decorative />
      </MenuButton>
      <Menu {...menu} aria-label="Preferences">
        <MenuItem {...menu} href="http://www.google.com" onClick={() => menu.hide()}>
          Has a link
        </MenuItem>
        <MenuItem {...menu} href="#" onClick={() => menu.hide()}>
          Has internal link
        </MenuItem>
        <MenuItem
          {...menu}
          onClick={() => {
            alert('you clicked me');
            menu.hide();
          }}
        >
          Has just an onClick
        </MenuItem>
      </Menu>
    </>
  );
};
*/
storiesOf('Components|Menu', module)
  .addDecorator(withKnobs)
  .add('default', () => {
    return <PlainMenu />;
  })
  .add('sub menu', () => {
    return <SubMenu />;
  });
/*.add('actions demo menu', () => {
    return <WithActionsMenu />;
  })
  .add('menu dropdown', () => {
    const menuMockProps = {
      visible: true,
      baseId: 'test',
      first: () => {},
      last: () => {},
      items: [],
      move: () => {},
      next: () => {},
      previous: () => {},
      setCurrentId: () => {},
    };

    const menuItemMockProps = {
      first: () => {},
      last: () => {},
      items: [],
      move: () => {},
      next: () => {},
      previous: () => {},
      up: () => {},
      down: () => {},
      setCurrentId: () => {},
      registerItem: () => {},
      unregisterItem: () => {},
      tabIndex: -1,
    };
    return (
      <Menu {...menuMockProps} aria-label="Code" placement="auto">
        <MenuItem {...menuItemMockProps}>Default</MenuItem>
        <MenuItem {...menuItemMockProps} disabled>
          Disabled
        </MenuItem>
        <MenuSeparator />
        <MenuItem {...menuItemMockProps}>Suuuuuuuuuuuuuuuuuuuuuuper long menu item</MenuItem>
        <MenuItem {...menuItemMockProps}>
          <MediaObject verticalAlign="center">
            <MediaFigure spacing="space20">
              <InformationIcon decorative={false} title="information" />
            </MediaFigure>
            <MediaBody>Got an icon</MediaBody>
          </MediaObject>
        </MenuItem>
        <MenuItem {...menuItemMockProps}>
          <MediaObject verticalAlign="center">
            <MediaBody>Got a right icon</MediaBody>
            <MediaFigure spacing="space20" align="end">
              <InformationIcon decorative={false} title="information" />
            </MediaFigure>
          </MediaObject>
        </MenuItem>
        <MenuItem {...menuItemMockProps}>
          <MediaObject verticalAlign="center">
            <MediaFigure spacing="space20">
              <InformationIcon decorative={false} title="information" />
            </MediaFigure>
            <MediaBody>Got two icons</MediaBody>
            <MediaFigure spacing="space20" align="end">
              <InformationIcon decorative={false} title="information" />
            </MediaFigure>
          </MediaObject>
        </MenuItem>
        <MenuItem {...menuItemMockProps}>
          <MediaObject verticalAlign="center">
            <MediaFigure spacing="space20">
              <InformationIcon decorative={false} title="information" />
            </MediaFigure>
            <MediaBody>keyboard shortcut?</MediaBody>
            <MediaFigure spacing="space20" align="end">
              <Text as="span" color="colorTextWeak" fontSize="fontSize20">
                ⌘+s
              </Text>
            </MediaFigure>
          </MediaObject>
        </MenuItem>
        <MenuItem {...menuItemMockProps}>
          <MediaObject verticalAlign="center">
            <MediaBody>Got a right icon</MediaBody>
            <MediaFigure spacing="space20" align="end">
              <InformationIcon decorative={false} title="information" />
            </MediaFigure>
          </MediaObject>
        </MenuItem>
        <SubMenuButton {...menuItemMockProps} toggle={() => {}} placement="auto" baseId="test" show={() => {}}>
          Sub menu button
        </SubMenuButton>
      </Menu>
    );
  })
  .add('different button triggers', () => {
    return (
      <>
        <Stack orientation="vertical" spacing="space50">
          <PlainMenu />
          <SubMenu />
          <Example3 />
          <Example4 />
        </Stack>
      </>
    );
  });*/
