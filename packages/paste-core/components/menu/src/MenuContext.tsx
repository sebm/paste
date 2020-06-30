import * as React from 'react';
import {MenuPrimitiveState} from '@twilio-paste/menu-primitive';

const MenuContext = React.createContext<Partial<MenuPrimitiveState>>({});
const SubMenuContext = React.createContext<Partial<MenuPrimitiveState>>({});

export {MenuContext, SubMenuContext};
