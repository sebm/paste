import styled from '@emotion/styled';
import {themeGet} from '@styled-system/theme-get';
import {HEADER_HEIGHT} from './constants';

export const SiteMain = styled.main({
  position: 'relative',
  overflow: 'auto',
  marginTop: HEADER_HEIGHT,
  paddingTop: themeGet('space.space100'),
});

export const SiteMainInner = styled.div({
  padding: `0 ${themeGet('space.space200')}`,
});
