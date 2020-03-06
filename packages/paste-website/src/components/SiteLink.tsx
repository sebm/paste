import * as React from 'react';
import styled from '@emotion/styled';
import {themeGet} from '@styled-system/theme-get';
import {Link} from 'gatsby';

// Link styles copied from @twilio-paste/anchor
const StyledLink = styled(Link)({
  color: themeGet('textColors.colorTextLink'),
  textDecoration: 'underline',
  outline: 'none',

  '&:hover': {
    color: themeGet('textColors.colorTextLinkHover'),
    textDecoration: 'none',
  },

  '&:focus, &:active': {
    boxShadow: themeGet('shadows.shadowFocus'),
    textDecoration: 'none',
  },

  '&:focus': {
    color: themeGet('textColors.colorTextLinkFocus'),
  },

  '&:active': {
    color: themeGet('textColors.colorTextLinkActive'),
  },
});

interface SiteLinkProps {
  children: React.ReactNode;
  to: string;
}

const SiteLink: React.FC<SiteLinkProps> = ({children, to}) => <StyledLink to={to}>{children}</StyledLink>;

export {SiteLink};
