'use strict';
const assert = require('assert');
const descriptor = require('../index');

describe('Unit Tests', function () {

    let base = {};
    let based = {};

    describe('1 - Base Success', function () {

        beforeEach(function () {

            base = {
                str: '',
                num: 0,
                fun: function() {
    
                }
            };
    
            based = {
                str: '',
                boo: true
            };
    
        });
    
        afterEach(function () {
            
            if (prototypes) {
                
                prototypes.base = undefined;
                prototypes.based = undefined;
    
            }
    
        });
    
        describe('1.1 - #descriptor.describes(base)', function () {

            it('should be ok', function () {

                descriptor.describes('base', base);
                
                assert.ok(prototypes.base);

            });

        });
        
        describe('1.2 - #prototypes.base.create()', function () {

            it('should be ok', function () {

                descriptor.describes('base', base);

                assert.ok(prototypes.base.create());

            });

        });
        
        describe('1.3 - #prototypes.base.maker()', function () {

            it('should be ok', function () {

                descriptor.describes('base', base);

                assert.ok(prototypes.base.maker());

            });

        });
        
        describe('1.4 - #prototypes.base.maker().make()', function () {

            it('should be ok', function () {

                descriptor.describes('base', base);

                assert.ok(prototypes.base.maker().make());

            });

        });
        
        describe('1.5 - #obj.chain()', function () {

            it('should be ok', function () {

                let obj = {};

                descriptor.describes('base', base);

                obj = prototypes.base.create();

                assert.ok(typeof obj.chain() === 'string');

            });

        });
        
        describe('1.6 - #obj.clone()', function () {

            it('should be ok', function () {

                let obj = {};

                descriptor.describes('base', base);

                obj = prototypes.base.create();

                assert.ok(obj.clone());

            });

        });
        
    });

    describe('2 - Based Success', function () {

        describe('2.1 - #descriptor.describes(based)', function () {

            it('should be ok', function () {

                descriptor.describes('based', based);
                
                assert.ok(prototypes.based);

            });

        });
        
        describe('2.2 - #prototypes.based.create(prototypes.base)', function () {

            it('should be ok', function () {

                descriptor.describes('base', base);

                descriptor.describes('based', based);

                assert.ok(prototypes.based.create(prototypes.based));

            });

        });
        
        describe('2.3 - #prototypes.based.maker(prototypes.base)', function () {

            it('should be ok', function () {

                descriptor.describes('base', base);

                descriptor.describes('based', based);

                assert.ok(prototypes.base.maker(prototypes.base));

            });

        });
        
        describe('2.4 - #prototypes.based.maker(prototypes.base).make()', function () {

            it('should be ok', function () {

                descriptor.describes('base', base);

                descriptor.describes('based', based);

                assert.ok(prototypes.base.maker(prototypes.base).make());

            });

        });
        
        describe('2.5 - #obj.chain()', function () {

            it('should be ok', function () {

                let obj = {};

                descriptor.describes('base', base);

                descriptor.describes('based', based);

                obj = prototypes.based.create(prototypes.base);

                assert.ok(typeof obj.chain() === 'string');

            });

        });
        
        describe('2.6 - #obj.clone()', function () {

            it('should be ok', function () {

                let obj = {};

                descriptor.describes('base', base);

                descriptor.describes('based', based);

                obj = prototypes.based.create(prototypes.base);

                assert.ok(obj.clone());

            });

        });
        
    });
    
    describe('3 - Base Errors', function () {

        describe('3.1 - #descriptor.describes(based): Without name param', function () {

            it('should be throws "A name must be defined"', function () {

                assert.throws(
                    () => {
                        descriptor.describes(based);
                    },
                    (error) => {
                        assert.deepStrictEqual(error, 'A name must be defined');
                        return true;
                    }
                );

            });

        });
        
        describe('3.2 - #descriptor.describes(based): Empty name', function () {

            it('should be throws "A name must be defined"', function () {

                assert.throws(
                    () => {
                        descriptor.describes('', based);
                    },
                    (error) => {
                        assert.deepStrictEqual(error, 'A name must be defined');
                        return true;
                    }
                );

            });

        });
        
    });
    
  });
  