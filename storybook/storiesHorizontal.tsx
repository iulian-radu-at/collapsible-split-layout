import { ComponentMeta, ComponentStory, storiesOf } from '@storybook/react';
import React from 'react';
import { CollapsableSplitLayoutHorizontal } from '../src/CollapsableSplitLayoutHorizontal';
import { FixView } from './FixView';
import { FlexibleBox } from './FlexibleBox';

const style: React.CSSProperties = {
  height: '90vh',
  margin: 10,
  textAlign: 'center',
};

export default {
  title: 'CollapsableSplitLayoutHorizontal',
  component: CollapsableSplitLayoutHorizontal,
} as ComponentMeta<typeof CollapsableSplitLayoutHorizontal>;

export const Default: ComponentStory<typeof CollapsableSplitLayoutHorizontal> =
  () => (
    <div style={style}>
      <CollapsableSplitLayoutHorizontal
        childCollapsable={<FlexibleBox />}
        childView={<FixView />}
      />
    </div>
  );

export const WithChildrenReversed: ComponentStory<
  typeof CollapsableSplitLayoutHorizontal
> = () => (
  <div style={style}>
    <CollapsableSplitLayoutHorizontal
      childCollapsable={<FlexibleBox />}
      childView={<FixView />}
      isReversed={true}
    />
  </div>
);

export const WithGap: ComponentStory<typeof CollapsableSplitLayoutHorizontal> =
  () => (
    <div style={style}>
      <CollapsableSplitLayoutHorizontal
        childCollapsable={<FlexibleBox />}
        childView={<FixView />}
        gap={2}
      />
    </div>
  );

export const WithMinimumCollapsableSize: ComponentStory<
  typeof CollapsableSplitLayoutHorizontal
> = () => (
  <div style={style}>
    <CollapsableSplitLayoutHorizontal
      childCollapsable={<FlexibleBox />}
      childView={<FixView />}
      minCollapsableSize={100}
    />
  </div>
);

export const WithMaximumCollapsableSize: ComponentStory<
  typeof CollapsableSplitLayoutHorizontal
> = () => (
  <div style={style}>
    <CollapsableSplitLayoutHorizontal
      childCollapsable={<FlexibleBox />}
      childView={<FixView />}
      maxCollapsableSize={100}
    />
  </div>
);

export const WithAllPropsSet: ComponentStory<
  typeof CollapsableSplitLayoutHorizontal
> = () => (
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
