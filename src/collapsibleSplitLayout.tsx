import React from 'react';
import { CollapsibleSplitLayoutHorizontal } from './CollapsibleSplitLayoutHorizontal';
import { CollapsibleSplitLayoutVertical } from './CollapsibleSplitLayoutVertical';
import { SplitLayoutProps } from './SplitLayout.types';

type Props = SplitLayoutProps & {
  isVertical?: boolean;
};

export function CollapsibleSplitLayout({
  isVertical = false,
  ...props
}: Props) {
  return isVertical ? (
    <CollapsibleSplitLayoutVertical {...props} />
  ) : (
    <CollapsibleSplitLayoutHorizontal {...props} />
  );
}
