'use stricts';
const descriptor = require('../index');

let Aggregated = {
    name: 'Aggrerated Name'
};

descriptor.all(Aggregated);

let Base = {
    name: 'Base Name',
    aggregated: {}
};

descriptor.all(Base);

Base.create();

Aggregated.create()

Base.aggregated = Aggregated.create(Base);

console.log('Results:');
console.log('Base:               ' + Base.name);
console.log('Embedded:           ' + Base.aggregated.name);
console.log('Base from Embedded: ' + Base.aggregated.base.name);
Base.maker().name('Base Maker Name').aggregated(Aggregated.create(Base)).make();
console.log('Base:               ' + Base.name);
console.log('Embedded:           ' + Base.aggregated.name);
console.log('Base from Embedded: ' + Base.aggregated.base.name);
Base.name = 'New Base Name';
console.log('Base:               ' + Base.name);
console.log('Embedded:           ' + Base.aggregated.name);
console.log('Base from Embedded: ' + Base.aggregated.base.name);
Base.aggregated.base.name = 'Another New Base Name';
console.log('Base:               ' + Base.name);
console.log('Embedded:           ' + Base.aggregated.name);
console.log('Base from Embedded: ' + Base.aggregated.base.name);
Base.aggregated = Aggregated.maker(Base).name('Aggregated Maker Name').make();
console.log('Base:               ' + Base.name);
console.log('Embedded:           ' + Base.aggregated.name);
console.log('Base from Embedded: ' + Base.aggregated.base.name);
Base.aggregated.name = 'New Aggregated Name';
console.log('Base:               ' + Base.name);
console.log('Embedded:           ' + Base.aggregated.name);
console.log('Base from Embedded: ' + Base.aggregated.base.name);