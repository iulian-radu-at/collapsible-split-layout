import { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { CollapsableSplitLayoutHorizontal } from '../src/CollapsableSplitLayoutHorizontal';
import { FixView } from './FixView';
import { FlexibleBox } from './FlexibleBox';

const style: React.CSSProperties = {
  height: '90vh',
  margin: 10,
  textAlign: 'center',
};

const meta: Meta<typeof CollapsableSplitLayoutHorizontal> = {
  title: 'CollapsableSplitLayoutHorizontal',
  component: CollapsableSplitLayoutHorizontal,
} as Meta<typeof CollapsableSplitLayoutHorizontal>;
export default meta;
type Story = StoryObj<typeof CollapsableSplitLayoutHorizontal>;

export const Default = () => (
  <div style={style}>
    <CollapsableSplitLayoutHorizontal
      childCollapsable={<FlexibleBox />}
      childView={<FixView />}
    />
  </div>
);

export const WithChildrenReversed = () => (
  <div style={style}>
    <CollapsableSplitLayoutHorizontal
      childCollapsable={<FlexibleBox />}
      childView={<FixView />}
      isReversed={true}
    />
  </div>
);

export const WithGap = () => (
  <div style={style}>
    <CollapsableSplitLayoutHorizontal
      childCollapsable={<FlexibleBox />}
      childView={<FixView />}
      gap={2}
    />
  </div>
);

export const WithMinimumCollapsableSize = () => (
  <div style={style}>
    <CollapsableSplitLayoutHorizontal
      childCollapsable={<FlexibleBox />}
      childView={<FixView />}
      minCollapsableSize={100}
    />
  </div>
);

export const WithMaximumCollapsableSize = () => (
  <div style={style}>
    <CollapsableSplitLayoutHorizontal
      childCollapsable={<FlexibleBox />}
      childView={<FixView />}
      maxCollapsableSize={100}
    />
  </div>
);

export const WithAllPropsSet = () => (
  <div style={style}>
    <CollapsableSplitLayoutHorizontal
      childCollapsable={<FlexibleBox />}
      childView={<FixView />}
      isReversed={true}
      gap={2}
      minCollapsableSize={50}
      maxCollapsableSize={150}
    />
  </div>
);
