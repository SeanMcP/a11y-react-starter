/*
    By default, all react-a11y rules are included. Comment
    out any rules that don't fit your particular use case.

    Link to documentation: https://github.com/reactjs/react-a11y/tree/master/docs/rules
*/

const rules = [
    'aria-role',
    'aria-unsupported-elements',
    'click-events-have-key-events',
    'hidden-uses-tabindex',
    'img-redundant-alt',
    'img-uses-alt',
    'interactive-supports-focus',
    'label-has-for',
    'mouse-events-have-key-events',
    'no-access-key',
    'no-hash-ref',
    'no-onchange',
    'onclick-uses-role',
    'tabindex-no-positive',
    'tabindex-uses-button'
];

function generateRules(setting) {
    const output = {};
    rules.forEach((rule) => (output[rule] = setting));
    return output;
}

export const standard = generateRules('warn');
export const strict = generateRules('error');
