import  { serializeTokens } from './tokens'
import { SerializedPoolConfig, PoolCategory } from './types'

const serializedTokens = serializeTokens()

const pools: SerializedPoolConfig[] = [
  {
    sousId: 0,
    stakingToken: serializedTokens.silverGhost,
    earningToken: serializedTokens.usdt,
    contractAddress: {
      1337: '0xA4031FfBD0A7bBfEE24679Fd3967F17FE0a05bFC',
      97: '0xF9F384D549D1E9b895C661427ab27d4C32Db29C3',
      56: '0x6B7858367086Be93B410ecE64C28DCCf2299ea4d',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    tokenPerBlock: '1',
    sortOrder: 1,
    isFinished: false,
  }
]

export default pools
