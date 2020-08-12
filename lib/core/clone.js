'use strict'
const mClone = require('../util/clone');

let Clone = (prototype) => {

    prototype.clone = function() {
        return mClone(this);
    }

    return mClone(prototype);

};

module.exports = Clone;