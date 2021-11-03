export type TCryptoAPiResponse = {
  status: string
  data: {
    base: unknown,
    coins: TCoin[],
    stats: TStats
  }
}

export type TStats = {
  total: number,
  total24hVolume: number,
  totalExchanges: number,
  totalMarketCap: number,
  totalMarkets: number,
}

export type TCoin = {
  id: number,
  name: string,
  rank: string,
  iconUrl: string,
  price: string,
  marketCap: string,
  change: string,
}