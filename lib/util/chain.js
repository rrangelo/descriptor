'use strict'

let Chain = (prototype) => {

    let str = '{';
    let begun = true;

    Object.keys(prototype).forEach((key) => {

        switch(typeof prototype[key]) {

            case 'object': {

                if (key !== '_' && key !== 'base') {

                    str += begun ? '' : ',';
                    str += ' ' + key + ': ' + Chain(prototype[key]);

                }

                break;

            }

            case 'undefined':
            case 'function': {

                break;

            }

            default: {

                str += begun ? '' : ',';
                if (typeof prototype[key] === 'string') 
                    str += ' ' + key + ': "' + prototype[key] + '"'; 
                    else 
                        str += ' ' + key + ': ' + prototype[key];

            }

        }

        begun = false;

    });
    
    return str + ' }';

};

module.exports = Chain;