import { ComponentMeta, ComponentStory, storiesOf } from '@storybook/react';
import React from 'react';
import { CollapsableSplitLayoutVertical } from '../src/CollapsableSplitLayoutVertical';
import { FixView } from './FixView';
import { FlexibleBox } from './FlexibleBox';

const style: React.CSSProperties = {
  height: '90vh',
  margin: 10,
  textAlign: 'center',
};

export default {
  title: 'CollapsableSplitLayoutVertical',
  component: CollapsableSplitLayoutVertical,
} as ComponentMeta<typeof CollapsableSplitLayoutVertical>;

export const Default: ComponentStory<typeof CollapsableSplitLayoutVertical> =
  () => (
    <div style={style}>
      <CollapsableSplitLayoutVertical
        childCollapsable={<FlexibleBox isVertical={true} />}
        childView={<FixView />}
      />
    </div>
  );

export const WithChildrenReversed: ComponentStory<
  typeof CollapsableSplitLayoutVertical
> = () => (
  <div style={style}>
    <CollapsableSplitLayoutVertical
      childCollapsable={<FlexibleBox isVertical={true} />}
      childView={<FixView />}
      isReversed={true}
    />
  </div>
);

export const WithGap: ComponentStory<typeof CollapsableSplitLayoutVertical> =
  () => (
    <div style={style}>
      <CollapsableSplitLayoutVertical
        childCollapsable={<FlexibleBox isVertical={true} />}
        childView={<FixView />}
        gap={2}
      />
    </div>
  );

export const WithMinimumCollapsableSize: ComponentStory<
  typeof CollapsableSplitLayoutVertical
> = () => (
  <div style={style}>
    <CollapsableSplitLayoutVertical
      childCollapsable={<FlexibleBox isVertical={true} />}
      childView={<FixView />}
      minCollapsableSize={100}
    />
  </div>
);

export const WithMaximumCollapsableSize: ComponentStory<
  typeof CollapsableSplitLayoutVertical
> = () => (
  <div style={style}>
    <CollapsableSplitLayoutVertical
      childCollapsable={<FlexibleBox isVertical={true} />}
      childView={<FixView />}
      maxCollapsableSize={100}
    />
  </div>
);

export const WithAllPropsSet: ComponentStory<
  typeof CollapsableSplitLayoutVertical
> = () => (
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
