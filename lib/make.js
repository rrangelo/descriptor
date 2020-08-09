'use stricts'
const fCreate = require('./create');

const Make = (prototype) => {

    let maker = {
        make: function() {
            return this.base;
        }
    };

    Object.keys(prototype).forEach((key) => {

        if (key !== 'create') {

            maker[key] = function(value) {
                this.base[key] = value;
                return this;
            }

        }

    });
    
    fCreate(maker);

    prototype.maker = function(base) {
        return maker.create(this.create(base));
    }

};

module.exports = Make;