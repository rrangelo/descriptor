'use strict'

let Clone = (prototype) => {

    let obj = {};

    Object.keys(prototype).forEach((key) => {

        switch(typeof prototype[key]) {

            case 'object': {

                obj[key] = Clone(prototype[key]);

                break;

            }

            case 'undefined':
            case 'function':
            default: {

                obj[key] = prototype[key];

            }

        }

    });
    
    return obj;

};

module.exports = Clone;