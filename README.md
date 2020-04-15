# @blast-engine/responsive-wrap

> 

[![NPM](https://img.shields.io/npm/v/@blast-engine/responsive-wrap.svg)](https://www.npmjs.com/package/@blast-engine/responsive-wrap) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save @blast-engine/responsive-wrap
```

## Usage

```jsx
import React, { Component } from 'react'

import { ResponsiveWrap } from '@blast-engine/responsive-wrap'
import '@blast-engine/responsive-wrap'

class Example extends Component {
  render() {
    return (
      <ResponsiveWrap minWidth={100} maxWidth={200} >
        {/* children */}
      </ResponsiveWrap>
    )
  }
}
```
### Props
- minWidth: minimum width of each child [required]
- maxWidth: maximum width of each child [required]
- children: children to render [required]
- outerDivClassName: class name for outer div [optional]

## License

MIT © [](https://github.com/)
