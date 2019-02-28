# A11y React Starter

💫 A lightly-configured [create-react-app](https://github.com/facebook/create-react-app) with accessibility checking baked in.

[Click here for the creact-react-app README](./CRA-README.md).

## Accessibility checks

In the project directory, you have the following baked in:

### jsx-a11y

jsx-a11y is a static AST checker for accessibility rules on JSX elements. If you use a linting text editor like VS Code, it will show you potential accessibility errors even before you hit save.

[View more information on jsx-a11y](https://github.com/evcohen/eslint-plugin-jsx-a11y).

### react-axe

react-axe by Deque provides accessibility auditing during development. Any errors identified are displayed in the console with helpful resources to fix the issue. Due to zero-configuration, react-axe is enabled by default in this application.

[View more information on react-axe](https://github.com/dequelabs/react-axe)

### react-a11y

Like react-axe, react-a11y provides accessibility auditing during development. It also provides more rule configurations that may be useful to users who are more familiar with accessible development. react-a11y is **not enabled** by default.

To switch from react-axe to react-a11y, [go to `index.js`](./src/index.js). It should like this:

```jsx
if (process.env.NODE_ENV === 'development') {
    /**
     * react-a11y
     */
    // const a11y = require('react-a11y').default;
    // const { standard } = require('./a11y/reactA11yRules');
    // a11y(React, ReactDOM, {
    //     rules: standard
    // });

    /**
     * react-axe
     */
    const axe = require('react-axe');
    axe(React, ReactDOM, 1000);
}
```
Comment out the lines pertaining to react-axe and un-comment the lines for react-a11y:

```jsx
if (process.env.NODE_ENV === 'development') {
    /**
     * react-a11y
     */
    const a11y = require('react-a11y').default;
    const { standard } = require('./a11y/reactA11yRules');
    a11y(React, ReactDOM, {
        rules: standard
    });

    /**
     * react-axe
     */
    // const axe = require('react-axe');
    // axe(React, ReactDOM, 1000);
}
```

If you want to customize react-a11y further, [check out `src/a11y/reactA11yRules.js` for its rule configuration](./src/a11y/reactA11yRules.js).

[View more information on react-a11y](https://github.com/reactjs/react-a11y/tree/master/docs/rules).
