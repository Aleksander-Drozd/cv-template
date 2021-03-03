module.exports = {
    extends: ['airbnb', 'plugin:prettier/recommended', 'prettier/react'],
    parser: 'babel-eslint',
    plugins: ['react', 'import'],
    env: {
        browser: true,
        commonjs: true,
        es6: true,
        jest: true,
        node: true,
    },
    rules: {
        'react/prop-types': 0,
        'jsx-a11y/href-no-hash': ['off'],
        'react/jsx-filename-extension': ['warn', {extensions: ['.js', '.jsx']}],
        'react/self-closing-comp': [
            'warn',
            {
                component: true,
                html: true,
            },
        ],
        'no-unused-vars': ['warn'],
        'no-unused-expressions': [
            2,
            {allowShortCircuit: true, allowTernary: true},
        ],
        'no-plusplus': 'off',
        'spaced-comment': 'off',
        'react/destructuring-assignment': 'off',
        'react/button-has-type': 'off',
        'react/no-did-update-set-state': 'off',
        'import/order': 'off',
        'react/jsx-props-no-spreading': 'off',
        'react/state-in-constructor': 'off',
        'react/no-access-state-in-setstate': 'off',
        'react/no-array-index-key': 'off',
        'no-else-return': 'off',
        'jsx-a11y/no-noninteractive-element-interactions': 'off',
        'jsx-a11y/control-has-associated-label': 'off',
        'import/prefer-default-export': 'off',
        'jsx-a11y/click-events-have-key-events': 'off',
        'jsx-a11y/no-static-element-interactions': 'off',
        'import/no-cycle': ['warn'],
        'no-console': ['warn', {allow: ['warn', 'error']}],
        'react/jsx-curly-brace-presence': [2, 'ignore'],
        'jsx-a11y/label-has-associated-control': [
            'error',
            {
                required: {
                    some: ['nesting', 'id'],
                },
            },
        ],
        'jsx-a11y/label-has-for': [
            'error',
            {
                required: {
                    some: ['nesting', 'id'],
                },
            },
        ],
        'max-len': [
            'warn',
            {
                code: 80,
                tabWidth: 4,
                comments: 80,
                ignoreComments: false,
                ignoreTrailingComments: true,
                ignoreUrls: true,
                ignoreStrings: true,
                ignoreTemplateLiterals: true,
                ignoreRegExpLiterals: true,
            },
        ],
    },
};
