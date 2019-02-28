/**
 * By default, all react-a11y rules are included. Comment
 * out any rules that don't fit your particular use case.
 * 
 * Link to documentation:
 * https://github.com/reactjs/react-a11y/tree/master/docs/rules
*/

export const standard = {
    'aria-role': 'error',
    'aria-unsupported-elements': 'warn',
    'click-events-have-key-events': 'error',
    'hidden-uses-tabindex': 'warn',
    'img-redundant-alt': 'warn',
    'img-uses-alt': 'error',
    'interactive-supports-focus': 'warn',
    'label-has-for': 'warn',
    'mouse-events-have-key-events': 'error',
    'no-access-key': 'warn',
    'no-hash-ref': 'warn',
    'no-onchange': 'warn',
    'onclick-uses-role': 'error',
    'tabindex-no-positive': 'warn',
    'tabindex-uses-button': 'warn'
};

// For bulk rule generation
function generateRules(setting) {
    const output = { ...standard };
    for (const key in output) {
        output[key] = setting;
    }
    return output;
}

export const light = generateRules('warn');
export const strict = generateRules('error');
