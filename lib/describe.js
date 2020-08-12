'use strict'
const cCreate = require('./core/create');
const cChain = require('./core/chain');
const cClone = require('./core/clone');
const cMake = require('./core/make');
const mClone = require('./util/clone');

const Describes = ( 
    name,
    prototype
) => {

    prototype = cCreate(name, prototype);

    prototype = cChain(prototype);

    prototype = cClone(prototype);

    prototype = cMake(prototype);

    return mClone(prototype);

};

module.exports = Describes;