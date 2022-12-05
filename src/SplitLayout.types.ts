import { ReactNode } from 'react';

export type SplitLayoutProps = {
  childCollapsable: ReactNode;
  childView: ReactNode;
  gap?: number;
  isReversed?: boolean;
  maxCollapsableSize?: number | string;
  minCollapsableSize?: number | string;
};
