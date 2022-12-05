import Box from '@mui/material/Box';
import { SxProps, Theme } from '@mui/material/styles';
import * as React from 'react';
import { SplitLayoutProps } from './SplitLayout.types';

const sx: Record<string, SxProps<Theme>> = {
  collapsable: {
    overflow: 'auto',
    flexShrink: 0,
  },
  root: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    overflow: 'hidden',
    width: '100%',
  },
  visible: {
    overflow: 'auto',
    height: '100%',
  },
};

export function CollapsableSplitLayoutVertical({
  childCollapsable,
  childView,
  isReversed,
  gap,
  maxCollapsableSize,
  minCollapsableSize,
}: SplitLayoutProps) {
  const childTop = isReversed ? childView : childCollapsable;
  const childBottom = isReversed ? childCollapsable : childView;

  const sxCollapsable = {
    ...sx.collapsable,
    maxHeight: maxCollapsableSize,
    minHeight: minCollapsableSize,
  };
  const sxTop = isReversed ? sx.visible : sxCollapsable;
  const sxBottom = isReversed ? sxCollapsable : sx.visible;

  return (
    <Box gap={gap} sx={sx.root}>
      <Box sx={sxTop}>{childTop}</Box>
      <Box sx={sxBottom}>{childBottom}</Box>
    </Box>
  );
}
