const rules = [
    'aria-role',
    'img-uses-alt',
    'onclick-uses-role'
];

function generateRules(setting) {
    const output = {};
    rules.forEach(rule => output[rule] = setting);
    return output;
}

export const standard = generateRules('warn');
export const strict = generateRules('error');