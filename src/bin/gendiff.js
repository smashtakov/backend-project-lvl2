#!/usr/bin/env node

const gendiff = require('commander');

gendiff
  .version('0.0.1')
  .description('Compares two configuration files and shows a difference.')
  .parse(process.argv);

gendiff.help();
