# UI Kit

[![npm version](https://badge.fury.io/js/%40lemehovskiy%2Fui-kit-boilerplate.svg)](https://badge.fury.io/js/%40lemehovskiy%2Fui-kit-boilerplate)

Welcome to UI Kit, a collection of reusable UI components designed to streamline your web development process.

## Installation

To install UI Kit via npm, simply run:

```bash
npm install @lemehovskiy/ui-kit-boilerplate
```

## Documentation and Usage

For detailed documentation and usage examples, please visit the [UI Kit Storybook](https://lemehovskiy.github.io/ui-kit-boilerplate/?path=/docs/example-button--docs).

## Usage

To use UI Kit in your project, import the desired components like so:

```javascript
import React from 'react';
import { Button } from '@lemehovskiy/ui-kit-boilerplate';

function App() {
  return (
    <div>
      <h1>UI Kit Example</h1>
      <Button onClick={() => console.log('Button clicked')}>Click me</Button>
    </div>
  );
}

export default App;
```

## Development

If you want to contribute to UI Kit boilerplate or customize it for your needs, follow these steps:

1. Clone this repository:

```bash
git clone https://github.com/lemehovskiy/ui-kit-boilerplate.git
```

2. Install dependencies:

```bash
cd ui-kit
npm install
```

3. Start the development server:

```bash
npm run storybook
```

## License

This project is licensed under the MIT License.
