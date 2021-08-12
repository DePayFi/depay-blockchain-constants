let CONSTANTS = {
  ZERO: '0x0000000000000000000000000000000000000000',
  MAXINT: '115792089237316195423570985008687907853269984665640564039457584007913129639935',
  WRAPPED: '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2',
  NATIVE: '0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE',
  DECIMALS: 18,
  SYMBOL: 'ETH',
  NAME: 'Ether',
  USD: '0x6B175474E89094C44Da98b954EedeAC495271d0F'
};

let CONSTANTS$1 = {
  ZERO: '0x0000000000000000000000000000000000000000',
  MAXINT: '115792089237316195423570985008687907853269984665640564039457584007913129639935',
  WRAPPED: '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c',
  NATIVE: '0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE',
  DECIMALS: 18,
  SYMBOL: 'BNB',
  NAME: 'Binance Coin',
  USD: '0x1AF3F329e8BE154074D8769D1FFa4eE058B1DBc3'
};

let CONSTANTS$2 = {};

CONSTANTS$2['ethereum'] = CONSTANTS;
CONSTANTS$2['bsc'] = CONSTANTS$1;

export { CONSTANTS$2 as CONSTANTS };
