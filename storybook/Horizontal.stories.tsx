import { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { CollapsibleSplitLayoutHorizontal } from '../src/CollapsibleSplitLayoutHorizontal';
import { FixView } from './FixView';
import { FlexibleBox } from './FlexibleBox';

const style: React.CSSProperties = {
  height: '90vh',
  margin: 10,
  textAlign: 'center',
};

const meta: Meta<typeof CollapsibleSplitLayoutHorizontal> = {
  title: 'CollapsibleSplitLayoutHorizontal',
  component: CollapsibleSplitLayoutHorizontal,
} as Meta<typeof CollapsibleSplitLayoutHorizontal>;
export default meta;
type Story = StoryObj<typeof CollapsibleSplitLayoutHorizontal>;

export const Default = () => (
  <div style={style}>
    <CollapsibleSplitLayoutHorizontal
      childCollapsible={<FlexibleBox />}
      childView={<FixView />}
    />
  </div>
);

export const WithChildrenReversed = () => (
  <div style={style}>
    <CollapsibleSplitLayoutHorizontal
      childCollapsible={<FlexibleBox />}
      childView={<FixView />}
      isReversed={true}
    />
  </div>
);

export const WithGap = () => (
  <div style={style}>
    <CollapsibleSplitLayoutHorizontal
      childCollapsible={<FlexibleBox />}
      childView={<FixView />}
      gap={2}
    />
  </div>
);

export const WithMinimumCollapsibleSize = () => (
  <div style={style}>
    <CollapsibleSplitLayoutHorizontal
      childCollapsible={<FlexibleBox />}
      childView={<FixView />}
      minCollapsibleSize={100}
    />
  </div>
);

export const WithMaximumCollapsibleSize = () => (
  <div style={style}>
    <CollapsibleSplitLayoutHorizontal
      childCollapsible={<FlexibleBox />}
      childView={<FixView />}
      maxCollapsibleSize={100}
    />
  </div>
);

export const WithAllPropsSet = () => (
  <div style={style}>
    <CollapsibleSplitLayoutHorizontal
      childCollapsible={<FlexibleBox />}
      childView={<FixView />}
      isReversed={true}
      gap={2}
      minCollapsibleSize={50}
      maxCollapsibleSize={150}
    />
  </div>
);
