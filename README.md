# collapsible-split-layout ![Weekly downloads](https://img.shields.io/npm/dw/collapsible-split-layout 'Weekly downloads')

A React component to display a splitted layout were one of the sides can be collapsed/expanded without affecting the whole layout.

---

## Demo

You can access the storybook for these components [here](https://iulian-radu-at.github.io/collapsible-split-layout/).

## Props

There are three components.
One (CollapsibleSplitLayout) for displaying on demand one of the following components and two components (CollapsibleSplitLayoutHorizontal and CollapsibleSplitLayoutVertical) used by the first component.

### Props accepted by CollapsibleSplitLayout/CollapsibleSplitLayoutHorizontal/CollapsibleSplitLayoutVertical

| Name               | Type            | Required | Default | Description                                            |
| ------------------ | --------------- | -------- | ------- | ------------------------------------------------------ |
| childCollapsible   | React.ReactNode | yes      | -       | The collapsible component                              |
| childView          | React.ReactNode | yes      | -       | The non-collapsible component                          |
| gap                | number          | no       | 0       | The gap between componetns in MUI units (1 unit = 8px) |
| isReversed         | boolean         | no       | false   | The collapsible component is for false on the left     |
| maxCollapsibleSize | number          | no       | -       | The max size of collapsible component                  |
| minCollapsibleSize | number          | no       | -       | The min size of collapsible component                  |

Only for CollapsibleSplitLayout

| Name       | Type    | Required | Default | Description                                     |
| ---------- | ------- | -------- | ------- | ----------------------------------------------- |
| isVertical | boolean | no       | false   | It is used the CollapsibleSplitLayoutHorizontal |

---

## Versions

| CollapsibleSplitLayout _uses_ | React  |
| ----------------------------: | :----: |
|                         1.0.x | 18.0.0 |

### About versioning schema used for CollapsibleSplitLayout

- Major - it will be increased if the major version of the dependat package changes or there are breaking changes in the code of CollapsibleSplitLayout or CollapsibleSplitLayoutRaw
- Minor - it will be increased if no major version of the dependat package changes, but there are changes of the minor or patch versions of it
- Patch - it will be increased if there are no changes of the dependat packages, but there are non breaking changes in the code of CollapsibleSplitLayout or CollapsibleSplitLayoutRaw

---

## Example

Displaying a horizontal layout (collapsible on left):

```js
import * as React from 'react';
import { CollapsibleSplitLayoutHorizontal } from 'collapsible-split-layout';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <CollapsibleSplitLayoutHorizontal
          childCollapsible={<FlexibleBox />}
          childView={<FixView />}
        />
      </div>
    );
  }
}

export default App;
```

Displaying a reversed vertical layout (collapsible down):

```js
import * as React from 'react';
import { CollapsibleSplitLayoutRaw } from 'collapsible-split-layout';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <CollapsibleSplitLayout
          isVertical
          childCollapsible={<FlexibleBox />}
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

- collapsible-split-layout is made publicly available

### 1.0.1

- Fixed bundled lib
