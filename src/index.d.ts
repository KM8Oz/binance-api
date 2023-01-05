declare module '@marcius-capital/binance-api' {
    export const rest: {
      exchangeInfo(params?: object): Promise<unknown>;
      ticker(params: { symbol: string }): Promise<unknown>;
      ticker24hr(params: { symbol?: string }): Promise<unknown[]>;
      klines(params: { symbol: string, interval: string, limit: number }): Promise<unknown>;
      depth(params: { symbol: string }): Promise<unknown>;
      trades(params: { symbol: string, limit: number }): Promise<unknown>;
      aggTrades(params: { symbol: string }): Promise<unknown>;
      account(auth: { key: string, secret: string }): Promise<unknown>;
      allOrders(params: { symbol?: string }, auth: { key: string, secret: string }): Promise<unknown>;
      openOrders(params: { symbol?: string }, auth: { key: string, secret: string }): Promise<unknown>;
      createOrder(params: { symbol: string, side: string, price: string, quantity: string }, auth: { key: string, secret: string }): Promise<unknown>;
      myTrades(params: { symbol?: string }, auth: { key: string, secret: string }): Promise<unknown>;
    };
  }
  
