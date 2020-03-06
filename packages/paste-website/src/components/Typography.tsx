import * as React from 'react';
import styled from '@emotion/styled';
import {Text} from '@twilio-paste/text';
import {themeGet} from '@styled-system/theme-get';

export interface PProps {
  variant?: 'default' | 'lead';
}
export const P: React.FC<PProps> = ({children, variant}) => {
  return (
    <Text
      as="p"
      marginBottom="space70"
      lineHeight={variant === 'lead' ? 'lineHeight40' : 'lineHeight30'}
      fontSize={variant === 'lead' ? 'fontSize40' : undefined}
    >
      {children}
    </Text>
  );
};

export const Pre: React.FC<{}> = props => {
  return (
    <Text as="pre" marginBottom="space70" lineHeight="lineHeight20">
      {props.children}
    </Text>
  );
};

export const InlineCode = styled.code<{}>({
  backgroundColor: themeGet('backgroundColors.colorBackground'),
  borderRadius: themeGet('radii.borderRadius20'),
  color: themeGet('textColors.colorText'),
  fontSize: themeGet('fontSizes.fontSize30'),
  lineHeight: themeGet('lineHeights.lineHeight20'),
  padding: `${themeGet('space.space20')} ${themeGet('space.space30')}`,
});
