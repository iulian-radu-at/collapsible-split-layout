import * as React from 'react';
import { CollapsableSplitLayoutHorizontal } from './CollapsableSplitLayoutHorizontal';
import { CollapsableSplitLayoutVertical } from './CollapsableSplitLayoutVertical';
import { SplitLayoutProps } from './SplitLayout.types';

type Props = SplitLayoutProps & {
  isVertical?: boolean;
};

export function CollapsableSplitLayout({
  isVertical = false,
  ...props
}: Props) {
  return isVertical ? (
    <CollapsableSplitLayoutVertical {...props} />
  ) : (
    <CollapsableSplitLayoutHorizontal {...props} />
  );
}
