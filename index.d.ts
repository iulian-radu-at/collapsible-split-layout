import * as React from 'react';

export interface CollapsibleSplitLayoutProps extends SplitLayoutProps {
  isVertical?: boolean;
}

export interface SplitLayoutProps {
  childCollapsible: React.ReactNode;
  childView: React.ReactNode;
  gap?: number;
  isReversed?: boolean;
  /* Please use only numbers or vw,vh values */
  maxCollapsibleSize?: number | string;
  minCollapsibleSize?: number | string;
}

declare function CollapsibleSplitLayout(
  props: CollapsibleSplitLayoutProps
): React.ReactNode;

declare function CollapsibleSplitLayoutHorizontal(
  props: CollapsibleSplitLayoutProps
): React.ReactNode;

declare function CollapsibleSplitLayoutVertical(
  props: CollapsibleSplitLayoutProps
): React.ReactNode;

declare module 'Collapsible-split-layout' {}

export default CollapsibleSplitLayout;
export {
  CollapsibleSplitLayout,
  CollapsibleSplitLayoutHorizontal,
  CollapsibleSplitLayoutVertical,
};
