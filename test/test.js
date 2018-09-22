'use strict';

const expect = require('chai').expect;
const pkgModule = require('../lib');

describe('pkgModule', function () {
    it('is a function', function () {
        expect(pkgModule).to.be.a('function');
    });
});
