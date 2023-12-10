import { ReactNode } from 'react';

export type SplitLayoutProps = {
  childCollapsible: ReactNode;
  childView: ReactNode;
  gap?: number;
  isReversed?: boolean;
  maxCollapsibleSize?: number | string;
  minCollapsibleSize?: number | string;
};
