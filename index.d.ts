import * as React from 'react';

export interface CollapsableSplitLayoutProps extends SplitLayoutProps {
  isVertical?: boolean;
}

export interface SplitLayoutProps {
  childCollapsable: React.ReactNode;
  childView: React.ReactNode;
  gap?: number;
  isReversed?: boolean;
  /* Please use only numbers or vw,vh values */
  maxCollapsableSize?: number | string;
  minCollapsableSize?: number | string;
}

declare function CollapsableSplitLayout(
  props: CollapsableSplitLayoutProps
): React.ReactNode;

declare function CollapsableSplitLayoutHorizontal(
  props: CollapsableSplitLayoutProps
): React.ReactNode;

declare function CollapsableSplitLayoutVertical(
  props: CollapsableSplitLayoutProps
): React.ReactNode;

declare module 'collapsable-split-layout' {}

export default CollapsableSplitLayout;
export {
  CollapsableSplitLayout,
  CollapsableSplitLayoutHorizontal,
  CollapsableSplitLayoutVertical,
};
