'use strict';

module.exports = {
    screens: require('./screens'),
    fontFamily: require('./fontFamily'),
    borderWidth: {
        default: '1px',
        '0': '0',
        '2': '2px',
        '4': '4px',
    },
    extend: {
        colors: {
            dupa: '#ffbbaa',
        },
        spacing: {
            '96': '24rem',
            '128': '32rem',
        }
    }
}
