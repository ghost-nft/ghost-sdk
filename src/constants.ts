import JSBI from 'jsbi'

// exports for external consumption
export type BigintIsh = JSBI | bigint | string

export enum ChainId {
  MAINNET = 56,
  TESTNET = 97,
  LOCALNET = 1337,
}

export enum TradeType {
  EXACT_INPUT,
  EXACT_OUTPUT
}

export enum Rounding {
  ROUND_DOWN,
  ROUND_HALF_UP,
  ROUND_UP
}

export const CHAIN_FACTORY_ADDRESS = {
  56:'0xEB1B508ED37A5F8c1E6eDe2Accd7808FE7F6d89d',
  97:'0xEB1B508ED37A5F8c1E6eDe2Accd7808FE7F6d89d',
  1337:'0x092b7E0E81C8AE9ac68E2A208Ebd7305B02c2806',
}

export const CHAIN_INIT_CODE_HASH = {
  56:'0xd508507167d80833c74a7303e14d764844bd6e183e324caf32127f9e2ae17b86',
  97:'0xd508507167d80833c74a7303e14d764844bd6e183e324caf32127f9e2ae17b86',
  1337:'0xd508507167d80833c74a7303e14d764844bd6e183e324caf32127f9e2ae17b86',
}

export const CHAIN_WETH_ADDRESS = {
  56:'0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c',
  97:'0xaE8E19eFB41e7b96815649A6a60785e1fbA84C1e',
  1337:'0xde64b1B936E11f7C9C645063A23916ED193bD80f',
}

export const MINIMUM_LIQUIDITY = JSBI.BigInt(1000)

// exports for internal consumption
export const ZERO = JSBI.BigInt(0)
export const ONE = JSBI.BigInt(1)
export const TWO = JSBI.BigInt(2)
export const THREE = JSBI.BigInt(3)
export const FIVE = JSBI.BigInt(5)
export const TEN = JSBI.BigInt(10)
export const _100 = JSBI.BigInt(100)
export const FEES_NUMERATOR = JSBI.BigInt(9975)
export const FEES_DENOMINATOR = JSBI.BigInt(10000)

export enum SolidityType {
  uint8 = 'uint8',
  uint256 = 'uint256'
}

export const SOLIDITY_TYPE_MAXIMA = {
  [SolidityType.uint8]: JSBI.BigInt('0xff'),
  [SolidityType.uint256]: JSBI.BigInt('0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff')
}
