'use strict'
const mChain = require('../util/chain');
const mClone = require('../util/clone');

let Chain = (prototype) => {

    prototype.chain = function() {
        return mChain(this);
    }

    return mClone(prototype);

};

module.exports = Chain;