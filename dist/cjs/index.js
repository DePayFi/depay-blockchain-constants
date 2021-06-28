'use strict';

let CONSTANTS = {
  ZERO: '0x0000000000000000000000000000000000000000',
  MAXINT: '115792089237316195423570985008687907853269984665640564039457584007913129639935',
  WRAPPED: '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2',
};

let CONSTANTS$1 = {
  ZERO: '0x0000000000000000000000000000000000000000',
  MAXINT: '115792089237316195423570985008687907853269984665640564039457584007913129639935',
  WRAPPED: '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c',
};

let CONSTANTS$2 = {};

CONSTANTS$2['ethereum'] = CONSTANTS;
CONSTANTS$2['bsc'] = CONSTANTS$1;

module.exports = CONSTANTS$2;
