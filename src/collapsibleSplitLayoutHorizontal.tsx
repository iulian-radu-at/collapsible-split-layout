import React from 'react';
import Box from '@mui/material/Box';
import { SxProps, Theme } from '@mui/material/styles';
import { SplitLayoutProps } from './SplitLayout.types';

const sx: Record<string, SxProps<Theme>> = {
  Collapsible: {
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

export function CollapsibleSplitLayoutHorizontal({
  childCollapsible,
  childView,
  isReversed,
  gap,
  maxCollapsibleSize,
  minCollapsibleSize,
}: SplitLayoutProps) {
  const childLeft = isReversed ? childView : childCollapsible;
  const childRight = isReversed ? childCollapsible : childView;

  const sxCollapsible = {
    ...sx.Collapsible,
    maxWidth: maxCollapsibleSize,
    minWidth: minCollapsibleSize,
  };
  const sxLeft = isReversed ? sx.visible : sxCollapsible;
  const sxRight = isReversed ? sxCollapsible : sx.visible;

  return (
    <Box gap={gap} sx={sx.root}>
      <Box sx={sxLeft}>{childLeft}</Box>
      <Box sx={sxRight}>{childRight}</Box>
    </Box>
  );
}
