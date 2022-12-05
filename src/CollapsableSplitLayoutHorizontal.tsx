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
    flexDirection: 'row',
    height: '100%',
    overflow: 'hidden',
    width: '100%',
  },
  visible: {
    overflow: 'auto',
    width: '100%',
  },
};

export function CollapsableSplitLayoutHorizontal({
  childCollapsable,
  childView,
  isReversed,
  gap,
  maxCollapsableSize,
  minCollapsableSize,
}: SplitLayoutProps) {
  const childLeft = isReversed ? childView : childCollapsable;
  const childRight = isReversed ? childCollapsable : childView;

  const sxCollapsable = {
    ...sx.collapsable,
    maxWidth: maxCollapsableSize,
    minWidth: minCollapsableSize,
  };
  const sxLeft = isReversed ? sx.visible : sxCollapsable;
  const sxRight = isReversed ? sxCollapsable : sx.visible;

  return (
    <Box gap={gap} sx={sx.root}>
      <Box sx={sxLeft}>{childLeft}</Box>
      <Box sx={sxRight}>{childRight}</Box>
    </Box>
  );
}
