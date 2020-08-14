'use strict'
const cCreate = require('./create');
const mClone = require('../util/clone');

const Make = (prototype) => {

    prototype.maker = function(base = {}) {

        let Maker = {};

        let Base = this.create(base);

        Maker.make = function() {

            return this.base;

        };
        
        Maker = cCreate(this._.name + 'Maker', Maker);

        Maker = Maker.create(Base);

        Object.keys(Maker.base).forEach((key) => {

            if (key !== '_' && key !== 'base') {
                
                switch(typeof Maker.base[key]) {

                    case 'function': {
                        break;
                    }

                    case 'object': 
                    case 'undefined':
                    default: {
                        
                        Maker[key] = function(value) {
                                
                            this.base[key] = value;

                            return this;

                        };

                    }

                }

            }

        });

        return Maker.create(Base);

    };

    return mClone(prototype);
    
};

module.exports = Make;