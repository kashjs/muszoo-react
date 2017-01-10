var Pallet = require('./Pallet');
module.exports = {
    Colors: {
        Pallet: Pallet,
        textLight: Pallet.base0,
        textDark: Pallet.base3
    },
    Components: {
        Button: {
            borderRadius: '4px',
            fontSize: '12px',
            fontWeight: 500,
            padding: '0 12px'
        }
    }
}