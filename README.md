# collapsable-split-layout ![Weekly downloads](https://img.shields.io/npm/dw/collapsable-split-layout 'Weekly downloads')

A React component to display a splitted layout were one of the sides can be collapsed/expanded without affecting the whole layout.

---

## Demo

You can access the storybook for these components [here](https://iulian-radu-at.github.io/collapsable-split-layout/).

## Props

There are three components.
One (CollapsableSplitLayout) for displaying on demand one of the following components and two components (CollapsableSplitLayoutHorizontal and CollapsableSplitLayoutVertical) used by the first component.

### Props accepted by CollapsableSplitLayout/CollapsableSplitLayoutHorizontal/CollapsableSplitLayoutVertical

| Name               | Type            | Required | Default | Description                                            |
| ------------------ | --------------- | -------- | ------- | ------------------------------------------------------ |
| childCollapsable   | React.ReactNode | yes      | -       | The collapsable component                              |
| childView          | React.ReactNode | yes      | -       | The non-collapsable component                          |
| gap                | number          | no       | 0       | The gap between componetns in MUI units (1 unit = 8px) |
| isReversed         | boolean         | no       | false   | The collapsable component is for false on the left     |
| maxCollapsableSize | number          | no       | -       | The max size of collapsable component                  |
| minCollapsableSize | number          | no       | -       | The min size of collapsable component                  |

Only for CollapsableSplitLayout

| Name       | Type    | Required | Default | Description                                     |
| ---------- | ------- | -------- | ------- | ----------------------------------------------- |
| isVertical | boolean | no       | false   | It is used the CollapsableSplitLayoutHorizontal |

---

## Versions

| CollapsableSplitLayout _uses_ | React  |
| ----------------------------: | :----: |
|                         1.0.x | 18.0.0 |

### About versioning schema used for CollapsableSplitLayout

- Major - it will be increased if the major version of the dependat package changes or there are breaking changes in the code of CollapsableSplitLayout or CollapsableSplitLayoutRaw
- Minor - it will be increased if no major version of the dependat package changes, but there are changes of the minor or patch versions of it
- Patch - it will be increased if there are no changes of the dependat packages, but there are non breaking changes in the code of CollapsableSplitLayout or CollapsableSplitLayoutRaw

---

## Example

Displaying a horizontal layout (collapsable on left):

```js
import * as React from 'react';
import { CollapsableSplitLayoutHorizontal } from 'collapsable-split-layout';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <CollapsableSplitLayoutHorizontal
          childCollapsable={<FlexibleBox />}
          childView={<FixView />}
        />
      </div>
    );
  }
}

export default App;
```

Displaying a reversed vertical layout (collapsable down):

```js
import * as React from 'react';
import { CollapsableSplitLayoutRaw } from 'collapsable-split-layout';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <CollapsableSplitLayout
          isVertical
          childCollapsable={<FlexibleBox />}
          childView={<FixView />}
          isReversed
        />
      </div>
    );
  }
}

export default App;
```

---

## Changelog

### 1.0.0

- collapsable-split-layout is made publicly available
