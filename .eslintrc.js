module.exports = {
    extends: [
        'airbnb-base',
    ],
    rules: {
        'no-unused-vars': ['error', { argsIgnorePattern: 'next' }],
        indent: ['error', 4],
        'linebreak-style': 2,
        'max-len': ['error', { code: 140 }],
        'no-underscore-dangle': 1,
        'no-restricted-syntax': 'off',
        'no-await-in-loop': 'off',
    },
    ignorePatterns: ['test/', 'logs/', 'node_modules/'],
    env: {
        node: true,
        commonjs: true,
        es6: true,
        mocha: true,
    },
};
