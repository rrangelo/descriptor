'use stricts'

const Create = (prototype) => {

    prototype.base = {};

    prototype.create = function(base) {
        this.base = base;
        return this;
    };

};

module.exports = Create;