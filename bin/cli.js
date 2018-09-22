#!/usr/bin/env node

'use strict';

//console.log(process.cwd());

const LF = '\n';

const path = require('path');
const pkg = require(path.resolve(process.cwd(), 'package.json'));

let markdown = [pkg.name, '='.repeat(pkg.name.length)];

markdown.push(pkg.description, LF);

console.log(markdown.join(LF));
