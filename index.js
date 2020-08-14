'use strict'
const cDescribes = require('./lib/describe');
const uClone = require('./lib/util/clone');

const Descriptor = {

    describes: ( 
        name = '',
        prototype = {} 
    ) => {

        if (typeof name !== 'string' || name === '')
            throw 'A name must be defined';
        
        if (!global.prototypes) 
            global.prototypes = {};

        prototype = cDescribes(name, prototype);

        prototypes[name] = uClone(prototype);
        
        prototypes[name + '_maker'] = uClone(prototype.maker);

    }

};

module.exports = Descriptor;