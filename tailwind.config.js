module.exports = {
    future: {
        removeDeprecatedGapUtilities: true,
        purgeLayersByDefault: true,
    },
    purge: {
        enabled: false,
    },
    theme: {
        fontFamily: {
            'sans': ['-apple-system', 'BlinkMacSystemFont',],
            'serif': ['Georgia', 'Cambria',],
            'mono': ['SFMono-Regular', 'Menlo',],
            'display': ['Oswald',],
            'body': ['Open Sans',],
        },
        extend: {
            colors: {
                'tomate': '#FF0012',
                'dark': '#000000',
            },
            screens: {
                'portrait': {'raw': '(orientation: portrait)'},            }
        },
    },
    variants: {},
    plugins: [],
}
