'use stricts'
const fCreate = require('./lib/create');
const fMake = require('./lib/make');

const Descriptor = {

    create: fCreate,
    make: fMake,
    all: (prototype) => {

        fCreate(prototype);
        fMake(prototype);

    }

}

module.exports = Descriptor;