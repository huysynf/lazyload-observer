# LazyLoad Package

A simple library for lazy loading images using the Intersection Observer API.

## Installation

You can install the package via npm:

```bash
npm install lazyload-package

```

```javascript
import LazyLoad from 'lazyload-package';
const customObserver = new LazyLoad({
  root: document.querySelector('#scrollArea'), // Custom scroll area
  rootMargin: '10px', // Custom margin
  threshold: 0.5, // Custom threshold
});
```