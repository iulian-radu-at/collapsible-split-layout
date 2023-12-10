import { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { CollapsibleSplitLayoutVertical } from '../src/CollapsibleSplitLayoutVertical';
import { FixView } from './FixView';
import { FlexibleBox } from './FlexibleBox';

const style: React.CSSProperties = {
  height: '90vh',
  margin: 10,
  textAlign: 'center',
};

const meta: Meta<typeof CollapsibleSplitLayoutVertical> = {
  title: 'CollapsibleSplitLayoutVertical',
  component: CollapsibleSplitLayoutVertical,
} as Meta<typeof CollapsibleSplitLayoutVertical>;
export default meta;
type Story = StoryObj<typeof CollapsibleSplitLayoutVertical>;

export const Default = () => (
  <div style={style}>
    <CollapsibleSplitLayoutVertical
      childCollapsible={<FlexibleBox isVertical={true} />}
      childView={<FixView />}
    />
  </div>
);

export const WithChildrenReversed = () => (
  <div style={style}>
    <CollapsibleSplitLayoutVertical
      childCollapsible={<FlexibleBox isVertical={true} />}
      childView={<FixView />}
      isReversed={true}
    />
  </div>
);

export const WithGap = () => (
  <div style={style}>
    <CollapsibleSplitLayoutVertical
      childCollapsible={<FlexibleBox isVertical={true} />}
      childView={<FixView />}
      gap={2}
    />
  </div>
);

export const WithMinimumCollapsibleSize = () => (
  <div style={style}>
    <CollapsibleSplitLayoutVertical
      childCollapsible={<FlexibleBox isVertical={true} />}
      childView={<FixView />}
      minCollapsibleSize={100}
    />
  </div>
);

export const WithMaximumCollapsibleSize = () => (
  <div style={style}>
    <CollapsibleSplitLayoutVertical
      childCollapsible={<FlexibleBox isVertical={true} />}
      childView={<FixView />}
      maxCollapsibleSize={100}
    />
  </div>
);

export const WithAllPropsSet = () => (
  <div style={style}>
    <CollapsibleSplitLayoutVertical
      childCollapsible={<FlexibleBox isVertical={true} />}
      childView={<FixView />}
      isReversed={true}
      gap={2}
      minCollapsibleSize={50}
      maxCollapsibleSize={150}
    />
  </div>
);
