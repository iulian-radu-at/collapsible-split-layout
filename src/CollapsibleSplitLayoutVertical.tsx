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

export function CollapsibleSplitLayoutVertical({
  childCollapsible,
  childView,
  isReversed,
  gap,
  maxCollapsibleSize,
  minCollapsibleSize,
}: SplitLayoutProps) {
  const childTop = isReversed ? childView : childCollapsible;
  const childBottom = isReversed ? childCollapsible : childView;

  const sxCollapsible = {
    ...sx.Collapsible,
    maxHeight: maxCollapsibleSize,
    minHeight: minCollapsibleSize,
  };
  const sxTop = isReversed ? sx.visible : sxCollapsible;
  const sxBottom = isReversed ? sxCollapsible : sx.visible;

  return (
    <Box gap={gap} sx={sx.root}>
      <Box sx={sxTop}>{childTop}</Box>
      <Box sx={sxBottom}>{childBottom}</Box>
    </Box>
  );
}
