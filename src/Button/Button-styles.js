var Theme = require('../Theme/Theme');

module.exports = {
    root: {
        overflow: 'hidden',
        height: '40px',
        borderRadius: Theme.Components.Button.borderRadius,
        fontSize: Theme.Components.Button.fontSize,
        fontWeight: Theme.Components.Button.fontWeight,
        padding: Theme.Components.Button.padding,
        color: Theme.Colors.textLight,
        boxSizing: 'border-box',
        border: '1px solid transparent',
        border: '1px solid rgba(0, 0, 0, 0)'
    },
    kind: {
        default: {
            background: Theme.Colors.Pallet.base2,
            color: Theme.Colors.textDark
        },
        primary: {
            background: Theme.Colors.Pallet.base5
        },
        success: {
            background: Theme.Colors.Pallet.base6
        },
        info: {
            background: Theme.Colors.Pallet.base7
        },
        warning: {
            background: Theme.Colors.Pallet.base8
        },
        danger: {
            background: Theme.Colors.Pallet.base9
        },

        flat: {
            'background': 'transparent',
            'backgroundColor': 'none',
            color: ''
        }
    }
}