'use strict'
const descriptor = require('../index');

descriptor.describes(
    'aggregated',
    {
        name: '',
        boy: true
    }
);

descriptor.describes(
    'main',
    {
        name: '',
        age: 0
    }
);

console.log('Results:');

console.log('');
console.log('Main:');
let ba = {};
let bb = {};

console.log('');
console.log('Make Main:');
bb = prototypes.main.maker()
    .name('Main Make Name')
    .age(35)
    .make();
console.log('Main Name:    ' + bb.name);
console.log('Main Age:     ' + bb.age);
console.log('Main Chain(): ' + bb.chain());

console.log('New Main Name:');
bb.name = 'New Main Name';
console.log('Main:         ' + bb.name);
console.log('Main Age:     ' + bb.age);
console.log('Main Chain(): ' + bb.chain());

console.log('New Main Age:');
bb.age = 30;
console.log('Main Name:    ' + bb.name);
console.log('Main Age:     ' + bb.age);
console.log('Main Chain(): ' + bb.chain());

console.log('');
console.log('Create Main:');
ba = prototypes.main.create();
console.log('Main Name:    ' + ba.name);
console.log('Main Age:     ' + ba.age);
console.log('Main Chain(): ' + ba.chain());

console.log('New Main Name:');
ba.name = 'New Main Name';
console.log('Main Name:    ' + ba.name);
console.log('Main Age:     ' + ba.age);
console.log('Main Chain(): ' + ba.chain());

console.log('New Main Age:');
ba.age = 30;
console.log('Main Name:    ' + ba.name);
console.log('Main Age:     ' + ba.age);
console.log('Main Chain(): ' + ba.chain());

console.log('');
console.log('Clone Main:');
let bc = ba.clone();
console.log('Main Name ba:    ' + ba.name);
console.log('Main Age ba:     ' + ba.age);
console.log('Main Chain() ba: ' + ba.chain());
console.log('Main Name bc:    ' + bc.name);
console.log('Main Age bc:     ' + bc.age);
console.log('Main Chain() bc: ' + bc.chain());

console.log('New Clone Main Name:');
bc.name = 'New Clone Main Name';
console.log('Main Name ba:    ' + ba.name);
console.log('Main Age ba:     ' + ba.age);
console.log('Main Chain() ba: ' + ba.chain());
console.log('Main Name bc:    ' + bc.name);
console.log('Main Age bc:     ' + bc.age);
console.log('Main Chain() bc: ' + bc.chain());

console.log('');
console.log('');
console.log('Aggregated:');
let aa = {};
let ab = {};

console.log('');
console.log('Make Aggregated:');
ab = prototypes.aggregated.maker(prototypes.main)
    .name('Aggregated Make Name')
    .boy(true)
    .age(35)
    .make();
console.log('Aggregated Name:      ' + ab.name);
console.log('Aggregated Main Name: ' + ab.base.name);
console.log('Aggregated Boy:       ' + ab.boy);
console.log('Aggregated Age:       ' + ab.age);
console.log('Aggregated Chain():   ' + ab.chain());

console.log('New Aggregated Name:');
ab.name = 'New Aggregated Name';
console.log('Aggregated Name:      ' + ab.name);
console.log('Aggregated Main Name: ' + ab.base.name);
console.log('Aggregated Boy:       ' + ab.boy);
console.log('Aggregated Age:       ' + ab.age);
console.log('Aggregated Chain():   ' + ab.chain());

console.log('New Aggregated Boy:');
ab.boy = false;
console.log('Aggregated Name:      ' + ab.name);
console.log('Aggregated Main Name: ' + ab.base.name);
console.log('Aggregated Boy:       ' + ab.boy);
console.log('Aggregated Age:       ' + ab.age);
console.log('Aggregated Chain():   ' + ab.chain());

console.log('New Aggregated Age:');
ab.age = 30;
console.log('Aggregated Name:      ' + ab.name);
console.log('Aggregated Main Name: ' + ab.base.name);
console.log('Aggregated Boy:       ' + ab.boy);
console.log('Aggregated Age:       ' + ab.age);
console.log('Aggregated Chain():   ' + ab.chain());

console.log('');
console.log('Create Aggregated:');
aa = prototypes.aggregated.create(prototypes.main);
console.log('Aggregated Name:      ' + aa.name);
console.log('Aggregated Main Name: ' + aa.base.name);
console.log('Aggregated Boy:       ' + aa.boy);
console.log('Aggregated Age:       ' + aa.age);
console.log('Aggregated Chain():   ' + aa.chain());

console.log('New Aggregated Name:');
aa.name = 'New Aggregated Name'; 
console.log('Aggregated Name:      ' + aa.name);
console.log('Aggregated Main Name: ' + aa.base.name);
console.log('Aggregated Boy:       ' + aa.boy);
console.log('Aggregated Age:       ' + aa.age);
console.log('Aggregated Chain():   ' + aa.chain());

console.log('New Aggregated Boy:');
aa.boy = false;
console.log('Aggregated Name:      ' + aa.name);
console.log('Aggregated Main Name: ' + aa.base.name);
console.log('Aggregated Boy:       ' + aa.boy);
console.log('Aggregated Age:       ' + aa.age);
console.log('Aggregated Chain():   ' + aa.chain());

console.log('New Aggregated Age:');
aa.age = 30;
console.log('Aggregated Name:      ' + aa.name);
console.log('Aggregated Main Name: ' + aa.base.name);
console.log('Aggregated Boy:       ' + aa.boy);
console.log('Aggregated Age:       ' + aa.age);
console.log('Aggregated Chain():   ' + aa.chain());

console.log('');
console.log('Clone Aggregated:');
let ac = aa.clone();
console.log('Aggregated Name aa:       ' + aa.name);
console.log('Aggregated Main Name aa:  ' + aa.base.name);
console.log('Aggregated Boy aa:        ' + aa.boy);
console.log('Aggregated Age aa:        ' + aa.age);
console.log('Aggregated Chain() aa:    ' + aa.chain());
console.log('Aggregated Name ac:       ' + ac.name);
console.log('Aggregated Main Name ac:  ' + ac.base.name);
console.log('Aggregated Boy ac:        ' + ac.boy);
console.log('Aggregated Age ac:        ' + ac.age);
console.log('Aggregated Chain() ac:    ' + ac.chain());

console.log('New Clone Aggregated Name:');
ac.name = 'New Clone Aggregated Name';
console.log('Aggregated Name aa:       ' + aa.name);
console.log('Aggregated Main Name aa:  ' + aa.base.name);
console.log('Aggregated Boy aa:        ' + aa.boy);
console.log('Aggregated Age aa:        ' + aa.age);
console.log('Aggregated Chain() aa:    ' + aa.chain());
console.log('Aggregated Name ac:       ' + ac.name);
console.log('Aggregated Main Name ac:  ' + ac.base.name);
console.log('Aggregated Boy ac:        ' + ac.boy);
console.log('Aggregated Age ac:        ' + ac.age);
console.log('Aggregated Chain() ac:    ' + ac.chain());
