import {
  styled,
  css,
  compose,
  layout,
  space,
  background,
  border,
  boxShadow,
  position,
  flexbox,
  system,
  typography,
} from '@twilio-paste/styling-library';
import {
  LayoutProps,
  SpaceProps,
  BackgroundProps,
  BorderProps,
  ShadowProps,
  PositionProps,
  FlexboxProps,
  TypographyProps,
} from '@twilio-paste/style-props';
import {
  CursorProperty,
  AppearanceProperty,
  AnimationProperty,
  TransformProperty,
  TransformOriginProperty,
  VisibilityProperty,
  UserSelectProperty,
  PointerEventsProperty,
  BoxSizingProperty,
  ResizeProperty,
  TransitionProperty,
  ListStyleTypeProperty,
  ListStylePositionProperty,
  ListStyleImageProperty,
  ObjectFitProperty,
  ObjectPositionProperty,
  BackgroundAttachmentProperty,
  OutlineProperty,
  FloatProperty,
  WillChangeProperty,
} from 'csstype';
import {PseudoPropStyles} from './PseudoPropStyles';
import {BoxPropTypes} from './BoxPropTypes';

export interface BoxStyleProps
  extends LayoutProps,
    SpaceProps,
    BackgroundProps,
    BorderProps,
    ShadowProps,
    TypographyProps,
    PositionProps,
    FlexboxProps {
  content?: string;
  cursor?: CursorProperty;
  appearance?: AppearanceProperty;
  animation?: AnimationProperty;
  transform?: TransformProperty;
  transformOrigin?: TransformOriginProperty<string>;
  visibility?: VisibilityProperty;
  userSelect?: UserSelectProperty;
  pointerEvents?: PointerEventsProperty;
  boxSizing?: BoxSizingProperty;
  resize?: ResizeProperty;
  transition?: TransitionProperty;
  listStyleType?: ListStyleTypeProperty;
  listStylePosition?: ListStylePositionProperty;
  listStyleImage?: ListStyleImageProperty;
  objectFit?: ObjectFitProperty;
  objectPosition?: ObjectPositionProperty<string>;
  backgroundAttachment?: BackgroundAttachmentProperty;
  outline?: OutlineProperty<string>;
  float?: FloatProperty;
  willChange?: WillChangeProperty;
}

interface PseudoStylesProps {
  _after?: BoxStyleProps;
  _before?: BoxStyleProps;
  _focus?: BoxStyleProps;
  _hover?: BoxStyleProps;
  _active?: BoxStyleProps;
  _pressed?: BoxStyleProps;
  _selected?: BoxStyleProps;
  _focusWithin?: BoxStyleProps;
  _invalid?: BoxStyleProps;
  _disabled?: BoxStyleProps;
  _grabbed?: BoxStyleProps;
  _expanded?: BoxStyleProps;
  _checked?: BoxStyleProps;
  _mixed?: BoxStyleProps;
  _odd?: BoxStyleProps;
  _even?: BoxStyleProps;
  _visited?: BoxStyleProps;
  _readOnly?: BoxStyleProps;
  _first?: BoxStyleProps;
  _last?: BoxStyleProps;
  _groupHover?: BoxStyleProps;
  _notFirst?: BoxStyleProps;
  _notLast?: BoxStyleProps;
  _placeholder?: BoxStyleProps;
}

export interface BoxProps extends Omit<React.HTMLAttributes<any>, 'color'>, BoxStyleProps, PseudoStylesProps {
  as: keyof JSX.IntrinsicElements;
  /** Typed as any because Box can literally be any HTML element */
  ref?: any | null;
  // image props
  alt?: string;
  src?: string;
}

const extraConfig = system({
  backgroundColor: {
    property: 'backgroundColor',
    scale: 'backgroundColors',
  },
  borderColor: {
    property: 'borderColor',
    scale: 'borderColors',
  },
  color: {
    property: 'color',
    scale: 'textColors',
  },
  animation: true,
  appearance: true,
  transform: true,
  transformOrigin: true,
  visibility: true,
  userSelect: true,
  pointerEvents: true,
  boxSizing: true,
  cursor: true,
  resize: true,
  transition: true,
  listStyleType: true,
  listStylePosition: true,
  listStyleImage: true,
  objectFit: true,
  objectPosition: true,
  backgroundAttachment: {
    property: 'backgroundAttachment',
  },
  outline: true,
  float: true,
  willChange: true,
});

const getPseudoStyles = (props: BoxProps): {} => {
  const pseudoProps = Object.keys(props).filter(propName => propName.startsWith('_'));

  if (pseudoProps.length === 0) {
    return {};
  }

  const pseudoStyles = {};
  pseudoProps.forEach(pseudoProp => {
    if (PseudoPropStyles[pseudoProp] != null) {
      pseudoStyles[PseudoPropStyles[pseudoProp]] = props[pseudoProp];
    }
  });

  return css(pseudoStyles);
};

// TODO wtf ts
/* eslint-disable emotion/syntax-preference */
export const Box = styled.div(
  compose(
    space,
    layout,
    flexbox,
    background,
    border,
    boxShadow,
    position,
    typography,
    extraConfig
  ),
  getPseudoStyles
) as React.FC<BoxProps>;
/* eslint-enable */

Box.displayName = 'Box';

if (process.env.NODE_ENV === 'development') {
  Box.propTypes = BoxPropTypes;
}

export * from './SafelySpreadProps';
