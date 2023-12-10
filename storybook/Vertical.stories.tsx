import { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { CollapsableSplitLayoutVertical } from '../src/CollapsableSplitLayoutVertical';
import { FixView } from './FixView';
import { FlexibleBox } from './FlexibleBox';

const style: React.CSSProperties = {
  height: '90vh',
  margin: 10,
  textAlign: 'center',
};

const meta: Meta<typeof CollapsableSplitLayoutVertical> = {
  title: 'CollapsableSplitLayoutVertical',
  component: CollapsableSplitLayoutVertical,
} as Meta<typeof CollapsableSplitLayoutVertical>;
export default meta;
type Story = StoryObj<typeof CollapsableSplitLayoutVertical>;

export const Default = () => (
  <div style={style}>
    <CollapsableSplitLayoutVertical
      childCollapsable={<FlexibleBox isVertical={true} />}
      childView={<FixView />}
    />
  </div>
);

export const WithChildrenReversed = () => (
  <div style={style}>
    <CollapsableSplitLayoutVertical
      childCollapsable={<FlexibleBox isVertical={true} />}
      childView={<FixView />}
      isReversed={true}
    />
  </div>
);

export const WithGap = () => (
  <div style={style}>
    <CollapsableSplitLayoutVertical
      childCollapsable={<FlexibleBox isVertical={true} />}
      childView={<FixView />}
      gap={2}
    />
  </div>
);

export const WithMinimumCollapsableSize = () => (
  <div style={style}>
    <CollapsableSplitLayoutVertical
      childCollapsable={<FlexibleBox isVertical={true} />}
      childView={<FixView />}
      minCollapsableSize={100}
    />
  </div>
);

export const WithMaximumCollapsableSize = () => (
  <div style={style}>
    <CollapsableSplitLayoutVertical
      childCollapsable={<FlexibleBox isVertical={true} />}
      childView={<FixView />}
      maxCollapsableSize={100}
    />
  </div>
);

export const WithAllPropsSet = () => (
  <div style={style}>
    <CollapsableSplitLayoutVertical
      childCollapsable={<FlexibleBox isVertical={true} />}
      childView={<FixView />}
      isReversed={true}
      gap={2}
      minCollapsableSize={50}
      maxCollapsableSize={150}
    />
  </div>
);
