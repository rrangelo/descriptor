'use strict'
const mClone = require('../util/clone');

const Base = (
    name,
    prototype
) => {

    prototype._ = mClone({});
    
    prototype._.name = name.toLowerCase();
    prototype._.base = mClone({});

    return mClone(prototype);

};

module.exports = Base;