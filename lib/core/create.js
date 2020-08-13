'use strict'
const cBase = require('./base');
const mClone = require('../util/clone');

const Create = (
    name, 
    prototype
) => {

    prototype = cBase(name, prototype);

    prototype.create = function(base = {}) {
    
        this._.base = base.clone ? base.clone() : {};

        this.base = this._.base;

        Object.keys(this.base).forEach((key) => {

            if (!this[key]) {

                switch(typeof this.base[key]) {

                    case 'function': {

                        Object.defineProperty(this, key, {

                            get: function() {
                                return this.base[key];
                            },

                            configurable: true,
                            enumerable: true

                        });

                        break;

                    }

                    case 'undefined': 
                    case 'object': 
                    default: {

                        Object.defineProperty(this, key, {

                            set: function(value) {
                                this.base[key] = value;
                            },
                            get: function() {
                                return this.base[key];
                            },

                            configurable: true,
                            enumerable: true

                        });

                    }

                }
            }

        });
        
        return mClone(this);

    };

    return mClone(prototype);

};

module.exports = Create;