module.exports = {
    future: {
        removeDeprecatedGapUtilities: true,
        purgeLayersByDefault: true,
    },
    purge: {
        enabled: false,
    },
    theme: {

        extend: {
            colors: {
                'tomate': '#FF0012',
                'dark': '#000000',
            },
            screens: {
                'portrait': {'raw': '(orientation: portrait)'},            }
        },
        fontFamily: {
            'sans': ['-apple-system', 'BlinkMacSystemFont'],
        },
    },
    variants: {},
    plugins: [],
}
